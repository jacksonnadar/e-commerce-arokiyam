import React from 'react';
import ProductCarosuel from './ProductCarosuel';

import oilBottle from '../images/pngs/oilBottle.png';
import '../scss/ProductView.scss';
export interface ProductInput {
  image: string;
  title: string;
  sellingPrice: number;
  marketPrice: number;
}
interface ProductViewProps {}
const data = new Array<ProductInput>(10).fill({
  image: oilBottle,
  title: 'Ground nut oil',
  sellingPrice: 499.99,
  marketPrice: 500.0,
});
const ProductView: React.FC<ProductViewProps> = () => {
  return (
    <div className="ProductView">
      <h1 className="heading">Product</h1>
      <ProductCarosuel productDetails={data} title={'Edible oil'} />
      <ProductCarosuel productDetails={data} title={'Groceries'} />
    </div>
  );
};

export default ProductView;
