import { useState } from 'react';
import { FaLeaf, FaSpinner } from 'react-icons/fa';
import api from '../../../utils/api';
const AddPlantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    harvest_duration: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fruits = ['Mangga', 'Apel', 'Pisang', 'Jeruk', 'Semangka', 'Anggur'];
  const vegetables = ['Bayam', 'Wortel', 'Kangkung', 'Brokoli', 'Kubis', 'Sawi'];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'category' && { name: '' }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await api.post('/plants', formData);

      setFormData({
        name: '',
        category: '',
        harvest_duration: '',
        description: '',
      });
      setSuccessMsg('Tanaman berhasil disimpan!');
    } catch (error) {
      setErrorMsg('Gagal menyimpan tanaman. Coba lagi.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const plantOptions = formData.category === 'Buah-buahan' ? fruits : formData.category === 'Sayuran' ? vegetables : [];

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-3">
        <FaLeaf className="text-green-600" />
        Tambah Tanaman
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <select name="category" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.category} onChange={handleChange} required>
            <option value="">-- Pilih Kategori --</option>
            <option value="Buah-buahan">Buah-buahan</option>
            <option value="Sayuran">Sayuran</option>
          </select>
        </div>

        {formData.category && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tanaman</label>
            <select name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.name} onChange={handleChange} required>
              <option value="">-- Pilih Nama Tanaman --</option>
              {plantOptions.map((plant) => (
                <option key={plant} value={plant}>
                  {plant}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lama Panen (hari)</label>
          <input
            type="number"
            name="harvest_duration"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.harvest_duration}
            onChange={handleChange}
            required
            placeholder="Contoh: 90"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea
            name="description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Tuliskan deskripsi singkat tentang tanaman..."
          />
        </div>

        <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2.5 px-4 rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-60">
          {loading ? <FaSpinner className="animate-spin" /> : 'Simpan Tanaman'}
        </button>
      </form>

      {successMsg && <p className="text-green-600 mt-4 text-sm">{successMsg}</p>}
      {errorMsg && <p className="text-red-600 mt-4 text-sm">{errorMsg}</p>}
    </div>
  );
};

export default AddPlantForm;
