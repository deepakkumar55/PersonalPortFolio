import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaCode,
  FaCamera,
  FaBlog,
  FaSun,
  FaMoon,
  FaGithub
} from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/about', name: 'About', icon: <FaUser /> },
    { path: '/project', name: 'Project', icon: <FaCode /> },
    { path: '/photos', name: 'Photos', icon: <FaCamera /> },
    { path: '/blog', name: 'Blog', icon: <FaBlog /> },
  ];

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center p-5">
          <Link to="/" className="text-3xl font-extrabold text-gray-800 dark:text-white uppercase tracking-wide">
            <span className="text-red-500 dark:text-blue-500">D</span>eepak
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
                  {item.icon} <span className="ml-2 hidden md:inline">{item.name}</span>
                </NavLink>
              ))}
            </nav>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <motion.a
              href="https://github.com/deepakkumar55"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GitHub</span>
              <FaGithub className="text-xl" />
            </motion.a>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {/* Your main content goes here */}
      </main>
      <MobileMenu navItems={navItems} location={location} />
    </>
  );
};

const NavLink = ({ to, isActive, children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className={`flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-3 py-2 transition duration-300 ${
        isActive ? 'text-blue-500 bg-gray-200 dark:bg-gray-700' : ''
      }`}
    >
      {children}
    </Link>
  </motion.div>
);

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <motion.button
    onClick={toggleDarkMode}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {darkMode ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
  </motion.button>
);

const MobileMenu = ({ navItems, location }) => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-900 p-4 flex justify-around shadow-md z-50">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`flex flex-col items-center text-2xl space-y-1 p-4 rounded-full transition duration-300 ${
          location.pathname === item.path ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white' : 'text-gray-800 dark:text-gray-300'
        }`}
      >
        {item.icon}
        <span className="text-xs hidden md:inline">{item.name}</span>
        {location.pathname === item.path && (
          <motion.div
            className="w-8 h-1 bg-blue-500 rounded-full absolute bottom-0 transform translate-y-2"
            layoutId="underline"
          />
        )}
      </Link>
    ))}
  </nav>
);

export default Header;
