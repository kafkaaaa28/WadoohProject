import React, { useState, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import api from '../../../utils/api';
import { Spinner } from 'flowbite-react';
import DeleteUser from './DeleteUser';
import ModalEdit from './EditUser';
const Message = () => {
  const [DataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUSer] = useState(null);
  const [error, setError] = useState('');
  const [OpenModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [fetchMessage, setfetchMessage] = useState(true);
  const getMessage = async () => {
    try {
      const res = await api.get('/users');
      setfetchMessage(false);
      setDataUser(res.data);
    } catch (err) {
      setfetchMessage(false);
      console.log(err.response?.data?.DataUser || 'gagal ambil User');
    }
  };
  const HapusUser = async (id) => {
    setLoading(true);
    try {
      const res = await api.delete(`/users/${id}`);
      setDataUser(DataUser.filter((data) => data.id !== id));
      setLoading(false);
      setOpenModal(false);

      await getMessage();
    } catch (err) {
      console.log(err.res?.data?.massage || 'Gagal hapus User');
      setError('Gagal Menghapus User');
      setLoading(false);
    }
  };
  const handleDelete = (data) => {
    setSelectedUSer(data);
    setOpenModal(true);
  };
  const handleEditClick = (data) => {
    setSelectedUSer(data);
    setModalEdit(true);
    console.log('l');
  };
  const handleUpdate = async (id, updatedData) => {
    setLoading(true);
    try {
      const res = await api.put(`/users/${id}`, updatedData);
      setDataUser(DataUser.map((p) => (p.id === id ? res.data : p)));
      setLoading(false);
      await getMessage();
      setModalEdit(false);
      setError('');
    } catch (err) {
      console.error(err.response?.data?.message || 'Gagal memperbarui data');
      setLoading(false);
      setError(`Gagal Memperbarui Data User`);
    }
  };
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0.4)_0%,rgba(187,189,187,0.4)_50%,rgba(5,97,40,0.4)_100%)] dark:bg-[#80A794] rounded-lg p-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
              <thead className="text-xs border-b border-gray-600 uppercase  text-black dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {fetchMessage ? (
                  <tr>
                    <td colSpan="4" className="px-6 py-3 text-center">
                      <Spinner color="info" aria-label="Info spinner example" />
                    </td>
                  </tr>
                ) : (
                  DataUser.map((data) => (
                    <tr key={data.id} className=" hover:bg-gray-300 dark:hover:bg-[#6b967e] border-b border-gray-600 transition-colors">
                      <td className="px-6 py-4 font-medium">{data.email}</td>
                      <td className="px-6 py-4">{data.nama}</td>
                      <td className="px-6 py-4">{data.role}</td>
                      <td className="flex px-6 py-4">
                        <button type="button" onClick={() => handleDelete(data)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                          <AiFillDelete />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEditClick(data)}
                          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          <AiFillEdit />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeleteUser show={OpenModal} onClose={setOpenModal} User={selectedUser} loading={loading} onDelete={HapusUser} error={error} />
      <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} data={selectedUser} loading={loading} onUpdate={handleUpdate} error={error} />
    </>
  );
};

export default Message;
