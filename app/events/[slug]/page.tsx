import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

// 1. No 'async' needed here
// 2. The 'params' prop is a simple object, not a Promise
const EventDetailsPage = ({ params }: { params: { slug: string } }) => {

    // 3. You don't need '.then()'. The 'params' object is already available.

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                {/* 4. Pass the 'params' object directly to EventDetails.
                     This matches what EventDetails expects: { slug: "some-string" }
                */}
                <EventDetails params={params} />
            </Suspense>
        </main>
    )
}

export default EventDetailsPage
