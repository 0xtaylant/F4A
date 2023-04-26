import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  const [contentBox, setContentBox] = useState(null);

  const handleMouseMove = (e) => {
    if (!contentBox) return;

    const rect = contentBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleX = 1 + (x / rect.width) * 0.1;
    const scaleY = 1 + (y / rect.height) * 0.1;

    gsap.to(contentBox, { scaleX, scaleY, duration: 0.3, ease: 'sine.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(contentBox, { scaleX: 1, scaleY: 1, duration: 0.3, ease: 'sine.out' });
  };

  useEffect(() => {
    if (contentBox) {
      contentBox.addEventListener('mousemove', handleMouseMove);
      contentBox.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (contentBox) {
        contentBox.removeEventListener('mousemove', handleMouseMove);
        contentBox.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [contentBox]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #ff6633, #ffffff, #cc99ff)' }}>
      <div ref={setContentBox} className="bg-white p-8 rounded-md shadow-lg max-h-75p max-w-90p relative overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-f4a-green">About Us</h1>
        <p className="text-lg leading-relaxed">
        Welcome to our Istanbul-based radio collective! We are a group of passionate music enthusiasts committed to celebrating the power of music and fostering connections among diverse listeners. Inspired by Istanbul's rich and dynamic culture, we strive to create a unique and inclusive space for music lovers from all walks of life.
        </p>
        <p className="text-lg leading-relaxed mt-4">
        Our dedicated team of DJs, producers, and music aficionados works around the clock to bring you an exceptional selection of tunes. We take pride in curating an eclectic mix of genres that cater to a wide range of tastes. Our diverse repertoire includes:
        </p>
        <ul className="list-disc list-inside mt-4 pl-8 text-f4a-green">
        <li>Garage</li>
        <li>Speed Garage</li>
        <li>Drum and Bass</li>
        <li>Dubstep</li>
        <li>IDM (Intelligent Dance Music)</li>
        <li>Breaks</li>
        <li>Jazz</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
        As a creative collective, we are deeply committed to promoting local talent and providing a platform for emerging artists. Through live shows, podcasts, and exclusive interviews, we aim to showcase the incredible diversity of Istanbul's music scene and connect with fans across the globe. Join us on this musical journey and immerse yourself in the sounds that define our city.
        </p> 
      </div>
    </div>
  );
};

export default About;











