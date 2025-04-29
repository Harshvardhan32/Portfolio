import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {

    return (
        <>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
        </>
    );
}

export default Home;