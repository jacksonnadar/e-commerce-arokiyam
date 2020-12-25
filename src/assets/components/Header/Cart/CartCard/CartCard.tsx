import React, { useState } from 'react';
import { ProductInput } from '../../../ProductView/ProductView';

import './CartCard.scss';
interface Props {
  item: ProductInput;
  index: number;
  removeHandler: (index: number) => void;
}

const CartCard: React.FC<Props> = ({ item, removeHandler, index }) => {
  const [quantityInput, setQuantityInput] = useState(1);

  return (
    <div className="CartCard">
      <div className="CartCard-wrapper">
        <div className="tumbnail">
          <img src={item.image} alt="" />
        </div>
        <div className="details">
          <div className="title">{item.title}</div>

          <div className="prices">
            <p className="s-price">{'₹' + item.sellingPrice}</p>
            <p className="m-price">{'₹' + item.marketPrice}</p>
          </div>
          <div className="buttons">
            <div className="quantity">
              <button
                className="add-sub"
                onClick={() => setQuantityInput((c) => (c > 0 ? c - 1 : 0))}
              >
                -
              </button>
              <input
                type="number"
                value={quantityInput}
                onChange={(e) => setQuantityInput(+e.target.value)}
              />
              <button
                className="add-sub"
                onClick={() => setQuantityInput((c) => c + 1)}
              >
                +
              </button>
            </div>
            <button className="remove" onClick={() => removeHandler(index)}>
              <svg
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1875 15.0572L2.73625 1.6059L2.21733 1.08699L1.72538 0.595032L0.869507 1.4509L3.82798 4.40938L5.31733 7.54981L4.40755 9.2009C4.29972 9.3896 4.23907 9.61199 4.23907 9.84786C4.23907 10.5892 4.84559 11.1957 5.5869 11.1957H10.6143L11.5443 12.1257C11.3129 12.2916 11.1401 12.5266 11.0507 12.7969C10.9613 13.0673 10.9599 13.359 11.0468 13.6301C11.1337 13.9013 11.3043 14.1379 11.5342 14.3059C11.7641 14.4739 12.0413 14.5647 12.326 14.5652C12.7775 14.5652 13.1752 14.3429 13.4178 13.9992L15.3317 15.9131L16.1875 15.0572ZM5.86994 9.84786C5.77559 9.84786 5.70146 9.77373 5.70146 9.67938L5.72168 9.59851L6.3282 8.50003H7.91864L9.26646 9.84786H5.86994ZM11.3489 8.50003C11.8543 8.50003 12.2991 8.22373 12.5282 7.8059L14.9408 3.43221C14.9964 3.32936 15.0244 3.21385 15.022 3.09695C15.0196 2.98006 14.987 2.86579 14.9272 2.76529C14.8674 2.6648 14.7826 2.58152 14.6811 2.5236C14.5795 2.46567 14.4647 2.43508 14.3478 2.43481H5.2769L11.3489 8.50003ZM5.5869 11.8696C4.84559 11.8696 4.24581 12.4761 4.24581 13.2174C4.24581 13.9587 4.84559 14.5652 5.5869 14.5652C6.3282 14.5652 6.93472 13.9587 6.93472 13.2174C6.93472 12.4761 6.3282 11.8696 5.5869 11.8696Z"
                  fill="#FEFFED"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
