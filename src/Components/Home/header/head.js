import React from 'react';
import headerBackground from '../../../Image/background/home.jpg';
import { Button } from '../../button';

export const Head = () => {
  return (
    <div className="header">
      <div className="image">
        <div style={{ backgroundImage: `url(${headerBackground})` }} />
        <div className="content">
          <div className="tagline">Langganan</div>
          <h1>Membantu segala kebutuhan bisnis apapun yang anda inginkan</h1>
          <div className="line" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere maximus elementum.</p>
          <form>
            <label htmlFor="email">Masukkan email kamu:</label>
            <input type="email" id="email" name="email" />
            <Button className="button">Klik disini</Button>
          </form>
        </div>
      </div>
      <div className="subscriber">
        <div className="tagline">Langganan</div>
        <h1>Membantu segala kebutuhan bisnis apapun yang anda inginkan</h1>
        <div className="line" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere maximus elementum.</p>
        <form>
          <label htmlFor="email">Masukkan email kamu:</label>
          <input type="email" id="email" name="email" />
          <Button className="button">Klik disini</Button>
        </form>
      </div>
    </div>
  );
};
