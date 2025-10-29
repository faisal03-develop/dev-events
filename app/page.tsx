import Explorebtn from "@/components/ui/explorebtn"
import EventCard  from "@/components/ui/eventcard"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <section>
      <h1 className="text-center">The Hub for the Every Dev <br />Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in one Place</p>
      <Explorebtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event)=>(
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