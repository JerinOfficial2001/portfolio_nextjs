import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";

export default function FirstrowAbout() {
  const router = useRouter();
  return (
    <>
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
        <div className="animate__animated animate__zoomIn animate__delay-1s thirtytwo">
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: 370,
              width: "100%",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "85%",
                width: "85%",
                background: "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                borderRadius: "40px",
                boxShadow: "0px 0px 5px black",
              }}
            >
              <Image
                src={require("../assets/dp.png")}
                placeholder="empty"
                alt="sign"
                style={{
                  height: "94%",
                  width: "100%",
                  borderRadius: "0px 0px 40px 40px",
                  marginTop: "18px",
                }}
              />
            </Box>
          </Box>
        </div>
        <Box
          sx={{
            height: 370,
            width: {
              xl: "65%",
              lg: "65%",
              md: "65%",
              sm: "100%",
              xs: "100%",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <Stack
              direction="row"
              sx={{
                height: 100,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />

              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xl: 70,
                    lg: 70,
                    md: 70,
                    sm: 30,
                    xs: 20,
                  },
                  fontWeight: "bold",
                }}
              >
                SELF-SUMMARY
              </Typography>

              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />
            </Stack>
          </div>
          {/* container  */}
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "100%", height: "400px" }}
          >
            <Stack
              direction="row"
              sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
              }}
            >
              {/* About*/}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <Stack
                  sx={{
                    height: 80,
                    width: "90%",
                  }}
                >
                  <Image
                    placeholder="empty"
                    src={require("../assets/star.jpeg")}
                    alt="star"
                    style={{ height: "100%", width: "50px",borderRadius:"12px 0px 0px 0px" }}
                  />
                </Stack>
                <Box
                  sx={{
                    width: "90%",
                    height: "65%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 35,
                        lg: 35,
                        md: 35,
                        sm: 35,
                        xs: 30,
                      },
                      fontWeight: "bold",
                    }}
                  >
                    Jerin
                  </Typography>
                  <Typography sx={{ color: "#9c9c9c", 
                  fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                      }}>
                    I am from Coimbatore.Currently pursuing BE-MCT (final year).
                    Building immersive web experiences with React.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </div>
        </Box>
      </Stack>
    </>
  );
}
