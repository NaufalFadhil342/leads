import React from 'react';
import { Form } from '../../form';

export const Message = () => {
  return (
    <div className="message">
      <div className="header">
        <div className="tagline">Pesan</div>
        <h1>Mulai Pembicaraan untuk Mendapatkan Informasi Apapun</h1>
        <div className="line" />
      </div>
      <div className="content">
        <div className="form">
          <Form />
        </div>
        <div className="companyInfo">
          <div className="address">
            <h3>Alamat Kami</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
          <div className="contact">
            <h3>Info Kontak</h3>
            <div className="info">
              <p>office@example.org</p>
              <div className="phone">(+62) 8123 456 789</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
