import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaCamera, FaBlog, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/about', name: 'About', icon: <FaUser /> },
    { path: '/project', name: 'Project', icon: <FaProjectDiagram /> },
    { path: '/photos', name: 'Photos', icon: <FaCamera /> },
    { path: '/blog', name: 'Blog', icon: <FaBlog /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link to="/" className="text-3xl font-extrabold text-gray-800 dark:text-white uppercase tracking-wide">
          <span className="text-blue-500">D</span>eepak
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <NavLink key={index} to={item.path} isActive={location.pathname === item.path}>
                {item.icon} <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}
          </nav>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <MenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} navItems={navItems} closeMenu={closeMenu} />
    </header>
  );
};

const NavLink = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={`flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full px-3 py-2 transition duration-300 ${isActive ? 'text-blue-500 bg-blue-100 dark:bg-blue-900' : ''}`}
  >
    {children}
  </Link>
);

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none"
  >
    {darkMode ? (
      <FaMoon className="w-6 h-6" />
    ) : (
      <FaSun className="w-6 h-6" />
    )}
  </button>
);

const MenuToggle = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white focus:outline-none md:hidden"
  >
    {isOpen ? (
      <FaTimes className="w-6 h-6" />
    ) : (
      <FaBars className="w-6 h-6" />
    )}
  </button>
);

const MobileMenu = ({ isOpen, navItems, closeMenu }) => (
  isOpen && (
    <div className="md:hidden bg-white dark:bg-gray-800">
      {navItems.map((item, index) => (
        <NavLink key={index} to={item.path} isActive={false} onClick={closeMenu}>
          {item.icon} <span className="ml-2">{item.name}</span>
        </NavLink>
      ))}
    </div>
  )
);

export default Header;
