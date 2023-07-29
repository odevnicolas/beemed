/* eslint-disable prettier/prettier */
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
      <div className="relative -mt-28">
        <div
          style={{
            backgroundImage: 'url(/banner.png)',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full 2xl:h-[45rem] xl:h-[45rem] lg:h-[47rem] md:h-[49rem] sm:h-[49rem] flex items-center justify-center bg-[#212720]"
        >
          <Social />
          <div className="2xl:ml-[25rem] 2xl:mt-0 xl:mt-0 xl:ml-[40rem] lg:ml-[10rem] lg:mt-[30rem] md:mt-[30rem] sm:mt-[30rem]">
            <h2 className="text-colorGreen lg:text-base">
              Nossa plataforma oferece
              <br />
              recursos exclusivos que podem levar
              <br />
              sua clínica ou hospital a outro
              <br />
              patamar de eficiência e qualidade.
            </h2>
            <p className="text-white lg:text-sm">
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
        <div className=" 2xl:mt-[10rem] 2xl:mr-0 ">
          <FormClinico />
        </div>
        <div className="absolute 2xl:right-[20rem] 2xl:top-[35rem] xl:right-[10rem] xl:top-[35rem] lg:invisible md:invisible sm:invisible">
          <img src="./medclinica.png" width={220} height={350} />
        </div>
      </div>
      <div className="bg-BackColor">
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
