import React from 'react';
import './header.css';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';

const HeaderProced = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%]">
      <div className="ml-[2%] z-10">
        <Link href="/">
          <img src="/BeemedBlack.svg" alt="Logo da Empresa" width={140} height={140} />
        </Link>
      </div>
      <div className="flex gap-10 z-10">
        <Link className={`mt-[2%] ${router.pathname === '/cirurgias' ? 'underline text-green-500' : ''}`} href="/cirurgias">
          <button className={`text-black font-medium ${router.pathname === '/cirurgias' ? 'text-green-500' : ''}`}>Cirurgias</button>
        </Link>
        <Link className={`mt-[2%] ${router.pathname === '/estetica' ? 'underline text-green-500' : ''}`} href="/estetica">
          <button className={`text-black font-medium ${router.pathname === '/estetica' ? 'text-green-500' : ''}`}>Estética</button>
        </Link>
        <Link className={`mt-[2%] ${router.pathname === '/exames' ? 'underline text-green-500' : ''}`} href="/exames"> 
          <button className={`text-black font-medium ${router.pathname === '/exames' ? 'text-green-500' : ''}`}>Exames</button>
        </Link>  
        <Link className={`mt-[2%] ${router.pathname === '/odontologia' ? 'underline text-green-500' : ''}`} href="/odontologia"> 
          <button className={`text-black font-medium ${router.pathname === '/odontologia' ? 'text-green-500' : ''}`}>Odontologia</button>
        </Link>  
        <Link className={`mt-[2%] ${router.pathname === '/telemedicina' ? 'underline text-green-500' : ''}`} href="/telemedicina"> 
          <button className={`text-black font-medium ${router.pathname === '/telemedicina' ? 'text-green-500' : ''}`}>Telemedicina</button>
        </Link>  
      </div>
      <div>
        <Link href="/">
          <div className='mr-8'>
          <FaHome size={35} className='text-[#568654] mt-5 icon transition-all duration-500 transform hover:scale-125 hover:text-green-500' />
          </div>
        </Link>  
      </div>
    </header>
  );
};

export default HeaderProced;
