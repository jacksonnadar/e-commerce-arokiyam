import React, { useState } from 'react';
import NavLinks from './NavLinks';

import logo from '../../images/pngs/logo.png';
import search from '../../images/svgs/search.svg';
import './Header.scss';
import Menu from './Menu/Menu';

export interface Props {}

const Header: React.FC<Props> = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuClickHandler = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header>
      <nav>
        <section className="section-1">
          <img src={logo} alt={'img'} className="logo"></img>
          <NavLinks />
        </section>
        <section className="section-2">
          <button className="auth">Login</button>
          <div className="search-box">
            <input placeholder={'search'} id="search"></input>
            <img src={search} alt="search" />
          </div>
          <div className="icons">
            <div className="cart">
              <svg viewBox="0 0 27 24" fill="none">
                <path
                  d="M23.625 3.26809H7.22461L7.06641 2.65532C6.89062 1.87234 6.49512 1.23404 5.87988 0.740426C5.26465 0.246808 4.53516 0 3.69141 0H1.10742C0.791016 0 0.527344 0.102128 0.316406 0.306383C0.105469 0.510638 0 0.782979 0 1.1234C0 1.42979 0.105469 1.68511 0.316406 1.88936C0.527344 2.09362 0.791016 2.19574 1.10742 2.19574H3.69141C4.35938 2.19574 4.74609 2.48511 4.85156 3.06383L7.43555 16.1362C7.64648 16.8511 8.05957 17.4298 8.6748 17.8723C9.29004 18.3149 9.9668 18.5362 10.7051 18.5362H21.3574C21.709 18.5362 21.9902 18.434 22.2012 18.2298C22.4121 18.0255 22.5176 17.7702 22.5176 17.4638C22.5176 16.7149 22.1309 16.3404 21.3574 16.3404H10.7051C10.2129 16.3404 9.86133 16.1362 9.65039 15.7277L9.54492 15.2681H20.8301C21.5332 15.2681 22.1748 15.0638 22.7549 14.6553C23.335 14.2468 23.7305 13.7191 23.9414 13.0723L27 6.79149V6.53617C27 5.61702 26.6748 4.84255 26.0244 4.21277C25.374 3.58298 24.5742 3.26809 23.625 3.26809ZM21.9375 12.2043V12.3064C21.832 12.817 21.4629 13.0723 20.8301 13.0723H9.12305L7.64648 5.46383H23.625C24.2578 5.46383 24.627 5.75319 24.7324 6.33191L21.9375 12.2043ZM13.5 21.8043C13.5 22.417 13.2803 22.9362 12.8408 23.3617C12.4014 23.7872 11.8652 24 11.2324 24C10.6348 24 10.1162 23.7872 9.67676 23.3617C9.2373 22.9362 9.01758 22.417 9.01758 21.8043C9.01758 21.1915 9.2373 20.6723 9.67676 20.2468C10.1162 19.8213 10.6348 19.6085 11.2324 19.6085C11.8652 19.6085 12.4014 19.8213 12.8408 20.2468C13.2803 20.6723 13.5 21.1915 13.5 21.8043ZM22.5176 21.8043C22.5176 22.417 22.2979 22.9362 21.8584 23.3617C21.4189 23.7872 20.8828 24 20.25 24C19.6172 24 19.0811 23.7872 18.6416 23.3617C18.2021 22.9362 17.9824 22.417 17.9824 21.8043C17.9824 21.1915 18.2021 20.6723 18.6416 20.2468C19.0811 19.8213 19.6172 19.6085 20.25 19.6085C20.8828 19.6085 21.4189 19.8213 21.8584 20.2468C22.2979 20.6723 22.5176 21.1915 22.5176 21.8043Z"
                  fill="#3A3A3A"
                />
              </svg>
            </div>
            <div
              className={isMenuActive ? 'ham-menu ham-menu-active' : 'ham-menu'}
              onClick={menuClickHandler}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </section>
      </nav>
      <Menu isMenuActive={isMenuActive} />

      <div
        className={isMenuActive ? 'overlay overlay-active' : 'overlay'}
        onClick={() => setIsMenuActive(false)}
      ></div>
    </header>
  );
};

export default Header;
