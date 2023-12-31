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
    <div className="float-right w-[45%] mr-[2%] -mt-[2%] p-10">
      <div className=" float-left -ml-[141.5%] mt-[-28%]">
       <Carousel 
       images={images}
       imageClassName="h-[45rem]"
       imageStyle={{ objectFit: 'cover'}}
       />
      </div>
      <p className="text-center ml-[10%] text-[18sp] text-ContainerFrase">Qual procedimento você precisa?</p>
      <div className="grid grid-cols-2 gap-[2rem] mt-[4%]">
      <Link href="/cirurgias">
        <button className="bg-ContainerProced1 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-[4%] ml-[46%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110 ">
          <img src="./Cirurgias.svg" alt="" className="w-[50%] h-[50%] mt-[3%] transition duration-150 ease-out hover:ease-in" />
          <p className="mt-[10%] text-center">Cirurgias</p>
        </button>
      </Link>
      <Link href="/estetica">
        <button className="bg-ContainerProced2 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-[4%] ml-[12%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
          <img src="./Estética.svg" alt="" className="w-[50%] h-[50%] mr-2 mt-[3%]" />
          <p className="mt-[10%] text-center">Estética</p>
        </button>
        </Link>
        <Link href="/exames">
          <button className="bg-ContainerProced2 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-[4%] ml-[46%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
            <img src="./Exames.svg" alt="" className="w-[50%] h-[50%] mt-[3%]" />
            <p className="mt-[10%] text-center">Exames</p>
          </button>
        </Link>
        <Link href="/telemedicina">
          <button className="bg-ContainerProced1 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-[4%] ml-[12%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)] transition duration-300 ease-in-out transform hover:scale-110">
            <img src="./Telemedicina.svg" alt="" className="w-[50%] h-[50%] mt-[3%]" />
            <p className="mt-[10%] text-center">Telemedicina</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TipoProced;
