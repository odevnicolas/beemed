import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const RedesSociais: React.FC = () => {
  return (
    <div className="rounded-s-[45px] bg-verde-social p-6 w-34 mt-[14%] float-right">
      <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={32} className="mb-5 text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} className="mb-5 text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} className="text-verde-social-icons hover:text-verde-social-icons-hover" />
      </a>
    </div>
  );
};

export default RedesSociais;
