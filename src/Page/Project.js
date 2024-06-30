import React, { useState } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce platform built with MERN stack and integrated payment gateways.',
      image: 'https://via.placeholder.com/150',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/ecommerce',
      demo: 'https://example.com/ecommerce'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A social media application allowing users to share posts, follow others, and interact with content.',
      image: 'https://via.placeholder.com/150',
      technologies: ['React', 'Express', 'MySQL'],
      github: 'https://github.com/example/social-media',
      demo: 'https://example.com/social-media'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A task management system for teams to assign tasks, track progress, and manage deadlines.',
      image: 'https://via.placeholder.com/150',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/example/task-management',
      demo: 'https://example.com/task-management'
    }
    // Add more projects as needed
  ]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project) => (
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
      </div>
    </div>
  );
};

export default Project;
