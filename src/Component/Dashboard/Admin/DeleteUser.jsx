import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react';
const DeleteUser = ({ show, onClose, loading, onDelete, User, error }) => {
  const [formData, setFormData] = useState({ ...User });
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(User.id);
  };
  useEffect(() => {
    setFormData({ ...User });
  }, [User]);
  return (
    <Modal show={show} onClose={() => onClose(false)}>
      <ModalHeader className="bg-white">
        <h2 className="text-xl font-bold text-red-600 text-center">Hapus User</h2>
      </ModalHeader>
      <ModalBody className="bg-white">
        <p className="text-center text-gray-700">
          Apakah Anda yakin ingin menghapus User dari <span className="font-semibold">{formData.nama}</span>?
        </p>
      </ModalBody>
      {error && <h2 className="text-sm  text-red-600 text-center">{error}</h2>}
      <ModalFooter className="bg-white flex justify-end space-x-2">
        <Button color="gray" onClick={() => onClose(false)}>
          Batal
        </Button>
        <Button color="failure" onClick={handleDelete}>
          {loading ? 'Menghapus...' : 'hapus'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteUser;
