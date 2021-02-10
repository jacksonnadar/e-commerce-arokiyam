import React, { useRef, useState } from 'react';

import './ProductPageDisplay.scss';
import oilBottle from '../../images/pngs/oilBottle.png';
interface Props {}

const ProductPageDisplay: React.FC<Props> = () => {
  const p_data = {
    images: [
      oilBottle,
      oilBottle,
      oilBottle,
      oilBottle,
      oilBottle,
      oilBottle,
      oilBottle,
      oilBottle,
    ],
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

  const tumbnailImgRef = useRef<HTMLDivElement | null>(null);
  const [tumbTop, setTumbtop] = useState<0 | 1 | -1>(1);
  const scrollButtonHandler = (forward: boolean) => {
    tumbnailImgRef.current?.scrollBy({
      top: -forward ? -100 : 100,
      behavior: 'smooth',
    });
  };
  const tumbNailScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        e.currentTarget.clientHeight ||
      !e.currentTarget.scrollTop
    ) {
      if (
        e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
        e.currentTarget.clientHeight
      ) {
        setTumbtop(-1);
        console.log('scrolled');
      }
      if (!e.currentTarget.scrollTop) {
        setTumbtop(1);
      }
    } else {
      setTumbtop(0);
    }
  };
  return (
    <div className="ProductPageDisplay">
      <section className="first">
        <div className="img-container">
          <div className="tumbnails">
            <button
              className={tumbTop === 1 ? 'top hide' : 'top'}
              onClick={() => {
                scrollButtonHandler(true);
              }}
            >
              <svg viewBox="0 0 13 16" fill="none">
                <path
                  d="M0.37183 8.65799L11.64 15.8579C11.7701 15.9409 11.9222 15.9895 12.0801 15.9985C12.2379 16.0074 12.3954 15.9764 12.5355 15.9086C12.6755 15.8409 12.7929 15.7391 12.8748 15.6142C12.9566 15.4894 12.9999 15.3462 13 15.2003V0.800517C13.0001 0.654501 12.9569 0.511243 12.8751 0.386269C12.7933 0.261295 12.676 0.159372 12.5358 0.0915458C12.3957 0.0237194 12.2382 -0.00742324 12.0803 0.00149315C11.9224 0.0104095 11.7701 0.0590448 11.64 0.142128L0.37183 7.34201C0.257032 7.41595 0.163279 7.51439 0.0985425 7.62895C0.0338058 7.74351 0 7.8708 0 8C0 8.1292 0.0338058 8.25649 0.0985425 8.37105C0.163279 8.48561 0.257032 8.58405 0.37183 8.65799V8.65799Z"
                  fill="#3A3A3A"
                />
              </svg>
            </button>
            <div
              ref={tumbnailImgRef}
              onScroll={tumbNailScrollHandler}
              className="tumbnail-images"
            >
              {p_data.images.map((img, i) => {
                return <img key={i} src={img} alt="Product" />;
              })}
            </div>
            <button
              className={tumbTop === -1 ? 'bottom hide' : 'bottom'}
              onClick={() => {
                scrollButtonHandler(false);
              }}
            >
              <svg viewBox="0 0 13 16" fill="none">
                <path
                  d="M0.37183 8.65799L11.64 15.8579C11.7701 15.9409 11.9222 15.9895 12.0801 15.9985C12.2379 16.0074 12.3954 15.9764 12.5355 15.9086C12.6755 15.8409 12.7929 15.7391 12.8748 15.6142C12.9566 15.4894 12.9999 15.3462 13 15.2003V0.800517C13.0001 0.654501 12.9569 0.511243 12.8751 0.386269C12.7933 0.261295 12.676 0.159372 12.5358 0.0915458C12.3957 0.0237194 12.2382 -0.00742324 12.0803 0.00149315C11.9224 0.0104095 11.7701 0.0590448 11.64 0.142128L0.37183 7.34201C0.257032 7.41595 0.163279 7.51439 0.0985425 7.62895C0.0338058 7.74351 0 7.8708 0 8C0 8.1292 0.0338058 8.25649 0.0985425 8.37105C0.163279 8.48561 0.257032 8.58405 0.37183 8.65799V8.65799Z"
                  fill="#3A3A3A"
                />
              </svg>
            </button>
          </div>
          <div className="image">
            <img src={oilBottle} alt="product" />
          </div>
        </div>
        <button className="add-to-cart">Add to cart</button>
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
