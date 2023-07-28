/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';

const Sobre: React.FC = () => {
  const activeRoute = '/sobre';

  return (
    <div>
      <Header activeRoute={activeRoute} />
      <Social />
      <div className="-z-20 relative">
        <img src="./beemed.png" className=" -z-30 -mt-[8%]" />
        <div className="relative -mt-[50%] py-8 z-0">
          <img src="./sobre.png" width={515} height={660} />
        </div>
        <div className=" flex justify-center items-center -mt-[47%] z-20">
          <img src="./tablet.svg" width={1000} height={280} />
        </div>
      </div>

      <div className="ml-[13%] mt-[18%] bg-[#9BF798]  rounded-3xl w-[71%] h-[1%] z-10">
        <div className=" px-[7%] py-[4%]">
          <p className="text-[16sp] leading-8 font-normal">
            A Beemed sonha em tornar as cirurgias e os
            <br /> procedimentos médicos acessíveis para mais pessoas. Para{' '}
            <br /> alcançar esse objetivo, a empresa negocia <br /> previamente
            com hospitais, médicos e laboratórios
            <br /> e oferece aos pacientes pacotes de procedimentos cirúrgicos
            <br /> e médicos com opções de pagamento facilitadas e valores mais
            atrativos.
          </p>
          <button className="text-black bg-[#FAFAFA] rounded-xl py-[0.8%] px-[0.8%] hover:bg-slate-300 mt-[2.5%] font-medium">
            Fale com a gente !
          </button>
          <div className=" float-right -mt-[29%] mr-[3%] ">
            <img
              src="./sobre-container.svg"
              alt=""
              width={250}
              height={1000}
              className=" rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className=" mt-[12%]">
        <Footer />
      </div>
    </div>
  );
};

export default Sobre;
