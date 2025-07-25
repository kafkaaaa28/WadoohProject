import React from 'react';
import './Card.css';
import { SiCnn, SiNewyorktimes } from 'react-icons/si';
import { FcBbc } from 'react-icons/fc';
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
      gambar: berita_3,
      Animasi: 'fade-left',
      delay: '500',
      judul: 'Instruksi Prabowo, Deregulasi Pertanian Bisa Tingkatkan Kesejahteraan Petani',
      link: 'https://economy.okezone.com/read/2025/05/22/320/3141179/instruksi-prabowo-deregulasi-pertanian-bisa-tingkatkan-kesejahteraan-petani',
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {Items.map((item, index) => {
        return (
          <a
            key={index}
            href={item.link}
            className="group relative w-[360px] h-[200px] cursor-pointer flex flex-col items-end justify-end bg-center rounded-lg bg-no-repeat bg-[length:100%] transition-all duration-500 ease-in-out hover:bg-[length:110%]"
            style={{ backgroundImage: `url('${item.gambar}')` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-lg transition-colors duration-500 group-hover:bg-black/0"></div>

            <p className="relative z-10 text-white px-3 font-bold">{item.judul}</p>
            <div className="relative z-10 w-full flex gap-5 mb-[10px] px-4">
              <SiCnn className="text-red-600 text-[30px]" />
              <FcBbc className="text-[30px]" />
              <SiNewyorktimes className="text-blue-600 text-[30px]" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default CardNews;
