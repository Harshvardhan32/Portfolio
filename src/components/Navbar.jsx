import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="w-screen bg-[#22282F] z-10 text-white py-3 fixed">
                <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-row gap-10 justify-between items-center">
                    <a href="#home" className="logo text-4xl font-semibold">Portfolio</a>
                    {
                        !open ?
                            <div className="navbar flex flex-row gap-8 text-xl">
                                <a href='#home' className="hover:text-[#0ef] transition-all duration-200">Home</a>
                                <a href='#about' className="hover:text-[#0ef] transition-all duration-200">About</a>
                                <a href='#skills' className="hover:text-[#0ef] transition-all duration-200">Skills</a>
                                <a href='#projects' className="hover:text-[#0ef] transition-all duration-200">Projects</a>
                                <a href='#services' className="hover:text-[#0ef] transition-all duration-200">Services</a>
                                <a href='#contact' className="hover:text-[#0ef] transition-all duration-200">Contact Me</a>
                            </div> :
                            <HiMenu fontSize={30} className="cursor-pointer" onClick={() => setOpen(false)} />
                    }
                </div>
            </div>
            {
                open &&
                <div className="w-screen bg-[#094d9c]">
                    {/* <div className="max-w-[300px] w-full bg-[#22282F] text-white"> */}
                    <a href='#home' className="hover:text-[#0ef] transition-all duration-200">Home</a>
                    <a href='#about' className="hover:text-[#0ef] transition-all duration-200">About</a>
                    <a href='#skills' className="hover:text-[#0ef] transition-all duration-200">Skills</a>
                    <a href='#projects' className="hover:text-[#0ef] transition-all duration-200">Projects</a>
                    <a href='#services' className="hover:text-[#0ef] transition-all duration-200">Services</a>
                    <a href='#contact' className="hover:text-[#0ef] transition-all duration-200">Contact Me</a>
                    {/* </div> */}
                </div>
            }
        </>
    )
}

export default Navbar;