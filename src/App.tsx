import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Product from './components/Products'
import Products from './components/Products'
import Counter from './components/Counter'
import Data from './components/Data'

const dummyProducts:string[]=["Cabbage","Banana","Apil"]
const flag=true
const initialState=false

function App() {
  const [add,setAdd]=useState(initialState)


  return(
    <div > 
    Hello
    {flag ? <h1>Hi there </h1>:<h1>Bye there</h1>

    }
    <Counter />
    
    <Products productList={dummyProducts} name={"Anuska"} age={20 } />

    <Todo />  
    <Data />
    {/* <ul>
      {data.products.map((info)=>{
        return <li>{info.title }</li>
      })
    } 
      </ul> */}
    
    </div>
    
  )
}
export default App
