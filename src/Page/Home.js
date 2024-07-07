import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaInstagram, FaDev, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profilePhoto from '../Image/profile-photo.jpg';

const Home = () => {
    const roles = ["Frontend Developer", "Blogger", "Photographer", "Backend Developer", "MERN Stack Developer", "Freelancer"];
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

            {/* Main Content */}
            <div className="flex-1 z-10 flex flex-col items-center md:items-center justify-center text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#002057] dark:text-[#e0e0e0]">
                    <span className="text-3xl block">Hi There,</span>
                    I'm Deepak <span className="text-[#ff7b00]">Kumar</span>
                </h2>
                <p className={`text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold py-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    I'm a <span className="text-red-700 dark:text-red-400">{roles[currentRole]}</span>
                </p>

                {/* Social Links */}
                <div className="mt-2 flex justify-center md:justify-start space-x-4">
                    <SocialLink
                        href="https://www.linkedin.com/in/raajaryan/"
                        ariaLabel="LinkedIn"
                        icon={<FaLinkedin />}
                        bgColor="#09011b"
                        hoverBgColor="#0685da"
                    />
                    <SocialLink
                        href="https://github.com/deepakkumar55"
                        ariaLabel="GitHub"
                        icon={<FaGithub />}
                        bgColor="#09011b"
                        hoverBgColor="#0e0e0e"
                    />
                    <SocialLink
                        href="https://twitter.com/dk_raajaryan"
                        ariaLabel="Twitter"
                        icon={<FaTwitter />}
                        bgColor="#09011b"
                        hoverBgColor="#00aced"
                    />
                    <SocialLink
                        href="https://t.me/RaAj_Aryan/"
                        ariaLabel="Telegram"
                        icon={<FaTelegramPlane />}
                        bgColor="#09011b"
                        hoverBgColor="#2683f4"
                    />
                    <SocialLink
                        href="https://www.instagram.com/_nature__editing"
                        ariaLabel="Instagram"
                        icon={<FaInstagram />}
                        bgColor="#09011b"
                        hoverBgColor="#ee00da"
                    />
                    <SocialLink
                        href="https://dev.to/raajaryan"
                        ariaLabel="Dev"
                        icon={<FaDev />}
                        bgColor="#09011b"
                        hoverBgColor="#070707"
                    />
                </div>

                {/* Buttons */}
                <div className="mt-8 flex space-x-4">
                    <a
                        href="https://drive.google.com/file/d/1ahyUqDZnwApHfytQm9lkHJ9AlYaWu5Vn/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 rounded-full transition duration-500 text-white bg-green-600 shadow-md hover:bg-green-800"
                    >
                        <span className="font-bold text-xl tracking-wide">Download Resume</span>
                    </a>
                    <Link
                        to="/contact"
                        className="inline-block px-6 py-2 rounded-full transition duration-500 text-white bg-blue-600 shadow-md hover:bg-blue-800 flex items-center space-x-2"
                    >
                        <span className="font-bold text-1xl tracking-wide">Hire Me</span>
                        <FaUser className="text-xl" />
                    </Link>
                </div>
            </div>

            {/* Profile Photo */}
            <div className="flex-1 z-10 mt-8 md:mt-0">
                <img
                    draggable="false"
                    className="w-full lg:w-[75%] mx-auto md:ml-24 rounded-[9%] shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-lg"
                    src={profilePhoto}
                    alt="Profile"
                />
            </div>
        </div>
    );
}

const SocialLink = ({ href, ariaLabel, icon, bgColor, hoverBgColor }) => (
    <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-2xl leading-11 text-black dark:text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 bg-${bgColor} hover:bg-${hoverBgColor} hover:text-white`}
    >
        {icon}
    </a>
);

export default Home;
