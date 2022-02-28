import React from 'react'
import EventItem from '../components/EventsItem'
import styles from '../styles/EventsItem.module.css'
export const EventsList = ({items}) => {
  return (
    <div className={styles.list}>
      {items.map(event=>(
        <EventItem 
        key={event.id}
        id = {event.id}
        title = {event.title}
        location = {event.location}
        date = {event.date}
        image = {event.image}
        />
      ))}
    </div>
  )
}
