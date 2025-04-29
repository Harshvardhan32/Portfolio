import { Link, useLocation } from "react-router-dom";
import projectData from "../data/project-data";
import { FaGithub } from "react-icons/fa";
import BrowserIcon from '../assets/browser-icon.png';

const ProjectDetail = () => {

    const location = useLocation();
    const projectId = location.pathname.split('/').pop();
    const data = projectData.find((item) => item.id === projectId);

    return (
        <div className="w-full h-full bg-[#1B1F24]">
            <div className="text-white pt-24">
                <h1 className="text-4xl font-bold text-white text-center py-4">Project Detail</h1>
            </div>
            <div className="max-w-[1600px] w-11/12 mx-auto py-8 flex max-[400px]:flex-col gap-8 justify-between">
                <div className="max-[400px]:w-full w-[45%] flex flex-col gap-5">
                    <img
                        src={data?.image}
                        alt={data?.title}
                        className="rounded-md"
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-white">Project Name: {data?.title}</h2>
                        <p className="text-lg text-justify text-white"><span className='font-semibold'>Technology used:</span> {data.technology.join(', ')}.</p>
                    </div>
                    <div className='w-full flex flex-row gap-4'>
                        <Link
                            to={data.githubLink}
                            target="_blank"
                            className="p-2 border-2 border-[#0ef] rounded-full"
                        >
                            <FaGithub fill="#0ef" fontSize={27} />
                        </Link>
                        <Link
                            to={data.websiteLink}
                            target="_blank"
                            className="p-2 border-2 border-[#0ef] rounded-full"
                        >
                            <img src={BrowserIcon} alt="" className='w-7' />
                        </Link>
                    </div>
                </div>
                <div className="max-[400px]:w-full w-[55%] flex flex-col gap-5">
                    <p className="font-semibold text-2xl text-white">Description: <span className="text-xl font-normal text-gray-300">{data.description}</span></p>
                    <div>
                        <p className="font-semibold text-2xl text-white">Features: </p>
                        <ul className="list-disc list-inside text-xl font-normal text-gray-300">
                            {data?.features?.map((feature, index) => (
                                <li key={index} className="text-justify">{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;