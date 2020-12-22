// import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Detail } from '../DetailsSection/DetailsSection';
import './SingleDetail.scss';

interface SingleDetailProps {
  detail: Detail;
  index: number;
}

const SingleDetail: React.FC<SingleDetailProps> = ({ detail, index }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const singleDetailRef = useRef<HTMLDivElement | null>(null);
  const [cameIntoView, setCameIntoView] = useState(false);
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current!.src = detail.image;
            setCameIntoView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(singleDetailRef.current!);
  }, [detail.image]);
  return (
    <div
      className={index % 2 === 0 ? 'SingleDetail' : 'SingleDetail reverse'}
      ref={singleDetailRef}
    >
      <div className="text">
        <h1 className={cameIntoView ? 'active title' : 'title'}>
          {detail.title}
        </h1>
        <p className={cameIntoView ? 'active description' : 'description'}>
          {detail.description}
        </p>
        <button className={cameIntoView ? 'active shop-now' : 'shop-now'}>
          Shop Now
        </button>
      </div>
      <div className="image">
        <img
          alt=""
          src={detail.imageSmall}
          className={cameIntoView ? 'img-active' : 'blur'}
          ref={imgRef}
        />
      </div>
    </div>
  );
};

export default SingleDetail;
