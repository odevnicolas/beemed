import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';


const FormClinico = () => {


    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [cpnj, setCpnj] = useState('');
  
    const enviarMensagemWhatsApp = () => {
      const mensagem = `Nome: ${nome}%0aTelefone: ${telefone}%0aEmail: ${email}%0aAssunto: ${cpnj}`;
      const link = `https://api.whatsapp.com/send?phone=85985949405&text=${encodeURIComponent(mensagem)}`;
      window.location.href = link

      
      return 
    };
  
  return (
    <form className="max-w-md mx-auto">
      <div className=" mb-6">
        <input
          className=" placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={nome} 
          onChange={e => setNome(e.target.value)}
          id="nome"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Seu melhor email"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={telefone} 
          onChange={e => setTelefone(e.target.value)}
          id="telefone"
          type="tel"
          placeholder="Telefone"
        />
      </div>
      <div className="mb-6">
        <input
          className="placeholder-black shadow-custom rounded-3xl w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          value={cpnj} 
          onChange={e => setCpnj(e.target.value)}
          id="cnpj"
          type="number"
          placeholder="CNPJ"
        />
      </div>
      <div className=" mb-8">
        <button
          className=" w-full bg-colorButton hover:bg-colorGreen text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          onClick={() => enviarMensagemWhatsApp()}
          type="submit"
        >
          Enviar!
        </button>
      </div>
    </form>
  );
};

export default FormClinico;
