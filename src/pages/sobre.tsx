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
        <div className="relative 2xl:-mt-[50%] py-8 xl:-mt-[50%] lg:-mt-[50%] md:-mt-[50%] sm:-mt-[50%] xsm:-mt-[50%] z-0">
          <img src="./sobre.png" width={515} height={660} />
        <div className="flex justify-center items-center 2xl:-mt-[45rem] 2xl:z-99 xl:z-99 xl:-mt-[45rem] lg:-mt-[45rem] lg:z-20 md:-mt-[45rem] sm:-mt-[35rem] xsm:-mt-[35rem] md:z-20">
          <img src="./tablet.svg" width={1000} height={280} />
        </div>
        </div>
      </div>

      <div className="ml-[13%] 2xl:mt-[18%] xl:mt-[18%] lg:mt-[18%] md:mt-[25%] sm:mt-[35%] xsm:mt-[45%] bg-[#9BF798]  rounded-3xl w-[71%] h-[1%] z-10">
        <div className=" px-[7%] py-[4%]">
          <p className="text-[16px] leading-8 font-normal 2xl:text-xl xl:text-sm">
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
          <div className=" float-right -mt-[29%] mr-[3%] xl:mr-0 2xl:visible xl:visible lg:invisible md:invisible sm:invisible xsm:invisible">
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
