import React, { useState, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import api from '../../../utils/api';
import { Spinner } from 'flowbite-react';
import DeleteUser from './DeleteUser';

const Message = () => {
  const [DataUser, setDataUser] = useState([]);
  const [selectedUser, setSelectedUSer] = useState(null);
  const [error, setError] = useState('');
  const [OpenModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <>
      <div className="p-6">
        <div className="bg-[#D1D5DB] dark:bg-[#80A794] rounded-lg p-6">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-black dark:text-white">
              <thead className="text-xs border-b border-gray-600 uppercase bg-[#D1D5DB] dark:bg-[#80A794] text-black dark:text-white">
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
                    <tr key={data.id} className="bg-[#D1D5DB] rounded-lg dark:bg-[#80A794] hover:bg-gray-300 dark:hover:bg-[#6b967e] border-b border-gray-600 transition-colors">
                      <td className="px-6 py-4 font-medium">{data.email}</td>
                      <td className="px-6 py-4">{data.nama}</td>
                      <td className="px-6 py-4">{data.role}</td>
                      <td className="flex px-6 py-4">
                        <button type="button" onClick={() => handleDelete(data)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                          <AiFillDelete />
                        </button>

                        <button type="button" onClick={() => handleDelete(data)} className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
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
    </>
  );
};

export default Message;
