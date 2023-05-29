import React from 'react';
import { NavLink } from 'react-router-dom';

export const Links = ({ onCloseLinks }) => {
  return (
    <div className="links">
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onCloseLinks}>
          Beranda
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onCloseLinks}>
          Layanan
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onCloseLinks}>
          Tentang Kami
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={onCloseLinks}>
          Kontak
        </NavLink>
      </nav>
    </div>
  );
};
