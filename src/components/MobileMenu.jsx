import { CgMenuLeftAlt } from "react-icons/cg";

const MobileMenu = ({ setOpen }) => {

    return (
        <div className='menu-section bg-[#22282F] w-full flex flex-col gap-y-5 h-screen pl-10 pr-10 pt-5 text-white text-2xl'>
            <CgMenuLeftAlt fontSize={35} className="cursor-pointer"
                onClick={() => setOpen(false)}
            />
            <span onClick={() => setOpen(false)}>
                <a href='#home' className="hover:text-[#0ef] transition-all duration-200">Home</a>
            </span>
            <span onClick={() => setOpen(false)}>
                <a href='#about' className="hover:text-[#0ef] transition-all duration-200">About</a>
            </span>
            <span onClick={() => setOpen(false)}>
                <a href='#skills' className="hover:text-[#0ef] transition-all duration-200">Skills</a>
            </span>
            <span onClick={() => setOpen(false)}>
                <a href='#projects' className="hover:text-[#0ef] transition-all duration-200">Projects</a>
            </span>
            <span onClick={() => setOpen(false)}>
                <a href='#services' className="hover:text-[#0ef] transition-all duration-200">Services</a>
            </span>
            <span onClick={() => setOpen(false)}>
                <a href='#contact' className="hover:text-[#0ef] transition-all duration-200">Contact Me</a>
            </span>
        </div>
    );
}

export default MobileMenu;