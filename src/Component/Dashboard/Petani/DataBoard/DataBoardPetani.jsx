import React, { useEffect, useState } from 'react';
import hero from '../../../Img/bg_dashboard.jpg';
import api from '../../../../utils/api';
import { Spinner } from 'flowbite-react';
import { BsRobot } from 'react-icons/bs';
import { GiWheat, GiWaterDrop } from 'react-icons/gi';
import BoardCuaca from './BoardCuaca';
const features = [
  {
    title: 'Konsultasi AI',
    desc: 'Tanya seputar pertanian langsung ke AI',
    icon: <BsRobot className="text-2xl" />,
    color: '#ADC2B6',
  },
  {
    title: 'Simulasi Panen',
    desc: 'Perkirakan hasil panen dari data',
    icon: <GiWheat className="text-2xl" />,
    color: '#C2B48F',
  },
  {
    title: 'Cek Kelembaban',
    desc: 'Pantau kelembaban tanah secara realtime',
    icon: <GiWaterDrop className="text-2xl" />,
    color: '#B2D5D1',
  },
];

const DataBoardAdmin = ({ Open }) => {
  const [loading, setLoading] = useState(true);
  const [isPetani, setIsPetani] = useState({});

  const getMe = async () => {
    try {
      const response = await api.get('/auth/me');
      setIsPetani(response.data);
      setLoading(false);
    } catch (err) {
      console.log('gagal ambil data');
      setLoading(false);
    }
  };
  useEffect(() => {
    getMe();
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
                Selamat Datang, <span className="text-green-300"> {loading ? <Spinner color="success" size="md" aria-label="Loading" /> : isPetani?.nama}</span> 👋
              </h2>
              <p className="text-white/80 mt-1 text-sm">Dashboard terbaru Anda ada di sini</p>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md">Petani Panel</span>
            </div>
          </div>
        </div>
        <div>
          <BoardCuaca Open={Open} />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className={`backdrop-blur-md cursor-pointer hover:rounded-br-[60px] hover:shadow-2xl hover:rounded-tl-[60px] transition-all duration-200 bg-white border border-white/20 dark:border-white/10 rounded-xl w-[350px] ${
                  Open ? 'md:w-[400px]' : 'md:w-[450px]'
                }  h-32 p-4 flex items-center gap-4 shadow-lg`}
              >
                <div className="shadow-lg border border-gray-200 p-3 rounded-full" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg ">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBoardAdmin;
