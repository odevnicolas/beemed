import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';

const Sobre: React.FC = () => {
  return (
    <div>
    <Header />
    <Social />
      <div className="-z-20 relative">
        <img src="./beemed.png" className=" -z-20 -mt-28"/>
         <div className="relative -mt-[650px] py-8 -z-30">
          <img src="./sobre.png" width={515} height={660}/>
        </div>
        <div className=" flex justify-center items-center -mt-[700px] z-50">
          <img src="./tablet.svg" width={1000} height={280}/>
        </div>
      </div>

      <div className=" mt-40 ml-36 mb-5 bg-[#9BF798]  rounded-3xl w-[1070px] h-80">
        <div className=" px-20 py-14">
          <p className="text-[16px] leading-8 font-normal">
            A Beemed sonha em tornar as cirurgias e os<br/> procedimentos médicos acessíveis para mais pessoas. Para <br/> alcançar esse objetivo, a empresa negocia <br/> previamente com hospitais, médicos e laboratórios<br/> e oferece aos pacientes pacotes de procedimentos cirúrgicos<br/> e médicos com opções de pagamento facilitadas e valores mais atrativos.
          </p>
          <button className="text-black bg-[#FAFAFA] rounded-xl py-1 px-2 hover:bg-slate-300 mt-5 font-medium">
            Fale com a gente !
          </button>
          <div className=" float-right -mt-[270px] mr-16 ">
            <img src="./sobre-container.svg" alt="" width={250} height={1000} className=" rounded-3xl"/>
          </div>
        </div>
      </div>
    <div className="py-16">
    <Footer />
    </div>
    </div>
  );
};

export default Sobre;