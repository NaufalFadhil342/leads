import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.css';
import { Button } from '../../Components/button';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <h1>Kembali ke Halaman</h1>
      <Button className="button" onClick={() => navigate('/')}>
        Beranda
      </Button>
    </div>
  );
};

export default Error;
