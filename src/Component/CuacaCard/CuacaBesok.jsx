import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecast = ({ latitude, longitude, apiKey, slide, cuaca }) => {
  const [cuacaBesok, setCuacaBesok] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`);

        const forecastList = res.data.list;

        const besok = new Date();
        besok.setDate(besok.getDate() + 1);
        const besokStr = besok.toISOString().split('T')[0];

        const dataBesok = forecastList.filter((item) => item.dt_txt.startsWith(besokStr));
        setCuacaBesok(dataBesok);
      } catch (err) {
        setError('Gagal mengambil data cuaca');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [latitude, longitude, apiKey]);

  if (loading) return <p className="text-center text-gray-500">Memuat data cuaca...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <div className={`-translate-y-[350px] transform transition-transform backdrop-blur-sm rounded-lg duration-500 ease-in-out ${slide ? 'translate-x-0' : 'translate-x-[320px]'}`}>
        <h2 className="text-lg font-semibold text-center mb-4 text-black">Prakiraan Cuaca Besok</h2>

        <div className="flex flex-col gap-2">
          {cuacaBesok.map((item, index) => (
            <div
              key={index}
              className=" backdrop-blur-sm flex items-center justify-center rounded-xl p-3 h-[45px] shadow text-center"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
              }}
            >
              <p className="text-sm font-medium text-gray-800">
                {new Date(item.dt_txt).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon cuaca" className="w-12 h-12 mx-auto" />
              <div className="">
                <p className="text-sm capitalize text-black">{item.weather[0].description}</p>
                <p className="text-md font-semibold text-gray-900">{Math.round(item.main.temp)}°C</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
