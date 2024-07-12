import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import AppLoader from "./Emulators/AppLoader";
import NoData from "./Emulators/NoData";
import { Add } from "@mui/icons-material";

export default function EmulatorCarousel({
  datas,
  isLoading,
  isOwner,
  handleOpen,
}) {
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
        {/* {isOwner && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#151617",
              borderRadius: 2,
              boxShadow: "0 1px 0px 1px gray",
            }}
          >
            <IconButton
              size="small"
              onClick={() => {
                handleOpen(null, "Application");
              }}
              sx={{
                color: "white",
                height: 20,
                width: 20,
              }}
            >
              <Add fontSize="20px" />
            </IconButton>
          </Box>
        )} */}
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
                  router.push("/projects/application?userID=" + elem.id);
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
                <Box
                  sx={{
                    position: "absolute",
                    height: "94%",
                    width: "88%",
                    bottom: 16,
                  }}
                  component="img"
                  src={elem.image}
                />

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
