/* eslint-disable prettier/prettier */
import React from 'react';
import Header2 from '@/components/Header2/header2';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import FormMedico from '@/components/Form-medico/form-medico'

const Medico: React.FC = () => {
  const activeRoute = '/medico';
  
  return (
    <div>
    <Header2 activeRoute={activeRoute} />
    <Social/>
    <div className="relative -mt-28 ">
      <div>
        <img src="./banner2.png" className='2xl:h-[1000px] 2xl:w-full lg:h-[1000px] md:h-[900px] sm:h-[1000px]'/>
        <div className=" -mt-[650px] ml-36 2xl:ml-96 sm:ml-24">
        <img src="med-banner.png" height={900} width={700} className="2xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[450px]"></img>
        </div>
        <div className="">
            <h2 className="text-colorGreen text-5xl mr-44 md:relative md:-mt-[200px] md:flex md:justify-end leading-[48px] font-normal 2xl:relative 2xl:-mt-[330px] 2xl:flex 2xl:justify-end 2xl:mr-80 lg:text-4xl lg:mr-16 md:text-3xl md:mr-0 sm:ml-56">
              Transforme <br/>a saúde conosco
            </h2>
            <p className=" text-2xl mr-40 md:mt-4 md:relative md:flex md:justify-end text-white font-normal leading-10 2xl:mt-4 2xl:relative 2xl:flex 2xl:justify-end 2xl:mr-72 lg:text-xl lg:mr-7 md:mr-0 md:text-sm sm:ml-56">
              Junte-se à comunidade de <br/>
              profissionais da Beemed <br/>
              e desfrute de benefícios <br/>
              exclusivos como médico parceiro!
            </p>
         </div>
         <img src="./letreiro.png" className=" mt-16 lg:mt-48 md:mt-52 sm:mt-0"/>
         <div className=" w-auto h-auto py-10">
          <div className=" mt-16 justify-center items-center">
[]       <FormMedico/>
      </div>
        </div>
        <div className=" bg-ColorFooter">
          <div className=" py-16 px-32">
            <img src='./medal.png' className="ml-24" width={65} height={80}/>
          <div className="justify-center items-center">
            <h1 className="text-colorButton text-6xl ml-44 -mt-16 font-medium">Com Beemed</h1>
           <p className="ml-44 text-white text-xl leading-[60px] font-normal mt-6 sm:text-base">
              Oferta de facilidade de pagamento para os seus pacientes<br/>

              Enquanto oferece facilidade de pagamento ao paciente o médico recebe à vista<br/>

              Tecnologia e inovação para agilizar a jornada do paciente<br/>

              Total liberdade para definir seus próprios honorários, sem interferência da nossa equipe.<br/>
             </p>
           </div>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Medico;