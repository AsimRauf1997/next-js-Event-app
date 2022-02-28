import React from 'react'
import { EventsList } from '../components/EventsList'
import { getFeaturedEvents } from '../Dummy-Data'

const HomePage = () => {
    const featuredEvents  =  getFeaturedEvents()
  return (
    <div>

       <EventsList items = {featuredEvents}/>
    </div>
  )
}

export default HomePage