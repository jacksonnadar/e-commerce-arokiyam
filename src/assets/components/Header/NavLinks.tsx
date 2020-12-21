import React from 'react';

interface Props {}

const NavLinks: React.FC<Props> = () => {
  return (
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
  );
};

export default NavLinks;
