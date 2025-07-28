import React, { useEffect, useState } from 'react';
import bg_login from '../Img/bg_login.png';
import logo from '../Img/logo.png';
import { useNavigate } from 'react-router-dom';
import Regis from './Regis';
import { Spinner } from 'flowbite-react';
import api from '../../utils/api';
const Login = ({ setIsAuthenticated, setUser }) => {
  const [animateGradient, setAnimateGradient] = useState(false);
  const [animasiRegis, setAnimasiRegis] = useState(false);
  const [delayedAnimasiRegis, setDelayedAnimasiRegis] = useState(false);
  const [loading, setLoading] = useState(false);
  const [IsOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [lihatPassword, setLihatpassword] = useState(false);
  const [fromData, setFromdata] = useState({
    email: '',
    password: '',
  });
  const { email, password } = fromData;
  const handelchange = (e) => {
    setFromdata({ ...fromData, [e.target.name]: e.target.value });
  };
  const handleLihatPassword = () => {
    setLihatpassword(!lihatPassword);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/auth/login', fromData);
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      setUser(response.data.user);
      setLoading(false);
      const userRole = response.data.user.role;
      setError('');
      setMessage(response.data.message || 'Login berhasil');
      setTimeout(() => {
        if (userRole === 'admin') {
          navigate('/dashboardAdmin');
        } else if (userRole === 'petani') {
          navigate('/dashboardPetani');
        }
      }, 100);

      setFromdata({
        email: '',
        password: '',
      });
    } catch (err) {
      setLoading(false);
      console.error('Login error:', err.response?.data || err.message);
      setMessage('');
      setError(err.response?.data?.message || 'Login Failed');
    }
  };

  useEffect(() => {
    let timeout;
    const timer1 = setTimeout(() => setIsOpen(false), 1000);

    if (animasiRegis) {
      timeout = setTimeout(() => {
        setDelayedAnimasiRegis(true);
      }, 1500);
    } else {
      timeout = setTimeout(() => {
        setDelayedAnimasiRegis(false);
      }, 1500);
    }

    setTimeout(() => {
      setAnimateGradient(true);
    }, 300);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timer1);
    };
  }, [animasiRegis]);

  return (
    <>
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#BED1C5]  z-50 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${IsOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <img src={logo} alt="Logo" className="h-40 w-auto animate-pulse" />
      </div>
      <div className="min-h-screen dark:bg-[#568A69] p-5">
        <div className="flex mt-[90px] flex-col lg:flex-row lg:mx-[150px]">
          <div
            style={{ backgroundImage: `url(${bg_login})` }}
            className={`w-full lg:w-[50%] shadow-lg z-40 flex items-center justify-center bg-center bg-cover  h-[20vh] lg:h-[75vh]  transform transition-all duration-1000 ${
              animasiRegis ? 'lg:translate-x-[36vw] rounded-tr-lg lg:rounded-br-lg rounded-br-[0px] rounded-tl-lg lg:rounded-tl-[0px]' : 'translate-x-0 rounded-tl-lg rounded-tr-lg lg:rounded-tr-[0px] lg:rounded-bl-lg'
            }`}
          >
            <div className="relative h-[140px] w-[140px]  lg:w-[200px] lg:h-[200px] rounded-[50%]">
              <div className="absolute inset-0 backdrop-blur-[50%] bg-white/30 rounded-[50%] z-0" />

              <img src={logo} alt="logo" className="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] relative z-10" />
            </div>
          </div>
          <div
            className={`w-full lg:w-[50%] flex gap-5 shadow-lg  h-[500px] lg:h-[75vh] justify-center items-center transform transition-all duration-1000 ease-out
    ${animateGradient ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
  ${delayedAnimasiRegis ? 'lg:-translate-x-[39vw] rounded-tl-lg rounded-bl-lg rounded-br-lg lg:rounded-br-[0px]' : '-translate-[20vw] rounded-tr-[0px] lg:rounded-tr-lg rounded-br-lg rounded-bl-lg lg:rounded-bl-[0px]'}`}
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(187,189,187,0.4) 50%, rgba(5,97,40,0.4) 100%)',
            }}
          >
            {delayedAnimasiRegis ? (
              <Regis setAnimasiRegis={setAnimasiRegis} animasiRegis={animasiRegis} setMessage={setMessage} setError={setError} message={message} error={error} />
            ) : (
              <div className="mx-[30px] text-focus-in flex flex-col items-center">
                {error && (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md mt-3 text-sm font-medium flex items-start gap-2">
                    <span>⚠️</span>
                    <p>{error}</p>
                  </div>
                )}
                <div className="mb-[30px] mt-[10px]">
                  <p className="text-[20px] font-bold text-black mb-[20px]">Login</p>
                  <p className="text-[13px]">Selamat Datang Di Petani AI !! Tolong Masuk Dengan Akun Anda </p>
                </div>

                <form onSubmit={handleLogin} className="  w-full ">
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
                      {loading ? 'Memuat...' : 'Login'}
                    </button>
                    <p className="text-[12px]">
                      Belum punya akun ?
                      <span onClick={() => setAnimasiRegis(true)} className="text-blue-400 cursor-pointer hover:text-blue-600 ml-2">
                        Daftar Sekarang
                      </span>
                      {animasiRegis && <Spinner color="success" aria-label="Success spinner example" className="w-[12px] h-[12px] ml-[10px] lg:hidden" />}
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
