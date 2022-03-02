import axios from 'axios'
import React, { useState } from 'react'
import {useRouter} from 'next/router'

const event = ({eventsData}) => {
  const [events,setEvents] = useState(eventsData)
  const router = useRouter()
  const fetchGameData = async () => {
    const resq = await axios.get('http://localhost:4000/events?category=games')
    const data =resq.data
    setEvents(data)
    router.push('?category=games', undefined, {shallow: true})


  }
  return (
    <>
    <h2>Events List</h2>
    <button onClick={fetchGameData}>Games Events</button>
    {events.map(event => {
      
      return <div key={event.id}>
        <h5>{event.title}</h5>
        <p>{event.id} - {event.description}</p>
        <hr/>
      </div>
    })}
    </>
  )
}

export default event

export async function getServerSideProps(context) {
  const {query} = context
  const {category} = query
  const queryString = category ? 'category=games' : ''
  const resq = await axios.get(`http://localhost:4000/events?${queryString}`)
  const data = resq.data 

  return {
    props: {
      eventsData: data,

    }
  }
}