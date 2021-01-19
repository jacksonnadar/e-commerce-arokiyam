import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<Props> = ({ setIsMenuActive }) => {
  return (
    <ul className="nav-links" onClick={() => setIsMenuActive(false)}>
      <Link to="/">
        <li className="nav-link active">Home</li>
      </Link>
      <a href="/product">
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
  );
};

export default NavLinks;
