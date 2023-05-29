import React from 'react';
import { Button } from '../../button';
import { Counter } from '../../counter';

export const Growth = () => {
  return (
    <div className="growth">
      <div className="content">
        <div className="header">
          <h1>Kami Membuatnya Cocok untuk Memandu Bisnis Anda dengan Cara yang Tepat</h1>
          <Button className="button">Hubungi Kami</Button>
        </div>
        <div className="body">
          <div>
            <h1>
              <Counter end={80} />%
            </h1>
            <p>Tingkat Konsultasi</p>
          </div>
          <div>
            <h1>
              <Counter end={65} />%
            </h1>
            <p>Keputusan Kepengurusan</p>
          </div>
          <div>
            <h1>
              <Counter end={90} />%
            </h1>
            <p>Tingkat Konversi</p>
          </div>
          <div>
            <h1>
              <Counter end={85} />%
            </h1>
            <p>Profit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
