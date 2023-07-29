/* eslint-disable prettier/prettier */
import React from 'react';
import Footer from '@/components/Footer/footer';
import HeaderProced from '@/components/HeaderProced/header';


const estetica: React.FC = () => {

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
    const message = `Olá tenho interesse no procedimento estético de ${procedure}.`;
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
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Botox</h3>
          <button onClick={() => handleButtonClick('Botox')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Botox e preenchimento(3 ampolas)</h3>
          <button onClick={() => handleButtonClick('Botox e preenchimento(3 ampolas)')}  className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Botox e preenchimento (5 ampolas)</h3>
          <button onClick={() => handleButtonClick('Botox e preenchimento (5 ampolas)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Botox e Radiesse facial</h3>
          <button onClick={() => handleButtonClick('Botox e Radiesse facial')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>
        
        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Botox anual (3 aplicações em 12 meses)</h3>
          <button onClick={() => handleButtonClick('Botox anual (3 aplicações em 12 meses)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Radiesse glúteo (3 ampolas)</h3>
          <button onClick={() => handleButtonClick('Radiesse glúteo (3 ampolas)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Bioestimulação facial(Radiesse)</h3>
          <button onClick={() => handleButtonClick('Bioestimulação facial(Radiesse)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Harmonização facial(3 ampolas)</h3>
          <button onClick={() => handleButtonClick('Harmonização facial(3 ampolas)')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Transplante capilar</h3>
          <button onClick={() => handleButtonClick('Transplante capilar')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2 h-20'>Cirurgia plástica</h3>
          <button onClick={() => handleButtonClick('Cirurgia plástica')} className='bg-green-400 rounded-3xl mt-4 h-10 w-full text-white shadow-[0_0px_6px_1px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-green-400 hover:bg-white hover:shadow-[0_0px_7px_2px_rgba(0,0,0,0.4)]'>Tenho interesse</button>
        </div>



        
      </div>
      <Footer />
    </div>
  );
};

export default estetica;
