import React from 'react';
import { useState, useEffect } from 'react';
import NavAdmin from './NavAdmin.jsx';
import { Routes, Route } from 'react-router-dom';
import DataBoardAdmin from './DataBoardAdmin.jsx';
import User from './User.jsx';
import TambahTanaman from './TambahTanaman.jsx';
import DataTanaman from './DataTanaman.jsx';
const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [Open, setOpen] = useState(true);

  return (
    <div
      className="min-h-screen 
                bg-gradient-to-t from-[#E3E5E6] to-[#8FB39E] 
                dark:from-[#345D47] dark:to-[#568A69]"
    >
      <NavAdmin setIsAuthenticated={setIsAuthenticated} setUser={setUser} setOpen={setOpen} Open={Open} />
      <div className={` transition-all duration-300 ease-in-out  ${Open ? 'lg:ml-[255px]' : 'lg:ml-[80px]'}`}>
        <Routes>
          <Route index element={<DataBoardAdmin />} />
          <Route path="/user" element={<User />} />
          <Route path="/tambahtanaman" element={<TambahTanaman />} />
          <Route path="/datatanaman" element={<DataTanaman />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
