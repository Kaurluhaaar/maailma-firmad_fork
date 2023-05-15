import {BrowserRouter , Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import World from './pages/World';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/Planet" element={<World />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
