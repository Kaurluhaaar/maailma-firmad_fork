import {BrowserRouter , Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import World from './pages/World';
import GoogleMaps from './components/GoogleMaps';


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/Planet" element={<World />} />
                <Route path="/maps" element={<GoogleMaps />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
