import React, { useEffect, useState } from 'react';
import oilBottle from '../../../images/pngs/oilBottle.png';

import './Cart.scss';
import CartCard from './CartCard/CartCard';
interface Props {
  isCartActive: boolean;
}
interface totalPrices {
  m_price: number;
  s_price: number;
}
const Cart: React.FC<Props> = ({ isCartActive }) => {
  const [data, setData] = useState([
    {
      image: oilBottle,
      title: 'Ground nut oil (peanut oil)',
      sellingPrice: '499.00',
      marketPrice: '500.00',
      id: 1,
      quantity: 1,
    },
    {
      image: oilBottle,
      title: 'Ground nut oil (peanut oil)',
      sellingPrice: '499.00',
      marketPrice: '500.00',
      id: 2,
      quantity: 1,
    },
    {
      image: oilBottle,
      title: 'Ground nut oil (peanut oil)',
      sellingPrice: '499.00',
      marketPrice: '500.00',
      id: 3,
      quantity: 1,
    },
    {
      image: oilBottle,
      title: 'Ground nut oil (peanut oil)',
      sellingPrice: '499.00',
      marketPrice: '500.00',
      id: 4,
      quantity: 1,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState<totalPrices>({
    s_price: 0,
    m_price: 0,
  });
  const removeHandler = (index: number) => {
    setData((d) => {
      const cards = [...d];
      console.log(cards.splice(index, 1));
      return cards;
    });
  };
  useEffect(() => {
    let price: totalPrices = { m_price: 0, s_price: 0 };
    data.forEach((item) => {
      price.m_price += +item.marketPrice * item.quantity;
      price.s_price += +item.sellingPrice * item.quantity;
    });
    setTotalPrice(price);
  }, [data]);
  return (
    <div className={isCartActive ? 'Cart cart-active' : 'Cart'}>
      <div className="top">
        <h1 className="cart">{`My Cart (${data.length})`}</h1>
        <div className="deliver-to">
          <p>deliver to</p>
          <input type="number" />
        </div>
      </div>
      <div className="cart-cards-container">
        {data.map((card, index) => {
          return (
            <CartCard
              item={card}
              key={card.id}
              index={index}
              removeHandler={removeHandler}
              setData={setData}
            />
          );
        })}
      </div>
      <div className="bottom">
        <div className="prices">
          <h1 className="total">Total -&#160;</h1>
          <p className="s-price">{'₹' + totalPrice.s_price}</p>
          <p className="m-price">{'₹' + totalPrice.m_price}</p>
        </div>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;
