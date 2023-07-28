/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { useForm, SubmitHandler } from "react-hook-form"

const FormMedico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crm, setCrm] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagemWhatsApp = () => {
    const mensagemPersonalizada = `
     Nome: ${nome} 
     Email: ${email} 
     Telefone: ${telefone}
     Especialidade: ${especialidade}
     CRM: ${crm}
     Assunto: ${mensagem}`;
    const numeroTelefone = '8173265915'; 

    const link = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagemPersonalizada)}`;

    window.open(link);
  };
  
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit(enviarMensagemWhatsApp)}>
      <div className=" mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={nome}
          {...register("name", {required: true})}
          onChange={(e) => setNome(e.target.value)}
          id="nome"
          type="text"
          placeholder="Nome"
        />
        {errors.name && <small className=" text-red-700 ml-3">O nome é obrigatório</small>}
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          {...register("mail", {required: true})}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Seu melhor email"
        />
        {errors.mail && <small className=" text-red-700 ml-3">O email é obrigatório</small>}
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={telefone}
          {...register("phone", {required: true})}
          onChange={(e) => setTelefone(e.target.value)}
          id="telefone"
          type="tel"
          placeholder="Telefone"
        />
        {errors.phone && <small className=" text-red-700 ml-3">O telefone é obrigatório</small>}
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="especialidades"
          type="text"
          value={especialidade}
          {...register("especialidade", {required: true})}
          onChange={(e) => setEspecialidade(e.target.value)}
          placeholder="Especialidade:"
        />
       {errors.especialidade && <small className=" text-red-700 ml-3">Sua especialidade é obrigatória</small>}
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="CRN"
          type="text"
          value={crm}
          {...register("crm", {required: true})}
          onChange={(e) => setCrm(e.target.value)}
          placeholder="CRM"
        />
       {errors.crm && <small className=" text-red-700 ml-3">Seu CRM é obrigatório</small>}
      </div>
      <div className="mb-6">
      <textarea
          className=" resize-none placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Assunto"
          value={mensagem}
          {...register("assunto", {required: true})}
          onChange={(e) => setMensagem(e.target.value)}
        >
        </textarea>
        {errors.assunto && <small className=" text-red-700 ml-3">Por favor escreva uma mensagem</small>}
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

export default FormMedico;
