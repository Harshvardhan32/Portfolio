import { Link } from 'react-router-dom';
import HTMLIcon from '../assets/skills/html-icon.png';
import HighlightedText from './HighlightedText';
import { FaGithub } from "react-icons/fa";
import BrowserIcon from '../assets/browser-icon.png';
import Password from '../assets/projects/Password Generator.png'
import PlanWithHarsh from '../assets/projects/Plan With Harsh.png'
import TopCourses from '../assets/projects/Top Courses.png'
import StudyNotion from '../assets/projects/StudyNotion.png'
import RandomGIF from '../assets/projects/Random Gifs.png';
import Razorpay from '../assets/projects/RazorPay Clone.png';
import TicTacToe from '../assets/projects/TIC TAC TOE.png';

const Projects = () => {

    const data = [
        {
            id: '01',
            image: StudyNotion,
            title: 'StudyNotion | An Edtech Platform',
            tech: 'React, Tailwind CSS, Node.js, Express.js, MongoDB, Redux Toolkit',
            githubLink: 'https://github.com/Harshvardhan32/StudyNotion-Front-End',
            websiteLink: 'https://studynotion-edtech-platform.netlify.app/',
        },
        {
            id: '02',
            image: TopCourses,
            title: 'Top Courses',
            tech: 'HTML, CSS, Tailwind CSS, React',
            githubLink: 'https://github.com/Harshvardhan32/Top-course',
            websiteLink: 'https://alltopcourses.netlify.app/',
        },
        {
            id: '03',
            image: PlanWithHarsh,
            title: 'Plan With Harsh',
            tech: 'HTML, CSS, Tailwind CSS, React',
            githubLink: 'https://github.com/Harshvardhan32/Plan-with-harsh',
            websiteLink: 'https://planwithharsh.netlify.app/'
        },
        {
            id: '04',
            image: Password,
            title: 'SecurePass - Your Password Generator',
            tech: 'HTML, CSS, Tailwind CSS, JavaScript',
            githubLink: 'https://github.com/Harshvardhan32/Password-Generator',
            websiteLink: 'https://harshvardhan32.github.io/Password-Generator/'
        },
        {
            id: '05',
            image: RandomGIF,
            title: 'Random Gifs Generator',
            tech: 'HTML, CSS, Tailwind CSS, React',
            githubLink: 'https://github.com/Harshvardhan32/Random-gifs',
            websiteLink: 'https://harshvardhan32.github.io/Random-gifs/'
        },
        {
            id: '06',
            image: Razorpay,
            title: 'Razorpay UI Clone',
            tech: 'HTML, CSS, Tailwind CSS',
            githubLink: 'https://github.com/Harshvardhan32/Razorpay_Clone',
            websiteLink: '#'
        },
        {
            id: '07',
            image: TicTacToe,
            title: 'TIC TAC TOE',
            tech: 'HTML, CSS, JavaScript',
            githubLink: 'https://github.com/Harshvardhan32/TIC_TAC_TOE',
            websiteLink: 'https://harshvardhan32.github.io/TIC_TAC_TOE/'
        },
    ];

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id="projects">
            <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <h1 className="text-5xl text-center font-bold">
                    My <HighlightedText text={"Projects"} />
                </h1>
                <div className="project-container w-full flex flex-row flex-wrap justify-center gap-6">
                    {
                        data?.map((item) => (
                            <div key={item.id} className="max-w-[500px] w-[32%] min-w-[290px] flex flex-col items-start gap-y-6 border-2 border-[#0ef] rounded-2xl py-10 px-8 transition-all duration-300 hover:scale-105 hover:shadow-custom-blue">
                                <div className='flex justify-center items-center'>
                                    <img src={item.image} alt="" className="max-h-[320px] w-full object-cover rounded-md" />
                                </div>
                                <div>
                                    <h3 className="text-2xl">{item.title}</h3>
                                    <p className="text-lg text-justify">{item.tech}</p>
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