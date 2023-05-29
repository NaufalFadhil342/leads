import React from 'react';
import contactImg from '../../../Image/background/home.jpg';

export const Main = () => {
  return (
    <div className="main">
      <div className="image" style={{ backgroundImage: `url(${contactImg})` }}>
        <div className="image-content">
          <div className="tagline">Hubungi Kami</div>
          <h1>Jangan Ragu untuk Menghubungi Kami</h1>
          <div className="line" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed augue sit amet enim hendrerit condimentum nec id diam. Sed eu turpis tortor. Nunc non rutrum dui.</p>
        </div>
      </div>
      <div className="content">
        <div className="tagline">Hubungi Kami</div>
        <h1>Jangan Ragu untuk Menghubungi Kami</h1>
        <div className="line" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed augue sit amet enim hendrerit condimentum nec id diam. Sed eu turpis tortor. Nunc non rutrum dui.</p>
      </div>
    </div>
  );
};
