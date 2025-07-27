import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GiNetworkBars } from 'react-icons/gi';
import hero3 from '../Img/bg3.png';
import { FaWifi, FaBatteryThreeQuarters, FaCloudSun, FaCalendarAlt, FaCogs } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdLightMode } from 'react-icons/md';
import { Spinner } from 'flowbite-react';
import CuacaBesok from './CuacaBesok';
const CuacaCard = ({ setDarkMode, darkMode, user, isAuthenticated, logout }) => {
  const [cuaca, setCuaca] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [Pengaturan, setPengaturan] = useState(false);
  const [slide, setSlide] = useState(false);
  const apiKey = process.env.REACT_APP_CUACA;
  const navigate = useNavigate();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        try {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`);
          setCuaca(res.data);
        } catch (err) {
          console.error('Gagal mengambil data cuaca:', err.response || err.message || err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error('Gagal dapat lokasi', err);
        setLoading(false);
      }
    );
  }, []);

  const waktu = new Date().toLocaleString('id-ID', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'long',
  });

  const icon = cuaca ? `https://openweathermap.org/img/wn/${cuaca.weather[0].icon}@4x.png` : null;

  return (
    <div className=" lg:w-[40%]  md:ml-[20px] w-full flex justify-center h-[650px]">
      <div className="w-[360px] h-[600px] rounded-[50px] bg-black shadow-2xl p-3 relative border-4 border-gray-700">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>

        <div className="bg-white rounded-[36px] w-full h-full overflow-hidden relative">
          <div className="h-[600px] bg-center w-full bg-cover px-4" style={{ backgroundImage: `url(${hero3})` }}>
            <div className="flex justify-between items-center text-xs text-black font-medium px-2 pt-2 mb-2">
              <div className="w-[60px] text-left">{new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
              <div className="flex items-center space-x-1 ml-auto">
                <GiNetworkBars className="text-[14px]" />
                <FaWifi className="text-[14px]" />
                <FaBatteryThreeQuarters className="text-[14px]" />
              </div>
            </div>
            <div
              className={`max-w-[320px] mx-auto mt-4 backdrop-blur-sm rounded-2xl h-[230px] text-white shadow-2xl px-6 py-8 font-sans relative overflow-hidden  transform transition-transform duration-500 ease-in-out ${
                slide ? '-translate-x-[320px]' : 'translate-x-0'
              }`}
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
              }}
            >
              {loading ? (
                <div className="h-full flex flex-col justify-center items-center">
                  <Spinner color="success" aria-label="Success spinner example" />
                  <p className="text-center mt-10 text-black">Memuat cuaca...</p>
                </div>
              ) : cuaca ? (
                <>
                  <div className="text-xl text-black font-light">{cuaca.name}</div>
                  <div className="text-6xl font-bold text-black mt-2">{Math.round(cuaca.main.temp)}°C</div>
                  <div className="text-lg capitalize text-black">{cuaca.weather[0].description}</div>
                  <div className="mt-2 text-sm text-black">{waktu}</div>
                  <img src={icon} alt="ikon cuaca" className="absolute right-4 top-4 w-20 h-20 opacity-80" />
                </>
              ) : (
                <div className="text-center text-black mt-10">
                  <p className="text-xl font-semibold">Aktifkan lokasi</p>
                  <p className="text-sm">untuk menampilkan cuaca saat ini</p>
                </div>
              )}
            </div>
            <div
              className={`mt-4 max-w-[320px] mx-auto backdrop-blur-sm rounded-2xl p-4 text-gray-800 shadow-lg  transform transition-transform duration-500 ease-in-out ${slide ? '-translate-x-[320px]' : 'translate-x-0'} `}
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
              }}
            >
              {cuaca && (
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className="font-semibold">Kelembapan</p>
                    <p>{cuaca.main.humidity}%</p>
                  </div>
                  <div>
                    <p className="font-semibold">Angin</p>
                    <p>{cuaca.wind.speed} m/s</p>
                  </div>
                  <div>
                    <p className="font-semibold">Tekanan</p>
                    <p>{cuaca.main.pressure} hPa</p>
                  </div>
                </div>
              )}

              <div className="border-t  border-gray-300 mt-3 pt-2 text-xs text-center">
                <p className="text-black italic">Data cuaca langsung dari OpenWeather</p>
              </div>
            </div>
            {latitude && longitude && <CuacaBesok longitude={longitude} latitude={latitude} apiKey={apiKey} slide={slide} cuaca={cuaca} />}

            <div
              className={`w-[300px] mx-auto flex flex-col justify-between   animate-fade-in transition-all duration-1000 ease-out origin-top  absolute bottom-[10px] ${
                Pengaturan ? 'h-[220px] rounded-[50px] bg-white/80 dark:bg-green-200 dark:bg-opacity-80' : 'h-[50px]'
              }`}
            >
              <div className="flex justify-between px-8 mt-[10px]">
                <div onClick={() => setSlide(false)} className={`flex flex-col cursor-pointer hover:text-gray-400 ${Pengaturan ? 'text-black' : 'text-white'} items-center`}>
                  <FaCloudSun className="text-xl" />
                  <p>Hari Ini</p>
                </div>
                <div onClick={() => setSlide(true)} className={`flex flex-col cursor-pointer hover:text-gray-400 ${Pengaturan ? 'text-black' : 'text-white'} items-center`}>
                  <FaCalendarAlt className="text-xl" />
                  <p>Besok</p>
                </div>
                <div onClick={() => setPengaturan(!Pengaturan)} className={`flex flex-col cursor-pointer hover:text-gray-400 ${Pengaturan ? 'text-black' : 'text-white'} items-center`}>
                  <FaCogs className="text-xl" />
                  <p>Pengaturan</p>
                </div>
              </div>
              {Pengaturan && (
                <div className=" flex flex-col gap-3 h-full px-8">
                  <div className="flex gap-4">
                    <div
                      onClick={() => setDarkMode(true)}
                      className="bg-white dark:bg-[#568A69] dark:text-white dark:hover:text-[#568A69] dark:hover:bg-white text-[#8EB39D] shadow-xl hover:bg-[#568A69] hover:text-white transition-colors duration-500 ease-in-out w-[50%] flex flex-col justify-center items-center cursor-pointer rounded-lg h-[40px]"
                    >
                      <FaLeaf />
                      <p className="text-[12px]">Green Mode</p>
                    </div>
                    <div
                      onClick={() => setDarkMode(false)}
                      className="bg-white dark:bg-[#568A69] dark:text-white dark:hover:text-[#568A69] dark:hover:bg-white text-[#8EB39D] shadow-xl hover:bg-[#568A69] hover:text-white transition-colors duration-500 ease-in-out  w-[50%] flex flex-col justify-center items-center cursor-pointer rounded-lg h-[40px]"
                    >
                      <MdLightMode />
                      <p className="text-[12px]">Light Mode</p>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate(isAuthenticated && user?.role === 'admin' ? '/dashboardAdmin' : '/login')}
                    className="bg-white cursor-pointer dark:bg-[#568A69] dark:text-white dark:hover:text-[#568A69] dark:hover:bg-white text-[#8EB39D] shadow-xl hover:bg-[#568A69] hover:text-white transition-colors duration-500 ease-in-out  h-[40px] rounded-lg flex items-center justify-center"
                  >
                    Dashboard
                  </div>
                  <div
                    onClick={() => {
                      isAuthenticated ? logout() : navigate('/login');
                    }}
                    className="bg-white dark:bg-[#568A69] dark:text-white dark:hover:text-[#568A69] dark:hover:bg-white text-[#8EB39D] shadow-xl hover:bg-[#568A69] hover:text-white transition-colors duration-500 ease-in-out  h-[40px] rounded-lg flex items-center justify-center"
                  >
                    {isAuthenticated ? 'Logout' : 'Login'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuacaCard;
