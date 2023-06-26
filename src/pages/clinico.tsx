import React from 'react';
import Header2 from '@/components/Header2/header2';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import FormClinico from '@/components/Form-Clinico/form-clinico'

const Clinica: React.FC = () => {
  return ( 
    <div>
      <Header2 />
      <div className="relative -mt-28 -z-10">
       <div className="">
        <img src="./banner.png" className="min-w-full" alt='Banner'/>
        <Social/>
          <div>
            <h2 className="text-colorGreen text-[26px] md:mr-[160px] md:relative md:-mt-[520px] md:flex md:justify-end leading-10 font-bold">
                Nossa plataforma oferece<br />recursos exclusivos que podem levar<br />sua clínica ou hospital a outro<br />patamar de eficiência e qualidade.
            </h2>
            <p className="text-[20px] md:mr-[170px] md:mt-4 md:relative md:flex md:justify-end text-white font-normal leading-8">
                Se você é proprietário de uma clínica ou hospital,<br />sabe que manter uma rotatividade constante de<br />procedimentos cirúrgicos e uma ocupação<br />satisfatória das consultas e apartamentos é crucial<br />para o sucesso do seu negócio.
            </p>
         </div>
        </div>
      </div>
        <div className=" w-auto h-auto py-10">
          <div className=" mt-60 mr-80">
            <FormClinico/>
          </div>
          <div className=" float-right mr-56 md:-mt-[480px] ">
            <img src='./medclinica.png' width={220} height={350}/>
          </div>
        </div>
        <div className="bg-BackColor">
          <div className=" py-16 px-32">
            <img src='./medal.png' className="ml-24 -z-50" width={65} height={80}/>
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
  );
};

export default Clinica;