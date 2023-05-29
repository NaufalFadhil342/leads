import React from 'react';
import { productsData } from '../aboutData';

export const Mision = () => {
  const rendered = productsData.map((product, index) => {
    return (
      <div className="data" key={index}>
        <i>{product.icon}</i>
        <div className="label">{product.label}</div>
        <p>{product.text}</p>
      </div>
    );
  });

  return (
    <div className="mision">
      <div className="header">
        <div className="tagline">Tentang Kami</div>
        <h1>Membuat Setiap Produk dan Servis Berkembang serta Ramah Publik</h1>
        <div className="line" />
      </div>
      <div className="body">{rendered}</div>
    </div>
  );
};
