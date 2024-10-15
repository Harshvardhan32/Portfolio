import HighlightedText from "./HighlightedText";
import WebIcon from '../assets/services/code.png';
import RestAPIIcon from '../assets/services/rest.png';
import FrontEndIcon from '../assets/services/designer.png';
import BackEndIcon from '../assets/services/browser.png';
import SPAIcon from '../assets/services/landing-page.png';
import { Link } from "react-router-dom";

const Services = () => {

    const data = [
        {
            id: '01',
            icon: WebIcon,
            title: "Web Application Development",
            description: "Building responsive and interactive web applications using MongoDB, Express.js, React, and Node.js.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Learn'
        },
        {
            id: '02',
            icon: RestAPIIcon,
            title: "RESTful API Development",
            description: "Creating robust APIs for front-end and back-end communication.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/'
        },
        {
            id: '03',
            icon: FrontEndIcon,
            title: "Frontend Development",
            description: "Creating visually appealing and user-friendly interfaces using React, incorporating state management with Redux or Context API.",
            readMoreLink: 'https://docs.commercetools.com/frontend-development/'
        },
        {
            id: '04',
            icon: BackEndIcon,
            title: "Back-end Development",
            description: "Implementing server-side logic, managing user authentication, and handling data processing with Node.js and Express.",
            readMoreLink: 'https://roadmap.sh/backend'
        },
        {
            id: '05',
            icon: SPAIcon,
            title: "Single Page Applications",
            description: " Developing SPAs(Single Page Applications) that provide a seamless user experience with dynamic content loading.",
            readMoreLink: 'https://react.dev/'
        },
    ]

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id="services">
            <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <div className="service-heading text-5xl font-bold">
                    My <HighlightedText text={"Services"} />
                </div>
                <div className="w-full flex flex-row flex-wrap justify-center gap-6">
                    {
                        data?.map((item) => (
                            <div key={item.id} className="service-container max-w-[500px] w-[32%] min-w-[290px] transition-all duration-300 hover:scale-105 hover:shadow-custom-blue flex flex-col items-start gap-y-4 border-2 border-[#0ef] rounded-2xl py-10 px-8">
                                <div>
                                    <img src={item.icon} alt="" className="w-16" />
                                </div>
                                <h3 className="text-2xl">{item.title}</h3>
                                <p className="text-lg text-justify">{item.description}</p>
                                <Link to={item.readMoreLink} target='_blank' className="py-2 px-4 border-2 text-[#0ef] border-[#0ef] rounded-full hover:text-[#22282F] hover:bg-[#0ef] hover:border-transparent transition-all duration-300">Read More</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;