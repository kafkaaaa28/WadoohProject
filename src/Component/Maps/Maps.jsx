import React from 'react';
import BgMaps from '../Img/maps.webp';
import CountUp from './CountUp';
import { GiFarmer } from 'react-icons/gi';
import { FaSeedling } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';
const Maps = () => {
  return (
    <div className="h-screen p-5 mt-[200px] md:mt-[10px] lg:mt-[40px]">
      <div className="h-[50vh] flex flex-col items-center justify-center lg:h-[70vh] ">
        <p className="text-center font-bold text-[30px] lg:text-[50px]">Tersedia Di Seluruh Indonesia</p>
        <img src={BgMaps} className="h-[75%]" />
        <div className="flex flex-col md:flex-row gap-[30px]  mt-[20px]">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-[50px] font-bold text-[#1E6D3C]">
              <CountUp from={0} to={100} separator="," direction="up" duration={1} className="count-up-text" /> +
            </h2>
            <div className="flex flex-col lg:flex-row  items-center lg:items-start gap-2 sm:gap-3 p-3">
              <GiFarmer className="text-[40px] sm:text-[50px] text-green-700" />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center sm:text-left mt-1 sm:mt-2">Petani telah bergabung</p>
            </div>
          </div>
          <div className="flex flex-col  items-center justify-center">
            <h2 className="text-[50px] font-bold text-[#1E6D3C] flex items-center justify-center">
              <CountUp from={200} to={1350} separator="," duration={1} className="count-up-text" />
              <span className="ml-2 text-[35px] font-semibold text-[#1E6D3C]">kg +</span>
            </h2>
            <div className="flex flex-col lg:flex-row gap-2 sm:gap-3  w-full justify-center items-center mt-2 p-3 rounded-md">
              <FaSeedling className="text-[40px] sm:text-[50px] text-green-700" />
              <p className="text-gray-700 text-xs sm:text-sm md:text-base text-center sm:text-left max-w-[250px]">Pupuk telah disalurkan melalui platform kami</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <FaRegCheckCircle className="text-[50px] font-bold text-[#1E6D3C]" />
            <p className="text-xl text-gray-700">Konsultasi AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
