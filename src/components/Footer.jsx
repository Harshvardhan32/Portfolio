import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";

const Footer = () => {

    return (
        <div className="bg-[#22282F] text-white py-8">
            <div className="footer max-w-[1500px] w-11/12 mx-auto py-2 flex flex-row max-[500px]:flex-col max-[500px]:items-start gap-10 justify-between items-center">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4">
                        <Link
                            to="https://www.linkedin.com/in/harshvardhan-204532257/"
                            target="_blank"
                            className="social-link p-2 rounded-full border-2 border-[#0ef]"
                        >
                            <FaLinkedin fill="#0ef" fontSize={25} />
                        </Link>
                        <Link
                            to="https://www.instagram.com/_harshvardhanmaurya_/"
                            target="_blank"
                            className="social-link p-2 rounded-full border-2 border-[#0ef]"
                        >
                            <FaSquareInstagram fill="#0ef" fontSize={25} />
                        </Link>
                        <Link
                            to="https://x.com/Harshvardhan730?s=08"
                            target="_blank"
                            className="social-link p-2 rounded-full border-2 border-[#0ef]"
                        >
                            <FaSquareXTwitter fill="#0ef" fontSize={25} />
                        </Link>
                        {/* <Link
                            to="https://www.facebook.com/share/aNFhhnw33KLaBd3r/"
                            target="_blank"
                            className="p-2 rounded-full border-2 border-[#0ef]"
                        >
                            <FaFacebook fill="#0ef" fontSize={25} />
                        </Link> */}
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 mt-8">
                        <IoMail fill="#0ef" fontSize={22} />
                        <Link to="mailto:harshvardhanmaurya73073@gmail.com">
                            harshvardhanmaurya73073@gmail.com
                        </Link>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                        <MdAddCall fill="#0ef" fontSize={22} />
                        <Link to="tel:+917307332412">
                            +91 7307332412
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-xl">
                    <a href='#home' className="w-fit">Home</a>
                    <a href='#about' className="w-fit">About</a>
                    <a href='#skills' className="w-fit">Skills</a>
                    <a href='#projects' className="w-fit">Projects</a>
                    <a href='#services' className="w-fit">Services</a>
                    <a href='#contact' className="w-fit">Contact Me</a>
                </div>
            </div>
            <div className="flex mx-auto mt-8 w-[90%] h-[1px] bg-[#0ef]"></div>
            <p className="text-center my-2">&copy; Copyright | All right reserved.</p>
        </div>
    );
}

export default Footer;