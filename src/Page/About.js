import React from 'react';
import { FaCode, FaUsers, FaPaintBrush, FaCamera, FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt, FaBlog } from 'react-icons/fa';

const About = () => {
  const technicalSkills = [
    { name: 'Core Java', category: 'Technical Skills', icon: FaJava },
    { name: 'JavaScript', category: 'Technical Skills', icon: FaJs },
    { name: 'HTML', category: 'Technical Skills', icon: FaHtml5 },
    { name: 'CSS', category: 'Technical Skills', icon: FaCss3Alt },
    { name: 'ReactJS', category: 'Technical Skills', icon: FaReact },
    { name: 'Node.js & Express.js', category: 'Technical Skills', icon: FaNodeJs },
    { name: 'MongoDB', category: 'Technical Skills', icon: FaDatabase },
    { name: 'Git & GitHub', category: 'Technical Skills', icon: FaGitAlt },
    { name: 'Data Structures and Algorithms (DSA)', category: 'Technical Skills', icon: FaCode }
  ];

  const softSkills = [
    { name: 'Problem-Solving', category: 'Soft Skills', icon: FaUsers },
    { name: 'Communication', category: 'Soft Skills', icon: FaUsers },
    { name: 'Teamwork', category: 'Soft Skills', icon: FaUsers },
    { name: 'Adaptability', category: 'Soft Skills', icon: FaUsers }
  ];

  const interestSkills = [
    { name: 'MERN Stack', category: 'Field of Interest', icon: FaPaintBrush },
    { name: 'Frontend Development', category: 'Field of Interest', icon: FaPaintBrush },
    { name: 'Backend Development', category: 'Field of Interest', icon: FaPaintBrush },
    { name: 'UI/UX Design', category: 'Field of Interest', icon: FaPaintBrush }
  ];

  const hobbies = [
    { name: 'Photography', category: 'Hobbies', icon: FaCamera },
    { name: 'Blogging', category: 'Hobbies', icon: FaBlog },
    { name: 'Exploring New Technologies', category: 'Hobbies', icon: FaCamera }
  ];

  const categoryIcons = {
    'Technical Skills': FaCode,
    'Soft Skills': FaUsers,
    'Field of Interest': FaPaintBrush,
    'Hobbies': FaCamera
  };

  const renderSkillCards = (skills) => {
    return (
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon || categoryIcons[skill.category];
          return (
            <div key={index} className="bg-gray-200  dark:bg-gray-700 shadow-md rounded-lg p-4 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <div className="flex flex-col  items-center">
                {Icon && <Icon className="w-6 h-6 mr-2 text-black dark:text-white" />}
                <h2 className="text-lg font-semibold text-black dark:text-white">{skill.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">About Me</h1>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
          <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About</header>
          <p className="text-base text-gray-700 dark:text-gray-300 text-center">
            Hello! I'm Deepak Kumar, a MERN Stack Developer with a passion for crafting dynamic web applications. Beyond coding, I'm an avid nature photographer and blogger, dedicated to capturing the essence of our beautiful world through both code and camera lens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</header>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Persistent Martian Summer Internship Program 2023</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Jun 2023 - Dec 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Developed proficiency in Data Structures, DBMS, Basic Linux, and Java.</li>
                <li>Contributed to real-world projects and thrived in a collaborative, remote environment.</li>
                <li>Received mentorship from industry professionals.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Growth Manager at Preplnsta</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">May 2023 - Oct 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Facilitated strategic growth initiatives and executed marketing campaigns.</li>
                <li>Enhanced brand presence and engagement.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Virtual Internships at CISCO</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mar 2022 - Aug 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Gained experience in cloud computing, networking, and cybersecurity.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
            <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</header>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology (B.Tech) - Computer Science and Engineering</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">LNCT University, Bhopal (2020 - 2024)</p>
              <p className="text-sm">CGPA: 8.28</p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">12th (I.Sc)</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mahatma Gandhi Intermediate College, Mehsi (2018 - 2020)</p>
              <p className="text-sm">Percentage: 61%</p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">10th</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tirhut High School, Mehsi (2015 - 2017)</p>
              <p className="text-sm">Percentage: 67%</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
          <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</header>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Skills</h2>
            {renderSkillCards(technicalSkills)}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Soft Skills</h2>
            {renderSkillCards(softSkills)}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Field of Interest</h2>
            {renderSkillCards(interestSkills)}
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Hobbies</h2>
            {renderSkillCards(hobbies)}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
          <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Achievements</header>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Hackathon Winner</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Secured 1st place in the national level hackathon on Web Development organized by TechX, 2023.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Certifications</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              <li>Certified Full Stack Web Developer - Coursera, 2023</li>
              <li>Java Programming Certification - Oracle, 2022</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Publications</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Published articles on Medium covering topics related to React.js and UI/UX Design.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
