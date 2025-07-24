import React, { useEffect, useState } from "react";
import bg_login from '../Img/bg_login.png'
import logo from '../Img/logo.png'
import Regis from "./Regis";
import { Spinner } from "flowbite-react";
const Login = () => {
    const [animateGradient, setAnimateGradient] = useState(false);
const [animasiRegis , setAnimasiRegis] = useState(false)
 const [delayedAnimasiRegis, setDelayedAnimasiRegis] = useState(false);

useEffect(() => {
   let timeout;

    if (animasiRegis) {
      timeout = setTimeout(() => {
        setDelayedAnimasiRegis(true);
      }, 1500);
    } else {
       timeout = setTimeout(() => {
        setDelayedAnimasiRegis(false);
      }, 1500);
    }

  setTimeout(() => {
    setAnimateGradient(true);
  }, 300); 
  return () => clearTimeout(timeout);
}, [animasiRegis]);

    return (
<div className="min-h-screen p-5">
<div className="flex mt-[90px] flex-col lg:flex-row lg:mx-[150px]">
<div style={{backgroundImage : `url(${bg_login})`}}   className={`w-full lg:w-[50%] shadow-lg z-40 flex items-center justify-center bg-center bg-cover  h-[20vh] lg:h-[75vh]  transform transition-all duration-1000 ${animasiRegis ? 'lg:translate-x-[470px] rounded-tr-lg lg:rounded-br-lg rounded-br-[0px] rounded-tl-lg lg:rounded-tl-[0px]' : '-translate-x-0 rounded-tl-lg rounded-tr-lg lg:rounded-tr-[0px] lg:rounded-bl-lg' }`}>
  <div className="relative h-[140px] w-[140px]  lg:w-[200px] lg:h-[200px] rounded-[50%]">
  <div className="absolute inset-0 backdrop-blur-[50%] bg-white/30 rounded-[50%] z-0" />

  <img
    src={logo}
    alt="logo"
    className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] relative z-10"
  />
</div>

</div>
<div
  className={`w-full lg:w-[50%] flex gap-5 shadow-lg  h-[500px] lg:h-[413px] justify-center items-center transform transition-all duration-1000 ease-out
    ${animateGradient ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
  ${delayedAnimasiRegis ? 'lg:-translate-x-[470px] rounded-tl-lg rounded-bl-lg rounded-br-lg lg:rounded-br-[0px]' : '-translate-[200px] rounded-tr-[0px] lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-[0px]'}`}
  style={{
    background:
      'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
  }}
>
{delayedAnimasiRegis ? 
<Regis setAnimasiRegis={setAnimasiRegis} animasiRegis={animasiRegis}/>
 : (

   <div className="mx-[30px] text-focus-in flex flex-col items-center">
    <div className="mb-[30px] mt-[10px]">
        <p className="text-[20px] font-bold text-black mb-[20px]">Login</p>
        <p className="text-[13px]">Selamat Datang Di Petani AI !! Tolong Masuk Dengan Akun Anda </p>
    </div>

<form class="  w-full ">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" id="email" class="bg-gray-50 border shadow-lg border-gray-300 w-[85%] text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Masukkan Email" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
    <input type="password" id="password" class="bg-gray-50 border shadow-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 w-[85%]" placeholder="Masukkan Password" required />
  </div>
  <div className="flex items-center gap-4">

    <button  type="submit" className="bg-white w-[125px] shadow-lg rounded-[40px] h-[40px] hover:bg-[#568A69] text-[#377A51] hover:text-white hover:shadow-lg transition ease-in-out duration-300">
              Login
            </button>
            <p className="text-[12px]">Belum punya akun ? <span onClick={() => setAnimasiRegis(true)} className="text-blue-400 cursor-pointer hover:text-blue-600">Daftar Sekarang</span>

            {animasiRegis && (

              <Spinner
              color="success"
              aria-label="Success spinner example"
              className="w-[12px] h-[12px] ml-[10px] lg:hidden"
/>
            )}
</p>

  </div>
</form>

</div>
    )}
    </div>
</div>
</div>
    )
}
export default Login