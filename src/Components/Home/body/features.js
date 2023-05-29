import React from 'react';
import { Button } from '../../button';

export const Features = () => {
  return (
    <div className="features">
      <div className="header">
        <div className="tagline">Pilihan Paket</div>
        <h1>Kami akan memandu serta mengatur bisnis anda dengan cara yang sesuai</h1>
        <div className="line" />
      </div>
      <div className="priceDeal">
        <div className="basic">
          <div className="price">
            <div>Basic</div>
            <span>
              $<p>19.99</p>
            </span>
          </div>
          <div className="benefit">
            <div>mi vel accumsan rhoncus</div>
            <div>mi vel accumsan rhoncus</div>
            <div>mi vel accumsan rhoncus</div>
          </div>
          <Button className="button">Pesan Sekarang</Button>
        </div>
        <div className="premium">
          <div className="price">
            <div>Premium</div>
            <span>
              $<p>99.99</p>
            </span>
          </div>
          <div className="benefit">
            <div>mi vel accumsan rhoncus</div>
            <div>mi vel accumsan rhoncus</div>
            <div>mi vel accumsan rhoncus</div>
          </div>
          <Button className="button">Pesan Sekarang</Button>
        </div>
      </div>
    </div>
  );
};
