import react, { useState } from 'react';
import { Spinner } from 'flowbite-react';
import api from '../../utils/api';
import ModalMessage from './ModalMessage';

const Regis = ({ setAnimasiRegis, animasiRegis, setMessage, setError, message, error }) => {
  const [loading, setLoading] = useState(false);

  const [OpenModal, setOpenmodal] = useState(false);
  const [fromData, setFromdata] = useState({
    nama: '',
    email: '',
    password: '',
  });
  const { nama, email, password } = fromData;
  const handelchange = (e) => {
    setFromdata({ ...fromData, [e.target.name]: e.target.value });
  };
  const handleRegis = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', fromData);
      setMessage(response.data.message || 'Register berhasil');
      setOpenmodal(true);
      setLoading(false);
      setError('');

      setFromdata({
        nama: '',
        email: '',
        password: '',
      });
    } catch (err) {
      setOpenmodal(true);
      setLoading(false);
      console.error('Registration error:', err);
      setMessage('');
      setError('Registration failed');
    }
  };
  return (
    <>
      <div className="text-focus-in mt-[30px]">
        <p className="font-bold text-center">Registrasi</p>
        <form onSubmit={handleRegis} className=" w-full">
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handelchange}
              className="bg-gray-50 border shadow-lg border-gray-300 w-[85%] text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
              placeholder="Masukkan Email"
              required
            />
          </div>
          <div className="mb-5">
            <label for="username" className="block mb-2 text-sm font-medium text-gray-900 ">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="nama"
              value={nama}
              onChange={handelchange}
              className="bg-gray-50 border shadow-lg border-gray-300 w-[85%] text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
              placeholder="Masukkan Username"
              required
            />
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handelchange}
              className="bg-gray-50 border shadow-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 w-[85%]"
              placeholder="Masukkan Password"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="bg-white w-[125px] shadow-lg rounded-[40px] h-[40px] hover:bg-[#568A69] text-[#377A51] hover:text-white hover:shadow-lg transition ease-in-out duration-300">
              {loading ? 'Mendaftar..' : 'daftar'}
            </button>
            <p className="text-[12px]">
              Sudah Punya Akun ?{' '}
              <span onClick={() => setAnimasiRegis(false)} className="text-blue-400 cursor-pointer hover:text-blue-600">
                Login
              </span>
              {!animasiRegis && <Spinner color="success" aria-label="Success spinner example" className="w-[12px] h-[12px] ml-[10px] lg:hidden" />}
            </p>
          </div>
        </form>
      </div>
      <ModalMessage openModal={OpenModal} setOpenModal={setOpenmodal} message={message} error={error} setAnimasiRegis={setAnimasiRegis} />
    </>
  );
};
export default Regis;
