import MobileMenu from "./MobileMenu";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = ({ open, setOpen }) => {

    return (
        <>
            <div className="w-screen z-10 fixed">
                <div className="w-full bg-[#22282F] text-white py-3">
                    <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-row gap-10 justify-between items-center">
                        <a href="#home" className="logo cursor-pointer text-4xl font-semibold">Portfolio</a>
                        {
                            <div className="navbar max-[950px]:hidden flex flex-row gap-8 text-2xl">
                                <a href='#home' className="hover:text-[#0ef] transition-all duration-200">Home</a>
                                <a href='#about' className="hover:text-[#0ef] transition-all duration-200">About</a>
                                <a href='#skills' className="hover:text-[#0ef] transition-all duration-200">Skills</a>
                                <a href='#projects' className="hover:text-[#0ef] transition-all duration-200">Projects</a>
                                <a href='#services' className="hover:text-[#0ef] transition-all duration-200">Services</a>
                                <a href='#contact' className="hover:text-[#0ef] transition-all duration-200">Contact Me</a>
                            </div>
                        }
                        {
                            !open && <CgMenuRightAlt fontSize={35} className="min-[950px]:hidden block cursor-pointer" onClick={() => setOpen(true)} />
                        }
                    </div>
                </div>
                <div className='hidden w-full h-full max-[950px]:block relative mb-0'>
                    <div className='absolute z-10 right-0 top-[-75px] max-w-[340px] max-[450px]:max-w-[360px] w-full pl-20'>
                        {
                            open && <MobileMenu setOpen={setOpen} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;