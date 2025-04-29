import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar open={open} setOpen={setOpen} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project-detail/:id' element={<ProjectDetail />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;