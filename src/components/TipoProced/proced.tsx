/* eslint-disable prettier/prettier */
"use client"
import React from 'react';
import 'tailwindcss/tailwind.css';
import Carousel from '@/components/Carosel/carousel'
import Link from 'next/link';

const images = [
  './Carrossel1.svg',
  './Carrossel2.svg',
  './Carrossel3.svg',
];

const TipoProced: React.FC = () => {
  return (
    <div className="float-right w-[45%] mr-8 -mt-[2%] p-10">
      <div className=" float-left  -ml-[141.5%] mt-[-15%] -z-50">
       <Carousel 
       images={images}
       imageClassName="2xl:h-[44rem] xl:h-[44rem] lg:h-[40rem] md:h-[25rem] sm:h-[20rem]"
       imageStyle={{ objectFit: 'cover'}}
       />
      </div>
      <p className="text-center ml-[10%] text-[18px] text-ContainerFrase">Qual procedimento você precisa?</p>
      <div className="grid grid-cols-2 gap-8 mt-5">
      <Link href="/cirurgias">
        <button className="bg-ContainerProced1 text-ContainerFraseProced 2xl:h-[11.1rem] 2xl:w-[11.1rem] xl:h-[8rem] xl:w-[8rem] lg:h-[6.5rem] lg:w-[6.5rem] md:h-[5.8rem] md:w-[5.8rem] sm:h-[4.6rem] sm:w-[4.6rem] sm:rounded-lg md:rounded-lg rounded-[35px] mt-4 ml-[46%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110 ">
          <img src="./Cirurgias.svg" alt="" className="w-[50%] h-auto mt-3 transition duration-150 ease-out hover:ease-in" />
          <p className="2xl:mt-8 xl:mt-2  text-center">Cirurgias</p>
        </button>
      </Link>
      <Link href="/estetica">
        <button className="bg-ContainerProced2 text-ContainerFraseProced 2xl:h-[11.1rem] 2xl:w-[11.1rem] xl:h-[8rem] xl:w-[8rem] lg:h-[6.5rem] lg:w-[6.5rem] md:h-[5.8rem] md:w-[5.8rem] sm:h-[4.6rem] sm:w-[4.6rem] sm:rounded-lg md:rounded-lg rounded-[35px] mt-4 ml-[12%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
          <img src="./Estética.svg" alt="" className="w-[50%] h-auto mr-2 mt-3" />
          <p className="2xl:mt-8 xl:mt-2  text-center">Estética</p>
        </button>
        </Link>
        <Link href="/exames">
          <button className="bg-ContainerProced2 text-ContainerFraseProced 2xl:h-[11.1rem] 2xl:w-[11.1rem] xl:h-[8rem] xl:w-[8rem] lg:h-[6.5rem] lg:w-[6.5rem] md:h-[5.8rem] md:w-[5.8rem] sm:h-[4.6rem] sm:w-[4.6rem] sm:rounded-lg rounded-[35px] mt-2 ml-[46%] md:rounded-lg flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
            <img src="./Exames.svg" alt="" className="w-[50%] h-auto mt-3" />
            <p className="2xl:mt-8 xl:mt-2  text-center">Exames</p>
          </button>
        </Link>
        <Link href="/telemedicina">
          <button className="bg-ContainerProced1 text-ContainerFraseProced 2xl:h-[11.1rem] 2xl:w-[11.1rem] xl:h-[8rem] xl:w-[8rem] lg:h-[6.5rem] lg:w-[6.5rem] md:h-[5.8rem] md:w-[5.8rem] sm:h-[4.6rem] sm:w-[4.6rem] sm:rounded-lg rounded-[35px] mt-2 ml-[12%] md:rounded-lg flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
            <img src="./Telemedicina.svg" alt="" className="w-[50%] h-auto mt-3" />
            <p className="2xl:mt-8 xl:mt-2 text-center md:text-sm sm:text-[0.7rem]">Telemedicina</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TipoProced;
