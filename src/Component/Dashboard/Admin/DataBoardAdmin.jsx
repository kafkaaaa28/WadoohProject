import React, { useEffect, useState } from 'react';
import hero from '../../Img/bg_dashboard.jpg';
import api from '../../../utils/api';
import { FiUsers } from 'react-icons/fi';
import { Spinner } from 'flowbite-react';
import { PiPlantFill } from 'react-icons/pi';
const DataBoardAdmin = () => {
  const [totalUsers, setTotalUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState({});
  const [totalTanaman, setTotalTanaman] = useState(0);
  const fetchUser = async () => {
    try {
      const response = await api.get('/users');
      setTotalUsers(response.data.length);
      setLoading(false);
    } catch (err) {
      console.log('gagal ambil data user');
      setLoading(false);
    }
  };
  const fetchPlants = async () => {
    try {
      const response = await api.get('/plants');
      setTotalTanaman(response.data.length);
      setLoading(false);
    } catch (err) {
      console.log('gagal ambil data tanaman');
      setLoading(false);
    }
  };
  const getMe = async () => {
    try {
      const response = await api.get('/auth/me');
      setIsAdmin(response.data);
      setLoading(false);
    } catch (err) {
      console.log('gagal ambil data');
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
    getMe();
    fetchPlants();
  }, []);

  return (
    <div className="min-h-screen p-5">
      <div className="w-full flex flex-col gap-5">
        <div className="relative rounded-xl overflow-hidden h-52 md:h-64 shadow-lg">
          <img src={hero} alt="dashboard background" className="absolute inset-0 w-full h-full object-cover object-[center_65%] z-0" />

          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="relative z-20 h-full w-full p-6 md:p-8 flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Selamat Datang Kembali, <span className="text-green-300">Admin {loading ? <Spinner color="success" size="md" aria-label="Loading" /> : isAdmin?.nama}</span> 👋
              </h2>
              <p className="text-white/80 mt-1 text-sm">Dashboard terbaru Anda ada di sini</p>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md">Admin Panel</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#90B59F] rounded-xl shadow-md p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full">
                <FiUsers size={20} />
              </div>
              <p className="text-sm text-gray-500 dark:text-white">Total User</p>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{loading ? <Spinner color="success" aria-label="Success spinner example" /> : totalUsers}</h3>

            <span className="text-xs text-gray-400 dark:text-white mt-2">Data Terbaru</span>
          </div>
          <div className="bg-white dark:bg-[#90B59F] rounded-xl shadow-md p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full">
                <PiPlantFill size={20} />
              </div>
              <p className="text-sm text-gray-500 dark:text-white">Total User Menanam</p>
            </div>

            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{loading ? <Spinner color="success" aria-label="Success spinner example" /> : totalTanaman}</h3>

            <span className="text-xs text-gray-400 dark:text-white mt-2">Data Terbaru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBoardAdmin;
