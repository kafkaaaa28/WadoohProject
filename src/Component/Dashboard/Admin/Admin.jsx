import React from 'react';
import { useState, useEffect } from 'react';
import NavAdmin from './NavAdmin.jsx';
import { Routes, Route } from 'react-router-dom';
import DataBoardAdmin from './DataBoardAdmin.jsx';
import User from './User.jsx';
const Dashboard = ({ setIsAuthenticated, setUser }) => {
  const [Open, setOpen] = useState(true);

  return (
    <div className="h-screen dark:bg-[#568A69] bg-white">
      <NavAdmin setIsAuthenticated={setIsAuthenticated} setUser={setUser} setOpen={setOpen} Open={Open} />
      <div className={` transition-all duration-300 ease-in-out  ${Open ? 'lg:ml-[255px]' : 'lg:ml-[80px]'}`}>
        <Routes>
          <Route index element={<DataBoardAdmin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
