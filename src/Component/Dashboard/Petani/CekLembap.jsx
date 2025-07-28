// components/SoilCheckForm.jsx
import React, { useState } from 'react';
import api from '../../../utils/api';
import { Spinner } from 'flowbite-react';
import { FiMapPin, FiDroplet, FiThermometer, FiActivity, FiDatabase } from 'react-icons/fi';
import { FaThermometer } from 'react-icons/fa';
const SoilCheckForm = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/petani/ceklembab', { location });
      setResult(res.data);
    } catch (error) {
      console.error('Gagal mengambil data:', error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-8 mt-10 bg-white/60 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl transition-all">
      <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">Cek Kondisi Tanah</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Masukkan lokasi (contoh: Bandung)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button type="submit" className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition duration-300" disabled={loading}>
          {loading ? 'Memuat...' : 'Cek Sekarang'}
          {loading && <Spinner size="sm" />}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-5 rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Hasil Analisis Lokasi</h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li className="flex items-center gap-3">
              <FiMapPin className="text-green-600" size={18} />
              <span>
                <strong>Koordinat:</strong> {result.coordinates.lat}, {result.coordinates.lng}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiThermometer className="text-red-500" size={18} />
              <span>
                <strong>Suhu:</strong> {result.weather.temp}°C
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiDroplet className="text-blue-500" size={18} />
              <span>
                <strong>Kelembaban:</strong> {result.weather.humidity}%
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiActivity className="text-purple-500" size={18} />
              <span>
                <strong>Tekanan:</strong> {result.weather.pressure} hPa
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaThermometer className="text-yellow-600" size={18} />
              <span>
                <strong>pH Tanah:</strong> {result.soil.phh2o?.mean?.[0] ?? 'Tidak tersedia'}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiDatabase className="text-indigo-500" size={18} />
              <span>
                <strong>Bulk Density:</strong> {result.soil.bdod?.mean?.[0] ?? 'Tidak tersedia'} kg/m³
              </span>
            </li>
          </ul>
        </div>
      )}

      {result && (
        <div className="mt-6 text-sm text-gray-600 text-center">
          Ingin tahu <strong>rekomendasi tanaman</strong> terbaik di lokasi Anda?
          <span className="text-green-600 font-medium ml-2 cursor-pointer hover:underline">Tanyakan ke Petani AI</span>
        </div>
      )}
    </div>
  );
};

export default SoilCheckForm;
