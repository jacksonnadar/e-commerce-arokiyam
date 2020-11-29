import React from 'react';
import ProductCard from './ProductCard';
import '../scss/ProductCarosuel.scss';
import { ProductInput } from './ProductView';

export interface Props {
  productDetails: ProductInput[];
  title: string;
}

const ProductCarosuel: React.FC<Props> = ({ productDetails, title }) => {
  console.log(productDetails);

  return (
    <div className="ProductCarosuel">
      <h1 className="title">{title}</h1>
      <div className="Product-card-wraper">
        {productDetails.map((item, index) => {
          return <ProductCard key={index} productData={item} />;
        })}
      </div>
      <button className="view-more">View More...</button>
    </div>
  );
};

export default ProductCarosuel;
