import React, { useEffect, useState } from 'react'

const Data = () => {
    const[usersList,setUserlist]=useState()
    const[pending,setpending]=useState(false)
    
        async function dataFetch(){
            setpending(true)
            const apiResponse=await fetch('https://dummyjson.com/users')
            const response=await apiResponse.json()
            console.log(response)
            if (response?.users) {
                setUserlist(response?.users)
                setpending(false)
            }


    }
    if(pending)return <h1>Fetching all the users!Please wait </h1>

 
  return (
    <div>
      <h1>The list of th users</h1>
      <ul>
        <button onClick={dataFetch}>Click for the info </button>

    {usersList && usersList.length > 0 ? (
      usersList.map((userItem) => (
        <li key={userItem?.id}>
          {userItem?.name}
          <p>{userItem?.firstName}{userItem?.lastName}</p>
          

        </li>
      ))
    ) : (
      <li>No users found</li>
    )}
  </ul>
    </div>
  )
}

export default Data
