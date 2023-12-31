/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import Proced from '@/components/TipoProced/proced';
import FormHome from '@/components/FormHome/form-home';
import Link from 'next/link';

const Home: React.FC = () => {
  const activeRote = '/';
  return (
    <div>
      <Header activeRoute={activeRote} />
      <Social />
      <Proced />
      <div className=" mt-[52%] mb-[5%] ml-[13%] bg-[#9BF798]  rounded-3xl w-[75%] h-[20rem]">
        <div className=" px-20 py-10">
          <p className="text-[16sp] leading-8 font-normal text-black">
            A Beemed sonha em tornar as cirurgias e os
            <br /> procedimentos médicos acessíveis para mais pessoas. Para{' '}
            <br /> alcançar esse objetivo, a empresa negocia <br /> previamente
            com hospitais, médicos e laboratórios
            <br /> e oferece aos pacientes pacotes de procedimentos cirúrgicos
            <br /> e médicos com opções de pagamento facilitadas e valores mais
            atrativos.
          </p>
          <button className="text-black bg-[#FAFAFA] rounded-xl py-1 px-2 hover:bg-slate-300 mt-[3%] font-medium">
            Fale com a gente !
          </button>
          <div className=" float-right -mt-[32%] ml-10  ">
            <img
              src="./Phone5.svg"
              alt=""
              width={400}
              height={100}
              className=" rounded-3x -mr-4"
            />
          </div>
        </div>
      </div>
      <div className="relative ml-[2%]">
        <img
          src="./Flayer.svg"
          width={1200}
          height={1100}
          className="inset-0 z-0 -mt-10"
        />
        <div className="absolute inset-0 flex flex-col justify-start">
          <img src="./Texto.svg" width={1470} className="z-0 -mt-[17%]" />
          <div className="ml-10 px-20 py-20 -mt-[20%]">
            <h1 className="text-colorButton text-6xl font-medium">
              Benefícios
            </h1>
            <p className="text-[18px] leading-10 font-normal text-[#585858] mt-5">
              Sabemos o quanto pode ser desafiador
              <br /> encontrar alternativas de qualidade ao SUS <br /> ou aos
              planos de saúde tradicionais. É por <br /> isso que criamos uma
              solução inovadora <br /> para revolucionar o setor da saúde e
              <br /> atender às necessidades dos pacientes mais necessitados.
            </p>
            <div className=" float-right -mt-[35%] ml-[48%]">
              <img
                src="./Doll.svg"
                alt=""
                width={700}
                height={500}
                className=""
              />
              <h1 className="text-colorButton text-3xl font-medium text-center -mt-[6%]">
                Sem longas filas
              </h1>
              <p className="text-[#585858] text-[16px] text-center mt-[4%]">
                Adeus às esperas intermináveis por um <br /> atendimento médico
                de qualidade.
              </p>
            </div>
            <div className=" mt-[15%] ml-[12%] mb-5 bg-[#9BF798]  rounded-3xl w-[1070px] h-[500px]">
              <div className=" px-20 py-14">
                <div className="float-right -ml-[40%]">
                  <h1 className="text-[60px] leading-[70px] text-black font-semibold">
                    Faça seu <br /> cadastro <br /> agora
                  </h1>
                  <p className=" mt-6 text-1xl text-[#585858] leading-7">
                    Não espere mais para cuidar <br /> da sua saúde! Faça o seu{' '}
                    <br /> cadastro conosco e tenha <br /> acesso aos melhores
                    serviços <br /> médicos do mercado.
                  </p>
                  <Link href="/cirurgias">
                  <button className="text-black bg-[#FAFAFA] rounded-xl py-1 px-2 hover:bg-slate-300 mt-5 font-medium">
                    Procedimentos
                  </button>
                  </Link>
                </div>
                <div className=" float-left -mt-[10%] -ml-48">
                  <img
                    src="./Woman.svg"
                    alt=""
                    width={800}
                    height={500}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[23%] justify-center items-center">
        <FormHome />
      </div>

      <div className=" mt-[12%]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
