/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import './header.css';
import Link from 'next/link';
import Modal from '@/components/AuthModal/modal';
import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FiMenu } from 'react-icons/fi';

interface HeaderProps {
  activeRoute: string;
}

const Header: React.FC<HeaderProps> = ({ activeRoute }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <Fragment>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <header className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-center py-3 px-6 sm:px-0 mt-3 sm:mt-0`}>
        <div className={`${isMobile ? 'mb-4' : 'ml-2'} z-10`}>
          <Link href="/">
            <img src="/BeemedBlack.svg" alt="Logo da Empresa" width={140} height={140} />
          </Link>
        </div>
        {isMobile ? (
          <div className="mt-4">
            <button onClick={handleOpenModal} className="text-black font-medium hover:underline">
              Login
            </button>
            <Link href="/cirurgias">
              <button className="text-black btn-procedimentos mt-4 font-NowAltRegular font-NowAlt-Black">
                Procedimentos
              </button>
            </Link>
            <button className="block sm:hidden text-black mt-4" onClick={toggleMenu}>
              <FiMenu size={24} />
            </button>
          </div>
        ) : (
          <div className="ml-9 flex gap-10 z-10">
            <Link className="mt-2" href="/sobre">
              <button
                className={`text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone ${
                  activeRoute === '/sobre' ? 'text-green-500' : 'text-black'
                }`}
              >
                Sobre
              </button>
            </Link>
            <Link className="mt-2" href="/medico">
              <button
                className={`text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone ${
                  activeRoute === '/medico' ? 'text-green-500' : 'text-black'
                }`}
              >
                Cadastro Médico
              </button>
            </Link>
            <Link className="mt-2" href="/clinico">
              <button className="text-black font-medium hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">
                Cadastro Clínicas/Hospitais
              </button>
            </Link>
            <button className="text-black font-medium mt-1 hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone" onClick={handleOpenModal}>
              Login
            </button>
            <Link className="mt-1" href="/cirurgias">
              <button className="text-black btn-procedimentos ml-5 font-NowAltRegular font-NowAlt-Black">Procedimentos</button>
            </Link>
          </div>
        )}
      </header>
    </Fragment>
  );
};

export default Header;
