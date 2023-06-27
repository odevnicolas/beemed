import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';
import Proced from '@/components/TipoProced/proced';

const Home: React.FC = () => {
    return (
      <div>
        <Header />
        <Social />
        <Proced />
        <div style={{ height: '900px' }}/>
        <Footer />
      </div>
    );
  };

  export default Home;
  