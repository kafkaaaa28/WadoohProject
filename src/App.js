import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import { Routes, Route } from 'react-router-dom';
import Login from './Component/Auth/Login';
import logo from './Component/Img/logo.png';
import About from './Component/About/About';
import CuacaCard from './Component/CuacaCard/CuacaCard';
import ScrollVelocity from './Component/ScrollVelo/ScrollVelo';
import Maps from './Component/Maps/Maps';
import CaraKerja from './Component/CaraKerja/CaraKerja';
import WhyUs from './Component/WhyUs/WhyUs';
import Logo from './Component/LogoScroll/Logo';
function App() {
  const [IsOpen, setIsOpen] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const timer1 = setTimeout(() => setIsOpen(false), 1000);
    AOS.init({ duration: 1500, easing: 'linear', once: true });

    return () => {
      lenis.destroy();
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="min-h-[500vh] overflow-x-hidden  ">
      <Navbars setIsOpen={setIsOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#BED1C5] z-50 flex items-center justify-center transition-all duration-1000 ease-in-out transform
    ${IsOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-100'}
  `}
              >
                <img src={logo} className="h-1/2" />
              </div>

              <Jumbotron />

              <div className=" flex flex-col mt-[430px] md:mt-[130px] lg:mt-0 md:flex-row">
                <CuacaCard />
                <About />
              </div>
              <div className="mt-[10px] z-20">
                <ScrollVelocity texts={['Petani Cerdas, Hasil Maksimal', 'Teknologi Bertani yang Cerdas']} velocity={'50'} className="lg:h-24" />
              </div>

              <Maps />
              <CaraKerja />
              <WhyUs />
              <Logo />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
