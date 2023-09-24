import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)



  const addvalue = () => {
    console.log("clicked", count);
    count = count + 1
    if (count <= 10) {
      
      setCount(count)
    }else{
      setCount(count=10)
    }
  }

  const subvalue = () => {
    count = count - 1
    if (count >= 0) {
      
      setCount(count) 
    }else{
      setCount(count=0)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addvalue}>add value</button>
      <br /><br />
      <button onClick={subvalue}>remove value</button>

    </>
  )
}

export default App
