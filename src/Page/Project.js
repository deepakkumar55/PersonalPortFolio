import React, { useState, useMemo } from 'react';
import { projectlist } from '../Image/Project';

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;

  const currentProjects = useMemo(() => projectlist.slice(indexOfFirstProject, indexOfLastProject), [currentPage, projectsPerPage]);

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

        <div className="flex pb-24 lg:pb-0 justify-center items-center mt-6">
          {[...Array(Math.ceil(projectlist.length / projectsPerPage)).keys()].map((number) => (
            <button 
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === number + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-800'
              } focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2`}
              aria-current={currentPage === number + 1 ? 'page' : undefined}
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
