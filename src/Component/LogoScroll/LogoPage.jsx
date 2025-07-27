import React from 'react';
import LogoScroll from './LogoScroll';
import Logo from './Logo';
const LogoPage = () => {
  return (
    <div className="flex flex-col dark:bg-[#568A69]">
      <p className="text-center font-bold text-[25px] dark:text-white text-[#21734E]">Di Dukung Oleh</p>
      <LogoScroll texts={[<Logo />, <Logo />]} velocity={'50'} className=" font-normal leading-normal tracking-normal text-start" />
    </div>
  );
};

export default LogoPage;
