import React from 'react';

const About = () => {
  const technicalSkills = [
    { name: 'Core Java', category: 'Technical Skills' },
    { name: 'JavaScript', category: 'Technical Skills' },
    { name: 'HTML', category: 'Technical Skills' },
    { name: 'CSS', category: 'Technical Skills' },
    { name: 'ReactJS', category: 'Technical Skills' },
    { name: 'Node.js & Express.js', category: 'Technical Skills' },
    { name: 'MongoDB', category: 'Technical Skills' },
    { name: 'Git & GitHub', category: 'Technical Skills' },
    { name: 'Data Structures and Algorithms (DSA)', category: 'Technical Skills' }
  ];

  const softSkills = [
    { name: 'Problem-Solving', category: 'Soft Skills' },
    { name: 'Communication', category: 'Soft Skills' },
    { name: 'Teamwork', category: 'Soft Skills' },
    { name: 'Adaptability', category: 'Soft Skills' }
  ];

  const interestSkills = [
    { name: 'MERN Stack', category: 'Field of Interest' },
    { name: 'Frontend Development', category: 'Field of Interest' },
    { name: 'Backend Development', category: 'Field of Interest' },
    { name: 'UI/UX Design', category: 'Field of Interest' }
  ];

  const hobbies = [
    { name: 'Photography', category: 'Hobbies' },
    { name: 'Blogging', category: 'Hobbies' },
    { name: 'Exploring New Technologies', category: 'Hobbies' }
  ];

  const renderSkillCards = (skills) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{skill.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{skill.category}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">About Me</h1>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
          <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About</header>
          <p className="text-base text-gray-700 dark:text-gray-300">
          Hello! I'm Deepak Kumar, a MERN Stack Developer with a passion for crafting dynamic web applications. Beyond coding, I'm an avid nature photographer and blogger, dedicated to capturing the essence of our beautiful world through both code and camera lens.


          </p>
        </div>

        {/* Experience and Education Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
            <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Experience</header>

            {/* Persistent Martian Summer Internship */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Persistent Martian Summer Internship Program 2023</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Jun 2023 - Dec 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Developed proficiency in Data Structures, DBMS, Basic Linux, and Java.</li>
                <li>Contributed to real-world projects and thrived in a collaborative, remote environment.</li>
                <li>Received mentorship from industry professionals.</li>
              </ul>
            </div>

            {/* Growth Manager at Preplnsta */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Growth Manager at Preplnsta</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">May 2023 - Oct 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Facilitated strategic growth initiatives and executed marketing campaigns.</li>
                <li>Enhanced brand presence and engagement.</li>
              </ul>
            </div>

            {/* Virtual internships at CISCO */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Virtual Internships at CISCO</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Mar 2022 - Aug 2023</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                <li>Gained experience in cloud computing, networking, and cybersecurity.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
            <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Education</header>

            {/* Bachelor of Technology */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology (B.Tech) - Computer Science and Engineering</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">LNCT University, Bhopal (2020 - 2024)</p>
              <p className="text-sm">CGPA: 8.28</p>
            </div>

            {/* 12th (I.Sc) */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">12th (I.Sc)</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mahatma Gandhi Intermediate College, Mehsi (2018 - 2020)</p>
              <p className="text-sm">Percentage: 61%</p>
            </div>

            {/* 10th */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">10th</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tirhut High School, Mehsi (2015 - 2017)</p>
              <p className="text-sm">Percentage: 67%</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
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
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-12 transition transform hover:-translate-y-1 hover:scale-105 duration-300">
          <header className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Achievements</header>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">HackerRank</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">5 Star in Java and JavaScript</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Top-rated in Java and JavaScript on HackerRank.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">LeetCode</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Completed 500 coding challenges</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Completed 500 coding challenges on LeetCode.</p>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Maintained a 50-day streak of daily contributions</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Maintained a 50-day streak of daily GitHub contributions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
