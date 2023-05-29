import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button';
import imageAbout from '../../../Image/background/about.jpg';

export const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutus">
      <div className="left">
        <div className="tagline">tentang kami</div>
        <h1>Kami Membuat Bisnis Anda Modern di Era Digital Ini</h1>
        <div className="line" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet dolor vitae tellus scelerisque malesuada. Morbi posuere maximus elementum.</p>
        <Button className="button" onClick={() => navigate('/about')}>
          Tentang Kami
        </Button>
      </div>
      <div className="right">
        <div style={{ backgroundImage: `url(${imageAbout})` }} />
      </div>
    </div>
  );
};
