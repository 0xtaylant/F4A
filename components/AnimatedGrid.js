import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const AnimatedGrid = ({ images }) => {
  const boxesRef = useRef([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    gsap.from(boxesRef.current, {
      y: 50,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: 'back.out(1.5)',
      delay: 0.5,
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(boxesRef.current[index], {
      scale: 1.1,
      zIndex: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };
  
  const handleMouseLeave = (index) => {
    gsap.to(boxesRef.current[index], {
      scale: 1,
      zIndex: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };
  

  const handleClick = (index) => {
    setIsFullscreen(true);
    setFullscreenImage(images[index]);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };
  

  return (
    <>
      <div className="grid-container">
        {images.map((image, i) => (
          <div
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            className="grid-item"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            onClick={() => handleClick(i)}
          >
            <div className="absolute inset-0">
              <img src={image} alt={`grid-item-${i}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
      {isFullscreen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseFullscreen}>
            <img src={fullscreenImage} alt="fullscreen" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-md">
                    <div className="flex items-center space-x-4">
                        <button
                        className="p-2 rounded-full focus:outline-none"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause();
                        }}
                        >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 12 6 6v12zM18 18V6" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                        </button>
                        <p className="text-black">METZ - Crossed Wires</p>
                    </div>
                </div>
        </div>
        )}

    </>
  );
};

export default AnimatedGrid;
