// import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Detail } from '../DetailsSection/DetailsSection';
import './SingleDetail.scss';

interface SingleDetailProps {
  detail: Detail;
  index: number;
}

const SingleDetail: React.FC<SingleDetailProps> = ({ detail, index }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const singleDetailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current!.src = detail.image;
            imgRef.current!.classList.remove('blur');
            imgRef.current!.style.opacity = '1';
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
        <h1 className="title">{detail.title}</h1>
        <p className="description">{detail.description}</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="image">
        <img alt="" src={detail.imageSmall} className="blur" ref={imgRef} />
      </div>
    </div>
  );
};

export default SingleDetail;
