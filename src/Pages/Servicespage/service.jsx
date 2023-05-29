import React from 'react';
import './service.css';
import { Header } from '../../Components/Services/header/header';
import { Product } from '../../Components/Services/body/product';
import { Benefit } from '../../Components/Services/body/benefit';
import { Accredite } from '../../Components/Services/body/accredite';
import { Footer } from '../../Components/footer';

const Service = () => {
  return (
    <div className="servicePage">
      <Header />
      <Product />
      <Benefit />
      <Accredite />
      <Footer />
    </div>
  );
};

export default Service;
