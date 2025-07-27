import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './Component/Auth/Login';
import logo from './Component/Img/logo.png';
import About from './Component/About/About';
import CuacaCard from './Component/CuacaCard/CuacaCard';
import ScrollVelocity from './Component/ScrollVelo/ScrollVelo';
import Maps from './Component/Maps/Maps';
import CaraKerja from './Component/CaraKerja/CaraKerja';
import WhyUs from './Component/WhyUs/WhyUs';
import LogoPage from './Component/LogoScroll/LogoPage';
import Team from './Component/Team/Team';
import DashboardAdmin from './Component/Dashboard/Admin/Admin';
import api from './utils/api';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);
  const [IsOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const res = await api.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAuthenticated(true);
        setUser(res.data);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        console.warn('Unauthorized, removing token');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      } else {
        console.error('Other error:', err);
      }
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboardAdmin');
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
    window.location.reload();
    navigate('/');
  };
  useEffect(() => {
    checkAuth();
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const timer1 = setTimeout(() => setIsOpen(false), 1000);
    AOS.init({ duration: 1500, easing: 'linear', once: true });

    return () => {
      lenis.destroy();
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden dark:bg-[#568A69] ">
      {!isDashboard && <Navbars darkMode={darkMode} setDarkMode={setDarkMode} isAuthenticated={isAuthenticated} user={user} logout={logout} />}
      {loading ? (
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#BED1C5] z-50 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${IsOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <img src={logo} alt="Logo" className="h-40 w-auto animate-pulse" />
        </div>
      ) : (
        <Routes>
          <Route path="/dashboardAdmin/*" element={isAuthenticated && user?.role === 'admin' ? <DashboardAdmin setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /> : <Navigate to="/" />} />
          <Route
            path="/"
            element={
              <>
                <div
                  className={`fixed top-0 left-0 w-full h-screen bg-[#BED1C5] z-50 flex items-center justify-center transition-all duration-1000 ease-in-out transform ${IsOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
                >
                  <img src={logo} alt="Logo" className="h-40 w-auto animate-pulse" />
                </div>

                <Jumbotron />

                <div className="bg-white dark:bg-[#568A69] flex flex-col mt-[430px] md:mt-[130px] lg:mt-0 md:flex-row">
                  <CuacaCard darkMode={darkMode} setDarkMode={setDarkMode} isAuthenticated={isAuthenticated} user={user} logout={logout} />
                  <About />
                </div>
                <div className=" z-20 bg-white dark:bg-[#568A69]">
                  <ScrollVelocity texts={['Petani Cerdas, Hasil Maksimal', 'Teknologi Bertani yang Cerdas']} velocity={'50'} className="lg:h-24 text-black dark:text-white " />
                </div>

                <Maps />
                <div className="dark:bg-[#568A69]">
                  <CaraKerja />
                </div>
                <WhyUs />
                <LogoPage />
              </>
            }
          />
          <Route path="/team" element={<Team />} />
          <Route
            path="/login"
            element={
              isAuthenticated && user?.role === 'admin' ? (
                <Navigate to="/dashboardAdmin" />
              ) : isAuthenticated && user?.role === 'petani' ? (
                <Navigate to="/dashboardPetani" />
              ) : (
                <Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
              )
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
