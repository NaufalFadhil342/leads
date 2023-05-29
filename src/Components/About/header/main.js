import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button';
import mainImg from '../../../Image/background/about.jpg';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="image" style={{ backgroundImage: `url(${mainImg})` }}>
        <div className="image-content">
          <div className="tagline">Tentang Kami</div>
          <h1>Pengembangan Teknologi Bisnis Terkemuka di Indonesia</h1>
          <Button className="button" onClick={() => navigate('/contact')}>
            Hubungi Kami
          </Button>
        </div>
      </div>
      <div className="content">
        <div className="tagline">Tentang Kami</div>
        <h1>Pengembangan Teknologi Bisnis Terkemuka di Indonesia</h1>
        <Button className="button" onClick={() => navigate('/contact')}>
          Hubungi Kami
        </Button>
      </div>
    </div>
  );
};
