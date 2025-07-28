import React, { useState, useEffect } from 'react';
import logo from '../Img/logo.png';
import KafkaPage from './Kafka/KafkaPage';
import SepaPage from './Sepa/SepaPage';
import FarhanPage from './Farhan/FarhanPage';
import ToolsWebsite from './ToolsWebsite';
const Team = () => {
  const [IsOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#BED1C5] z-50 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${IsOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <img src={logo} alt="Logo" className="h-40 w-auto animate-pulse" />
      </div>
      <div className="min-h-screen bg-w dark:bg-[#8FB49F]">
        <KafkaPage />
        <SepaPage />
        <FarhanPage />
        <ToolsWebsite />
      </div>
    </>
  );
};

export default Team;
