import { useRouter } from 'next/router'
import React from 'react'
import { BallTriangle, Oval, Rings } from 'react-loader-spinner'
import { EventsList } from '../../components/EventsList'
import ResultTitle from '../../components/ResultTitle'
import { getFilteredEvents } from '../../helpers/api-util'
const EventFilter = (props ) => {
    const {events} = props
    if(props.hasError){
        return(
            <h1>Invalid Filters Please Check Filters Again </h1>
        )
    }
   
    if(!events || events.length === 0){
        return (<h1> No Events Found For The Chosen Filter</h1>)
    }
    const date  = new Date(props.date.year,props.date.month-1)
  return (
    <div>
        <ResultTitle date = {date}/>
        <EventsList items = {events}/>
    </div>
  )
}

export async function getServerSideProps(context) {
      const {params} = context
      const filterData  = params.eventSlug
      const filterYear= filterData[0]
      const filterMonth = filterData[1]
      const numYear = +filterYear
      const numMonth = +filterMonth
    
    if (isNaN(numYear)|| isNaN(numMonth)|| numYear > 2030 || numMonth < 1 || numMonth > 12) {
        return{hasError:true}
    }
    const filteredEvents = await getFilteredEvents({
        year:numYear,
        month:numMonth
    })
      return {
        props:{
          events:filteredEvents,
          date:{
            year:numYear,
            month:numMonth
        }}}
    }
export default EventFilter