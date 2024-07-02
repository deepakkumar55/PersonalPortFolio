import React, { useState } from 'react';

// Dummy data for demonstration
const dummyProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce platform built with MERN stack and integrated payment gateways.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/example/ecommerce',
    demo: 'https://example.com/ecommerce'
  },
  {
    id: 2,
    title: 'Social Media App',
    description: 'A social media application allowing users to share posts, follow others, and interact with content.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Express', 'MySQL'],
    github: 'https://github.com/example/social-media',
    demo: 'https://example.com/social-media'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A task management system for teams to assign tasks, track progress, and manage deadlines.',
    image: 'https://via.placeholder.com/300',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/example/task-management',
    demo: 'https://example.com/task-management'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and experience.',
    image: 'https://via.placeholder.com/300',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/example/portfolio',
    demo: 'https://example.com/portfolio'
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'An application to display current weather conditions and forecasts.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'OpenWeatherMap API'],
    github: 'https://github.com/example/weather-app',
    demo: 'https://example.com/weather-app'
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A blogging platform for creating and sharing articles.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/example/blog-platform',
    demo: 'https://example.com/blog-platform'
  },
  {
    id: 7,
    title: 'Online Marketplace',
    description: 'An online marketplace for buying and selling goods.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/example/online-marketplace',
    demo: 'https://example.com/online-marketplace'
  },
  {
    id: 8,
    title: 'Music Player',
    description: 'A web-based music player with playlist management and audio controls.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'HTML5 Audio API'],
    github: 'https://github.com/example/music-player',
    demo: 'https://example.com/music-player'
  },
  {
    id: 9,
    title: 'Recipe App',
    description: 'An application for browsing and saving recipes.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Edamam API'],
    github: 'https://github.com/example/recipe-app',
    demo: 'https://example.com/recipe-app'
  },
  {
    id: 10,
    title: 'Job Board',
    description: 'A job board for posting and applying to job listings.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/example/job-board',
    demo: 'https://example.com/job-board'
  },
  {
    id: 11,
    title: 'Chat Application',
    description: 'A real-time chat application for communicating with others.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Socket.io', 'Node.js'],
    github: 'https://github.com/example/chat-app',
    demo: 'https://example.com/chat-app'
  },
  {
    id: 12,
    title: 'To-Do List',
    description: 'A simple to-do list application with task management features.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'LocalStorage API'],
    github: 'https://github.com/example/todo-list',
    demo: 'https://example.com/todo-list'
  },
  {
    id: 13,
    title: 'Event Management System',
    description: 'A system for managing events, bookings, and attendees.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Firebase', 'Node.js'],
    github: 'https://github.com/example/event-management',
    demo: 'https://example.com/event-management'
  },
  {
    id: 14,
    title: 'Survey Tool',
    description: 'An online survey tool for creating and analyzing surveys.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'SurveyJS'],
    github: 'https://github.com/example/survey-tool',
    demo: 'https://example.com/survey-tool'
  },
  {
    id: 15,
    title: 'Video Streaming App',
    description: 'A video streaming application for watching and sharing videos.',
    image: 'https://via.placeholder.com/300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/example/video-streaming',
    demo: 'https://example.com/video-streaming'
  },
];

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Number of projects per page

  // Logic to paginate projects array
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = dummyProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {currentProjects.map((project) => (
            <div key={project.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
              <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm text-gray-800 dark:text-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination controls */}
        <div className="flex pb-24 justify-center items-center mt-6">
          {[...Array(Math.ceil(dummyProjects.length / projectsPerPage)).keys()].map((number) => (
            <button 
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === number + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
