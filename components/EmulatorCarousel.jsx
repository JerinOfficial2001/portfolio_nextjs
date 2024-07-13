import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AppLoader from "./Emulators/AppLoader";
import NoData from "./Emulators/NoData";

export default function EmulatorCarousel({ datas, isLoading, id }) {
  const router = useRouter();
  return (
    <Stack sx={{ position: "sticky", top: "30px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          gap: 2,
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: "#707070",
            fontSize: 25,
            fontFamily: "monospace",
          }}
        >
          Application
        </Typography>
      </Box>
      {isLoading ? (
        <AppLoader />
      ) : datas.length > 0 ? (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {datas.map((elem, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => {
                  router.push(
                    `/projects/application?id=${id}&projectID=${elem._id}`
                  );
                }}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "90%",
                  width: "90%",
                }}
              >
                <Stack
                  sx={{
                    position: "absolute",
                    height: "94%",
                    width: "88%",
                    bottom: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                    }}
                    component="img"
                    src={elem.images[0].url}
                  />

                  <Box
                    sx={{
                      background: "#0000009e",
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        height: "80px",
                        width: "80px",
                        boxShadow: "0 1px 1px 1px gray",
                        borderRadius: "50%",
                      }}
                      component="img"
                      src={elem.image.url}
                    />
                    <Typography
                      sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                    >
                      {elem.title}
                    </Typography>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                  component="img"
                  src={"/Emulators/Emulator2.png"}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <NoData />
      )}
    </Stack>
  );
}
