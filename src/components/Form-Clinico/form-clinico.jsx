import React from 'react';
import 'tailwindcss/tailwind.css';

const FormClinico = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className=" mb-6">
        <input
          className=" placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="nome"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Seu melhor email"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="telefone"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="cnpj"
          type="text"
          placeholder="CNPJ"
        />
      </div>
      <div className=" mb-8">
        <button
          className=" w-full bg-colorButton hover:bg-colorGreen text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar!
        </button>
      </div>
    </form>
  );
};

export default FormClinico;
