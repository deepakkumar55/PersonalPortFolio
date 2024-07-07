import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaCodeBranch } from 'react-icons/fa';

// Function to get default color and style for languages
const getLanguageStyle = (language) => {
    switch (language) {
        case "JavaScript":
            return { color: "#f0db4f", bgColor: "#323330" };
        case "HTML":
            return { color: "#e34c26", bgColor: "#f06529" };
        case "CSS":
            return { color: "#563d7c", bgColor: "#563d7c" };
        default:
            return { color: "#333333", bgColor: "#eeeeee" };
    }
};

const Github = () => {
    const [repos, setRepos] = useState([]);

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
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 lg:px-40 sm:px-6">
            <h1 className="text-4xl font-bold text-center text-[#002057] dark:text-[#e0e0e0] mb-8">My GitHub Repositories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {repos.map(repo => (
                    <div
                        key={repo.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                    >
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-[#002057] dark:text-[#e0e0e0]">{repo.name}</h2>
                                <span className="text-gray-500 dark:text-gray-400 text-sm">{repo.private ? 'Private' : 'Public'}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{repo.description}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-gray-700 dark:text-gray-300 flex items-center mr-4">
                                    <FaStar className="mr-1" /> {repo.stargazers_count}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300 flex items-center mr-4">
                                    <FaCodeBranch className="mr-1" /> {repo.forks_count}
                                </span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    View on GitHub
                                </a>
                            </div>
                            <div className="flex flex-wrap mt-2">
                                {repo.topics.map((topic, index) => (
                                    <span key={index} className="text-xs font-medium mr-2 mb-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            {repo.language && (
                                <div className="flex items-center mt-2">
                                    <span
                                        className="rounded-full px-2 py-1 text-xs font-medium"
                                        style={{
                                            backgroundColor: getLanguageStyle(repo.language).bgColor,
                                            color: "#ffffff",
                                        }}
                                    >
                                        {repo.language}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

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
