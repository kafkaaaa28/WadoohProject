import react, { useState, useEffect } from 'react';
import tentang from '../Img/Gemini_Generated_Image_ly38r5ly38r5ly38.png';
import tentang2 from '../Img/Gemini_Generated_Image_ly38r5ly38r5ly3JD.png';
const About = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="  lg:mt-[70px] flex flex-col gap-2 lg:w-[55%]">
      <div className="flex gap-2 flex-col md:h-[600px]  lg:h-auto md:w-[470px] lg:w-auto lg:flex-row justify-evenly w-full items-center ">
        <div className="shadow-lg  rounded-lg">
          <img src={tentang} className="h-[250px] w-[250px] rounded-lg" />
        </div>
        <div className="w-[350px] text-center">
          <p className="font-semibold text-gray-700">
            Layanan konsultasi pertanian berbasis data dengan rekomendasi tanaman, pupuk, dan waktu tanam terbaik sesuai lokasi dan kondisi cuaca.
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-col  lg:mt-0 md:-translate-x-[390px] lg:translate-x-0 md:w-screen lg:w-auto md:flex-row justify-evenly  w-full  items-center">
        {IsMobile ? (
          <>
            <div className="bg-gray-200 shadow-lg w-[250px] my-[20px] rounded-lg">
              <img src={tentang2} className="h-[250px] w-[250px] rounded-lg" />
            </div>
             <div className="w-[350px] text-center">
            <p className="font-semibold text-gray-700">
              Fitur peta interaktif, simulasi panen, dan artikel edukatif membantu petani memahami pertanian modern dengan cara yang mudah dan cepat.
            </p>
          </div>
          </>
        ) : (
          <>
             <div className="w-[350px] text-center">
            <p className="font-semibold text-gray-700">
              Fitur peta interaktif, simulasi panen, dan artikel edukatif membantu petani memahami pertanian modern dengan cara yang mudah dan cepat.
            </p>
          </div>
            <div className="bg-gray-200 shadow-lg w-[250px] rounded-lg">
              <img src={tentang2} className="h-[250px] w-[250px] rounded-lg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
