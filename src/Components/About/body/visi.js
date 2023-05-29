import React from 'react';
import { useNavigate } from 'react-router-dom';
import visiImg from '../../../Image/background/vision.jpg';
import { Button } from '../../button';

export const Visi = () => {
  const navigate = useNavigate();
  return (
    <div className="visi">
      <div className="content">
        <div className="head">
          <div className="tagline">Visi</div>
          <h1>Membuat Setiap Produk dan Servis Memberikan Hal yang Positif</h1>
          <div className="line" />
        </div>
        <div className="body">
          <p>Nullam fringilla enim non eros ornare, eget venenatis neque lacinia. Integer magna felis, consectetur vitae ipsum sed, porttitor egestas enim. Vivamus sit amet urna nulla. Fusce et urna nibh.</p>
          <Button className="button" onClick={() => navigate('/contact')}>
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="image">
        <div style={{ backgroundImage: `url(${visiImg})` }} />
      </div>
    </div>
  );
};
