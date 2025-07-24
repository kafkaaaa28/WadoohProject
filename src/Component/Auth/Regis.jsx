import react from 'react'
import { Spinner } from "flowbite-react";

const Regis = ({setAnimasiRegis ,animasiRegis}) => {
    return (
        <div className="text-focus-in mt-[30px]">
<p className="font-bold text-center">Registrasi</p>
<form class=" w-full">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
    <input type="email" id="email" class="bg-gray-50 border shadow-lg border-gray-300 w-[85%] text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Masukkan Email" required />
  </div>
  <div class="mb-5">
    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
    <input type="text" id="username" class="bg-gray-50 border shadow-lg border-gray-300 w-[85%] text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="Masukkan Username" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
    <input type="password" id="password" class="bg-gray-50 border shadow-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 w-[85%]" placeholder="Masukkan Password" required />
    
  </div>
  <div className="flex items-center gap-4">

    <button  type="submit" className="bg-white w-[125px] shadow-lg rounded-[40px] h-[40px] hover:bg-[#568A69] text-[#377A51] hover:text-white hover:shadow-lg transition ease-in-out duration-300">
              Daftar
            </button>
            <p className="text-[12px]">Sudah Punya Akun ? <span onClick={() => setAnimasiRegis(false)} className="text-blue-400 cursor-pointer hover:text-blue-600">Login</span>
             {!animasiRegis && (

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
    )
}
export default Regis