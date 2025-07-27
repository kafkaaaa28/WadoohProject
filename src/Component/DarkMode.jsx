import React, { useEffect } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';

function DarkModeToggle({ setDarkMode, darkMode }) {
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = storedDarkMode === 'true' || (storedDarkMode === null && prefersDark);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, [setDarkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-16 h-8 bg-gray-300 dark:bg-[#568A69] rounded-full cursor-pointer transition-colors"
      role="switch"
      aria-checked={darkMode}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleDarkMode()}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center text-[#568A69] transition-all duration-300 transform 
        ${darkMode ? 'translate-x-8' : 'translate-x-0'} bg-white`}
      >
        {darkMode ? <MdOutlineLightMode size={16} /> : <FaLeaf size={14} />}
      </div>
    </div>
  );
}

export default DarkModeToggle;
