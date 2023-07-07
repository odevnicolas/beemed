import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const exames: React.FC = () => {
  return (
  <div>
    <HeaderProced />
    <div className='flex justify-center items-center py-14'>
      <div className=' float-left'>
        <p className=' text-3xl ml-6 text-center'>Ainda não estamos com exames <br/> disponíveis, agradecemos a compreensão <br/> enquanto trabalhamos para estabelecer os <br/> procedimentos necessários.</p>
      </div>
      <div className=' float-right'>
        <img src="./vector2.svg" alt="vector" width={500} />
      </div>
    </div>
    <div className='mt-20'>
      <Footer />
    </div>
  </div>
  );
};

export default exames;