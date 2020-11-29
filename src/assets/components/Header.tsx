import React from 'react';

import logo from '../images/pngs/logo.png';
import cart from '../images/svgs/cart.svg';
import search from '../images/svgs/search.svg';
import ham_menu from '../images/svgs/ham-menu.svg';
import '../scss/Header.scss';

export interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header>
      <nav>
        <section className="section-1">
          <img src={logo} alt={'img'} className="logo"></img>
          <ul className="nav-links">
            <a href="/">
              <li className="nav-link active">Home</li>
            </a>
            <a href="/">
              <li className="nav-link">Products</li>
            </a>
            <a href="/">
              <li className="nav-link">About us</li>
            </a>
            <a href="/">
              <li className="nav-link">Contact</li>
            </a>
            <a href="/">
              <li className="nav-link">Locations</li>
            </a>
          </ul>
        </section>
        <section className="section-2">
          <button className="login">Login</button>
          <div className="search-box">
            <input placeholder={'search'} id="search"></input>
            <img src={search} alt="search" />
          </div>

          <img src={cart} alt={'img'} className="cart"></img>
          <img src={ham_menu} alt={'img'} className="ham-menu"></img>
        </section>
      </nav>
    </header>
  );
};

export default Header;
