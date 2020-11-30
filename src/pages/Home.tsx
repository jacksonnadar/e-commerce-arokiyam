import React from 'react';
import DetailsSection from '../assets/components/DetailsSection';
import Footer from '../assets/components/Footer';
import Hero from '../assets/components/Hero';
import ProductView from '../assets/components/ProductView';

import '../assets/scss/Home.scss';
export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="Home">
      <Hero />
      <ProductView />
      <DetailsSection />
      <Footer />
    </div>
  );
};

export default Home;
