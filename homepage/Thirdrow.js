import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import "animate.css";
import { useRouter } from "next/router";

export default function Thirdrow() {
  const router = useRouter();
  return (
    <Stack
      width="100%"
      sx={{
        gap: 3,
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
      }}
    >
      <div className="animate__animated animate__zoomIn  secondrow">
        <Box
          sx={{
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            height: {
              xl: 250,
              lg: 250,
              md: 250,
              sm: 300,
              xs: 300,
            },
            width: "100%",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexDirection: "column",
            border: "1px solid #232323",
            position: "relative",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              background: "#564c4cb5",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1111,
            }}
          >
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
            >
              Upcoming Feature...
            </Typography>
          </Box> */}
          <Stack sx={{ height: "70%", width: "100%" }}>
            <Box
              component="img"
              alt="services"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "32px 32px 0 0",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={"/resume.jpg"}
            />
          </Stack>

          <Stack
            direction="row"
            sx={{
              height: "30%",
              width: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "100%",
                xs: "90%",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: {
                  xl: "80%",
                  lg: "80%",
                  md: "80%",
                  sm: 400,
                  xs: 400,
                },

                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: 13,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Resume
              </Typography>
              <Typography sx={{ color: "white", fontSize: 23 }}>
                View & Download
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: 60,
                  lg: 60,
                  md: 60,
                  sm: 150,
                  xs: 220,
                },
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <button
                className="batman"
                onClick={() => {
                  router.push("/resume");
                }}
              ></button>
            </Box>
          </Stack>
        </Box>
      </div>

      <div
        className="animate__animated animate__zoomIn  secondrow"
        onClick={() => {
          router.push("/contact");
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            height: {
              xl: 250,
              lg: 250,
              md: 250,
              sm: 300,
              xs: 300,
            },
            width: "100%",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexDirection: "column",
            border: "1px solid #232323",
          }}
        >
          <Stack
            sx={{
              height: 82,
              width: "90%",
            }}
          >
            <Image
              placeholder="empty"
              src={require("../assets/icon2.png")}
              alt="star"
              style={{ height: "100%", width: "50px" }}
            />
          </Stack>
          <Box
            sx={{
              width: "90%",
              height: {
                xl: 85,
                lg: 85,
                md: 85,
                sm: 140,
                xs: 140,
              },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: 8,
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: 40, fontWeight: "bold" }}
            >
              {"Let's"}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{ color: "white", fontSize: 40, fontWeight: "bold" }}
              >
                work
              </Typography>
              <Typography
                sx={{ color: "#5b78f6", fontSize: 40, fontWeight: "bold" }}
              >
                together.
              </Typography>
            </Box>
            <Stack
              direction="row"
              sx={{
                height: "40%",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              ></Box>
              <Box
                sx={{
                  width: {
                    xl: 60,
                    lg: 60,
                    md: 60,
                    sm: 150,
                    xs: 100,
                  },
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <button
                  className="batman"
                  onClick={() => {
                    router.push("/");
                  }}
                ></button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </div>
    </Stack>
  );
}
