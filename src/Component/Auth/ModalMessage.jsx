import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { useState } from 'react';
import { VscError } from 'react-icons/vsc';
import { FaCheck } from 'react-icons/fa';
const ModalMessage = ({ message, error, setOpenModal, openModal, setAnimasiRegis }) => {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Pesan !!!</ModalHeader>
        <ModalBody>
          <div className="p-4 md:p-5 space-y-4 flex flex-col justify-center items-center">
            {error ? (
              <>
                <VscError className="text-[50px]" />
                <p className="text-base leading-relaxed text-gray-700 ">{error}</p>
              </>
            ) : message ? (
              <>
                <FaCheck className="text-[50px]" />
                <p className="text-base leading-relaxed text-gray-700 ">{message}</p>
              </>
            ) : null}
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-[#2DD4BF] hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => {
                setOpenModal(false);
                setAnimasiRegis(false);
              }}
            >
              I accept
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default ModalMessage;
