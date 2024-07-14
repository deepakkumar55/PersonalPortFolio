import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaInstagram, FaDev, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import profilePhoto from '../Image/profile-photo.jpg';

const roles = ["Frontend Developer", "Blogger", "Photographer", "Backend Developer", "MERN Stack Developer", "Freelancer"];

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentRole(prevRole => (prevRole + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-6 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
            {/* Background Particles */}
            <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

            {/* Main Content */}
            <div className="flex-1 z-10 flex flex-col items-center md:items-center justify-center text-center md:text-left space-y-6">
                <motion.h2 
                    className="text-4xl md:text-6xl font-extrabold text-[#002057] dark:text-[#e0e0e0]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-3xl block">Hi There,</span>
                    I'm Deepak <span className="text-[#ff7b00]">Kumar</span>
                </motion.h2>
                <motion.p 
                    className={clsx("text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-semibold py-4 transition-opacity duration-500", { 'opacity-100': fade, 'opacity-0': !fade })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: fade ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    I'm a <span className="text-red-700 dark:text-red-400">{roles[currentRole]}</span>
                </motion.p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                    <SocialLink href="https://www.linkedin.com/in/raajaryan/" ariaLabel="LinkedIn" icon={<FaLinkedin />} />
                    <SocialLink href="https://github.com/deepakkumar55" ariaLabel="GitHub" icon={<FaGithub />} />
                    <SocialLink href="https://twitter.com/dk_raajaryan" ariaLabel="Twitter" icon={<FaTwitter />} />
                    <SocialLink href="https://t.me/RaAj_Aryan/" ariaLabel="Telegram" icon={<FaTelegramPlane />} />
                    <SocialLink href="https://www.instagram.com/_nature__editing" ariaLabel="Instagram" icon={<FaInstagram />} />
                    <SocialLink href="https://dev.to/raajaryan" ariaLabel="Dev" icon={<FaDev />} />
                </div>

                {/* Buttons */}
                <div className="mt-8 flex space-x-4">
                    <motion.a
                        href="https://drive.google.com/file/d/1ahyUqDZnwApHfytQm9lkHJ9AlYaWu5Vn/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 rounded-full transition duration-500 text-white bg-green-600 shadow-md hover:bg-green-800"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="font-bold text-xl tracking-wide">Download Resume</span>
                    </motion.a>
                    <Link
                        to="/contact"
                        className="inline-block px-6 py-2 rounded-full transition duration-500 text-white bg-blue-600 shadow-md hover:bg-blue-800 flex items-center space-x-2"
                    >
                        <motion.span className="font-bold text-1xl tracking-wide" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Hire Me</motion.span>
                        <FaUser className="text-xl" />
                    </Link>
                </div>
            </div>

            {/* Profile Photo */}
            <motion.div
                className="flex-1 z-10 mt-8 md:mt-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    draggable="false"
                    className="w-full lg:w-[75%] mx-auto md:ml-24 rounded-[9%] shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-lg"
                    src={profilePhoto}
                    alt="Profile"
                />
            </motion.div>
        </div>
    );
}

const SocialLink = ({ href, ariaLabel, icon }) => (
    <motion.a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(clsx("text-2xl leading-11 text-white dark:text-black w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 bg-[#09011b] dark:bg-[#aafcff] hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-black"))}
        whileHover={{ scale: 1.2 }}
    >
        {icon}
    </motion.a>
);

export default Home;
