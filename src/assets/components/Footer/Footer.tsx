import React from 'react';
import './Footer.scss';
interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="Footer">
      <a href="tel:+7304366907" className="tel">
        Call: 7304366907
      </a>
      <a href="e-mail:jacksonnadar123@gmail.com" className="e-mail">
        E-mail: jacksonnadar123@gmail.com
      </a>
    </div>
  );
};

export default Footer;
