import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CuacaBoard = () => {
  const apiKey = process.env.REACT_APP_CUACA;
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords;

        try {
          const cuacaRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`);
          setCurrent(cuacaRes.data);
          setLocation(`${cuacaRes.data.name}, ${cuacaRes.data.sys.country}`);

          const forecastRes = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`);

          const harian = forecastRes.data.list.filter((_, i) => i % 8 === 0);
          setForecast(harian);
        } catch (err) {
          console.error('Gagal ambil data:', err.response?.data || err.message || err);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error('Gagal dapat lokasi:', err);
        setLoading(false);
      }
    );
  }, [apiKey]);

  if (loading) return <div className="text-center p-6">Memuat cuaca...</div>;
  if (!current || forecast.length === 0) return <div className="text-center p-6 text-red-500">Data cuaca tidak tersedia.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 grid gap-6">
      {/* Cuaca Sekarang */}
      <div className="bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 text-center text-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold mb-1">Cuaca Saat Ini</h2>
        <p className="text-lg mb-2">{location}</p>
        <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt={current.weather[0].description} className="w-20 mx-auto" />
        <p className="text-5xl font-semibold">{Math.round(current.main.temp)}°C</p>
        <p className="capitalize text-lg">{current.weather[0].description}</p>
        <div className="mt-4 text-sm space-y-1">
          <p>Kelembapan: {current.main.humidity}%</p>
          <p>Angin: {current.wind.speed} m/s</p>
        </div>
      </div>

      {/* Prakiraan 5 Hari */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">Prakiraan 5 Hari</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {forecast.map((item, index) => {
            const date = new Date(item.dt * 1000);
            const tanggal = date.toLocaleDateString('id-ID', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            });

            return (
              <div key={index} className="bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-xl shadow p-4 text-center text-gray-900 dark:text-white">
                <p className="font-medium">{tanggal}</p>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} className="w-12 h-12 mx-auto" />
                <p className="capitalize text-sm">{item.weather[0].description}</p>
                <p className="font-semibold mt-1">
                  {Math.round(item.main.temp_max)}°C /<span className="text-gray-700 dark:text-gray-300"> {Math.round(item.main.temp_min)}°C</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CuacaBoard;
