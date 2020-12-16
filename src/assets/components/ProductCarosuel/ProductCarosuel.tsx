import React, { useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCarosuel.scss';
import { ProductInput } from '../ProductView/ProductView';

export interface Props {
  productDetails: ProductInput[];
  title: string;
}

const ProductCarosuel: React.FC<Props> = ({ productDetails, title }) => {
  const productCarosuelRef = useRef<HTMLDivElement | null>(null);

  const arrowButtonClickHandler = (forward: boolean) => {
    productCarosuelRef.current?.scrollBy({
      top: 0,
      left: forward ? 200 : -20,
      behavior: 'smooth',
    });
  };

  return (
    <div className="ProductCarosuel">
      <h1 className="title">{title}</h1>
      <div className="product-cards-container">
        <div className="Product-cards-wraper" ref={productCarosuelRef}>
          {productDetails.map((item, index) => {
            return <ProductCard key={index} productData={item} />;
          })}
        </div>
        <div className="arrow-buttons">
          <div onClick={() => arrowButtonClickHandler(true)} className="next">
            <svg width="29" height="40" viewBox="0 0 29 40" fill="none">
              <path
                d="M1.0363 39.7734C1.34906 39.9417 1.70021 40.0187 2.05207 39.9962C2.40393 39.9736 2.74321 39.8524 3.0335 39.6454L28.1677 21.6445C28.4245 21.4604 28.6344 21.2147 28.7793 20.9283C28.9243 20.642 29 20.3236 29 20.0004C29 19.6772 28.9243 19.3587 28.7793 19.0724C28.6344 18.7861 28.4245 18.5404 28.1677 18.3563L3.0335 0.355344C2.74344 0.147719 2.404 0.0261369 2.05194 0.00376373C1.69988 -0.0186094 1.34861 0.0590786 1.03616 0.228416C0.723721 0.397753 0.46201 0.652287 0.27937 0.964456C0.0967294 1.27663 0.000119065 1.63454 2.62615e-08 1.99943V38.0013C-5.81322e-05 38.3664 0.0964824 38.7246 0.279158 39.0369C0.461833 39.3493 0.723674 39.604 1.0363 39.7734Z"
                fill="white"
              />
            </svg>
          </div>
          <div onClick={() => arrowButtonClickHandler(false)} className="prev">
            <svg width="29" height="40" viewBox="0 0 29 40" fill="none">
              <path
                d="M27.9637 39.7734C27.6509 39.9417 27.2998 40.0187 26.9479 39.9962C26.5961 39.9736 26.2568 39.8524 25.9665 39.6454L0.83235 21.6445C0.575521 21.4604 0.365643 21.2147 0.220682 20.9283C0.0757217 20.642 0 20.3236 0 20.0004C0 19.6772 0.0757217 19.3587 0.220682 19.0724C0.365643 18.7861 0.575521 18.5404 0.83235 18.3563L25.9665 0.355344C26.2566 0.147719 26.596 0.0261369 26.9481 0.00376373C27.3001 -0.0186094 27.6514 0.0590786 27.9638 0.228416C28.2763 0.397753 28.538 0.652287 28.7206 0.964456C28.9033 1.27663 28.9999 1.63454 29 1.99943V38.0013C29.0001 38.3664 28.9035 38.7246 28.7208 39.0369C28.5382 39.3493 28.2763 39.604 27.9637 39.7734Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      <button className="view-more">View More...</button>
    </div>
  );
};

export default ProductCarosuel;
