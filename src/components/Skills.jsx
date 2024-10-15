import HighlightedText from "./HighlightedText";
import HTMLIcon from '../assets/skills/html-icon.png';
import CSSIcon from '../assets/skills/css-icon.png';
import TailwindIcon from '../assets/skills/tailwind-css-icon.png';
import JavaScriptIcon from '../assets/skills/javascript-programming-language-icon.png';
import ReactIcon from '../assets/skills/react-js-icon.png';
import NodeIcon from '../assets/skills/node-js-icon.png';
import ExpressIcon from '../assets/skills/express-js-icon.png';
import MongoDBIcon from '../assets/skills/mongodb-icon.png';
import ReduxIcon from '../assets/skills/redux-icon.png';
import GitIcon from '../assets/skills/git-icon.png';
import JavaIcon from '../assets/skills/java-programming-language-icon.png';
import PythonIcon from '../assets/skills/python-programming-language-icon.png';
import CIcon from '../assets/skills/c-program-icon.png';
import { Link } from "react-router-dom";

const Skills = () => {

    const data = [
        {
            id: "01",
            icon: HTMLIcon,
            title: "HTML",
            description: "HTML, or HyperText Markup Language, is the fundamental markup language used to structure and display content on the web. It uses a system of tags to define elements such as headings, paragraphs, links, images, and lists.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: "02",
            icon: CSSIcon,
            title: "CSS",
            description: "CSS, or Cascading Style Sheets, is a stylesheet language used to control the presentation and layout of web pages. It enables designers to apply styles, such as colors, fonts, spacing, and positioning, to HTML elements.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: "03",
            icon: TailwindIcon,
            title: "Tailwind CSS",
            description: "Tailwind CSS is a utility-first CSS framework that allows developers to create custom designs quickly using predefined classes. Instead of writing custom CSS, you can apply utility classes directly in your HTML, enabling rapid prototyping and responsive design.",
            readMoreLink: 'https://v2.tailwindcss.com/docs'
        },
        {
            id: "04",
            icon: JavaScriptIcon,
            title: "JavaScript",
            description: "JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic features to websites. It enables developers to manipulate HTML and CSS, respond to user events, and perform asynchronous operations, such as fetching data from servers.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            id: "05",
            icon: ReactIcon,
            title: "React",
            description: "React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components, manage state efficiently, and handle the rendering of dynamic content.",
            readMoreLink: 'https://react.dev/'
        },
        {
            id: "06",
            icon: NodeIcon,
            title: "Node.js",
            description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables developers to execute JavaScript on the server side. It allows for building scalable and high-performance applications using a non-blocking, event-driven architecture.",
            readMoreLink: 'https://nodejs.org/en'
        },
        {
            id: "07",
            icon: ExpressIcon,
            title: "Express.js",
            description: "Express.js is a minimal and flexible web application framework for Node.js, designed to simplify the development of web and mobile applications. It provides a robust set of features for building APIs, handling routing, managing middleware, and serving static files.",
            readMoreLink: 'https://expressjs.com/'
        },
        {
            id: "08",
            icon: MongoDBIcon,
            title: "MongoDB",
            description: "MongoDB is a NoSQL database that uses a flexible, document-oriented data model, allowing for the storage of data in JSON-like format. This structure enables developers to work with complex data types and relationships easily. MongoDB is designed for scalability and high performance, making it suitable for handling large volumes of data across distributed systems.",
            readMoreLink: 'https://www.mongodb.com/docs/'
        },
        {
            id: "09",
            icon: ReduxIcon,
            title: "Redux Toolkit",
            description: "Redux Toolkit is an official, opinionated library for managing application state in React applications using Redux. It simplifies the process of setting up and using Redux by providing pre-configured tools and best practices. With features like 'createSlice' for reducing boilerplate, built-in middleware, and easy integration with the Redux DevTools.",
            readMoreLink: 'https://redux-toolkit.js.org/'
        },
        {
            id: "10",
            icon: GitIcon,
            title: "Git",
            description: "Git is a distributed version control system that enables developers to track changes in code and collaborate on projects efficiently. It allows multiple users to work on the same codebase simultaneously, providing features like branching and merging to manage different versions of a project.",
            readMoreLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: "11",
            icon: JavaIcon,
            title: "Java Programming",
            description: "Java is a versatile, high-level programming language known for its platform independence, thanks to the Java Virtual Machine (JVM). It follows the principle of 'write once, run anywhere,' allowing developers to create applications that can run on any device with a JVM.",
            readMoreLink: 'https://docs.oracle.com/en/java/'
        },
        {
            id: "12",
            icon: PythonIcon,
            title: "Python Programming",
            description: "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",
            readMoreLink: 'https://docs.python.org/3/'
        },
        {
            id: "13",
            icon: CIcon,
            title: "C Programming",
            description: "C is a general-purpose, high-level programming language known for its efficiency and control over system resources. Developed in the early 1970s, it provides low-level access to memory through pointers, making it ideal for system programming, embedded systems.",
            readMoreLink: 'https://devdocs.io/c/'
        },
    ];

    return (
        <div className="bg-[#1B1F24] text-white py-10 pt-20" id="skills">
            <div className="max-w-[1500px] w-11/12 mx-auto py-2 flex flex-col gap-y-20 justify-between items-center">
                <h1 className="text-5xl font-bold">My <HighlightedText text={"Skills"} /></h1>
                <div className="skills-container w-full flex flex-row flex-wrap justify-center gap-6">
                    {
                        data?.map((item) => (
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