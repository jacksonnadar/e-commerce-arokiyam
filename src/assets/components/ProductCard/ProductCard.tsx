import React from 'react';

import './ProductCard.scss';
import { ProductInput } from '../ProductView/ProductView';
interface ProductCardProps {
  productData: ProductInput;
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  return (
    <div className="ProductCard">
      <section className="top-section">
        <img src={productData.image} alt="" />
        <div className="buttons">
          <div className="heart">
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
              <path
                d="M6.0475 1.66724L6.49928 2.04897L6.95107 1.66724C7.6031 1.1163 8.51105 0.727494 9.42631 0.70146C10.3247 0.675905 11.1809 0.980772 11.8528 1.79388C12.4882 2.57139 12.502 4.07116 11.5246 5.85167C10.5963 7.52225 8.88303 9.20366 6.49928 10.2406C4.11444 9.20319 2.40328 7.52168 1.49138 5.85431L1.4914 5.8543L1.48857 5.84922C0.496199 4.07002 0.511055 2.57059 1.14571 1.7939C1.81761 0.980779 2.67384 0.675905 3.57225 0.70146C4.48751 0.727494 5.39546 1.1163 6.0475 1.66724Z"
                stroke="#FF3D31"
                strokeWidth="1.4"
              />
            </svg>
          </div>
          <div className="cart">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path
                d="M3.68262 8.8533H11.236C11.3211 8.86237 11.3698 8.893 11.3937 8.91631C11.4133 8.93543 11.4263 8.95836 11.4304 8.98859C11.4212 9.04834 11.3972 9.0841 11.3755 9.10472C11.351 9.12795 11.3125 9.1483 11.2535 9.1496H2.90472C2.81046 9.13774 2.76034 9.10002 2.73591 9.07106C2.71133 9.04192 2.6959 9.00259 2.6998 8.9515L3.05468 7.09573L3.06849 7.0235L3.06092 6.95035L2.51576 1.68234L2.48152 1.35156L2.16323 1.25524L0.633761 0.792432C0.554324 0.759252 0.525291 0.720192 0.514292 0.699215C0.504705 0.680932 0.49635 0.652742 0.501575 0.610892C0.553111 0.518811 0.640429 0.484414 0.738328 0.506204L2.68976 1.10429C2.73474 1.12199 2.76015 1.14418 2.77587 1.16372C2.79225 1.18408 2.80669 1.21246 2.8142 1.25161L2.92733 2.28474L2.97111 2.68447L3.37093 2.72745L12.3233 3.68971C12.4132 3.71228 12.4555 3.75062 12.4737 3.77455C12.4911 3.79754 12.5039 3.82963 12.4989 3.879L11.9575 6.8649C11.9468 6.91376 11.9249 6.9422 11.902 6.96035C11.8768 6.98027 11.8378 6.99721 11.7846 6.99829H3.84042H3.42425L3.34872 7.40754L3.19092 8.26256L3.0819 8.8533H3.68262ZM4.43211 11.0105C4.43211 11.2624 4.21393 11.5 3.90275 11.5C3.59159 11.5 3.3734 11.2624 3.3734 11.0105C3.3734 10.7586 3.5916 10.5211 3.90275 10.5211C4.21391 10.5211 4.43211 10.7587 4.43211 11.0105ZM10.5773 11.0105C10.5773 11.2624 10.3592 11.5 10.048 11.5C9.73681 11.5 9.51862 11.2624 9.51862 11.0105C9.51862 10.7586 9.73681 10.5211 10.048 10.5211C10.3591 10.5211 10.5773 10.7587 10.5773 11.0105Z"
                stroke="#FF3D31"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="details">
        <h1 className="product-name">{productData.title}</h1>
        <div className="price">
          <div className="selling-price">{'₹' + productData.sellingPrice}</div>
          <div className="market-price">{'₹' + productData.marketPrice}</div>
        </div>
        <div className="buy-now">
          <button>Buy Now</button>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;