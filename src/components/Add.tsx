import React, { useState } from 'react'

const initialState=false

const Add = () => {
    const [add,setAdd]=useState(initialState)
    function handleChange(){
        setAdd(!add)
    }
  return (
    <div>
      <button onClick={handleChange}>Change Here</button>
    </div>
  )
}

export default Add
