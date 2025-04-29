import HighlightedText from "./HighlightedText";
import { Link } from "react-router-dom";
import skillData from '../data/skill-data';

const Skills = () => {

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id="skills">
            <div className="max-w-[1600px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <h1 className="text-5xl font-bold">My <HighlightedText text={"Skills"} /></h1>
                <div className="skills-container w-full flex flex-row flex-wrap justify-center gap-6">
                    {
                        skillData?.map((item) => (
                            <div key={item.id} className="max-w-[500px] w-[32%] min-w-[290px] transition-all duration-300 hover:scale-105 hover:shadow-custom-blue flex flex-col items-start gap-y-4 border-2 border-[#0ef] rounded-2xl py-10 px-8">
                                <div>
                                    <img src={item.icon} alt="" className="w-16" />
                                </div>
                                <h3 className="text-2xl">{item.title}</h3>
                                <p className="text-lg text-justify">{item.description}</p>
                                <Link to={item.readMoreLink} target="_blank" className="py-2 px-4 border-2 text-[#0ef] border-[#0ef] rounded-full hover:text-[#22282F] hover:bg-[#0ef] hover:border-transparent transition-all duration-300">Read More</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Skills;