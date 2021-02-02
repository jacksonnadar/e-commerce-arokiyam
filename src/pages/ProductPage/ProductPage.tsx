import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPageDisplay from '../../assets/components/ProductPageDisplay/ProductPageDisplay';

import './ProductPage.scss';
interface Props {}
// interface URLParams {
//   id: string;
// }

const ProductPage: React.FC<Props> = () => {
  //   const { id } = useParams<URLParams>();
  return (
    <div className="ProductPage">
      <ProductPageDisplay />
    </div>
  );
};

export default ProductPage;
