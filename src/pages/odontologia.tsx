/* eslint-disable prettier/prettier */
import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const Odontologia: React.FC = () => {
  return (
    <div>
    <HeaderProced />
    <div className='flex flex-col md:flex-row justify-center items-center py-14 md:h-[33em]'>
      <div className='md:w-1/2 md:text-left md:ml-4'>
        <p className='text-3xl md:text-4xl text-center mx-6'>Ainda não estamos com o serviços <br/> odontológicos disponíveis, agradecemos a <br/> compreensão enquanto trabalhamos para <br/> estabelecer os procedimentos necessários.</p>
      </div>
      <div className='md:w-1/2'>
        <img src="./vector.svg" alt="vector" width={500} />
      </div>
    </div>
    <div className='mt-20'>
      <Footer />
    </div>
    </div>
  );
};

export default Odontologia;