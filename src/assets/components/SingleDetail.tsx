import React from 'react';
import { Detail } from './DetailsSection';
import '../scss/SingleDetail.scss';

interface SingleDetailProps {
  detail: Detail;
  index: number;
}

const SingleDetail: React.FC<SingleDetailProps> = ({ detail, index }) => {
  return (
    <div className={index % 2 === 0 ? 'SingleDetail' : 'SingleDetail reverse'}>
      <div className="text">
        <h1 className="title">{detail.title}</h1>
        <p className="description">{detail.description}</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="image">
        <img src={detail.image} alt="" />
      </div>
    </div>
  );
};

export default SingleDetail;
