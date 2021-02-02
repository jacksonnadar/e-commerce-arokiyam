import React from 'react';

import './ProductPageDisplay.scss';
import oilBottle from '../../images/pngs/oilBottle.png';
interface Props {}

const ProductPageDisplay: React.FC<Props> = () => {
  const p_data = {
    images: [oilBottle, oilBottle, oilBottle, oilBottle, oilBottle],
    name: 'Peanut oil (ground nut oil)',
    s_price: '450.00',
    m_price: '455.00',
    quantities: ['.5lt', '1lt', '2lt', '5lt'],
    highlights: [
      'Pure as it could be.',
      'Made with cold wood press.',
      'Health benifits of natural foods.',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac elementum interdum diam a feugiat ut tincidunt. Blandit vulputate volutpat eget aenean urna magna sapien, ',
  };
  return (
    <div className="ProductPageDisplay">
      <section className="first">
        <div className="img-container">
          <div className="tumbnails">
            {p_data.images.map((img, i) => {
              return <img key={i} src={img} alt="Product" />;
            })}
          </div>
          <div className="image">
            <img src={oilBottle} alt="product" />
          </div>
        </div>
        <button className="add-to-cart"></button>
      </section>
      <section className="second">
        <h1 className="name">{p_data.name}</h1>
        <div className="prices">
          <p className="s_price">₹{p_data.s_price}</p>
          <p className="m_price">₹{p_data.m_price}</p>
        </div>
        <div className="quantity-container">
          <div className="heading">Quantity</div>
          <div className="quantities">
            {p_data.quantities.map((quantity) => {
              return (
                <div key={quantity} className="quantity quantity-active">
                  {quantity}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pincode-container">
          <div className="heading">Pin-code</div>
          <input type="number" />
        </div>
        <div className="highlights-container">
          <div className="heading">Highlights</div>
          <ul className="points">
            {p_data.highlights.map((highlight) => {
              return <li key={highlight}>{highlight} </li>;
            })}
          </ul>
        </div>
        <div className="description-container">
          <div className="heading">Description</div>
          <p>{p_data.description}</p>
        </div>
      </section>
    </div>
  );
};

export default ProductPageDisplay;
