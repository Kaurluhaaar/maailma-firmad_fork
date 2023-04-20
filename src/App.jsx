import {BrowserRouter , Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Planet from './pages/Planet';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/Planet" element={<Planet />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
