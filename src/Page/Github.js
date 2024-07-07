import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaCodeBranch } from 'react-icons/fa';

const Github = () => {
    const [repos, setRepos] = useState([]);
    const [selectedRepo, setSelectedRepo] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get("https://api.github.com/users/deepakkumar55/repos?sort=updated");
                setRepos(response.data);
            } catch (error) {
                console.error("Error fetching repositories:", error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className=" bg-gray-50 dark:bg-gray-900 min-h-screen py-12 lg:px-40 sm:px-6">
            <h1 className="text-4xl font-bold text-center text-[#002057] dark:text-[#e0e0e0] mb-8">My GitHub Repositories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {repos.map(repo => (
                    <div
                        key={repo.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                        onClick={() => setSelectedRepo(repo)}
                    >
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-[#002057] dark:text-[#e0e0e0]">{repo.name}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{repo.description}</p>
                        </div>
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700">
                            <span className="text-gray-700 dark:text-gray-300 flex items-center">
                                <FaStar className="mr-1" /> {repo.stargazers_count}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 flex items-center">
                                <FaCodeBranch className="mr-1" /> {repo.forks_count}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedRepo && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md relative">
                        <button
                            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
                            onClick={() => setSelectedRepo(null)}
                        >
                            Close
                        </button>
                        <h2 className="text-3xl font-semibold text-[#002057] dark:text-[#e0e0e0] mb-4">{selectedRepo.name}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{selectedRepo.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300 flex items-center">
                                <FaStar className="mr-1" /> {selectedRepo.stargazers_count}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300 flex items-center">
                                <FaCodeBranch className="mr-1" /> {selectedRepo.forks_count}
                            </span>
                        </div>
                        <div className="mt-4">
                            <a
                                href={selectedRepo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-6 py-2 rounded-full transition duration-500 text-white bg-blue-600 shadow-md hover:bg-blue-800"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* GitHub Stats */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <img
                    align="left"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=deepakkumar55&show_icons=true&locale=en&layout=compact&theme=tokyonight"
                    alt="Top Languages"
                    className="w-full rounded-lg shadow-md overflow-hidden"
                />
                <img
                    align="center"
                    src="https://github-readme-stats.vercel.app/api?username=deepakkumar55&show_icons=true&locale=en&theme=tokyonight"
                    alt="GitHub Stats"
                    className="w-full rounded-lg shadow-md overflow-hidden"
                />
                <img
                    align="center"
                    src="https://github-readme-streak-stats.herokuapp.com/?user=deepakkumar55&theme=tokyonight"
                    alt="GitHub Streak"
                    className="w-full rounded-lg shadow-md overflow-hidden"
                />
                <img
                    align="center"
                    src="https://github-contributor-stats.vercel.app/api?username=deepakkumar55&limit=5&theme=dark&combine_all_yearly_contributions=true"
                    alt="GitHub Contributors"
                    className="w-full rounded-lg shadow-md overflow-hidden"
                />
                <img
                    align="center"
                    src="https://github-readme-stats-taupe-two.vercel.app/api/wakatime?username=raajaryan&hide_title=true&hide_border=true&langs_count=7&bg_color=1A1B27&text_color=fff&title_color=79ff97&icon_color=777&line_height=27"
                    alt="Wakatime Stats"
                    className="w-full rounded-lg shadow-md overflow-hidden"
                />
            </div>
        </div>
    );
}

export default Github;
