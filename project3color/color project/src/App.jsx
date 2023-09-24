import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("yellow")

  return (
    <>

      <div className='w-full h-screen duration-200 '
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-md shadow-lg bg-white">
          {/* <iframe width="560" height="315" src="https://spankbang.com/8rw2d/embed/" frameborder="0" scrolling="no" allowfullscreen></iframe> */}
            <button onClick={() => setcolor("red")} className='outline-none px-4 py-1 my-5 mx-3 rounded-full text-white shadow-lg'
             style={{backgroundColor: "red"}}
             contentEditable="true" >red</button>
            <button onClick={() => setcolor("green")} className='outline-none px-4 py-1 my-5 mx-3 rounded-full text-white shadow-lg'
             style={{backgroundColor: "green"}}
             >green</button>
            <button onClick={() => setcolor("purple")} className='outline-none px-4 py-1 my-5 mx-3 rounded-full text-white shadow-lg'
             style={{backgroundColor: "purple"}}
             >voilet</button>
            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-1 my-5 mx-3 rounded-full text-white shadow-lg'
             style={{backgroundColor: "blue"}}
             >blue</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
