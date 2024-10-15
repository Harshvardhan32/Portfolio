import React from 'react';
import { ReactTyped } from 'react-typed';

const TypingEffect = () => {
    return (
        <ReactTyped
            strings={[
                'Full-Stack Web Development.',
                'MERN Stack Development.',
                'C Programming.',
                'Java Programming.',
                'React App Development.',
                'JavaScript Developement.',
                'Frontend Development.',
                'Backend Development.',
            ]}
            typeSpeed={40}
            backSpeed={50}
            // attr="placeholder"
            loop
        />
    );
};

export default TypingEffect;