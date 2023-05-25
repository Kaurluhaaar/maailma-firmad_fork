import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='bg-earth bg-cover'>
      <div className='flex flex-col justify-center h-screen w-full'>
        <div className='pb-28 text-center w-1/2 box-border m-10'>
            <h1 className='text-7xl text-morning-blue font-nunito pb-9 max-midgt:text-5xl break-normal'>COMPANIES OF EARTH</h1>
            <p className='text-text-blue text-xl font-nunito-italic italic max-big:text-lg max-midgt:text-base break-normal'>These are the top companies all over the world</p>
            <div className=' pt-9'>
                <Link to="/Planet">
                    <button className='text-text-blue-dark font-nunito bg-button-blue hover:shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)] font-bold text-xs font py-3 px-24 rounded-2xl'>GET STARTED</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
