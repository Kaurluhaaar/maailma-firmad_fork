import {BrowserRouter , Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Planet from './pages/Planet';
import Company from './components/Company';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/Planet" element={<Planet />} />
            <Route path="/Company" element={<Company />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
