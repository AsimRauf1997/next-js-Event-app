import React from 'react'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import { getAllEvents, getEventById } from '../../helpers/api-util'

const EventDetailPage = (props) => {
    const {events} = props
    const eventId =  events.id
    const event = getEventById(eventId)
    if(!event){
        return (
          <h1> No Event Found</h1>
        )
    }
  return (
    <>
    <EventSummary title = {events.title}/>
    <EventLogistics date={events.date} address = {events.location} image={events.image} imageAlt = {events.imageAlt}/>
    <EventContent>
        <p>{events.description}</p>
    </EventContent>
    </>
  )
}

export async function getStaticProps(context){
  const {params} = context
  const eventId  = params.eventId
  const eventData = await getAllEvents()
 const filterEventById =  eventData.find(event=> event.id===eventId)
 if(!filterEventById){
  return{notFound: true}
}
  return {
    props:{
      events:filterEventById
    }
  }
}
export async function getStaticPaths (){
  const eventData = await getAllEvents()
  const paths  = eventData.map(event=>( 
     { params:{
          eventId:event.id
      }}
  ))
  
  return {
      paths:paths,
      fallback: true
  
  }
}
export default EventDetailPage
// export async function getServerSideProps(context) {
//   const {params} = context
//   const eventId  = params.eventId
//   const eventData = await getAllEvents()
//  const filterEventById =  eventData.find(event=> event.id===eventId)
//  if(!filterEventById){
//   return{notFound: true}
// }
//   return {
//     props:{
//       events:filterEventById
//     }
//   }
// }