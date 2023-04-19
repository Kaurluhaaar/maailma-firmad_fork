import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-earth bg-cover'>
      <div className='justify-center flex content-center flex-col h-screen w-full'>
        <div className='pb-{5.8rem} pb-28'>
            <h1 className='text-7xl text-morning-blue font-nunito pb-9 w-max pl-32'>COMPANIES OF EARTH</h1>
            <p className='text-text-blue text-xl font-nunito-italic italic w-max pl-80'>These are the top companies all over the world</p>
            <div className='pl-96 pt-9'>
                <Link to="/Planet">
                    <button className='text-text-blue-dark font-nunito bg-button-blue shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)] font-bold text-xs font py-3 px-24 rounded-2xl '>GET STARTED</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
