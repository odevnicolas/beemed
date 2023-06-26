import React from 'react';
import './header2.css';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';


const Header2: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 mt-4 z-40">
      <div className="ml-20">
        <Link href="/">
          <img src="/Banner-bg.png" alt="Logo da Empresa" width={140} height={140} />
        </Link>
      </div>
      <div className="ml-40 flex gap-10">
        <Link href="/sobre">
          <button className="btn mt-2 hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Sobre</button>
        </Link>
        <Link href="/medico">
          <button className="btn mt-2 hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Cadastro Médico</button>
        </Link>
        <Link href="/clinico">
          <button className="btn mt-2 hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Cadastro Clínicas/Hospitais</button>
        </Link>
        <Link href="/login">
          <button className="btn mt-2 hover:underline decoration-solid decoration-colorButton decoration-2 box-decoration-clone">Login</button>
        </Link>
        <Link href="/procedimentos">
          <button className="btn btn-procedimentos ml-5">Procedimentos</button>
        </Link>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header2;
