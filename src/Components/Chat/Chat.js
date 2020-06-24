import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'


let socket

const Chat = ({location}) => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT ='http://localhost:7500'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    console.log(name, room)
    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, ({error}) => {
      alert(error)
      console.log(socket)
    })

  }, [ENDPOINT, location.search])

  return (
    <>
      <div>
        <h1>DocTalk</h1>
      </div>
      <div>
      <form>
        <input />
        <button>Send</button>
      </form>
      </div>
    </>
  )
}

export default Chat