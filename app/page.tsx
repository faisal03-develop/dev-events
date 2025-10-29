import Explorebtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";

const page = async () => {
  
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch(`${BASE_URL}/api/events`);
  const {events} =await response.json();

  return (
    <section>
      <h1 className="text-center">The Hub for the Every Dev <br />Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in one Place</p>
      <Explorebtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events && events.length>0 && events.map((event: IEvent)=>(
            <li className="list-none" key={event.title}>
            <EventCard  {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page