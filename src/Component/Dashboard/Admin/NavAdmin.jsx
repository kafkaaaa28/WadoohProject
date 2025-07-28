import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaComments } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { Popover } from 'flowbite-react';
import kafka from '../../Img/logo.png';
import api from '../../../utils/api';
import DarkMode from '../DarkModeDashboard';
import { RiAdminFill } from 'react-icons/ri';
const NavAdmin = ({ setIsAuthenticated, setUser, Open, setOpen }) => {
  const Navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [isAdmin, setIsadmin] = useState({});
  const handleAdmin = async () => {
    try {
      const response = await api.get('/auth/me');
      setIsadmin(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem('token');
      setUser(false);
      setTimeout(() => {
        Navigate('/');
      }, 1000);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };
  const Toggler = () => {
    setOpen(!Open);
  };

  const handleMobile = () => {
    if (window.innerWidth <= 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const content = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Dashboard</h3>
      </div>
    </div>
  );
  const keluar = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Logout</h3>
      </div>
    </div>
  );
  const home = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Home</h3>
      </div>
    </div>
  );
  const komen = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">User</h3>
      </div>
    </div>
  );
  const tanaman = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Tanaman</h3>
      </div>
    </div>
  );
  const datatanam = (
    <div className="w-[200px]  text-sm ">
      <div className="  bg-[#0F1015] px-3 py-2 ">
        <h3 className="font-semibold text-white ">Data Tanaman</h3>
      </div>
    </div>
  );
  useEffect(() => {
    handleMobile();
    handleAdmin();
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    };
  }, []);
  return (
    <div>
      <div className="flex justify-end lg:justify-start items-center   bg-[linear-gradient(90deg,rgba(255,255,255,0.4)_0%,rgba(187,189,187,0.4)_50%,rgba(5,97,40,0.4)_100%)] py-2 w-full h-[60px]">
        {mobile ? (
          <>
            <DarkMode />
            <div className="flex mr-3 gap-3 items-center">
              <img src={kafka} className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
              <p className="text-black">{isAdmin.nama}</p>
            </div>
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              onClick={Toggler}
              type="button"
              className={`inline-flex items-center h-8 p-2 ${Open ? 'lg:ml-[280px]' : 'lg:ml-[100px]'} mr-[20px] text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
            >
              <FaBarsStaggered />
              <span className="sr-only">Open sidebar</span>
            </button>
          </>
        ) : (
          <div className="flex justify-between w-full ">
            <button
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              onClick={Toggler}
              type="button"
              className={`inline-flex items-center h-8 p-2 ${
                Open ? 'lg:ml-[280px]' : 'lg:ml-[100px]'
              } mr-[20px] text-sm text-gray-500 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200`}
            >
              <FaBarsStaggered />
              <span className="sr-only">Open sidebar</span>
            </button>
            <div className="flex">
              <DarkMode />
              <div className="flex mr-[30px] gap-3 items-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <RiAdminFill className="w-7 h-7 text-[#406D53]" />
                </div>
                <p className="text-white font-bold text-md ">{isAdmin.nama}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-all duration-300 ease-in-out  ${Open ? '-translate-x-[260px] md:-translate-x-[255px] lg:translate-x-0 ' : 'translate-x-0 lg:w-[80px] '}  `}
          aria-label="Sidebar"
        >
          <div
            className="h-full px-3 py-4  overflow-y-auto  bg-gradient-to-tl from-[#E3E5E6] to-[#8FB39E] 
                dark:from-[#345D47] dark:to-[#568A69] dark:text-black "
          >
            <div className="mb-[20px] ml-[10px] flex gap-4">
              <div className="flex  rounded-full bg-white items-center">
                <img src={kafka} className="w-10 h-10 p-1  " />
              </div>
              {Open || mobile ? (
                <div className="flex flex-col items-start justify-center">
                  <p className="text-lg text-gray-600 font-bold dark:text-gray-200">Petani AI</p>
                </div>
              ) : null}
            </div>

            <ul className="space-y-2 font-medium">
              {Open || mobile ? <p className="text-gray-600 text-sm dark:text-gray-200">Navigation</p> : null}
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : content} trigger="hover" placement="right">
                  <a
                    onClick={() => Navigate('/dashboardAdmin')}
                    className="flex cursor-pointer text-sm items-center p-2   rounded-lg  hover:text-black   hover:bg-[#568A69] text-gray-600 dark:text-gray-200  hover:dark:text-white transition-colors duration-300 ease-out"
                  >
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-xl">
                      <MdSpaceDashboard className="text-lg  text-gray-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Dashboard</span> : null}
                  </a>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : home} trigger="hover" placement="right">
                  <button
                    onClick={() => Navigate('/')}
                    href="#"
                    className="flex w-full text-sm items-center p-2 rounded-lg  hover:bg-[#568A69] text-gray-600 hover:text-black dark:text-white  hover:dark:text-white transition-colors duration-300 ease-out"
                  >
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-xl">
                      <FaHome className="text-lg text-gray-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Home</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="" content={Open || mobile ? null : tanaman} trigger="hover" placement="right">
                  <button
                    onClick={() => Navigate('/dashboardAdmin/tambahtanaman')}
                    href="#"
                    className="flex w-full text-sm items-center p-2 rounded-lg  hover:bg-[#568A69] text-gray-600 hover:text-black dark:text-white  hover:dark:text-white transition-colors duration-300 ease-out"
                  >
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-xl">
                      <FaHome className="text-lg text-gray-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Tambah Tanaman</span> : null}
                  </button>
                </Popover>
              </li>{' '}
              <li>
                <Popover className="" content={Open || mobile ? null : datatanam} trigger="hover" placement="right">
                  <button
                    onClick={() => Navigate('/dashboardAdmin/datatanaman')}
                    href="#"
                    className="flex w-full text-sm items-center p-2 rounded-lg  hover:bg-[#568A69] text-gray-600 hover:text-black dark:text-white  hover:dark:text-white transition-colors duration-300 ease-out"
                  >
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-xl">
                      <FaHome className="text-lg text-gray-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">Data Tanaman</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : komen} trigger="hover" placement="right">
                  <button
                    onClick={() => Navigate('/dashboardAdmin/user')}
                    href="#"
                    className="flex w-full text-sm items-center p-2 rounded-lg  hover:bg-[#568A69] text-gray-600 hover:text-black dark:text-white  hover:dark:text-white transition-colors duration-300 ease-out"
                  >
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-xl">
                      <FaUser className="text-lg text-gray-600" />
                    </div>
                    {Open || mobile ? <span className="ms-3">User</span> : null}
                  </button>
                </Popover>
              </li>
              <li>
                <Popover className="bg-[#0F1015] text-[#0F1015]" content={Open || mobile ? null : keluar} trigger="hover" placement="right">
                  <button onClick={handleLogout} href="#" className="flex w-full text-sm items-center p-2 rounded-lg dark:text-gray-200  hover:bg-[#568A69] text-gray-600 hover:text-black transition-colors duration-300 ease-out">
                    <div className="bg-white shadow-lg flex items-center justify-center w-8 h-8 rounded-lg">
                      <HiOutlineLogout className="text-lg hover:text-black text-gray-600 " />
                    </div>
                    {Open || mobile ? <span className=" ms-3 ">Logout</span> : null}
                  </button>
                </Popover>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NavAdmin;
