import HighlightedText from "./HighlightedText";
import HeroImage from '../assets/3d-hero-image1.png'
import TypingEffect from "./TypingEffect";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="bg-[#1B1F24] text-white pb-16 pt-36" id="home">
            <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-row gap-10 justify-between items-center">
                <div className="w-[45%] max-[700px]:w-full flex flex-col gap-10 text-2xl">
                    <div className="hero-right text-3xl font-medium"><span className="text-4xl">Hi, My name is
                        <HighlightedText text={"Harshvardhan"} /></span> <br /> and I am passionate about <br />
                        <p className="text-[#0ef]"><TypingEffect /></p>
                    </div>

                    <div className="hero-bottom flex flex-wrap gap-6 text-xl">
                        <Link to="https://github.com/Harshvardhan32/Harshvardhan32/blob/main/resume.pdf" target="_blank"
                            className="py-2 px-4 border-2 text-[#0ef] border-[#0ef] rounded-md hover:text-[#22282F] hover:bg-[#0ef] hover:border-transparent transition-all duration-300">
                            Download Resume
                        </Link>
                        <Link to='https://github.com/Harshvardhan32/' target="_blank"
                            className="py-2 px-4 border-2 text-[#0ef] border-[#0ef] rounded-md hover:text-[#22282F] hover:bg-[#0ef] hover:border-transparent transition-all duration-300">
                            Visit GitHub
                        </Link>
                    </div>
                </div>
                <div className="hero-left max-[700px]:hidden w-[45%] flex flex-row gap-8 text-xl bg-background-image">
                    <img src={HeroImage} alt="" className="flex rounded-full shadow-custom-blue-blur" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;