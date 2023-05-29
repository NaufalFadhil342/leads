import React, { useEffect, useRef, useState, useCallback } from 'react';

export const Testimonial = ({ slider }) => {
  const [curIndex, setCurIndex] = useState(0);
  const timerRef = useRef(null);

  const goToSlides = (newIndex) => {
    setCurIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = curIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  }, [curIndex, slider]);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);

  return (
    <div className="testimonial">
      <div className="top">
        <div className="tagline">Testimoni</div>
        <h1>Pelanggan yang menggunakan pelayanan kami memberikan tanggapan yang positif</h1>
        <div className="line" />
      </div>
      <div className="bottom">
        <div className="text">"{slider[curIndex].text}"</div>
        <div className="line" />
        <div className="user">
          <div className="image" style={{ backgroundImage: `url(${slider[curIndex].image})` }} />
          <div className="identity">
            <h3>{slider[curIndex].user}</h3>
            <div className="position">{slider[curIndex].position}</div>
          </div>
        </div>
        <div className="slide">
          {slider.map((slide, index) => {
            return (
              <div key={index} onClick={() => goToSlides(index)}>
                <div className="dot" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
