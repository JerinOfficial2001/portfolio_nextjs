import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

// import required modules

export default function BulletCarousel({ children }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: 20,
      }}
    >
      {children}
    </Swiper>
  );
}
