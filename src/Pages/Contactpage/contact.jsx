import React from 'react';
import './contact.css';
import { Main } from '../../Components/Contact/header/main';
import { Message } from '../../Components/Contact/body/message';
import { Footer } from '../../Components/footer';

const Contact = () => {
  return (
    <div className="contactPage">
      <Main />
      <Message />
      <Footer />
    </div>
  );
};

export default Contact;
