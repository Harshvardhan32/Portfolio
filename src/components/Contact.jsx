import { useRef } from "react";
import HighlightedText from "./HighlightedText";

const Contact = () => {

    const name = useRef('');
    const email = useRef('');
    const subject = useRef('');
    const message = useRef('');

    const handleSubmit = () => {
        const formData = {
            name: name.current.value,
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value,
        }

        console.log("Contact Details: ", formData);
        name.current.value = "";
        email.current.value = "";
        subject.current.value = "";
        message.current.value = "";
    }

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20 my-0" id="contact">
            <h1 className="text-5xl text-center font-bold pb-10">Contact <HighlightedText text={"Me"} /> </h1>
            <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-col gap-10 justify-between items-center">
                <form onSubmit={handleSubmit} className="w-[90%] max-w-[700px] flex flex-col gap-2">
                    <input
                        required
                        type="text"
                        ref={name}
                        placeholder="Enter Your Name"
                        className="input-left w-full outline-none bg-slate-800 rounded-md text-lg py-[8px] px-4"
                    />
                    <input
                        required
                        type="email"
                        ref={email}
                        placeholder="Enter Your Email"
                        className="input-right w-full outline-none bg-slate-800 rounded-md text-lg py-[8px] px-4"
                    />
                    <input
                        required
                        type="text"
                        ref={subject}
                        placeholder="Enter Your Subject"
                        className="input-left w-full outline-none bg-slate-800 rounded-md text-lg py-[8px] px-4"
                    />
                    <textarea
                        required
                        ref={message}
                        rows={4}
                        placeholder="Enter Your Message"
                        className="input-right w-full outline-none bg-slate-800 rounded-md text-lg py-[8px] px-4"
                    />
                    <button
                        className="submit-button bg-[#0ef] text-black font-medium py-3 my-1 rounded-full transition-all duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;