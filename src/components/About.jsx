import HighlightedText from './HighlightedText';
import AboutImage from '../assets/Hero Image.jpg';

const About = () => {

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id='about'>
            <div className="max-w-[1600px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <div className="about-top text-5xl font-bold">
                    About <HighlightedText text={"Me"} />
                </div>
                <div className="w-full flex flex-row max-[700px]:flex-col max-[700px]:justify-center mx-auto py-2 gap-10 justify-between items-center">
                    <div className="about-img max-[700px]:w-[90%] w-[45%] flex flex-row gap-8 text-xl">
                        <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-custom-blue-blur">
                            <img
                                src={AboutImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className='about-right max-[700px]:w-[90%] w-[45%] flex flex-col gap-5'>
                        <h3 className='text-3xl'>Full Stack Developer!</h3>
                        <p className='text-lg'>I am a skilled full stack web developer with over 1.5 years of experience. My passion lies in creating website using MERN(MongoDB, Express.js, React, Node.js) stack. I take pride in staying up-to-date with current trending technologies and leveraging my creativity to produce visually appealing and user-friendly websites.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
