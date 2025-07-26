import React from 'react';
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800">🔧 Tools & Technologies Used</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {tools.map((tool) => (
          <a key={tool.name} href={tool.url} class="book">
            <p>
              <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <p className="text-sm font-medium text-gray-800 group-hover:text-black">{tool.name}</p>
            </p>
            <div class="cover bg-gradient-to-t form-white to-green-400">
              <p>{tool.tect}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
