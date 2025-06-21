import React, { useState } from "react";
import "./CarruselSimple.scss";

const CarruselSimple = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-btn">‹</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-img" />
      <button onClick={handleNext} className="carousel-btn">›</button>
    </div>
  );
};

export default CarruselSimple;
