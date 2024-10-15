import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const [changeStyle,setChangeStyle]=useState(false)
    function handleCount(){
        setCount(count+1)
    }
    useEffect(() => {
        if (count === 10) {
        setChangeStyle(true);
        }
    }, [count]);
    console.log(changeStyle);
    

  return (
    <div>
      <button style={{backgroundColor:changeStyle ?'pink':'white', color:changeStyle?'black':'pink'}}onClick={handleCount}>Increase the count</button>
      <p>The count is {count}</p>

    </div>
  )
}

export default Counter

