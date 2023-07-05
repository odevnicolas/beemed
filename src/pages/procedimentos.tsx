
import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';

const Procedimentos: React.FC = () => {
  return (
    <div>
    <Header />
    <Social />
    <div className='h-[1000px]'>
    </div>
    <Footer />
    </div>
  );
};

export default Procedimentos;