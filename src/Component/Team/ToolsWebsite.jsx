import React, { useState, useEffect } from 'react';
import { FaGithub, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiPostman, SiMysql, SiTailwindcss, SiVercel, SiRailway } from 'react-icons/si';

const tools = [
  {
    name: 'GitHub',
    tect: 'Repository',
    icon: <FaGithub />,
    color: '#181717',
    url: 'https://github.com/',
    bg: 'bg-[#f5f5f5]',
  },
  {
    name: 'React',
    tect: 'Front-End',
    icon: <FaReact />,
    color: '#61DAFB',
    url: 'https://reactjs.org/',
    bg: 'bg-[#e6f7ff]',
  },
  {
    name: 'Express',
    tect: 'Back-End',
    icon: <SiExpress />,
    color: '#000000',
    url: 'https://expressjs.com/',
    bg: 'bg-gray-100',
  },
  {
    name: 'Node.js',
    tect: 'Back-End',
    icon: <FaNodeJs />,
    color: '#3C873A',
    url: 'https://nodejs.org/',
    bg: 'bg-green-50',
  },
  {
    name: 'Postman',
    tect: 'API Tool',
    icon: <SiPostman />,
    color: '#FF6C37',
    url: 'https://www.postman.com/',
    bg: 'bg-orange-50',
  },
  {
    name: 'Railway',
    tect: 'Deployment',
    icon: <SiRailway />,
    color: '#6F4FF2',
    url: 'https://railway.app/',
    bg: 'bg-violet-50',
  },
  {
    name: 'MySQL',
    tect: 'Database',
    icon: <SiMysql />,
    color: '#00758F',
    url: 'https://www.mysql.com/',
    bg: 'bg-blue-50',
  },
  {
    name: 'Vercel',
    tect: 'Deployment',
    icon: <SiVercel />,
    color: '#000000',
    url: 'https://vercel.com/',
    bg: 'bg-gray-100',
  },
  {
    name: 'Tailwind CSS',
    tect: 'Styling',
    icon: <SiTailwindcss />,
    color: '#38BDF8',
    url: 'https://tailwindcss.com/',
    bg: 'bg-sky-50',
  },
];

const ToolsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="min-h-screen  py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800 dark:text-white">Tools Website</h2>
      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 
          p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
          flex flex-col gap-4 justify-center items-center text-center hover:ring-2 hover:ring-offset-2 hover:ring-[var(--tool-color)]"
              style={{ '--tool-color': tool.color }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${tool.color}33, transparent 70%)`,
                  color: tool.color,
                }}
              >
                {tool.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{tool.tect}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-10 justify-items-center">
          {tools.map((tool) => (
            <a key={tool.name} href={tool.url} class="book">
              <p>
                <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }}>
                  {tool.icon}
                </div>
                <p className="text-sm  text-gray-800 font-bold group-hover:text-black">{tool.name}</p>
              </p>
              <div class="cover font-bold bg-gradient-to-t form-white to-green-400">
                <p>{tool.tect}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsPage;
