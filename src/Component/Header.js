import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      <header className="bg-white dark:bg-gray-900 shadow-md dark:shadow-lg fixed top-0 left-0 right-0 z-50">
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
            <Link
              to="/github"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md ml-4 transition duration-300 ease-in-out flex items-center space-x-2"
            >
              <span>Github</span>
              <FaGithub className="text-xl" />
            </Link>
          </div>
        </div>
      </header>
      <main className="pt-4 pb-16">
        {/* Your main content goes here */}
      </main>
      <MobileMenu navItems={navItems} location={location} />
    </>
  );
};

const NavLink = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-3 py-2 transition duration-300 ${
      isActive ? 'text-blue-500 bg-gray-200 dark:bg-gray-700' : ''
    }`}
  >
    {children}
  </Link>
);

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
  >
    {darkMode ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
  </button>
);

const MobileMenu = ({ navItems, location }) => (
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-900 p-4 dark:p-4 flex justify-around shadow-md z-50">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className={`flex flex-col text-2xl items-center space-y-1 p-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300 relative ${
          location.pathname === item.path ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white' : 'text-gray-800 dark:text-gray-300'
        }`}
      >
        {item.icon}
        {/* Hide the text on mobile screens */}
        <span className="text-xs hidden md:inline">{item.name}</span>
        {location.pathname === item.path && (
          <div className="w-8 h-1 bg-blue-500 rounded-full absolute bottom-0 transform translate-y-2"></div>
        )}
      </Link>
    ))}
  </nav>
);

export default Header;
