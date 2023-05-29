import React from 'react';
import { BrandManagement, ContentManagement, ProductMarketing, WebServices } from '../serviceData';

export const Product = () => {
  return (
    <div className="product">
      <div className="header">
        <div className="tagline">Produk</div>
        <h1>Kami siap membantu sesuai kriteria bisnis anda</h1>
        <div className="line" />
      </div>
      <div className="body">
        <div className="content">
          <ProductMarketing />
          <BrandManagement />
          <WebServices />
          <ContentManagement />
        </div>
      </div>
    </div>
  );
};
