import { Link } from 'react-router-dom';
import HighlightedText from './HighlightedText';
import { FaGithub } from "react-icons/fa";
import BrowserIcon from '../assets/browser-icon.png';
import projectData from '../data/project-data';

const Projects = () => {

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id="projects">
            <div className="max-w-[1600px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <h1 className="text-5xl text-center font-bold">
                    My <HighlightedText text={"Projects"} />
                </h1>
                <div className="project-container w-full flex flex-row flex-wrap justify-center gap-6">
                    {
                        projectData?.map((item) => (
                            <div key={item.id} className="max-w-[500px] w-[32%] min-w-[290px] flex flex-col items-start gap-y-6 border-2 border-[#0ef] rounded-2xl py-10 px-8 transition-all duration-300 hover:scale-105 hover:shadow-custom-blue">
                                <div className='flex justify-center items-center'>
                                    <img src={item.image} alt="" className="max-h-[320px] w-full object-cover rounded-md" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className="text-2xl">{item.title}</h3>
                                    <p className="text-lg text-justify"><span className='font-semibold'>Technology used:</span> {item.technology.join(', ')}</p>
                                    <Link to={`/project-detail/${item.id}`} className='underline text-blue-500 text-xl'>View more</Link>
                                </div>
                                <div className='w-full flex flex-row gap-4 justify-between'>
                                    <Link
                                        to={item.githubLink}
                                        target="_blank"
                                        className="p-2 border-2 border-[#0ef] rounded-full"
                                    >
                                        <FaGithub fill="#0ef" fontSize={27} />
                                    </Link>
                                    <Link
                                        to={item.websiteLink}
                                        target="_blank"
                                        className="p-2 border-2 border-[#0ef] rounded-full"
                                    >
                                        <img src={BrowserIcon} alt="" className='w-7' />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;