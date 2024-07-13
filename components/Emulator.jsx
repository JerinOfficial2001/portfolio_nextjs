import { Box } from "@mui/material";
import React from "react";
import BulletCarousel from "./Projects/BulletCarousel";
import { SwiperSlide } from "swiper/react";

export default function Emulator({ images }) {
  return (
    <div
      style={{
        height: "80vh",
        width: "340px",
        position: "relative",
        perspective: "1000px",
      }}
      className="userImg"
    >
      <Box
        sx={{
          height: "89.5%",
          position: "absolute",
          top: 24,
          left: 60,
          width: "70.5%",
          transform: "rotate3d(850, 1900, -300, 26deg)",
        }}
      >
        <BulletCarousel>
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10,
                  }}
                  component={"img"}
                  src={image.url}
                />
              </SwiperSlide>
            );
          })}
        </BulletCarousel>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          zIndex: 1,
          position: "relative",
        }}
        component={"img"}
        src="/Emulators/EmulatorIphone.png"
      />
    </div>
  );
}
