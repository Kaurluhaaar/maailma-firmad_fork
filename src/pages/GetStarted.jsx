import { Link } from 'react-router-dom';
import './GetStarted.css'

function App() {
  return (
    <div className='bg-earth bg-cover'>
      <div className='justify-center flex content-center flex-col h-screen w-full'>
        <div className='pb-{5.8rem} pb-28'>
            <h1 className='text-7xl text-morning-blue font-nunito pb-9 w-max pl-32 max-[1728px]:text-6xl max-[1570px]:text-3xl'>COMPANIES OF EARTH</h1>
            <p className='text-text-blue text-xl font-nunito-italic italic w-max pl-80 max-lg:text-sm max-lg:pl-24 max-[1728px]:text-lg  max-[1728px]:pl-64'>These are the top companies all over the world</p>
            <div className='pl-96 pt-9 max-[1728px]:pl-[300px]'>
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
