import { FaLightbulb, FaMapMarkedAlt, FaRobot, FaLeaf } from 'react-icons/fa';

const features = [
  {
    icon: <FaLightbulb className="text-6xl text-green-700  opacity-20" />,
    title: 'Solusi Cerdas',
    desc: 'AI memberikan saran tanam yang akurat berdasarkan lokasi dan cuaca terkini.',
  },
  {
    icon: <FaMapMarkedAlt className="text-6xl text-green-800  opacity-20" />,
    title: 'Peta Interaktif',
    desc: 'Pilih lokasi secara manual atau otomatis untuk hasil personalisasi maksimal.',
  },
  {
    icon: <FaRobot className="text-6xl text-green-800 opacity-20" />,
    title: 'Teknologi Modern',
    desc: 'Analisis tanah & cuaca dengan pendekatan berbasis data mutakhir.',
  },
  {
    icon: <FaLeaf className="text-6xl text-green-800 opacity-20" />,
    title: 'Mudah Digunakan',
    desc: 'Dirancang untuk semua kalangan, dari petani tradisional hingga generasi digital.',
  },
];

const WhyUs = () => {
  return (
    <div className="py-20 lg:px-[100px]   dark:bg-[#568A69]">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-16 dark:text-white">Kenapa Harus Memilih Kami?</h2>

      <div className="flex flex-col  gap-12">
        {features.map((item, index) => (
          <div key={index} className={`flex flex-col  md:flex-row items-center gap-6 md:gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="relative bg-green-100 md:mx-[50px] hover:text-green-700 hover:bg-green-200 transition-all duration-300 w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-lg">{item.icon}</div>

            <div className="max-w-md text-center mx-3 md:text-left">
              <h3 className="text-xl font-semibold text-green-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
