import React, { useState, useEffect } from 'react';
import LanYardSepa from './LanYardSepa';
import { FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';

import TrueFocus from '../TrueFokus';
import Rotating from '../Rotating';
const SepaPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [Mobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    setTimeout(() => setShowContent(true), 500);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`min-h-screen lg:h-[70vh] dark:bg-[#8FB49F] bg-white flex flex-col md:flex-row items-stretch justify-center px-6 py-12 gap-6 transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {!Mobile ? (
        <>
          <div className="w-full md:w-1/2 p-8 rounded-xl flex flex-col justify-center">
            <div className="dark:text-white">
              <TrueFocus sentence="Sheva Agung" manualMode={false} blurAmount={5} borderColor="green" animationDuration={2} pauseBetweenAnimations={1} />
            </div>

            <div className="flex justify-center text-xl md:text-3xl items-center mb-6 mt-4 flex-wrap">
              <p className="text-black dark:text-white font-bold mr-3">Seorang</p>
              <Rotating
                texts={['Logical', 'Back-End', 'Engineer', 'Fast!']}
                mainClassName="px-3 bg-[#568A69] text-white font-bold overflow-hidden py-1 rounded-lg"
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <p className="text-gray-800 dark:text-white text-center md:text-lg leading-relaxed font-bold">Mahasiswa di Universitas Widyatama,</p>

            <div className="flex justify-center  gap-6 mt-6 text-2xl">
              <a href="https://github.com/kafkaaaa28" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-transform duration-300 transform hover:scale-110" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://instagram.com/kfkafrl_" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-transform duration-300 transform hover:scale-110" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://kafkaaaa.my.id" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-transform duration-300 transform hover:scale-110" title="Portfolio Website">
                <FaGlobe />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center rounded-xl">
            <LanYardSepa position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2  flex justify-center items-center rounded-xl">
            <LanYardSepa position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <div className="w-full md:w-1/2 p-8 -translate-y-[160px] rounded-xl flex flex-col justify-center">
            <div className="dark:text-white">
              <TrueFocus sentence="Sheva Agung" manualMode={false} blurAmount={5} borderColor="green" animationDuration={2} pauseBetweenAnimations={1} />
            </div>

            <div className="flex justify-center text-xl md:text-3xl items-center mb-6 mt-4 flex-wrap">
              <p className="text-black dark:text-white font-bold mr-3">Seorang</p>
              <Rotating
                texts={['Logical', 'Back-End', 'Engineer', 'Fast!']}
                mainClassName="px-3 bg-[#568A69]  text-white font-bold overflow-hidden py-1 rounded-lg"
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <p className="text-gray-800 dark:text-white text-center md:text-lg leading-relaxed font-bold">Mahasiswa di Universitas Widyatama,</p>

            <div className="flex justify-center  gap-6 mt-6 text-2xl">
              <a href="https://github.com/kafkaaaa28" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-transform duration-300 transform hover:scale-110" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://instagram.com/kfkafrl_" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-transform duration-300 transform hover:scale-110" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://kafkaaaa.my.id" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-transform duration-300 transform hover:scale-110" title="Portfolio Website">
                <FaGlobe />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SepaPage;
