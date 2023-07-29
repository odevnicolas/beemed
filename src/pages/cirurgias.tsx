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

  const handleButtonClick = (procedure: string) => {
    const phoneNumber = '558173265915';
    const message = `Olá tenho interesse no procedimento cirúrgico de ${procedure}.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
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
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Abdominoplastia + Lipo + Mastopexia</h3>
          <button onClick={() => handleButtonClick('Abdominoplastia + Lipo + Mastopexia')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Abdominoplastia c/ lipo </h3>
          <button onClick={() => handleButtonClick('Abdominoplastia c/ lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Abdominoplastia c/ lipo (Anestesia Geral)</h3>
          <button onClick={() => handleButtonClick('Abdominoplastia c/ lipo (Anestesia Geral)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Blefaroplastia (pálpebras)</h3>
          <button onClick={() => handleButtonClick('Blefaroplastia (pálpebras)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Braquioplastia c/ mini lipo</h3>
          <button onClick={() => handleButtonClick('Braquioplastia c/ mini lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Coxoplastia c/ mini lipo</h3>
          <button onClick={() => handleButtonClick('Coxoplastia c/ mini lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Implante capilar fue</h3>
          <button onClick={() => handleButtonClick('Implante capilar fue')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Lipoaspiração</h3>
          <button onClick={() => handleButtonClick('Lipoaspiração')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Mamoplastia / Mastopexia</h3>
          <button onClick={() => handleButtonClick('Mamoplastia / Mastopexia')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Mamoplastia/ Mamoplastia c/ lipo</h3>
          <button onClick={() => handleButtonClick('Mamoplastia/ Mamoplastia c/ lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Mamoplastia ou Mastopexia c/ protese de mama</h3>
          <button onClick={() => handleButtonClick('Mamoplastia ou Mastopexia c/ protese de mama')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Miniabdomem c/ lipo</h3>
          <button onClick={() => handleButtonClick('Miniabdomem c/ lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Otoplastia</h3>
          <button onClick={() => handleButtonClick('Otoplastia')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Prótese de mama</h3>
          <button onClick={() => handleButtonClick('Prótese de mama')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Protese de mama c/ lipo</h3>
          <button onClick={() => handleButtonClick('Protese de mama c/ lipo')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Rinoplastia (Anestesia Geral)</h3>
          <button onClick={() => handleButtonClick('Rinoplastia (Anestesia Geral)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>



        
      </div>
      <Footer />
    </div>
  );
};

export default Cirurgias;
