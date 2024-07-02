import React, { useState } from 'react';
import { Photo } from '../Image/Photos';

const Photos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 12; // Number of photos per page

  // Logic to paginate photo array
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = Photo.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Photos
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentPhotos.map((photo) => (
            <div key={photo.id} className="flex flex-col items-center">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="rounded-lg h-full w-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {/* Pagination controls */}
        <div className="flex pb-24 justify-center items-center mt-6">
          {[...Array(Math.ceil(Photo.length / photosPerPage)).keys()].map((number) => (
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

export default Photos;
