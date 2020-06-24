import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <>
      <h1>Join</h1>
      <div><input placeholder='Name' type='text' onChange={(e) => setName(e.target.value)}/></div>
      <div><input placeholder='Room' type='text' onChange={(e) => setRoom(e.target.value)}/></div>
      <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
        <button type='submit'>Join</button>
      </Link>
    </>

  )
}



export default Join