import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 mt-4">
      <div className="ml-20">
        <img src="/logo.svg" alt="Logo da Empresa" width={140} height={140} />
      </div>
      <div className="ml-40 flex gap-10">
        <button className="btn">Sobre</button>
        <button className="btn">Cadastro Médico</button>
        <button className="btn">Cadastro Clínicas/Hospitais</button>
        <button className="btn">Login</button>
        <button className="btn btn-procedimentos ml-5">Procedimentos</button>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
