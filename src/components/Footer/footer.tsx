/* eslint-disable prettier/prettier */
import React from 'react';
import 'tailwindcss/tailwind.css';


const Footer: React.FC = () => {
  return (
    <footer className="relative mx-auto flex justify-center items-center">
      <div className=" md:h-auto z-10 bg-footerColor w-full md:w-[90%] rounded-t-[40px]">
        <div className="z-10 grid md:grid-cols-5 gap-5 m-[1%]">
          <div className="lg:flex lg:flex-col lg:justify-center md:flex md:flex-col md:justify-center flex justify-center items-center -mt-[10%]">
            <img className="z-10 ml-10 mt-[35%] sm:mt-0 sm:mx-auto" src="./BeemedLogoC.svg" alt="Logo da Empresa" width={225} />
          </div>
          <div className="z-10 items-center flex flex-col mt-3  lg:mt-6 md:mt-0 md:ml-[20%] lg:flex lg:flex-col lg:items-start">
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Sobre</button>
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Cadastro Médico</button>
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Cadastro Clínico</button>
            <button className="z-10 text-white hover:text-colorGreen">Blog</button>
          </div>
          <div className="z-10 lg:relative lg:mt-6 md:mt-0 md:ml-1">
            <p className="z-10 text-white mb-2 text-center text-2xl lg:text-start lg:text-xl">Receba novidades!</p>
            <div className="z-10 flex justify-center items-center lg:justify-start">
              <input
                type="text"
                placeholder="seu melhor email"
                className="z-10 input rounded-[25px] text-gray-500 pl-3 pr-8 pt-1 pb-1 outline-none drop-shadow-[0_7px_8px_rgba(155,247,152,0.60)] lg:mt-1 mt-[5%] "
              />
              <button className="z-10 -ml-7 lg:ml-2 lg:absolute lg:right-[-36%] lg:top-[27%] lg:transform lg:-translate-y-1/2">
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
        <div className="z-10 text-center md:text-right text-gray-200 text-xs md:mr-[11em]">
          <p>© 2023 Beemed HealthtechTecnologia LTDA. Todos os direitos reservados. CNPJ: 42.821.631/0001-11</p>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <img className=" -z-40 mt-[-14%]" src="./sobfooter.svg" alt="footerback" width="60%" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
