import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';

const Home: React.FC = () => {
    return (
      <div>
        <Header />
        <Social />
        <div style={{ height: '900px' }}/>
        <Footer />
      </div>
    );
  };

  export default Home;
  