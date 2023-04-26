import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, slideInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [images.length, slideInterval]);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container" style={{ position: "relative" }}>
        <div className="slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              style={{
                height: "100vh",
                width: "100vw",
                objectFit: "cover",
                display: index === currentSlide ? "block" : "none",
              }}
            />
          ))}
        </div>
        <div
          className="carousel-controls"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          <button
            onClick={goToPrevSlide}
            style={{
                            color:"white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              marginRight: "20px",
            }}
          >
            &lt;
          </button>
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator${index === currentSlide ? " active" : ""}`}
              style={{
                cursor: "pointer",
                height: "16px",
                width: "16px",
                margin: "0 4px",
                backgroundColor: index === currentSlide ? "#717171" : "#cfcfcf",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          ))}
          <button
            onClick={goToNextSlide}
            style={{
              color:"white",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              marginLeft: "20px",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
