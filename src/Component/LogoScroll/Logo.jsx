import React from 'react';

const partners = [
  {
    name: 'AgriCorp',
    color: 'from-white to-blue-400',
    textColor: 'text-blue-600',
    logo: 'https://agricorp.com.ni/wp-content/uploads/elementor/thumbs/Logo_Agricorp_512_512_3-pd7guz51a0yea2u2jnlz4ciexhwslm0xkfcqx5l728.png',
  },
  {
    name: 'Dinas Pertanian',
    color: 'from-white to-yellow-300',
    textColor: '',
    logo: 'https://3.bp.blogspot.com/-ZR4sh4hV6G0/VuYdu4vWcuI/AAAAAAAACCU/B8ntqCFtLd8lXZHOeh9DVaFuKZBpwS-Pw/s1600/dinas%2Bpertanian.png',
  },
  {
    name: 'Tani Nusantara',
    color: 'from-white to-green-300',
    textColor: '',
    logo: 'https://taninusantara.id/wp-content/uploads/2020/08/Tani-Nusantara-Logo.png',
  },
  {
    name: 'Agro Sejahtera',
    color: 'from-white to-[#76AD2D]',
    textColor: '',
    logo: 'https://www.jualpohonbesar.com/wp-content/uploads/2019/09/Logo-Agro-Sejahtera.png',
  },
  {
    name: 'Green Field',
    color: 'from-white to-[#572600]',
    textColor: '',
    logo: 'https://seeklogo.com/images/G/greenfield-logo-F876060BDA-seeklogo.com.png',
  },
];

const Logo = () => {
  return (
    <div className="flex justify-center gap-5 p-6">
      {partners.map((partner, index) => (
        <div key={index} className={`flex items-center gap-3 bg-gradient-to-r ${partner.color} shadow-md  p-4 rounded-lg w-full h-20`}>
          <img src={partner.logo} alt={partner.name} className="w-14 h-12 object-contain rounded-lg" />
          <p className="text-white flex flex-wrap font-semibold text-lg">
            <span className={partner.textColor}>{partner.name.split(' ')[0]}</span> {partner.name.split(' ').slice(1).join(' ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Logo;
