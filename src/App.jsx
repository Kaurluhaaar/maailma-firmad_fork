import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-earth bg-cover'>
      <div className='justify-center flex content-center flex-col h-screen w-full'>
        <div className='pb-{5.8rem} pb-28 w-max ml-32 flex items-center flex-col gap-8'>
        <h1 className='text-6xl text-morning-blue font-nunito w-max '>TECH COMPANIES OF EARTH</h1>
        <p className='text-text-blue text-xl font-nunito-italic italic w-max '>These are the top tech companies all over the world</p>
        <div className=''>
        <button className='text-text-blue-dark font-nunito bg-button-blue shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)] font-bold text-xs font py-3 px-24 rounded-2xl '>GET STARTED</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
