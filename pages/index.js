import React from 'react'
import { EventsList } from '../components/EventsList'
import { getFeaturedEvents } from '../helpers/api-util'
const HomePage = (props) => {
  console.log(props)
    const {featuredEvents} = props
  return (
    <div>
       <EventsList items = {featuredEvents}/>
    </div>
  )
}
export async function getStaticProps(){
  const featuredEvents =  await getFeaturedEvents()
  return {
    props:{
      featuredEvents:featuredEvents
    },
    revalidate:10
  }
}
export default HomePage