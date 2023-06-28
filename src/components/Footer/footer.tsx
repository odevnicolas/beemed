import React from 'react';
import 'tailwindcss/tailwind.css';


const Footer: React.FC = () => {
  return (
    <footer className="relative mx-auto flex justify-center items-center">
      <div className=" z-10 bg-footerColor w-[90%] rounded-t-[40px]">
        <div className="z-10 grid grid-cols-5 gap-5 m-[1%]">
          <div>
            <img className="z-10 ml-10 mt-[35%]" src="./BeemedLogoC.svg" alt="Logo da Empresa" width={225} />
          </div>
          <div className="z-10 ml-[20%] mt-[24%] flex flex-col items-start">
            <button className="z-10 mb-2 text-white">Sobre</button>
            <button className="z-10 mb-2 text-white">Cadastro Médico</button>
            <button className="z-10 mb-2 text-white">Cadastro Clínico</button>
            <button className="z-10 text-white">Blog</button>
          </div>
          <div className="z-10 relative mt-[22%] ml-1">
            <p className="z-10 text-white mb-2">Receba novidades!</p>
            <div className="z-10 flex">
              <input
                type="text"
                placeholder="seu melhor email"
                className="z-10 input rounded-[25px] text-gray-500 pl-3 pr-8 pt-1 pb-1 outline-none drop-shadow-[0_7px_8px_rgba(155,247,152,0.60)]"
              />
              <button className="z-10 ml-2 absolute right-[-36%] top-[27%] transform -translate-y-1/2">
                <img src="./send.svg" alt="send" width="27%" />
              </button>
            </div>
          </div>
          <div>
            <img className="z-10 ml-6" src="./icone.svg" alt="Logo da Empresa" width="95%" />
          </div>
          <div>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="./Google.svg" alt="Play Store" className="z-10 mt-[4.2em] mb-2" width="44%" />
            </a>
            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="./Apple.svg" alt="Apple Store" className="z-10" width="44%" />
            </a>
          </div>
        </div>
        <div className="z-10 text-right text-gray-200 text-xs mr-[11em]">
          <p>© 2023 Beemed HealthtechTecnologia LTDA. Todos os direitos reservados. CNPJ: 42.821.631/0001-11</p>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img className=" -z-20 mt-[-14%]" src="./sobfooter.svg" alt="footerback" width="60%" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
