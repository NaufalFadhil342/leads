import React from 'react';
import { Counter } from '../../counter';

export const Accredite = () => {
  return (
    <div className="accredite">
      <div className="header">
        <div className="tagline">Akreditas</div>
        <h1>Beberapa Klien Sudah Menggunakan Jasa Kami untuk Bisnis Mereka</h1>
        <div className="line" />
      </div>
      <div className="body">
        <div>
          <h1>
            <Counter end={120} />+
          </h1>
          <p>Proyek</p>
        </div>
        <div>
          <h1>
            <Counter end={175} />
          </h1>
          <p>Karyawan</p>
        </div>
        <div>
          <h1>
            <Counter end={80} />+
          </h1>
          <p>Klien</p>
        </div>
        <div>
          <h1>
            <Counter end={25} />
          </h1>
          <p>Penghargaan</p>
        </div>
      </div>
    </div>
  );
};
