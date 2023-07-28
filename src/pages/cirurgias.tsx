/* eslint-disable prettier/prettier */
import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const Cirurgias: React.FC = () => {

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = '0 0 10px rgb(155, 247, 152)';
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = 'none';
  };

return (
    <div>
      <HeaderProced />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 md:ml-4 md:mr-4 md:mb-7 z-20'>

        <div
          className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Blefaroplastia (pálpebras)</h3>
          <img src='/imagem3.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$200</p>
          <button className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>



        
      </div>
      <Footer />
    </div>
  );
};

export default Cirurgias;
