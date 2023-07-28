/* eslint-disable prettier/prettier */
import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const exames: React.FC = () => {
  return (
    <div>
      <HeaderProced />
      <div className='flex flex-col md:flex-row justify-center items-center py-14 md:h-[33em]'>
        <div className='md:w-1/2 md:text-left md:ml-4'>
          <p className='text-3xl md:text-4xl text-center mx-6'>
            Ainda não estamos com exames <br/> disponíveis, agradecemos a compreensão <br/> enquanto trabalhamos para estabelecer os <br/> procedimentos necessários.
          </p>
        </div>
        <div className='md:w-1/2'>
          <img src="./vector2.svg" alt="vector" className='w-full' />
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default exames;
