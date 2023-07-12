"use client"
import React, { useState } from 'react';
import './header.css';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import Modal from '@/components/AuthModal/modal';

interface HeaderProps {
  activeRoute: string;
}


const Header: React.FC<HeaderProps> = ({activeRoute}) => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
  <Fragment>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
    <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%]">
      <div className="ml-[2%] z-10">
      <Link href="/">
        <img src="/BeemedBlack.svg" alt="Logo da Empresa" width={140} height={140} />
      </Link>
      </div>
      <div className="ml-[9%] flex gap-10 z-10">
      <Link className="mt-[2%]" href="/sobre">
        <button className={`text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone ${activeRoute === '/sobre' ? 'text-green-500' : 'text-black'}`}>Sobre</button>
      </Link>
      <Link className="mt-[2%]"  href="/medico">
        <button className="text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Cadastro Médico</button>
      </Link>
      <Link className="mt-[2%]" href="/clinico"> 
        <button className="text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Cadastro Clínicas/Hospitais</button>
      </Link>  
        <button className="text-black font-medium mt-[1%] hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone" onClick={handleOpenModal}>Login</button>
      <Link className='mt-[1.2%]'href="/cirurgias">
        <button className="text-black btn-procedimentos ml-5 font-NowAltRegular font-NowAlt-Black">Procedimentos</button>
      </Link>  
      </div>
      <div>
      </div>
    </header>
  </Fragment>
  );
};

export default Header;
