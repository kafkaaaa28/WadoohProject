import { FaLeaf, FaMapMarkedAlt, FaChartLine, FaBookOpen } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    title: 'Konsultasi AI',
    desc: 'Saran tanaman dan pupuk otomatis berbasis cuaca dan tanah terkini.',
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-4xl" />,
    title: 'Peta Interaktif',
    desc: 'Lihat informasi tanah dan cuaca real-time dari berbagai wilayah.',
  },
  {
    icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    title: 'Simulasi Panen',
    desc: 'Prediksi masa tanam hingga panen dengan model agrikultur data-driven.',
  },
  {
    icon: <FaBookOpen className="text-purple-600 text-4xl" />,
    title: 'Edukasi Pertanian',
    desc: 'Panduan bertani modern & artikel edukatif untuk semua kalangan.',
  },
];

const FeaturesPageModern = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b   from-green-50 tofrom-white">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
          Fitur Unggulan
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Teknologi pintar yang membantu petani mengoptimalkan hasil panen dan informasi pertanian.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl p-8 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute -top-6 -right-6 opacity-10 text-[120px] group-hover:opacity-20 transition">
              {feature.icon}
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPageModern;
