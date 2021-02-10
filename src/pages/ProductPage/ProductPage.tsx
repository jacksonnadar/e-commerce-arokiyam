import React from 'react';
import Footer from '../../assets/components/Footer/Footer';
// import { useParams } from 'react-router-dom';
import ProductCarosuel from '../../assets/components/ProductCarosuel/ProductCarosuel';
import ProductPageDisplay from '../../assets/components/ProductPageDisplay/ProductPageDisplay';
import { ProductInput } from '../../assets/components/ProductView/ProductView';
import oilBottle from '../../assets/images/pngs/oilBottle.png';
import './ProductPage.scss';
interface Props {}
// interface URLParams {
//   id: string;
// }

const ProductPage: React.FC<Props> = () => {
  //   const { id } = useParams<URLParams>();
  const data = new Array<ProductInput>(10).fill({
    image: oilBottle,
    title: 'Ground nut oil (Peanut oil)',
    sellingPrice: '499.99',
    marketPrice: '500.00',
  });
  return (
    <div className="ProductPage">
      <ProductPageDisplay />
      <ProductCarosuel title={'Recomended'} productDetails={data} />
      <ProductCarosuel title={'Recomended'} productDetails={data} />
      <Footer />
    </div>
  );
};

export default ProductPage;
