import React from 'react';
import './header.css';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';


const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%]">
      <div className="ml-[2%]">
      <Link href="/">
        <img src="/logo.svg" alt="Logo da Empresa" width={140} height={140} />
      </Link>
      </div>
      <div className="ml-[9%] flex gap-10">
      <Link href="/sobre">
        <button className="text-black font-medium ">Sobre</button>
      </Link>
      <Link href="/medico">
        <button className="text-black font-medium">Cadastro Médico</button>
      </Link> 
      <Link href="/clinico">
        <button className="text-black font-medium">Cadastro Clínicas/Hospitais</button>
      </Link>
      <Link href="/login">
        <button className="text-black font-medium">Login</button>
      </Link>  
      <Link href="/procedimentos">
        <button className="text-black btn-procedimentos ml-5">Procedimentos</button>
      </Link>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
