import {BrowserRouter , Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import World from './pages/World';
import Dropdown from './components/Dropdown';


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/Planet" element={<World />} />
                <Route path="/Dropdown" element={<Dropdown />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
