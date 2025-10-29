import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/ui/lightray/index";
import Navbar from "@/components/ui/navbar";


const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "Hub for developer events around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SchibstedGrotesk.variable} ${MartianMono.variable} min-h-screen antialiased`}
      >
        <Navbar />    

        <div className="absolute inset-0 z-[-1] min-h-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#5dfeca"
          raysSpeed={1.0}
          lightSpread={0.4}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.09}
          noiseAmount={0.}
          distortion={0.05}
          className="custom-rays"
      />  
      
        </div>
        <main>
        {children}

        </main>
      </body>
    </html>
  );
}
