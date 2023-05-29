import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../button';
import { aboutData } from '../dataHome';

export const Strategy = () => {
  const navigate = useNavigate();

  const rendered = aboutData.map((data, index) => {
    return (
      <div className="rendered" key={index}>
        <i>{data.image}</i>
        <div className="label">{data.label}</div>
        <p>{data.message}</p>
      </div>
    );
  });

  return (
    <div className="strategy">
      <div className="header">
        <div className="tagline">Strategi</div>
        <div className="contact">
          <h1>Kami akan memandu serta mengatur bisnis anda dengan cara yang sesuai</h1>
          <Button className="button" onClick={() => navigate('/contact')}>
            Hubungi Kami
          </Button>
        </div>
        <div className="line" />
      </div>
      <div className="body">{rendered}</div>
    </div>
  );
};
