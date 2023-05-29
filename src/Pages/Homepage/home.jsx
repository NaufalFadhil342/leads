import React from 'react';
import './home.css';
import { Head } from '../../Components/Home/header/head';
import { AboutUs } from '../../Components/Home/body/aboutHome';
import { Features } from '../../Components/Home/body/features';
import { ServiceHome } from '../../Components/Home/body/serviceHome';
import { Strategy } from '../../Components/Home/body/strategy';
import { Testimonial } from '../../Components/Home/body/testimonial';
import { Accreditation } from '../../Components/Home/body/accreditation';
import { dataSlider } from '../../Components/Home/dataHome';
import { Footer } from '../../Components/footer';

const Home = () => {
  return (
    <div className="homePage">
      <Head />
      <AboutUs />
      <Strategy />
      <ServiceHome />
      <Features />
      <Testimonial slider={dataSlider} />
      <Accreditation />
      <Footer />
    </div>
  );
};

export default Home;
