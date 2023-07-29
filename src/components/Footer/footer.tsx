/* eslint-disable prettier/prettier */
import React from 'react';
import 'tailwindcss/tailwind.css';


const Footer: React.FC = () => {
  return (
    <footer className=" mx-auto flex justify-center items-center">
      <div className=" md:h-auto z-10 bg-footerColor w-full md:w-[90%] rounded-t-[40px]">
        <div className="z-10 grid md:grid-cols-5 gap-5 m-[1%]">
          <div className="flex flex-col items-center justify-center lg:-mt[40%]">
            <img className="z-10 ml-10 mt-[30%] lg:mt-[15%] sm:mt-0 sm:mx-auto" src="./BeemedLogoC.svg" alt="Logo da Empresa" width={225} />
          </div>
          <div className="z-10 items-center flex flex-col mt-3  lg:mt-6 md:mt-0 md:ml-[20%] lg:flex lg:flex-col lg:items-start">
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Sobre</button>
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Cadastro Médico</button>
            <button className="z-10 mb-2 text-white hover:text-colorGreen">Cadastro Clínico</button>
            <button className="z-10 text-white hover:text-colorGreen">Blog</button>
          </div>
          <div className="z-10 lg:relative lg:mt-6 mt-[5%] md:mt-0 md:ml-1">
            <p className="z-10 text-white mb-2 text-center text-lg lg:text-start lg:text-base">Receba novidades!</p>
            <div className="z-10 flex justify-center items-center lg:justify-start ml-14 lg:ml-0">
              <input
                type="text"
                placeholder="seu melhor email"
                className=" input rounded-[25px] text-gray-500 pl-3 pr-8 pt-1 pb-1 outline-none drop-shadow-[0_7px_8px_rgba(155,247,152,0.60)] lg:mt-1 mt-[5%] "
              />
              <button className="z-20 mt-[5%] -ml-[8%]  lg:absolute lg:right-[-60%] lg:top-[27%] lg:transform lg:-translate-y-1/2  lg:mt-5">
                <img src="./send.svg" alt="send" width="27%" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center  lg:ml-[50%]">
            <img className="z-10 w-[139px] " src="./icone.svg" alt="Logo da Empresa"/>
          </div>
          <div className="flex flex-col items-center justify-center lg:-mt-[15%]">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="./Google.svg" alt="Play Store" className="z-10 lg:mt-[4.2em] -mt-[4%] mb-2"/>
            </a>
            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="./Apple.svg" alt="Apple Store" className="z-10"  />
            </a>
          </div>
        </div>
        <div className="z-10 lg:text-center lg:mt-8 md:text-right text-gray-200 lg:text-xs md:mr-[11em] lg:ml-[40%] text-xs text-center mt-5">
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
