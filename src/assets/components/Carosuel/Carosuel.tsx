import React, { Children, useEffect, useState, useRef } from 'react';
// import gsap from 'gsap';
import './Carosuel.scss';
import arrow from '../../images/svgs/arrow.svg';
export interface Props {}

const Carosuel: React.FC<Props> = ({ children }) => {
  const totalChildren = Children.toArray(children);
  const carosuelRef = useRef<HTMLElement | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    carosuelRef.current!.scrollTop = 0;
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      carosuelRef.current!.scrollTo({
        top: 0,
        left:
          carosuelRef.current!.offsetWidth *
          (currentBanner + 1 > totalChildren.length - 1
            ? 0
            : currentBanner + 1),

        behavior: 'smooth',
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [currentBanner, totalChildren.length]);
  const scroll = (forward: boolean) => {
    carosuelRef.current?.scrollBy({
      top: 0,
      left: forward
        ? carosuelRef.current?.offsetWidth
        : -carosuelRef.current?.offsetWidth,
      behavior: 'smooth',
    });
  };
  const checkScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    setCurrentBanner(
      Math.round(e.currentTarget.scrollLeft / e.currentTarget.offsetWidth)
    );
  };
  const paginationCLickHandler = (dot: number) => {
    carosuelRef.current?.scrollTo({
      top: 0,
      left: carosuelRef.current.offsetWidth * dot,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carosuel-wrapper">
      <section ref={carosuelRef} onScroll={checkScroll} className="carosuel">
        {children}
      </section>
      <div
        onClick={() => scroll(false)}
        className={currentBanner ? 'prev active' : 'prev un-active'}
      >
        <img src={arrow} alt="" />
      </div>
      <div
        onClick={() => scroll(true)}
        className={
          currentBanner !== totalChildren.length - 1
            ? 'next active'
            : 'next un-active'
        }
      >
        <img src={arrow} alt="" />
      </div>
      <div className="pagination-dots">
        {totalChildren.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(e) => paginationCLickHandler(index)}
              className={` ${
                index === currentBanner ? ' pagination-dot-active' : ''
              } pagination-dot`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carosuel;
