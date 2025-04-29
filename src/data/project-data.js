import SchoolManagement from '../assets/projects/School Management System.png';
import StudyNotion from '../assets/projects/StudyNotion.png';
import StreamPulse from '../assets/projects/StreamPulse.png';
import TopCourses from '../assets/projects/Top Courses.png';
import PlanWithHarsh from '../assets/projects/Plan With Harsh.png';
import Password from '../assets/projects/Password Generator.png';
import RandomGIF from '../assets/projects/Random Gifs.png';
import Razorpay from '../assets/projects/RazorPay Clone.png';
import TicTacToe from '../assets/projects/TIC TAC TOE.png';

const projectData = [
    {
        id: '01',
        image: SchoolManagement,
        title: 'School Management System',
        technology: ['React', 'Tailwind CSS', 'Zod', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Redux Toolkit'],
        description: 'A comprehensive school management system that streamlines administrative tasks, enhances communication, and improves overall efficiency.',
        features: [
            'User Authentication: Secure login for students, teachers, parents, and administrators.',
            'Student Management: Track student profiles, attendance, and performance.',
            'Course Management: Create and manage courses, assignments, and grades.',
            'Admin Dashboard: Centralized control for managing users and system settings.',
            'Responsive Design: Accessible on various devices for convenience.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/School-Management-System',
        websiteLink: 'https://school-management-client-system.vercel.app/',
    },
    {
        id: '02',
        image: StudyNotion,
        title: 'StudyNotion | An Edtech Platform',
        technology: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Redux Toolkit'],
        description: 'Our Edtech platform offers an all-in-one learning experience, combining interactive lessons. Designed for both students and educators, it empowers effective teaching and engaged learning anytime, anywhere. With smart analytics and adaptive content, we help every learner unlock their full potential.',
        features: [
            'User Authentication: Secure login system for students, educators, and administrators.',
            'Course Management: Create and manage courses, and assignments.',
            'Course Management: Tools to create, organize, and manage courses, assignments.',
            'Responsive Design: Optimized for desktops, tablets, and smartphones for seamless access.',
            'Progress Tracking and Analytics: Real-time dashboards to monitor student performance.'
        ],
        githubLink: 'https://github.com/Harshvardhan32/StudyNotion-Front-End',
        websiteLink: 'https://studynotion-edtech-platform.netlify.app/',
    },
    {
        id: '03',
        image: StreamPulse,
        title: 'StreamPulse',
        technology: ['React', 'Tailwind CSS', 'Redux', 'Redux Toolkit', 'The Movie Database(TMDB) API'],
        description: 'A movie and TV show streaming platform that provides users with a seamless experience to discover and watch trailer of their favorite content.',
        features: [
            'Movie and TV Show Database: Access to a vast collection of movies and TV shows.',
            'Filter and Sort Options: Easily find content by genre, and popularity.',
            'Watch Trailer: Watch trailers for movies and TV shows directly on the platform.',
            'Search Functionality: Easily find content by title or genre.',
            'Responsive Design: Accessible on various devices for convenience.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/StreamPulse',
        websiteLink: '/',
    },
    {
        id: '04',
        image: TopCourses,
        title: 'Top Courses',
        technology: ['HTML, CSS, Tailwind CSS, React'],
        description: 'A platform that provides a curated list of top courses.',
        features: [
            'Filter and Sort Options: Easily find courses by category, rating, and popularity.',
            'Like and Dislike Feature: Users can express their opinions on courses.',
            'Responsive Design: Accessible on various devices for convenience.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/Top-course',
        websiteLink: 'https://alltopcourses.netlify.app/',
    },
    {
        id: '05',
        image: PlanWithHarsh,
        title: 'Plan With Harsh',
        technology: ['HTML, CSS, Tailwind CSS, React'],
        description: 'Plan With Harsh offers exciting travel plans with detailed descriptions and easy options to explore more or remove plans you’re not interested in.',
        features: [
            '"Show More" and "Show Less" buttons to expand or collapse travel plan details.',
            'Option to remove any travel plan the user is not interested in.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/Plan-with-harsh',
        websiteLink: 'https://planwithharsh.netlify.app/'
    },
    {
        id: '06',
        image: Password,
        title: 'SecurePass - Your Password Generator',
        technology: ['HTML, CSS, Tailwind CSS, JavaScript'],
        description: 'A password generator tool that helps users create strong and secure passwords.',
        features: [
            'Customizable Password Length: Users can choose the length of the password.',
            'Character Set Selection: Users can select the types of characters to include in the password.',
            'Copy to Clipboard: Easily copy the generated password to the clipboard.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/Password-Generator',
        websiteLink: 'https://harshvardhan32.github.io/Password-Generator/'
    },
    {
        id: '07',
        image: RandomGIF,
        title: 'Random Gifs Generator',
        technology: ['HTML, CSS, Tailwind CSS, React'],
        description: 'A simple web application that generates random GIFs.',
        features: [
            'Random GIF Generation: Fetches random GIFs.',
            'Search Functionality: Users can search for specific GIFs.',
            'Responsive Design: Accessible on various devices for convenience.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/Random-gifs',
        websiteLink: 'https://harshvardhan32.github.io/Random-gifs/'
    },
    {
        id: '08',
        image: Razorpay,
        title: 'Razorpay UI Clone',
        technology: ['HTML, CSS, Tailwind CSS'],
        description: 'A clone of the Razorpay UI that showcases the payment gateway features.',
        features: [],
        githubLink: 'https://github.com/Harshvardhan32/Razorpay_Clone',
        websiteLink: '#'
    },
    {
        id: '09',
        image: TicTacToe,
        title: 'TIC TAC TOE',
        technology: ['HTML, CSS, JavaScript'],
        description: 'A simple web application that allows users to play the classic game of Tic Tac Toe.',
        features: [
            'Two-player mode: Play against a friend.',
            'Responsive Design: Accessible on various devices for convenience.',
        ],
        githubLink: 'https://github.com/Harshvardhan32/TIC_TAC_TOE',
        websiteLink: 'https://harshvardhan32.github.io/TIC_TAC_TOE/'
    },
];

export default projectData;