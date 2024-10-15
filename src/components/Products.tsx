import React from 'react'

function Products ({productList,name,age}:{
  productList:string[],
  name:string,
  age:number
}) 

{
  return (
    <div>
   
      <h1>Hi {name} and {age}</h1>
      <ul>
      {productList.map((prod,index)=>{
        return <li>{prod}</li>
      })
    } 
      </ul>
    </div>
  )
}

export default Products
