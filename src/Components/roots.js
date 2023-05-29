import React, { useState } from 'react';
import '../Styles/roots.css';
import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Links } from './links';

export const Roots = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const openLinksHandler = () => {
    setOpenLinks(true);
  };

  const closeLinksHandler = () => {
    setOpenLinks(false);
  };

  return (
    <React.Fragment>
      <div className="navigation">
        <h1>Leads</h1>
        {openLinks && <Links onCloseLinks={closeLinksHandler} />}
        <div className="tapOpen" onClick={openLinksHandler}>
          <GiHamburgerMenu />
        </div>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Beranda
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Layanan
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            Tentang Kami
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Kontak
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </React.Fragment>
  );
};
