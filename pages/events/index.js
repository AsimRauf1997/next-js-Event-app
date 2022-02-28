import { useRouter } from 'next/router'
import React from 'react'
import EventSearch from '../../components/EventSearch'
import { EventsList } from '../../components/EventsList'
import { getAllEvents } from '../../Dummy-Data'

const AllEventsPage = () => {
    const allEvents = getAllEvents()
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

export default AllEventsPage