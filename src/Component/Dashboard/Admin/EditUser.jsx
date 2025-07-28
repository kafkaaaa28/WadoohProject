import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'flowbite-react';

const ModalEdit = ({ data, onUpdate, modalEdit, loading, setModalEdit, error }) => {
  const [formData, setFormData] = useState({ ...data });
  useEffect(() => {
    setFormData({ ...data });
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(data.id, formData);
  };

  return (
    <Modal show={modalEdit} onClose={() => setModalEdit(false)}>
      <ModalHeader className="bg-white">
        <h2 className="text-xl font-bold text-black ">Edit User</h2>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </ModalHeader>
      <ModalBody className="bg-white">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="nama" className="block mb-1 font-medium">
              Nama:
            </label>
            <input type="text" id="nama" name="nama" value={formData.nama} onChange={handleChange} placeholder="Nama" required className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email:
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Role
            </label>
            <select id="role" name="pekerjaan" value={formData.role} onChange={handleChange} required className="rounded-lg w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="petani">Petani</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded hover:bg-teal-600">
            {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ModalEdit;
