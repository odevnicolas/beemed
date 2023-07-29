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
        <div 
        style={{
          backgroundImage: "url(/Banner2.png)"
        }}
        className="w-full 2xl:h-[75rem] xl:h-[70rem] flex items-center justify-center">
        <img src="./Med-banner.png" className="2xl:w-[50rem] xl:w-[40rem] lg:w-[30rem] md:w-[25rem] sm:w-[25rem] ssm:w-[17rem]"/>
        <div className="ml-10 ssm:ml-4">
            <h2 className="text-colorGreen 2xl:text-5xl md:text-3xl sm:text-2xl ssm:text-xl">
              Transforme <br/>a saúde conosco
            </h2>
            <p className=" 2xl:text-2xl text-white md:text-base sm:text-sm ssm:text-[1rem]">
              Junte-se à comunidade de <br/>
              profissionais da Beemed <br/>
              e desfrute de benefícios <br/>
              exclusivos como médico parceiro!
            </p>
         </div>
        </div>

         <img src="./Letreiro.png" className="absolute 2xl:top-[55rem] xl:top-[50rem] lg:top-[63rem] md:top-[66rem] sm:top-[68rem] ssm:top-[70rem]"/>
         <div className=" w-auto h-auto py-10">
          <div className=" mt-16 justify-center items-center">
[]       <FormMedico/>
      </div>
        </div>
        <div className=" bg-ColorFooter">
          <div className=" py-16 px-32">
            <img src='./Medal.png' className="ml-24" width={65} height={80}/>
          <div className="justify-center items-center">
            <h1 className="text-colorButton text-6xl ml-44 -mt-16 font-medium acer:font-normal">Com Beemed</h1>
           <p className="ml-44 text-white text-xl leading-[60px] font-normal mt-6 sm:text-base ssm:text-sm">
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