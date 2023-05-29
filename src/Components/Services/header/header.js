import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../Image/background/service.jpg';

export const Header = () => {
  return (
    <div className="head">
      <div className="background" style={{ backgroundImage: `url(${background})` }}>
        <div className="background-content">
          <div className="tagline">Layanan</div>
          <h1>Para ahli kami siap membantu meningkatkan strategi anda</h1>
          <Link to="https://wa.me/6283857390400" target="_blank">
            Get Started
          </Link>
        </div>
      </div>
      <div className="services">
        <div className="tagline">Layanan</div>
        <h1>Para ahli kami siap membantu meningkatkan strategi anda</h1>
        <Link to="https://wa.me/6283857390400" target="_blank">
          Get Started
        </Link>
      </div>
    </div>
  );
};
