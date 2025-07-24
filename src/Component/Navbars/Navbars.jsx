import React, { useEffect, useState } from 'react';
import logo from '../Img/logo.png';
import './Navbars.css'
import { FaBars } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
export default function Navbars() {
  const [animate, setAnimate] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [Open , setOpen] = useState(false)
  const Toggler = ()=> {
    setOpen(!Open)
  }
  const navigate = useNavigate()
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimate(true), 100); 
    const timer2 = setTimeout(() => setShowContent(true), 1100); 
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
   <nav
  className={`fixed left-0 right-0 mx-auto w-[calc(100%-60px)] shadow-lg max-w-screen-xl rounded-[40px] mt-[25px] px-6 z-50 backdrop-blur-md transition-all duration-1000 ease-out origin-top ${
    animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
  } ${Open ? 'h-[400px]' : 'h-[65px]'}`}
  style={{
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
  }}
>
  {showContent && (
    <>
      <div className="flex items-center justify-between h-[65px]">
        <div className="flex gap-3 items-center text-focus-in">
          <img className="w-10 h-10 rounded-full" src={logo} alt="Rounded avatar" />
          <p
            onClick={() => navigate('/')}
            className="text-xl cursor-pointer hover:text-[#9FC2AD] font-semibold text-[#1E6D3C]"
          >
            Petani AI
          </p>
        </div>
        <div className="hidden md:flex gap-12 items-center text-focus-in">
          <ul className="flex gap-12">
            <li className="relative  cursor-pointer text-gray-500 hover:text-[#1E6D3C] transition-colors duration-300 li-underline">
              Tentang
            </li>
            <li className="relative cursor-pointer text-gray-500 hover:text-[#1E6D3C] transition-colors duration-300 li-underline">
              Cara Kerja
            </li>
            <li className="relative cursor-pointer text-gray-500 hover:text-[#1E6D3C] transition-colors duration-300 li-underline">
              Fitur
            </li>
            <li className="relative cursor-pointer text-gray-500 hover:text-[#1E6D3C] transition-colors duration-300 li-underline">
              Team
            </li>
          </ul>
        </div>
        <div className="hidden md:block text-focus-in">
          <button
            onClick={() => navigate('/login')}
            className="bg-white w-[125px] rounded-[40px] h-[40px] hover:bg-[#568A69] text-[#377A51] hover:text-white hover:shadow-lg transition ease-in-out duration-300"
          >
            Login
          </button>
        </div>
        <div className="md:hidden bg-[#1E6D3C] text-white hover:text-black hover:bg-white w-6 flex items-center justify-center h-7 rounded-lg">
          <button onClick={Toggler}>
            <FaBars />
          </button>
        </div>
      </div>

      {Open && (
        <div className="flex flex-col mt-6 gap-4 text-gray-700 md:hidden animate-fade-in">
          <p className="cursor-pointer font-bold hover:text-[#1E6D3C]">Tentang</p>
          <p className="cursor-pointer font-bold hover:text-[#1E6D3C]">Cara Kerja</p>
          <p className="cursor-pointer font-bold hover:text-[#1E6D3C]">Fitur</p>
          <p className="cursor-pointer font-bold hover:text-[#1E6D3C]">Team</p>
          <button
            onClick={() => {setOpen(false); navigate('/login');  }}
            className="bg-white w-[240px] rounded-[40px] absolute bottom-[10px] left-[45px] h-[40px] hover:bg-[#568A69] text-[#377A51] hover:text-white hover:shadow-lg transition ease-in-out duration-300"
          >
            Login
          </button>
        </div>
      )}
    </>
  )}
</nav>

   

  );
}
