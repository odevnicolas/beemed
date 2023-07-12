import React from 'react';
import HeaderProced from '@/components/HeaderProced/header';
import Footer from '@/components/Footer/footer';

const Cirurgias: React.FC = () => {

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = '0 0 10px rgb(155, 247, 152)';
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    container.style.boxShadow = 'none';
  };

  return (
    <div>
      <HeaderProced />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[80px] p-[80px] ml-[4%] mr-[4%] mb-[7%] z-20'>

      <div
          className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>Tenho interesse</button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        <div className='z-20 bg-white border border-black p-10 rounded-3xl h-[100%]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3 className='text-lg font-semibold text-center mt-2'>Nome do Produto 1</h3>
          <img src='/imagem1.jpg' alt='Imagem do produto' className='mx-auto' />
          <p className='text-center mt-1'>Valor: R$100</p>
          <button className='bg-green-400 rounded-3xl mt-10 mr-2 h-10 w-40'>
            Tenho interesse
          </button>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default Cirurgias;
