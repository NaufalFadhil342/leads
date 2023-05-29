import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/footer.css';
import { GrTwitter, GrFacebookOption, GrLinkedinOption, GrInstagram } from 'react-icons/gr';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="contact">
          <h1>Leads</h1>
          <div className="info">
            <div className="phone">Whatsapp: (+62) 8123 456 789</div>
            <div className="email">Email: company@gmail.com</div>
          </div>
        </div>
        <div className="company">
          <h4>Profil</h4>
          <div className="profile">
            <Link to="/about">Tentang kami</Link>
            <Link to="/about">Team kami</Link>
            <Link to="/services">Layanan kami</Link>
          </div>
        </div>
        <div className="legality">
          <h4>Legalitas</h4>
          <div className="license">
            <div>Copyright</div>
            <div>Terms {'&'} conditions</div>
            <div>Your account</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          <span>
            &copy;<p>2023 Leads, Proudly powered by Naudhil</p>
          </span>
        </div>
        <div className="socialMedia">
          <Link to="https://twitter.com/" target="_blank">
            <GrTwitter />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <GrInstagram />
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <GrFacebookOption />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <GrLinkedinOption />
          </Link>
        </div>
      </div>
    </div>
  );
};
