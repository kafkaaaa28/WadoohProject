import { FaUserAlt, FaMapMarkedAlt, FaCloudSun, FaRobot } from 'react-icons/fa';
import FiturPage from './FiturPage';
const CaraKerja = () => {
  const steps = [
    {
      icon: <FaUserAlt className="text-3xl text-green-600" />,
      title: 'Login & Akses Dashboard',
      description: 'Pengguna login atau daftar, lalu diarahkan ke dashboard utama.',
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-green-600" />,
      title: 'Deteksi Lokasi',
      description: 'Sistem mendeteksi lokasi otomatis atau manual melalui peta.',
    },
    {
      icon: <FaCloudSun className="text-3xl text-green-600" />,
      title: 'Ambil Data Tanah & Cuaca',
      description: 'Mengambil info tanah, suhu, dan musim dari API berdasarkan lokasi.',
    },
    {
      icon: <FaRobot className="text-3xl text-green-600" />,
      title: 'Konsultasi AI Pertanian',
      description: 'AI memberikan rekomendasi tanaman, pupuk, dan estimasi tanam/panen.',
    },
  ];

  return (
    <div className="px-6 py-12 bg-gray-100 flex flex-col rounded-[100px] shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Cara Kerja PetaniAI</h2>
      <div className="flex justify-center text-[19px] md:text-[30px] items-center mb-[30px]">
        <p className="text-black  Iam mr-3 font-bold">Fitur Unggulan</p>
        <FiturPage
          texts={['Konsultasi AI', 'Peta Interaktif', 'Simulasi Panen', 'Edukasi Pertanian']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-[#568A69] text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={'last'}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 ease-in-out hover:rounded-bl-[100px] hover:rounded-tr-[100px]">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaraKerja;
