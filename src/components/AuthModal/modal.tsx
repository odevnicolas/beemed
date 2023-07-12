
import React from 'react';
/* eslint-disable @next/next/no-img-element */
import {useCallback, useState} from 'react';
import Input from '@/components/input/input'
import axios from 'axios';
import { signIn } from 'next-auth/react';
import router, { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import { AiOutlineClose } from 'react-icons/ai'


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}


  const Modal: React.FC<ModalProps> = ( { isOpen, onClose } ) => {
  if( !isOpen ) return null;

  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [variant,setVariant] = useState("login")
  const toggleVariante = useCallback(() =>{
    setVariant((registerVariant) => registerVariant === 'login' ? 'register' : 'login')
  },[])

    const login = useCallback(async () =>{
    try{
      await signIn('credentials',{
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      })

    router.push('/')
    }catch(error){
      console.log(error)
    }
  },[email,password,router])

  const register = useCallback(async () =>{
      try{
        await axios.post('/api/register',{
          email,
          name,
          password,
        })

    login()
    }catch(error){
      console.log(error)
    }
  },[email,name,password,login])
  
  return(
    <div className='z-20 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm  h-full w-full bg-center bg-no-repeat bg-fixed bg-cover'>
      <div className='mt-[1.9%] w-full h-full lg:bg-opacity-50'>
        <nav className=" px-20">
        </nav>
        <div className="flex justify-center">
          <div className='bg-[#495748] rounded-2xl px-16 py-3 self-center mt-2 lg:w-2/5 lg:max-w-md roudend-md w-full'>
            <div className=" flex flex-col">
             <button className=" text-white text-xl place-self-end -mr-[45px] mt-1"  onClick={onClose}>
              <AiOutlineClose size={20}/>
             </button>
            </div>
            <img className="z-10 flex justify-center ml-20" src="./icone.svg" alt="Logo da Empresa" width={150}/>
            <h2 className="text-white text-5xl mb-8 font-semibold text-center">
              {variant === 'login' ? 'Entrar' :  'Cadastre-se'}
            </h2>   
        <div className="flex flex-col gap-4">
              {variant === 'register' && (
              <Input 
                label="Nome"
                onChange={(event:any) => setName(event.target.value)}
                id="name"
                value={name}
                />
              )}
              <Input 
                label="Email"
                onChange={(event:any) => setEmail(event.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input 
                label="Senha"
                onChange={(event: any) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
        </div>
            <button onClick={variant === 'login' ? login : register} className=' bg-colorButton py-3 text-black rounded-md w-full mt-10 hover:bg-verde-social-icons-hover transition text-xl'>
              {variant === 'login' ? 'Login' : 'Criar conta'}
            </button>
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
              <div
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className='
                  h-10
                  w-10
                  bg-white
                  rounded-full
                  flex 
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
                '
                >
                  <FcGoogle size={30}/>
                </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/' })}
                className='
                  h-10
                  w-10
                  bg-white
                  rounded-full
                  flex 
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
                '
                >
                  <FaFacebookF size={27} color='#3b5998'/>
                </div>
            </div>
            <p className="text-black mt-6 text-center">
              {variant === 'login' ? 'Primeira vez por aqui? ' : 'Já possui uma conta? '}
            <span onClick={toggleVariante} className="text-white ml-1 hover:underline cursor-pointer ">
              {variant ==='login' ? 'Crie sua conta' : 'Faça já seu login'}
            </span>
            </p>
          </div>
        </div>
    </div>
    </div>
  
  );
}

export default Modal;