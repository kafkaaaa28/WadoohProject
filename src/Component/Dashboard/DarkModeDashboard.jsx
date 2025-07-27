import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex items-center h-8 p-2 mr-5 text-lg border-solid hover:bg-white dark:text-[#80A794] hover:text-black dark:bg-white text-white bg-[#80A794] dark:hover:text-white rounded-lg dark:hover:bg-[#568A69] hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default DarkModeToggle;
