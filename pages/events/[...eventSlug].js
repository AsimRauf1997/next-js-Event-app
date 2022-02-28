import { useRouter } from 'next/router'
import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { EventsList } from '../../components/EventsList'
import ResultTitle from '../../components/ResultTitle'
import { getFilteredEvents } from '../../Dummy-Data'
const EventFilter = () => {
    const router = useRouter()
    const filterData = router.query.eventSlug
   
    if(!filterData){
        return(<BallTriangle color="#00BFFF" height={80} width={80} />)
    }
    const filterYear= filterData[0]
    const filterMonth = filterData[1]

    const numYear = +filterYear
    const numMonth = +filterMonth

    if (isNaN(numYear)|| isNaN(numMonth)|| numYear > 2030 || numMonth < 1 || numMonth > 12) {
        return(
            <BallTriangle color="#00BFFF" height={80} width={80} />
        )
    }

    const filteredEvents = getFilteredEvents({
        year:numYear,
        month:numMonth
    })
    console.log(filteredEvents)
    if(!filteredEvents || filteredEvents.length === 0){
        return (<h1> No Events Found For The Chosen Filter</h1>)
    }
    const date  = new Date(numYear,numMonth-1)
  return (
    <div>
        <ResultTitle date = {date}/>
        <EventsList items = {filteredEvents}/>
    </div>
  )
}

export default EventFilter