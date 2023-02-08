import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/bg-gradient.svg")`,
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
