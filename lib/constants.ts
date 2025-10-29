// Shared event data for the app. Images should exist in public/images.
// Each item is compatible with the EventCard component props used across the app.

export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // Human-readable date (e.g., "Nov 12, 2025")
  time: string; // Human-readable time range (e.g., "09:00 AM – 5:00 PM")
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "JSConf EU 2025",
    slug: "jsconf-eu-2025",
    location: "Berlin, Germany",
    date: "Nov 15–16, 2025",
    time: "09:30 AM – 6:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "Apr 9–10, 2026",
    time: "09:00 AM – 5:30 PM",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Dec 1–5, 2025",
    time: "All Day",
  },
  {
    image: "/images/event4.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "San Francisco, CA, USA",
    date: "May 12–14, 2026",
    time: "08:30 AM – 6:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "ETHGlobal Hackathon: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "Jun 19–21, 2026",
    time: "48-Hour Hackathon",
  },
  {
    image: "/images/event6.png",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-eu-2026",
    location: "Vienna, Austria",
    date: "Mar 30 – Apr 3, 2026",
    time: "09:00 AM – 6:00 PM",
  },
  {
    image: "/images/event7.png",
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Online + San Diego, CA, USA",
    date: "Nov 20, 2025",
    time: "10:00 AM – 4:00 PM PT",
  },
  {
    image: "/images/event8.png",
    title: "Open Source Summit North America 2026",
    slug: "oss-summit-na-2026",
    location: "Vancouver, Canada",
    date: "Sep 14–17, 2026",
    time: "09:00 AM – 6:00 PM",
  },
];
