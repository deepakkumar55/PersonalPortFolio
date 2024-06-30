import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaInstagram, FaDev } from 'react-icons/fa';
import profilePhoto from '../Image/profile-photo.jpg';

const Home = () => {
    const roles = ["Frontend Development", "Blogger", "Photographer", "Backend Development", "MERN Stack Development"];
    const [currentRole, setCurrentRole] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRole(prevRole => (prevRole + 1) % roles.length);
                setFade(true);
            }, 500); // Duration of fade-out
        }, 2500); // Duration of each role display including animation
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 bg-gray-50 dark:bg-gray-900 py-12 px-6">
            {/* Background Particles */}
            <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

            <div className="flex-1 z-10 flex flex-col items-center md:items-center justify-center text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#002057] dark:text-[#e0e0e0]">
                    <span className="text-3xl">Hi There,</span> <br /> I'm Deepak <span className="text-[#ff7b00]">Kumar</span>
                </h2>
                <p className={`text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold py-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    I am into <span className="text-red-700 dark:text-red-400">{roles[currentRole]}</span>
                </p>

                <div className="mt-12 flex justify-center md:justify-start space-x-4">
                    <a
                        href="https://www.linkedin.com/in/raajaryan/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#0685da]"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/deepakkumar55"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#0e0e0e]"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com/dk_raajaryan"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#00aced]"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://t.me/"
                        aria-label="Telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#2683f4]"
                    >
                        <FaTelegramPlane />
                    </a>
                    <a
                        href="https://www.instagram.com/_nature__editing"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#ee00da]"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://dev.to/raajaryan"
                        aria-label="Dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl leading-11 text-[#00d9ff] bg-[#09011b] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:text-white hover:bg-[#070707]"
                    >
                        <FaDev />
                    </a>
                </div>

                {/* Download Resume Button */}
                <div id="about" className="mt-8">
                    <a
                        href="https://drive.google.com/file/d/1ahyUqDZnwApHfytQm9lkHJ9AlYaWu5Vn/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-full transition duration-500 text-white bg-green-600 shadow-md hover:bg-green-800"
                    >
                        <span className="font-bold text-xl tracking-wide">Download Resume</span>
                    </a>
                </div>
            </div>

            {/* Profile Photo */}
            <div className="flex-1 z-10 mt-8 md:mt-0">
                <img
                    draggable="false"
                    className="w-[75%] mx-auto md:ml-24 rounded-full shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-lg"
                    src={profilePhoto}
                    alt="Profile"
                />
            </div>
        </div>
    );
}

export default Home;
