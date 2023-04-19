import { Route, Routes } from 'react-router-dom';

function Navigation() {
    return (
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/Planet" element={<Planet />} />
        </Routes>
    )
}

export default Navigation
