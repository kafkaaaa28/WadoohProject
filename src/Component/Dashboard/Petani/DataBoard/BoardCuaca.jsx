import React, { useState, useEffect } from 'react';
import maps from '../../../Img/maps.webp';
import axios from 'axios';
import { Spinner } from 'flowbite-react';

const BoardCuaca = ({ Open }) => {
  const [cuaca, setCuaca] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [timeClass, setTimeClass] = useState('');
  const apiKey = process.env.REACT_APP_CUACA;
  const hour = new Date().getHours();
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
    if (hour >= 5 && hour < 10) {
      setTimeClass('bg-gradient-to-r from-blue-300 via-blue-200 to-yellow-200');
    } else if (hour >= 10 && hour < 15) {
      setTimeClass('bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300');
    } else if (hour >= 15 && hour < 18) {
      setTimeClass('bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400');
    } else if (hour >= 19 || hour <= 5) {
      setTimeClass('bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white');
    }
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
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 dark:border-white/10 p-5 flex flex-col md:flex-row items-center justify-between gap-6 cursor-pointer hover:rounded-br-[60px] hover:shadow-2xl hover:rounded-tl-[60px] transition-all duration-300 rounded-xl w-full max-w-[850px]">
        <img src={maps} className="h-36 w-auto object-contain" alt="map" />

        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">Lokasi Lahan Anda</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-md">Pantau lokasi dan koordinat lahan pertanian Anda secara real-time menggunakan sistem pemetaan cerdas.</p>
        </div>
      </div>

      <div
        className={`
    relative w-[350px] ${Open ? 'md:w-[400px]' : 'md:w-[550px]'} h-52 md:h-60 p-6 rounded-xl 
     ${timeClass}  shadow-lg
    border border-white/20 dark:border-white/10
    flex items-center justify-center
    cursor-pointer transition-all duration-300
    hover:shadow-2xl hover:rounded-br-[50px] hover:rounded-tl-[50px]
  `}
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full w-full text-center">
            <Spinner color="success" aria-label="Loading cuaca" />
            <p className={`mt-4 text-sm ${!timeClass ? 'text-white' : 'text-gray-700'}  `}>Memuat cuaca...</p>
          </div>
        ) : cuaca ? (
          <>
            <div className={`flex flex-col items-start ${hour >= 19 || hour <= 5 ? 'text-white' : 'text-black'}`}>
              <h3 className="text-xl font-semibold">{cuaca.name}</h3>
              <div className="text-5xl font-bold mt-1">{Math.round(cuaca.main.temp)}°C</div>
              <p className={`capitalize text-sm  ${hour >= 19 || hour <= 5 ? 'text-gray-300' : 'text-gray-700'}  mt-1`}>{cuaca.weather[0].description}</p>
              <p className={`text-xs ${hour >= 19 || hour <= 5 ? 'text-gray-300' : 'text-gray-700'} mt-2 `}>{waktu}</p>
            </div>

            <img src={icon} alt="Ikon Cuaca" className="absolute right-4 top-4 w-16 h-16 opacity-80 drop-shadow-md" />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Aktifkan Lokasi</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Untuk menampilkan cuaca saat ini</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardCuaca;
