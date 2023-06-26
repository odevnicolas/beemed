import React from 'react';
import Header2 from '@/components/Header2/header2';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import FormMedico from '@/components/Form-medico/form-medico'

const Medico: React.FC = () => {
  return (
    <div>
    <Header2 />
    <Social/>
    <div className="relative -mt-28 -z-10">
      <div>
        <img src="./banner2.png"/>
        <div className=" -mt-[650px] ml-36">
        <img src="med-banner.png" height={900} width={700} className="-z-50"></img>
        </div>
        <div className="z-50">
            <h2 className="text-colorGreen text-5xl mr-44 md:relative md:-mt-[330px] md:flex md:justify-end leading-[48px] font-normal">
              Transforme <br/>a saúde conosco
            </h2>
            <p className=" text-2xl mr-40 md:mt-4 md:relative md:flex md:justify-end text-white font-normal leading-10">
              Junte-se à comunidade de <br/>
              profissionais da Beemed <br/>
              e desfrute de benefícios <br/>
              exclusivos como médico parceiro!
            </p>
         </div>
         <img src="./letreiro.png" className=" mt-16"/>
         <div className=" w-auto h-auto py-10">
          <div className=" mt-16 justify-center items-center">
            <FormMedico/>
          </div>
        </div>
        <div className=" bg-ColorFooter">
          <div className=" py-16 px-32">
            <img src='./medal.png' className="ml-24" width={65} height={80}/>
          <div className="justify-center items-center">
            <h1 className="text-colorButton text-6xl ml-44 -mt-16 font-medium">Com Beemed</h1>
           <p className="ml-44 text-white text-xl leading-[60px] font-normal mt-6">
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