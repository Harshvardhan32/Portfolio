import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { useState } from 'react'

function App() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar open={open} setOpen={setOpen} />
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default App;