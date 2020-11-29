import React from 'react';
import Hero from '../assets/components/Hero';
import ProductView from '../assets/components/ProductView';

import '../assets/scss/Home.scss';
export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="Home">
      <Hero />
      <ProductView />
    </div>
  );
};

export default Home;
