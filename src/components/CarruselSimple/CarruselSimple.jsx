import React, { useState } from "react";
import "./CarruselSimple.scss";

const CarruselSimple = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const openModal = () => {
    console.log("Click en imagen");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="carousel">
        {images.length > 1 && (
          <button onClick={handlePrev} className="carousel-btn">‹</button>
        )}

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-img"
          onClick={openModal}
        />

        {images.length > 1 && (
          <button onClick={handleNext} className="carousel-btn">›</button>
        )}
      </div>
      {modalOpen && (
        <div className="div_imgGrande" onClick={closeModal}>
          <img
            src={images[currentIndex]}
            alt={`Slide ampliado ${currentIndex}`}
            className="imgGrande"
          />
        </div>
      )}
    </>
  );
};

export default CarruselSimple;
