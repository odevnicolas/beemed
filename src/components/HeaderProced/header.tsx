/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import './header.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

const HeaderProced = () => {
  const router = useRouter();

  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <header className={`flex flex-col ${isMobile ? 'items-center' : 'sm:flex-row'} justify-between py-4 px-6 md:px-10 lg:px-16`}>
      <div className={`${isMobile ? '-mb-6' : 'ml-2'} mt-5 z-10`}>
        <Link href="/">
          <img src="/BeemedBlack.svg" alt="Logo da Empresa" width={140} height={140} />
        </Link>
      </div>
      <div className={`flex ${isMobile ? 'flex-col mt-4 mb-3' : 'gap-10'} z-10`}>
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
      <div className={`mt-5 ${isMobile ? 'sm:mt-10' : ''}`}>
        <Link href="/">
          <button className="text-black btn-procedimentos ml-5 font-NowAltRegular">Tela inicial</button>
        </Link>  
      </div>
    </header>
  );
};

export default HeaderProced;
