import React, { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { FaAppleAlt, FaLeaf, FaCarrot, FaLemon, FaSeedling, FaTree, FaPagelines, FaPepperHot } from 'react-icons/fa';
import { PiOrangeDuotone } from 'react-icons/pi';
import { GiWatermelon, GiGrapes, GiCabbage } from 'react-icons/gi';

const iconMap = {
  Apple: <FaAppleAlt className="text-red-500 text-5xl" />,
  Leaf: <FaLeaf className="text-green-600 text-5xl" />,
  Carrot: <FaCarrot className="text-orange-500 text-5xl" />,
  Lemon: <FaLemon className="text-yellow-400 text-5xl" />,
  Seedling: <FaSeedling className="text-green-400 text-5xl" />,
  Tree: <FaTree className="text-green-700 text-5xl" />,
  Pagelines: <FaPagelines className="text-green-500 text-5xl" />,
  Pepper: <FaPepperHot className="text-red-600 text-5xl" />,
  Orange: <PiOrangeDuotone className="text-orange-400 text-5xl" />,
  Watermelon: <GiWatermelon className="text-red-600 text-5xl" />,
  Grapes: <GiGrapes className="text-purple-700 text-5xl" />,
  Cabbage: <GiCabbage className="text-green-500 text-5xl" />,
};
const nameToIconKey = (name) => {
  const lowerName = name.toLowerCase();

  if (['apel'].includes(lowerName)) return 'Apple';
  if (['bayam', 'kangkung', 'sawi'].includes(lowerName)) return 'Leaf';
  if (['wortel'].includes(lowerName)) return 'Carrot';
  if (['jeruk', 'lemon'].includes(lowerName)) return 'Lemon';
  if (['kubis', 'cabbage'].includes(lowerName)) return 'Cabbage';
  if (['cabai', 'pepper', 'lada'].includes(lowerName)) return 'Pepper';
  if (['mangga'].includes(lowerName)) return 'Tree';
  if (['pisang'].includes(lowerName)) return 'Seedling';
  if (['semangka', 'watermelon'].includes(lowerName)) return 'Watermelon';
  if (['anggur', 'grapes'].includes(lowerName)) return 'Grapes';
  if (['pagelines'].includes(lowerName)) return 'Pagelines';
  if (['orange', 'jeruk'].includes(lowerName)) return 'Orange';

  return 'Seedling';
};

const bulanIndonesia = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function formatTanggal(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = bulanIndonesia[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
export default function MyPlants() {
  const [user, setUser] = useState(null);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserAndPlants();
  }, []);

  const fetchUserAndPlants = async () => {
    try {
      const userResp = await api.get('/auth/me');
      setUser(userResp.data);

      const plantsResp = await api.get(`/user-plants/${userResp.data.id}`);
      setMyPlants(plantsResp.data);
    } catch (err) {
      setError('Gagal mengambil data tanaman Anda.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  if (error) return <div className="text-center mt-10 text-red-600 font-semibold">{error}</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Tanaman Saya</h1>

      {myPlants.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">Anda belum menanam tanaman apa pun.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {myPlants.map((plant) => {
            const iconKey = nameToIconKey(plant.plant_name);
            const IconComponent = iconMap[iconKey] || <FaSeedling className="text-green-400 text-5xl" />;

            return (
              <div
                key={plant.id}
                className="bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col items-center text-center
                     border border-transparent hover:border-green-400 transition-colors duration-300"
              >
                <div className="text-green-500 text-6xl">{IconComponent}</div>
                <h2 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-gray-100">{plant.plant_name}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{plant.category}</p>
                <p className="mt-3 text-gray-800 dark:text-gray-200 text-sm">
                  <span className="font-semibold">Ditanam:</span> {formatTanggal(plant.planted_at)}
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-sm">
                  <span className="font-semibold">Panen diperkirakan:</span> {formatTanggal(plant.harvest_at)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
