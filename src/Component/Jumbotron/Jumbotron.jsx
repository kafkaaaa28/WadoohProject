import React, { useState, useEffect } from 'react';
import hero from '../Img/hero2.jpg';
import ButtonAi from './ButtonAi';
import CardNEws from './Card/Card';
import { GiFarmer } from 'react-icons/gi';
const Jumbotron = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clipStyle = isDesktop
    ? {
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), calc(100% - 700px) calc(100% - 80px), calc(100% - 800px) 100%, 0 100%)',
      }
    : {};

  return (
    <>
      <div className="absolute  w-full top-0 h-[20px] text-center bg-[#568A69]">
        <marquee className="text-white uppercase font-bold">solusi digital untuk hasil tanam maksimal solusi digital untuk hasil tanam maksimal solusi digital untuk hasil tanam maksimal </marquee>
      </div>
      <div className="bg-white h-screen p-5">
        <div
          className="h-[80vh] rounded-lg bg-center z-30 bg-cover bg-fixed flex justify-between items-center"
          style={{
            backgroundImage: `url(${hero})`,
            ...clipStyle,
          }}
        >
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between w-full">
            <div className="lg:w-[500px] ml-[20px]">
              <p className="text-white font-bold uppercase text-[25px] md:text-[40px]">Dari Ladang ke Teknologi Pertanian Cerdas dengan AI</p>
            </div>
            <div className="lg:mr-[200px] ml-[20px] flex items-center">
              <ButtonAi />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  justify-between z-40">
          <div className="lg:w-[650px] text-center z-40  mt-[10px]">
            <p className="font-bold">Memperkuat tangan petani dengan kecanggihan AI untuk hasil panen maksimal dan lingkungan yang lestari.</p>
          </div>

          <div className="mt-6 z-40  lg:mt-0 relative lg:-translate-y-14 flex justify-center">
            <CardNEws />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
