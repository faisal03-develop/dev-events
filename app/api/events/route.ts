import { v2 as cloudinary } from "cloudinary";
import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { error } from "console";

// ✅ Cloudinary configuration (important!)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      return NextResponse.json({ message: "Invalid Data Format" }, { status: 400 });
    }

    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json({ message: "Image File is Required" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "image", folder: "DevEvent" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    // ✅ Get secure_url
    const imageUrl = (uploadResult as { secure_url: string }).secure_url;
    event.image = imageUrl;

    // ✅ Save event to MongoDB
    const createdEvent = await Event.create(event);

    return NextResponse.json(
      { message: "Event Created Successfully", event: createdEvent },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error creating event:", e);
    return NextResponse.json(
      {
        message: "Event Creation failed",
        error: e instanceof Error ? e.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}


export async function GET() {
    try{
        await connectDB();
        const events = await Event.find().sort({createdAt:-1});

        return NextResponse.json({message: 'Events Fetched Successfully',events},{status:200})
    }
    catch(e){
        return NextResponse.json({message:'Event Fetching Failed', error:e},{status:500})
    }
    
}