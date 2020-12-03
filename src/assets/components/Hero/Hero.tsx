import * as React from 'react';

import './Hero.scss';
import machine from '../../images/pngs/machine.png';
import bottels from '../../images/pngs/bottels.png';
import peanut from '../../images/pngs/peanut.png';
import decorDots from '../../images/svgs/decor_dots.svg';
import down from '../../images/svgs/down.svg';
import carosuel from '../../images/jpgs/carosuel.jpg';
import Carosuel from '../Carosuel/Carosuel';
export interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className="Hero">
      <Carosuel>
        <img src={carosuel} alt="" />
        <img src={carosuel} alt="" />
        <img src={carosuel} alt="" />
        <img src={carosuel} alt="" />
      </Carosuel>
      <section className="intro">
        <h1 className="arokiyam">AROKIYAM</h1>
        <p className="subtitle">Eat right, be bright.</p>
        <p className="title">your health our concern.</p>
        <div className="buttons">
          <div className="call-us">
            <button>Call Us&nbsp;&nbsp;&nbsp;</button>
          </div>
          <div className="shop-now">
            <button>Shop Now</button>
          </div>
        </div>
        <img className="machine" src={machine} alt="oil machine" />
      </section>
      <img src={bottels} alt="bottels" className="bottels floating-images" />
      <img src={peanut} alt="peanut" className="peanut floating-images" />
      <img src={decorDots} alt="" className="decor-dots floating-images" />
      <img src={down} alt="" className="down floating-images" />
    </div>
  );
};

export default Hero;
