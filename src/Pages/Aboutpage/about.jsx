import React from 'react';
import './about.css';
import { Main } from '../../Components/About/header/main';
import { Mision } from '../../Components/About/body/mision';
import { Visi } from '../../Components/About/body/visi';
import { Goals } from '../../Components/About/body/goals';
import { Growth } from '../../Components/About/body/growth';
import { Team } from '../../Components/About/body/team';
import { Accredite } from '../../Components/About/body/accredite';
import { Footer } from '../../Components/footer';

const About = () => {
  return (
    <div className="aboutPage">
      <Main />
      <Mision />
      <Visi />
      <Goals />
      <Growth />
      <Team />
      <Accredite />
      <Footer />
    </div>
  );
};

export default About;
