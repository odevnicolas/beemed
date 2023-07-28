import React from 'react';
import Header2 from '@/components/Header2/header2';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import FormClinico from '@/components/Form-Clinico/form-clinico';

const Clinica: React.FC = () => {
  const activeRoute = '/clinico';

  return (
    <div>
      <Header2 activeRoute={activeRoute} />
      <div className="relative -mt-28 -z-50">
        <div className="">
          <img
            src="./banner.png"
            className="min-w-full lg:h-[650px] md:h-[700px] sm:h-[690px]"
            alt="Banner"
          />
          <Social />
          <div>
            <h2 className="text-colorGreen text-[26px] md:relative md:-mt-[520px] md:flex md:justify-end leading-10 font-bold font xl:mr-[120px] lg:text-sm lg:mr-[175px] md:text-sm md:mr-[90px] sm:text-sm sm:mr-[160px] sm:relative sm:-mt-[230px] sm:flex sm:justify-end">
              Nossa plataforma oferece
              <br />
              recursos exclusivos que podem levar
              <br />
              sua clínica ou hospital a outro
              <br />
              patamar de eficiência e qualidade.
            </h2>
            <p className="text-[20px]  md:mt-4 md:relative md:flex md:justify-end text-white font-normal leading-8 xl:mr-[120px] lg:text-sm lg:mr-[100px] md:text-sm md:mr-[15px] sm:text-sm sm:ml-[200px]">
              Se você é proprietário de uma clínica ou hospital,
              <br />
              sabe que manter uma rotatividade constante de
              <br />
              procedimentos cirúrgicos e uma ocupação
              <br />
              satisfatória das consultas e apartamentos é crucial
              <br />
              para o sucesso do seu negócio.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-auto h-auto py-10">
        <div className=" mt-60 mr-80 md:mt-80 md:mr-0 sm:mt-64 sm:mr-0">
          <FormClinico />
        </div>
        <div className=" float-right mr-56 md:invisible sm:invisible z-50">
          <img src="./medclinica.png" width={220} height={350} />
        </div>
      </div>
      <div className="bg-BackColor ">
        <div className="py-16 px-32 ">
          <img src="./medal.png" className="ml-24" width={65} height={80} />
          <div className="justify-center items-center">
            <h1 className="text-colorButton text-6xl ml-44 -mt-16 font-medium">
              Com Beemed
            </h1>
            <p className="ml-44 text-white text-xl leading-[60px] font-normal mt-6 sm:text-sm">
              Oferta de facilidade de pagamento para os seus pacientes
              <br />
              Enquanto oferece facilidade de pagamento ao paciente o médico
              recebe à vista
              <br />
              Tecnologia e inovação para agilizar a jornada do paciente
              <br />
              Total liberdade para definir seus próprios honorários, sem
              interferência da nossa equipe.
              <br />
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Clinica;
