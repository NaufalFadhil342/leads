import React from 'react';
import { teamData } from '../aboutData';

export const Team = () => {
  const rendered = teamData.map((team, index) => {
    return (
      <div className="data" key={index}>
        <div className="image">
          <div style={{ backgroundImage: `url(${team.image})` }} />
        </div>
        <div className="members">
          <div className="label">{team.name}</div>
          <div className="line" />
          <div className="position">{team.position}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="team">
      <div className="header">
        <div className="tagline">Tim</div>
        <h1>Anggota Tim Kami yang Luar Biasa</h1>
        <div className="line" />
      </div>
      <div className="body">{rendered}</div>
    </div>
  );
};
