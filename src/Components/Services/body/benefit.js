import React from 'react';
import prizeImg from '../../../Image/background/prize.jpg';
import { advantage } from '../serviceData';

export const Benefit = () => {
  const renderedBonus = advantage.map((bonus, index) => {
    return (
      <div className="bonus" key={index}>
        <i>{bonus.icon}</i>
        <div className="label">{bonus.label}</div>
        <p>Nunc elit turpis elementum ut rutrum a mattis in lacus.</p>
      </div>
    );
  });

  return (
    <div className="benefit">
      <div className="advantage">
        <div className="header">
          <div className="tagline">Keuntungan</div>
          <h1>Keuntungan Spesial jika Anda Bergabung Bersama Kami</h1>
          <div className="line" />
          <p>
            Nunc elit turpis, elementum ut rutrum a, mattis in lacus. Vivamus vel pulvinar sem, eget pharetra lacus. Aliquam pellentesque elementum massa eget lacinia. Mauris tempor est ac turpis porttitor porta. Sed mollis blandit ligula
            vel laoreet.
          </p>
        </div>
        <div className="body">{renderedBonus}</div>
      </div>
      <div className="image">
        <div style={{ backgroundImage: `url(${prizeImg})` }} />
      </div>
    </div>
  );
};
