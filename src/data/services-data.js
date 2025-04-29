import WebIcon from '../assets/services/code.png';
import RestAPIIcon from '../assets/services/rest.png';
import FrontEndIcon from '../assets/services/designer.png';
import BackEndIcon from '../assets/services/browser.png';
import SPAIcon from '../assets/services/landing-page.png';

const servicesData = [
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
];

export default servicesData;