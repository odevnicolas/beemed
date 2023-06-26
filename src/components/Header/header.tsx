import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[1.3%] px-[2%] mt-[1.3%]">
      <div className="ml-[2%]">
        <img src="/logo.svg" alt="Logo da Empresa" width={140} height={140} />
      </div>
      <div className="ml-[9%] flex gap-10">
        <button className="text-black font-medium ">Sobre</button>
        <button className="text-black font-medium">Cadastro Médico</button>
        <button className="text-black font-medium">Cadastro Clínicas/Hospitais</button>
        <button className="text-black font-medium">Login</button>
        <button className="text-black btn-procedimentos ml-5">Procedimentos</button>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
