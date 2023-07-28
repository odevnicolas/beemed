import React, { useState } from 'react';
import './header2.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import Modal from '@/components/AuthModal/modal';

interface HeaderProps {
  activeRoute: string;
}

const Header2: React.FC<HeaderProps> = ({ activeRoute }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%] sm:px-0">
        <div className="ml-[2%] z-10">
          <Link href="/">
            <img
              src="/Banner-bg.png"
              alt="Logo da Empresa"
              width={140}
              height={140}
            />
          </Link>
        </div>
        <div className="ml-[9%] flex gap-10 z-10">
          <Link href="/sobre">
            <button className="btn mt-[35%] hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">
              Sobre
            </button>
          </Link>
          <Link href="/medico">
            <button
              className={`text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone ${
                activeRoute === '/medico' ? 'text-green-500' : 'text-white'
              } btn mt-[13%]`}
            >
              Cadastro Médico
            </button>
          </Link>
          <Link href="/clinico">
            <button
              className={`text-black font-medium btn mt-[9%] hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone ${
                activeRoute === '/clinico' ? 'text-green-500' : 'text-white'
              } `}
            >
              Cadastro Clínicas/Hospitais
            </button>
          </Link>
          <button
            className="btn mt-[2%] hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone"
            onClick={handleOpenModal}
          >
            Login
          </button>
          <Link href="/cirurgias">
            <button className="btn btn-procedimentos mt-[5%]">
              Procedimentos
            </button>
          </Link>
        </div>
        <div></div>
      </header>
    </Fragment>
  );
};

export default Header2;
