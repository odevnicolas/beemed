import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Social from '@/components/Social/social';

const Login: React.FC = () => {
  return (
    <div>
     <Header />
     <Social />
     <h1>Login</h1>
     <Footer />
    </div>
  );
};

export default Login;