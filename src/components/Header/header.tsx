"use client"
import React, { useState } from 'react';
import './header.css';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import Modal from '@/components/AuthModal/modal';


const Header = () => {
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
    <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%] z-50">
      <div className="ml-[2%]">
      <Link href="/">
        <img src="/logo.svg" alt="Logo da Empresa" width={140} height={140} />
      </Link>
      </div>
      <div className="ml-[9%] flex gap-10">
      <Link className='mt-[2%]' href="/sobre">
        <button className="text-black font-medium ">Sobre</button>
      </Link>
      <Link className='mt-[2%]' href="/medico">
        <button className="text-black font-medium">Cadastro Médico</button>
      </Link>
      <Link className='mt-[2%]' href="/clinico"> 
        <button className="text-black font-medium">Cadastro Clínicas/Hospitais</button>
      </Link>  
        <button className="text-black font-medium mt-[1%]" onClick={handleOpenModal}>Login</button>
      <Link className='mt-[1.2%]'href="/procedimentos">
        <button className="text-black btn-procedimentos ml-5">Procedimentos</button>
      </Link>  
      </div>
      <div>
      </div>
    </header>
  </Fragment>
  );
};

export default Header;
