import React from "react";
import './Card.css';
import { SiCnn, SiNewyorktimes } from "react-icons/si";
import { FcBbc } from "react-icons/fc";
import berita_1 from '../../Img/berita_1.jpeg';
import berita_2 from '../../Img/berita_2.jpeg';
import berita_3 from '../../Img/berita_3.jpeg';

const CardNews = () => {
  const Items = [
    {
      gambar: berita_1,
      Animasi: 'fade-left',
      delay: '500',
      judul: 'Petani Jangan Resah, Koperasi Desa Merah Putih Siap Serap Hasil Panen',
      link: 'https://economy.okezone.com/read/2025/05/29/320/3143044/petani-jangan-resah-koperasi-desa-merah-putih-siap-serap-hasil-panennbsp',
    },
    {
      gambar: berita_2,
      Animasi: 'fade-left',
      delay: '1500',
      judul: 'Tertinggi Sepanjang Sejarah, Penyaluran Pupuk Subsidi Tembus 3 Juta Ton',
      link: 'https://economy.okezone.com/read/2025/06/22/320/3149309/tertinggi-sepanjang-sejarah-penyaluran-pupuk-subsidi-tembus-3-juta-ton',
    },
    {
      gambar: berita_3,
      Animasi: 'fade-left',
      delay: '2000',
      judul: 'Instruksi Prabowo, Deregulasi Pertanian Bisa Tingkatkan Kesejahteraan Petani',
      link: 'https://economy.okezone.com/read/2025/05/22/320/3141179/instruksi-prabowo-deregulasi-pertanian-bisa-tingkatkan-kesejahteraan-petani',
    }
  ];

  return (
    <div className="flex gap-4 flex-col md:flex-row ">
      {Items.map((item, index) => (
        <div key={index} className="card" data-aos={item.Animasi} data-aos-duration={item.delay}>
          <div
            className="top-section bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${item.gambar})`,
              backgroundSize: '100%',
              backgroundPosition: 'center bottom',
            }}
          >
            <div className="border"></div>
            <div className="icons">
              <div className="logo text-white font-bold">NEWS</div>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <SiCnn className="text-red-600 text-[24px]" />
            <FcBbc className="text-[24px]" />
            <SiNewyorktimes className="text-blue-400 text-[24px]" />
          </div>

          <div className="bottom-section mt-2">
            <span className="title text-black text-[12px] text-start block">
              {item.judul}
            </span>
            <div className="flex flex-col mt-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E6D3C] text-[10px] hover:bg-[#568A69] transition-all duration-300 ease-in-out rounded-lg p-2 text-white text-center"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNews;
