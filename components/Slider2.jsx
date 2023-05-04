import "swiper/swiper.min.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Breakpoints } from "swiper";

SwiperCore.use([Breakpoints]);

const Slider2 = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px (sm)
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px (md)
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 1280px (xl)
        1280: {
          slidesPerView: 3,
        },
        // when window width is >= 1536px (2xl)
        1536: {
          slidesPerView: 4,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <div className="h-[100%] w-[100%] bg-black rounded-2xl relative overflow-hidden">
            <img
              src={slide.image}
              alt="/"
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider2;
