import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { FaAppleAlt, FaLeaf, FaCarrot, FaLemon, FaSeedling, FaTree, FaPagelines, FaPepperHot } from 'react-icons/fa';
import { PiOrangeDuotone } from 'react-icons/pi';
import { GiWatermelon, GiGrapes, GiCabbage } from 'react-icons/gi';
const iconMap = {
  Mangga: <FaTree className="text-green-500 text-3xl" />,
  Apel: <FaAppleAlt className="text-red-500 text-3xl" />,
  Pisang: <FaLemon className="text-yellow-400 text-3xl" />,
  Jeruk: <PiOrangeDuotone className="text-orange-400 text-3xl" />,
  Semangka: <GiWatermelon className="text-pink-500 text-3xl" />,
  Anggur: <GiGrapes className="text-purple-500 text-3xl" />,

  Bayam: <FaLeaf className="text-green-600 text-3xl" />,
  Wortel: <FaCarrot className="text-orange-500 text-3xl" />,
  Kangkung: <FaPagelines className="text-emerald-500 text-3xl" />,
  Brokoli: <FaSeedling className="text-emerald-600 text-3xl" />,
  Kubis: <GiCabbage className="text-lime-500 text-3xl" />,
  Sawi: <FaPepperHot className="text-green-700 text-3xl" />,
};

const PlantStats = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await api.get('/plants');
        const plantData = res.data;

        const allPlants = ['Mangga', 'Apel', 'Pisang', 'Jeruk', 'Semangka', 'Anggur', 'Bayam', 'Wortel', 'Kangkung', 'Brokoli', 'Kubis', 'Sawi'];

        const mergedData = allPlants.map((plant) => {
          const found = plantData.find((p) => p.name === plant);
          return {
            name: plant,
            userCount: found ? found.userCount : 0,
          };
        });

        setPlants(mergedData);
        setLoading(false);
      } catch (err) {
        setError('Gagal memuat data tanaman');
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">Statistik Tanaman Pengguna</h1>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div key={plant.name} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                {iconMap[plant.name] || <FaSeedling className="text-gray-400 text-3xl" />}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{plant.name}</h2>
                  <p className="text-sm text-gray-500">{plant.userCount} pengguna menanam</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantStats;
