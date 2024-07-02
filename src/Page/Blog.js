import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Step-by-Step Instructions to Create an Expense Tracker',
      description: 'Project:- 12/500 Expense Tracker project. Description The Expense Tracker project is a user-friendly web application designed to help individuals...',
      date: 'Jun 28, 2024',
      views: 31,
      URL: 'https://raajaryan.tech/step-by-step-instructions-to-create-an-expense-tracker',
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1719555812245/f160dcb1-1be6-4848-a68c-9bd145515e63.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Comprehensive React.js Cheatsheet for Developers',
      description: 'React.js has become a cornerstone in modern web development for building dynamic and high-performance web applications. This comprehensive cheatsheet...',
      date: 'Jun 28, 2024',
      views: 30,
      URL: 'https://raajaryan.tech/comprehensive-reactjs-cheatsheet-for-developers',
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1719537723985/893e7a4e-e118-4ac1-9396-95fad6eb91a5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Understanding State Management in React: Differences Between Redux, Context API, and Recoil',
      description: 'Managing state is a crucial aspect of building dynamic and responsive web applications. In the React ecosystem, several state management solutions are...',
      date: 'Jun 27, 2024',
      views: 9,
      URL: 'https://raajaryan.tech/understanding-state-management-in-react-differences-between-redux-context-api-and-recoil',
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1719493994169/31f87ea1-6cc0-40e2-be97-e8ae6093f03f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp', // Replace with actual image URL
    },
    {
      "id": 4,
      "title": "Becoming a 1% Better MERN Stack Developer Every Day",
      "description": "As a MERN stack developer, continuous improvement is crucial to staying ahead in the fast-paced tech industry. Small, consistent efforts...",
      "date": "Jun 26, 2024",
      "views": 91,
      "URL": "https://raajaryan.tech/becoming-a-1-better-mern-stack-developer-every-day",
      "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1719379025824/076d3b78-13eb-4407-b4a9-2f57f64647a6.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    },
    {
      "id": 5,
      "title": "Ultimate Guide to Mastering JavaScript Object Methods",
      "description": "JavaScript is a versatile language, and objects are a fundamental part of its architecture. Mastering object methods is crucial for any JavaScript...",
      "date": "Jun 26, 2024",
      "views": 18,
      "URL": "https://raajaryan.tech/ultimate-guide-to-mastering-javascript-object-methods",
      "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1719366463080/6fd54f54-6f1d-4837-9a5b-ea8ba2b9ba1e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    },
    {
      id: 6,
      title: 'Ultimate Guide to Mastering JavaScript Array Methods',
      description: 'Arrays are fundamental data structures in JavaScript that allow us to store and manipulate collections of data. JavaScript provides a plethora of...',
      date: 'Jun 26, 2024',
      views: 27,
      URL: 'https://raajaryan.tech/javascript-array-method',
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1719365650839/dea5c364-d70e-4a4d-a31b-a1d952a7cfda.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp', 
    },
    // Add more posts as needed
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); // Number of posts per page

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <Link key={post.id} to={post.URL} target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm font-medium text-gray-500">{post.date}</p>
                    <p className="text-sm text-gray-500">{post.views} views</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex pb-24 lg:pb-0 justify-center items-center mt-6">
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map((number) => (
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

export default Blog;
