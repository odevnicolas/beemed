import React from 'react';
import '@/components/Footer/footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="mx-auto flex justify-center items-center">
      <div className="bg-footerColor w-[82%] rounded-t-[40px]">
        <div className="grid grid-cols-5 gap-5 m-[8px] mt-3">
          <div> 
            <img className="ml-2" src="./icone.svg" alt="Logo da Empresa" width={225} />  
          </div>
          <div>
            <button className="btn">Sobre</button>
            <button className="btn">Cadastro Médico</button>
            <button className="btn">Cadastro Clínico</button>
            <button className="btn">Blog</button>
          </div>
          <div className="relative mt-[60px]">
            <p className="text-white mb-2">Receba novidades!</p>
            <input id='Nemail' type="text" placeholder="seu melhor email" className="input rounded-[12px] text-gray-500 pl-3 pr-2 pt-0.5 pb-0.5 outline-none" />
          </div>
          <div>
            <img className="ml-2" src="./icone.svg" alt="Logo da Empresa" width={225} />  
          </div>
          <div>
            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="./Apple.svg" alt="Apple Store" className="mt-[4.2em] mb-2" width={105} />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="./Google.svg" alt="Play Store" className="" width={105} />
            </a>
          </div>
        </div>
        <div className="text-right text-gray-200 text-xs mr-[11em] mb-[50px]">
          <p>© 2023 Beemed HealthtechTecnologia LTDA. Todos os direitos reservados. CNPJ: 42.821.631/0001-11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
