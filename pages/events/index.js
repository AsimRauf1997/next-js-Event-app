import { useRouter } from 'next/router'
import React from 'react'
import EventSearch from '../../components/EventSearch'
import { EventsList } from '../../components/EventsList'
import { getAllEvents } from '../../helpers/api-util'

const AllEventsPage = (props) => {
  const {allEvents}  = props
    const router = useRouter()

    const findEvents = (year,month) =>{
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
        
    }
  return (
    <div>
        <EventSearch onSearch = {findEvents}/>
        <EventsList items = {allEvents}/>
    </div>
  )
}
export async function getStaticProps(){
  const allEvents =  await getAllEvents()
  return {
    props:{
      allEvents:allEvents
    },
    revalidate:10
  }
}
export default AllEventsPage