import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import { Routes , Route} from 'react-router-dom'
import Login from './Component/Auth/Login';
import About from './Component/About/About';
import CuacaCard from './Component/CuacaCard/CuacaCard';
function App() {
    useEffect(() => {
    AOS.init({ duration: 1500, easing: 'linear', once: true });
  }, []);
  return (
    <div className='min-h-screen overflow-x-hidden relative'>
   <Navbars/> 
<Routes>
  <Route path='/' element={
  <>
    <Jumbotron />
    <CuacaCard />
    <About />
  </>
} />

  <Route path='/login' element={<Login/>} />
</Routes>
    </div>
  )
}

export default App;
