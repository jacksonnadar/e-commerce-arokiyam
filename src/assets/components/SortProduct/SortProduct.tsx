import React, { useState } from 'react';
import { ProductInput } from '../ProductView/ProductView';
import oilBottle from '../../images/pngs/oilBottle.png';

import './SortProduct.scss';
import ProductCard from '../ProductCard/ProductCard';
interface Props {}

const SortProduct: React.FC<Props> = () => {
  // const [filters, setFilters] = useState(['₹100 - ₹200']);
  const [isFilter, setIsFilter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const filters = ['₹100 - ₹200'];
  const brands = ['Arogyam', 'Achi masala', 'Arogyam oil', 'Aroma', 'Brasil'];
  const data = new Array<ProductInput>(12).fill({
    image: oilBottle,
    title: 'Ground nut oil (Peanut oil)',
    sellingPrice: '499.99',
    marketPrice: '500.00',
  });
  return (
    <div className="SortProduct">
      <div
        className={isFilter || isSort ? 'overlay' : ''}
        onClick={() => {
          setIsFilter(false);
          setIsSort(false);
        }}
      ></div>
      <div className="mobile-filter-sort">
        <button
          className="filter-button"
          onClick={() => setIsFilter(!isFilter)}
        >
          Filters
        </button>
        <button className="sort-button" onClick={() => setIsSort(!isSort)}>
          Sort
        </button>
      </div>
      <div className={isFilter ? 'filters translate0' : 'filters'}>
        <div className="filter">
          <Heading title={'Filters'} />
          <div className="filter-boxes divider">
            {filters.map((filter, index) => {
              return (
                <div key={index} className="filter-box">
                  <h3>{filter}</h3>
                  <div className="cross-button">x</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="price">
          <Heading title="Price" />
          <div className="price-filter divider">
            <select id="cars">
              <option value="0">Min</option>
              <option value="500">₹500</option>
              <option value="1000">₹1000</option>
              <option value="2000">₹2000</option>
              <option value="2001">₹2000+</option>
            </select>
            <p>to</p>
            <select id="cars">
              <option value="0">Max</option>
              <option value="500">₹500</option>
              <option value="1000">₹1000</option>
              <option value="2000">₹2000</option>
              <option value="2001">₹2000+</option>
            </select>
          </div>
        </div>
        <div className="brand-filter">
          <Heading title="Brands" />
          <div className="brands divider">
            {brands.map((brand, i) => {
              return (
                <div key={i} className="brand-list">
                  <input type="checkbox" id={brand} value={brand}></input>
                  <label htmlFor={brand}> {brand}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="stock-filter">
          <Heading title="Availability" />
          <div className="stock">
            <input
              type="checkbox"
              // name="availabilty"
              value="availabilty"
              id="availabilty"
            ></input>
            <label htmlFor="availabilty"> Include out of stock</label>
          </div>
        </div>
      </div>
      <div className="product-cards">
        <div className={isSort ? 'sort translate0' : 'sort'}>
          <h1>Sort by</h1>
          <button className="sort-button">Price High - Low</button>
          <button className="sort-button sort-button--active">
            Price Low - High
          </button>
        </div>
        <div className="product-cards-container">
          {data.map((card, i) => {
            return <ProductCard key={i} productData={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SortProduct;

interface PropsHeading {
  title: string;
}
const Heading: React.FC<PropsHeading> = ({ title }) => {
  return (
    <div className="Heading">
      <h1 className="title">{title}</h1>
      <p className="clear">Clear</p>
    </div>
  );
};
