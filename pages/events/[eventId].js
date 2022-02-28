import { useRouter } from 'next/router'
import React from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getEventById } from '../../Dummy-Data'

const EventDetailPage = () => {
    const router  =  useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)
    if(!event){
        return (
            <h1> No Event Found</h1>
        )
    }
  return (
      
    <>
    <EventSummary title = {event.title}/>
    <EventLogistics date={event.date} address = {event.location} image={event.image} imageAlt = {event.imageAlt}/>
    <EventContent>
        <p>{event.description}</p>
    </EventContent>
    </>
  )
}

export default EventDetailPage