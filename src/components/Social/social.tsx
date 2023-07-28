/* eslint-disable prettier/prettier */
import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const RedesSociais: React.FC = () => {
  return (
    <div className="z-20 rounded-s-[45px] bg-verde-social p-6 w-34 mt-[19%] float-right fixed top-0 right-0">
      <a href="https://wa.me/558173265915?text=Ol%C3%A1%20eu%20desejo%20falar%20com%20a%20Beemed." target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32} className="z-20 mb-5 text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
      <a href="https://www.instagram.com" target= "_blank" rel="noopener noreferrer">
        <FaInstagram size={32} className="z-20 mb-5 text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} className="z-20 text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
    </div>
  );
};

export default RedesSociais;
