import React from 'react';
import goalsImg from '../../../Image/background/goals.jpg';
import { goalsData } from '../aboutData';

export const Goals = () => {
  return (
    <div className="goals">
      <div className="image">
        <div style={{ backgroundImage: `url(${goalsImg})` }} />
      </div>
      <div className="content">
        <div className="header">
          <div className="tagline">Tujuan</div>
          <h1>Tujuan Kami adalah Mencapai Hasil yang Anda Inginkan</h1>
          <div className="line" />
          <p>Nullam fringilla enim non eros ornare, eget venenatis neque lacinia. Integer magna felis, consectetur vitae ipsum sed, porttitor egestas enim. Vivamus sit amet urna nulla. Fusce et urna nibh.</p>
        </div>
        <div className="body">
          {goalsData.map((goal, index) => {
            return (
              <div className="data" key={index}>
                <span>
                  <i>{goal.icon}</i>
                  <p>{goal.label}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
