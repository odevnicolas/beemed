import React from 'react';
import 'tailwindcss/tailwind.css';



const TipoProced: React.FC = () => {
  return (
    <div className="float-right w-[45%] mr-8 mt-[1%] p-10">
      <div className=" float-left  -ml-[145%] -mt-40 -z-10">
       <img src="./Carrossel1.svg" className="object-cover" width={700} />
      </div>
      <p className="text-center ml-[10%] text-[18px] text-ContainerFrase">Qual procedimento você precisa?</p>
      <div className="grid grid-cols-2 gap-8 mt-5">
        <div className="bg-ContainerProced1 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-4 ml-[46%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)]">
          <img src="./Cirurgias.svg" alt="" className="w-[50%] h-auto mt-3" />
          <p className="mt-8 text-center">Cirurgias</p>
        </div>
        <div className="bg-ContainerProced2 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-4 ml-[12%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)]">
          <img src="./Estética.svg" alt="" className="w-[50%] h-auto mr-2 mt-3" />
          <p className="mt-8 text-center">Estética</p>
        </div>
        <div className="bg-ContainerProced2 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-2 ml-[46%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)]">
          <img src="./Exames.svg" alt="" className="w-[50%] h-auto mt-3" />
          <p className="mt-8 text-center">Exames</p>
        </div>
        <div className="bg-ContainerProced1 text-ContainerFraseProced h-[11.1em] w-[11.1em] rounded-[35px] mt-2 ml-[12%] flex flex-col items-center justify-center drop-shadow-[0_18px_7px_rgba(155,247,152,0.39)]">
          <img src="./Telemedicina.svg" alt="" className="w-[50%] h-auto mt-3" />
          <p className="mt-8 text-center">Telemedicina</p>
        </div>
      </div>
    </div>
  );
};

export default TipoProced;
