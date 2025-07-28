import React from 'react';
import { useState, useEffect } from 'react';
import NavPetani from './NavPetani.jsx';
import { Routes, Route } from 'react-router-dom';
import DataBoardPetani from './DataBoard/DataBoardPetani.jsx';
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
          <Route index element={<DataBoardPetani />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
