import React, { useEffect, useState } from 'react';
import api from '../../../utils/api';
import { FaAppleAlt, FaLeaf, FaCarrot, FaLemon, FaSeedling, FaTree, FaPagelines, FaPepperHot } from 'react-icons/fa';
import { PiOrangeDuotone } from 'react-icons/pi';
import { GiWatermelon, GiGrapes, GiCabbage } from 'react-icons/gi';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
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
  if (['pepper', 'cabai', 'lada'].includes(lowerName)) return 'Pepper';
  if (['mangga'].includes(lowerName)) return 'Tree';
  if (['pisang'].includes(lowerName)) return 'Seedling';
  if (['semangka', 'watermelon'].includes(lowerName)) return 'Watermelon';
  if (['anggur', 'grapes'].includes(lowerName)) return 'Grapes';
  if (['pagelines'].includes(lowerName)) return 'Pagelines';
  if (['orange', 'jeruk'].includes(lowerName)) return 'Orange';
};

const Menanam = () => {
  const [user, setUser] = useState({});
  const [tanaman, setTanaman] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTanaman, setSelectTanaman] = useState(null);
  const [modal, setOpenModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    getME();
    fetchTanaman();
  }, []);

  const getME = async () => {
    try {
      const response = await api.get('/auth/me');
      setUser(response.data);
    } catch (err) {
      console.log('Gagal ambil data user');
    }
  };

  const fetchTanaman = async () => {
    try {
      const response = await api.get('/plants');
      setTanaman(response.data);
    } catch (error) {
      console.log('Gagal ambil data tanaman');
    }
  };

  const handleModal = (plant) => {
    setSelectTanaman(plant);
    setOpenModal(true);
  };

  const handleTanam = async (e) => {
    e.preventDefault();
    if (!selectedTanaman) return;

    setLoading(true);
    try {
      const response = await api.post('/user-plants', {
        user_id: user.id,
        plant_id: selectedTanaman.id,
      });

      setSuccessMessage(response.data.message || 'Tanaman berhasil ditanam!');
      setOpenModal(false);
    } catch (error) {
      alert(error.response?.data?.message || 'Gagal menanam tanaman');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Pilih Tanaman untuk Ditanam</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tanaman.map((plant) => {
          const iconKey = nameToIconKey(plant.name);
          const IconComponent = iconMap[iconKey];
          return (
            <div key={plant.id} onClick={() => handleModal(plant)} className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center cursor-pointer hover:shadow-lg transition">
              <div>{IconComponent}</div>
              <h2 className="text-xl font-semibold mt-4">{plant.name}</h2>
              <p className="text-sm text-gray-500">{plant.category}</p>
            </div>
          );
        })}
      </div>

      <Modal show={modal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Tanam {selectedTanaman?.name}</ModalHeader>
        <ModalBody>
          <p>
            Apakah kamu yakin ingin menanam <strong>{selectedTanaman?.name}</strong>?
          </p>
          <p>
            <strong>Kategori:</strong> {selectedTanaman?.category}
          </p>
          <p>
            <strong>Durasi panen:</strong> {selectedTanaman?.harvest_duration} hari
          </p>
          <p className="text-sm text-gray-500 mt-2">{selectedTanaman?.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Batal
          </Button>
          <Button onClick={handleTanam} disabled={loading}>
            {loading ? 'Menanam...' : 'Tanam'}
          </Button>
        </ModalFooter>
      </Modal>

      {successMessage && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg cursor-pointer" onClick={() => setSuccessMessage('')}>
          {successMessage} (klik untuk tutup)
        </div>
      )}
    </div>
  );
};

export default Menanam;
