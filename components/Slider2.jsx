import "swiper/swiper.min.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Breakpoints } from "swiper";
import Image from "next/image";
import { useAudioPlayer } from "../src/contexts/AudioPlayerContext";

SwiperCore.use([Breakpoints]);

const Slider2 = ({ slides }) => {
  const { updateAudioPlayer } = useAudioPlayer();

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
        1536: { slidesPerView: 4 },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            onClick={() => {
              console.log("SLIDER PART START imageSrc", slide.imageSrc, "setSrc", slide.setSrc, "trackName", slide.trackName,"SLIDER PART END");
              updateAudioPlayer(slide.imageSrc, slide.setSrc, slide.trackName);
            }}
            className="project-info-card-item"
            style={{ cursor: 'pointer' }}
          >
            <div className="image-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                alt="Slide Image"
                src={slide.imageSrc}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes based on your design breakpoints
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="bg-transparent h-[4%] w-[100%]">
              <text className="project-text">Slide Description</text>
            </div>
            <div className="project-type-text">Slide Category</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider2;
