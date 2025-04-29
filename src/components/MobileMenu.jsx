import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileMenu = ({ setOpen }) => {

    return (
        <div className='menu-section bg-[#22282F] w-full flex flex-col gap-y-5 h-screen pl-10 pr-10 pt-5 text-white text-2xl'>
            <CgMenuLeftAlt fontSize={35} className="cursor-pointer"
                onClick={() => setOpen(false)}
            />
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#home' className="hover:text-[#0ef] transition-all duration-200">Home</HashLink>
            </span>
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#about' className="hover:text-[#0ef] transition-all duration-200">About</HashLink>
            </span>
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#skills' className="hover:text-[#0ef] transition-all duration-200">Skills</HashLink>
            </span>
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#projects' className="hover:text-[#0ef] transition-all duration-200">Projects</HashLink>
            </span>
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#services' className="hover:text-[#0ef] transition-all duration-200">Services</HashLink>
            </span>
            <span onClick={() => setOpen(false)}>
                <HashLink smooth to='/#contact' className="hover:text-[#0ef] transition-all duration-200">Contact Me</HashLink>
            </span>
        </div>
    );
}

export default MobileMenu;