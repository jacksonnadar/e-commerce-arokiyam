import React from 'react';
import ProductCarosuel from '../ProductCarosuel/ProductCarosuel';

import oilBottle from '../../images/pngs/oilBottle.png';
import './ProductView.scss';
export interface ProductInput {
  image: string;
  title: string;
  sellingPrice: string;
  marketPrice: string;
  id?: number;
}
interface ProductViewProps {}
const data = new Array<ProductInput>(10).fill({
  image: oilBottle,
  title: 'Ground nut oil (Peanut oil)',
  sellingPrice: '499.99',
  marketPrice: '500.00',
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
