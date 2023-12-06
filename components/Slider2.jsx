import "swiper/swiper.min.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Breakpoints } from "swiper";
import Image from "next/image";

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
				<SwiperSlide key={slide}>
					<div className="project-info-card-item">
						<div className="bg-red-400 h-max w-[100%] overflow-hidden mb-2">
              <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit:"contain"}} src={slide.image}></Image>
            </div>
						<div className="bg-transparent h-[4%] w-[100%]">
							<text className="project-text">sdfasdf</text>
						</div>
						<div className="project-type-text">asdf</div>
					</div>
				</SwiperSlide>
			))}
    </Swiper>
  );
};

export default Slider2;
