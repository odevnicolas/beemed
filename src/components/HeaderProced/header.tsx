/* eslint-disable prettier/prettier */
import { useState } from 'react';
import './header.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { FiMenu } from 'react-icons/fi';

const HeaderProced = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const headerClass = classNames('flex flex-col', {
    'items-center': isMobile,
    'sm:flex-row': !isMobile,
  });

  const logoClass = classNames('mt-5 z-10', {
    '-mb-6': isMobile,
    'ml-2': !isMobile,
  });

  const linkContainerClass = classNames('flex', {
    'flex-col mt-4 -mb-2': isMobile,
    'gap-10': !isMobile,
  });

  const homeButtonClass = classNames('mt-5', {
    'sm:mt-8 text-center text-lg mr-5': isMobile,
  });

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={`justify-between py-4 px-6 md:px-10 lg:px-16 ${headerClass}`}>
      <div className={`${logoClass}`}>
        <Link href="/">
          <img src="/BeemedBlack.svg" alt="Logo da Empresa" width={140} height={140} />
        </Link>
      </div>
      {isMobile && (
        <button onClick={toggleMenu} className="block sm:hidden text-black mt-10 -mb-7">
          <FiMenu size={24} />
        </button>
      )}
      <div className={`${linkContainerClass} z-10 ${isMobile && !isMenuOpen && 'hidden sm:flex'}`}>
        <Link className={`mt-7 ${router.pathname === '/cirurgias' ? 'underline text-green-500' : 'hover:underline'}`} href="/cirurgias">
          <button className={`text-black font-medium ${router.pathname === '/cirurgias' ? 'text-green-500' : 'hover:underline'}`}>Cirurgias</button>
        </Link>
        <Link className={`mt-7 ${router.pathname === '/estetica' ? 'underline text-green-500' : ''}`} href="/estetica">
          <button className={`text-black font-medium ${router.pathname === '/estetica' ? 'text-green-500' : 'hover:underline'}`}>Estética</button>
        </Link>
        <Link className={`mt-7 ${router.pathname === '/exames' ? 'underline text-green-500' : ''}`} href="/exames"> 
          <button className={`text-black font-medium ${router.pathname === '/exames' ? 'text-green-500' : 'hover:underline'}`}>Exames</button>
        </Link>  
        <Link className={`mt-7 ${router.pathname === '/odontologia' ? 'underline text-green-500' : ''}`} href="/odontologia"> 
          <button className={`text-black font-medium ${router.pathname === '/odontologia' ? 'text-green-500' : 'hover:underline'}`}>Odontologia</button>
        </Link>  
        <Link className={`mt-7 ${router.pathname === '/telemedicina' ? 'underline text-green-500' : ''}`} href="/telemedicina"> 
          <button className={`text-black font-medium ${router.pathname === '/telemedicina' ? 'text-green-500' : 'hover:underline'}`}>Telemedicina</button>
        </Link>  
      </div>
      <div className={`${homeButtonClass} ${isMobile && !isMenuOpen && 'hidden sm:block'}`}>
        <Link href="/">
          <button className="text-black btn-procedimentos ml-5 font-NowAltRegular">Tela inicial</button>
        </Link>  
      </div>
    </header>
  );
};

export default HeaderProced;
