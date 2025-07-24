import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiNetworkBars } from "react-icons/gi";
import hero3 from '../Img/bg3.png'
import { FaWifi, FaBatteryThreeQuarters, FaCloudSun, FaCalendarAlt, FaCogs } from "react-icons/fa";

const CuacaCard = () => {
  const [cuaca, setCuaca] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_CUACA;
  console.log("API Key:", process.env.REACT_APP_CUACA);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`
          );
          setCuaca(res.data);
        } catch (err) {
          console.error("Gagal mengambil data cuaca:", err.response || err.message || err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("Gagal dapat lokasi", err);
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Memuat cuaca...</p>;
  if (!cuaca) return <p className="text-center mt-10 text-red-500">Gagal mengambil data cuaca.</p>;

  const waktu = new Date().toLocaleString("id-ID", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "long",
  });

  const icon = `https://openweathermap.org/img/wn/${cuaca.weather[0].icon}@4x.png`;

  return (
    <div className="flex lg:-translate-y-[200px] ml-[50px] min-h-screen">
  <div className="w-[360px] h-[600px] rounded-[50px] bg-black shadow-2xl p-3 relative border-4 border-gray-700">
    
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>

    <div className="bg-white rounded-[36px] w-full h-full overflow-hidden relative">
      <div className="h-[600px] bg-center w-full bg-cover px-4" style={{ backgroundImage: `url(${hero3})` }}>
        
        <div className="flex justify-between items-center text-xs text-black font-medium px-2 pt-2 mb-2">
          <div className="w-[60px] text-left">
            {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
          </div>
          <div className="flex items-center space-x-1 ml-auto">
            <GiNetworkBars className="text-[14px]" />
            <FaWifi className="text-[14px]" />
            <FaBatteryThreeQuarters className="text-[14px]" />
          </div>
        </div>

        <div
          className="max-w-[320px] mx-auto mt-4 backdrop-blur-sm rounded-2xl h-[230px] text-white shadow-2xl px-6 py-8 font-sans relative overflow-hidden"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
          }}
        >
          <div className="text-xl text-black font-light">{cuaca.name}</div>
          <div className="text-6xl font-bold text-black mt-2">{Math.round(cuaca.main.temp)}°C</div>
          <div className="text-lg capitalize text-black">{cuaca.weather[0].description}</div>
          <div className="mt-2 text-sm text-black">{waktu}</div>
          <img
            src={icon}
            alt="ikon cuaca"
            className="absolute right-4 top-4 w-20 h-20 opacity-80"
          />
        </div>

        <div className="mt-4 max-w-[320px] mx-auto backdrop-blur-sm rounded-2xl p-4 text-gray-800 shadow-lg"  style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
          }}>
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

          <div className="border-t  border-gray-300 mt-3 pt-2 text-xs text-center">
            <p className="text-black italic">Data cuaca langsung dari OpenWeather</p>
          </div>
        </div>

        <div className="mt-4 max-w-[320px] mx-auto flex justify-between px-8  mt-[100px] text-xs">
          <div className="flex flex-col cursor-pointer hover:text-gray-400 text-white items-center">
            <FaCloudSun className="text-xl" />
            <p>Hari Ini</p>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-gray-400 text-white items-center opacity-60">
            <FaCalendarAlt className="text-xl" />
            <p>Besok</p>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-gray-400 text-white items-center opacity-60">
            <FaCogs className="text-xl" />
            <p>Pengaturan</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


  );
};

export default CuacaCard;
