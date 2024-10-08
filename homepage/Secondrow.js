import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "animate.css";
import { useRouter } from "next/router";
import * as icon from "react-icons/ai";
import Button from "@mui/material/Button";

export default function Secondrow({ data }) {
  const router = useRouter();
  const { homepage } = router.query;
  return (
    <Stack
      width="100%"
      sx={{
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },

        gap: 3,
        alignItems: "center",
      }}
    >
      {/* blog          */}
      <div className="animate__animated animate__zoomIn  thirdrow">
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexDirection: "column",
            cursor: "pointer",
            borderRadius: 8,
            border: "1px solid #232323",
          }}
        >
          <Stack
            sx={{
              height: 130,
              width: {
                xl: "90%",
                lg: "90%",
                md: "90%",
                sm: "80%",
                xs: "60%",
              },
              background: "linear-gradient(to left,#1e1e1e,#1a1a1a,#141414)",
              marginTop: 5,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #232323",
              borderRadius: 8,
            }}
          >
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: 50 }}
            >
              BLOG
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              height: "35%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "60%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ color: "#5a5a5a", fontSize: 13, fontWeight: "bold" }}
              >
                BLOG
              </Typography>
              <Typography sx={{ color: "white", fontSize: 23 }}>
                GFonts
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: 60,
                  lg: 60,
                  md: 60,
                  sm: 150,
                  xs: 100,
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
                  router.push("/");
                }}
              ></button>
            </Box>
          </Stack>
        </Box>
      </div>
      {/* specialization */}
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
          }}
        >
          <Stack sx={{ height: "65%", width: "100%" }}>
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
              src={"/services.jpg"}
            />
          </Stack>

          <Stack
            direction="row"
            sx={{
              height: "35%",
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

                height: "80%",
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
                specialization
              </Typography>
              <Typography sx={{ color: "white", fontSize: 23 }}>
                Services Offering
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
                  router.push("/");
                }}
              ></button>
            </Box>
          </Stack>
        </Box>
      </div>
      {/* profiles          */}
      <div className="animate__animated animate__zoomIn  thirdrow">
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
              height: 130,
              width: {
                xl: "90%",
                lg: "90%",
                md: "90%",
                sm: "80%",
                xs: "60%",
              },
              background: "linear-gradient(to left,#1e1e1e,#1a1a1a,#141414)",
              marginTop: 5,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #232323",
              borderRadius: 8,
            }}
          >
            <div
              className="animate__animated animate__zoomIn "
              style={{
                height: "80%",
                width: "100%",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  router.push("https://www.linkedin.com/in/jerin-t-8866581a0");
                }}
                sx={{
                  color: "white",
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  height: "100%",
                  width: "40%",
                  borderRadius: "50%",
                  border: "1px solid #232323",

                  "&:hover": {
                    background: "white",
                    color: "#323232",
                  },
                }}
              >
                <icon.AiOutlineLinkedin size="50px" />
              </Button>

              <Button
                onClick={() => {
                  router.push("https://wa.me/qr/EMQB2VSLPRJLL1");
                }}
                sx={{
                  color: "white",
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  height: "100%",
                  width: "40%",
                  borderRadius: "50%",
                  border: "1px solid #232323",
                  "&:hover": {
                    background: "white",
                    color: "#323232",
                  },
                }}
              >
                <icon.AiOutlineWhatsApp size="50px" />
              </Button>
            </div>
          </Stack>

          <Stack
            direction="row"
            sx={{
              height: "35%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "60%",
                height: "90%",
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
                Reach me
              </Typography>
              <Typography sx={{ color: "white", fontSize: 23 }}>
                Contact
              </Typography>
            </Box>
            <Box
              sx={{
                width: {
                  xl: 60,
                  lg: 60,
                  md: 60,
                  sm: 150,
                  xs: 100,
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
                  router.push(
                    `/contact${
                      homepage && homepage !== "homepage"
                        ? "?id=" + homepage
                        : data
                        ? "?id=" + data?._id
                        : ""
                    }`
                  );
                }}
              ></button>
            </Box>
          </Stack>
        </Box>
      </div>
    </Stack>
  );
}
