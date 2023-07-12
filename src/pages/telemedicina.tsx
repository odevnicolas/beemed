import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const telemedicina: React.FC = () => {
  return (
  <div>
    <HeaderProced />
      <div className='flex justify-center items-center py-14'>
        <div className=' float-left'>
          <p className=' text-3xl ml-6 text-center'>Ainda não estamos com o serviço de <br/> telemedicina disponível, agradecemos a <br/> compreensão enquanto trabalhamos para <br/> estabelecer os procedimentos necessários.</p>
        </div>
        <div className=' float-right'>
          <img src="./vector3.svg" alt="vector" width={500} />
        </div>
      </div>
      <div className='mt-20'>
        <Footer />
      </div>
  </div>
  );
};

export default telemedicina;