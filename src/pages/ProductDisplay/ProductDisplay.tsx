import React from 'react';
import Footer from '../../assets/components/Footer/Footer';
import SortProduct from '../../assets/components/SortProduct/SortProduct';

import './ProductDisplay.scss';
interface Props {}

const ProductDisplay: React.FC<Props> = () => {
  return (
    <div className="ProductDisplay">
      <SortProduct />
      <Footer />
    </div>
  );
};

export default ProductDisplay;
