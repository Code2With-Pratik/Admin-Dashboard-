import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='w-screen h-screen bg-black text-white flex flex-wrap items-center justify-center font-extrabold text-6xl'>
    Admin Dashboard
   </div>
    </>
  )
}

export default App
