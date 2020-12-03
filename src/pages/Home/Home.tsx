import React from 'react';
import DetailsSection from '../../assets/components/DetailsSection/DetailsSection';
import Footer from '../../assets/components/Footer/Footer';
import Hero from '../../assets/components/Hero/Hero';
import ProductView from '../../assets/components/ProductView/ProductView';

import './Home.scss';
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
