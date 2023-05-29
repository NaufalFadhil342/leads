import React from 'react';
import { Link } from 'react-router-dom';
import serviceImage from '../../../Image/background/service.jpg';

export const ServiceHome = () => {
  return (
    <div className="service">
      <div className="left">
        <div style={{ backgroundImage: `url(${serviceImage})` }} />
      </div>
      <div className="right">
        <div className="tagline">Layanan</div>
        <h1>Promosi Bisnis Anda dengan Service Berkualitas</h1>
        <div className="line" />
        <div className="serviceCategory">
          <Link to="/services">Product marketing</Link>
          <Link to="/services">Brand management</Link>
          <Link to="/services">Web servicing</Link>
          <Link to="/services">Content management</Link>
        </div>
      </div>
    </div>
  );
};
