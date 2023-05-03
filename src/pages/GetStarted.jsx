import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='bg-earth bg-cover'>
      <div className='justify-center flex content-center flex-col h-screen w-full'>
        <div className='pb-[5.8rem] pb-28'>
            <h1 className='text-7xl text-morning-blue font-nunito pb-9 pl-32 pr-16 max-big::text-6xl max-mid:text-4xl max-smol:pl-16 break-normal'>COMPANIES OF EARTH</h1>
            <p className='text-text-blue text-xl font-nunito-italic italic pl-80 pr-16 max-big:text-lg  max-big:pl-64 max-mid:pl-40 max-mid:text-base max-smol:pl-24 break-normal'>These are the top companies all over the world</p>
            <div className='pl-96 pt-9 max-big:pl-tiny max-mid:pl-44 max-smol:pl-28'>
                <Link to="/Planet">
                    <button className='text-text-blue-dark font-nunito bg-button-blue shadow-[0_0px_5px_3px_rgba(88,86,181,0.3)] font-bold text-xs font py-3 px-24 rounded-2xl'>GET STARTED</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
