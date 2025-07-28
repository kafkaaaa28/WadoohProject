import React from 'react';
import { useState, useEffect } from 'react';
import NavPetani from './NavPetani.jsx';
import { Routes, Route } from 'react-router-dom';
import DataBoardPetani from './DataBoard/DataBoardPetani.jsx';
import CekLembab from './CekLembap.jsx';
import CuacaBoard from './CuacaBoard.jsx';
import Artikel from './Artikel.jsx';
import Menanam from './Menanam.jsx';
import TanamanSaya from './TanamanSaya.jsx';
const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [Open, setOpen] = useState(true);

  return (
    <div
      className="min-h-screen 
                bg-gradient-to-t from-[#E3E5E6] to-[#8FB39E] 
                dark:from-[#345D47] dark:to-[#568A69]"
    >
      <NavPetani setIsAuthenticated={setIsAuthenticated} setUser={setUser} setOpen={setOpen} Open={Open} />
      <div className={` transition-all duration-300 ease-in-out  ${Open ? 'lg:ml-[255px]' : 'lg:ml-[80px]'}`}>
        <Routes>
          <Route index element={<DataBoardPetani Open={Open} />} />
          <Route path="ceklokasi" element={<CekLembab />} />
          <Route path="cuaca" element={<CuacaBoard />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="menanam" element={<Menanam />} />
          <Route path="tanaman-saya" element={<TanamanSaya />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
