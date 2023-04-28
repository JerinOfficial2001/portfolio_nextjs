import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import "animate.css";
import { useRouter } from "next/router";

export default function Firstrow() {
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
        {/* 1st */}
        <div className="animate__animated animate__zoomIn animate__delay-1s  secondrow">
          <Stack direction='row' sx={{
             background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
             height: "310px",
             width: "100%",
             borderRadius: "40px",
             cursor: "pointer",
             justifyContent: "center",
             alignItems: "center",
             gap: "10px",
             marginTop:"15px",
          }}>
          <Box
            sx={{
              height: "70%",
              width: "40%",
              background: "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
              borderRadius: "40px 0px 40px 0px",
              boxShadow: "0px 0px 5px black",
            }}
          >
            <Image
              src={require("../assets/dp.png")}
              placeholder="empty"
              alt="sign"
              style={{
                height: "90%",
                width: "99%",
                marginTop: "21px",
                borderRadius: "0px 0px 40px 0px",
              }}
            />
          </Box>
          <Box
            sx={{
              height: "60%",
              width: "45%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: {
                    xl: 15,
                  lg: 15,
                  md: 15,
                  sm: 15,
                  xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                A Web Developer
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: {
                  xl: 40,
                  lg: 40,
                  md: 40,
                  sm: 40,
                  xs: 20,
                }, fontWeight: "bold" }}
              >
                Jerin T
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xl: 15,
                  lg: 15,
                  md: 15,
                  sm: 15,
                  xs: 10,
                  },
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                BE-MCT
              </Typography>
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: {
                    xl: 15,
                  lg: 15,
                  md: 15,
                  sm: 15,
                  xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                I am a Web Developer from Coimbatore
              </Typography>
            </Box>
          </Box>
          </Stack>
        </div>
       
        {/* 2nd */}
        <Box
          sx={{
            width: {
              xl: "48%",
              lg: "48%",
              md: "48%",
              sm: "100%",
              xs: "100%",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <div
            className="animate__animated animate__zoomIn animate__delay-1s "
            style={{ width: "100%" }}
          >
            <Stack
              sx={{
                width: "100%",
                height: 60,
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                borderRadius: 8,
                cursor: "pointer",
              }}
            ></Stack>
          </div>
          {/* container  */}
          <Stack
            sx={{
              width: "100%",

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
            {/* creditials */}
            <div
              className="animate__animated animate__zoomIn animate__delay-1s secondrow"

              // onMouseEnter={() => {
              //   sethoverEffect(true);
              // }}
              // onMouseLeave={() => {
              //   sethoverEffect(false);
              // }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xl: 235,
                    lg: 235,
                    md: 235,
                    sm: 300,
                    xs: 250,
                  },
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={require("../assets/sign.png")}
                  placeholder="empty"
                  alt="sign"
                  style={{
                    height: 130,
                    width: 180,
                  }}
                />

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
                      }}
                    >
                      MORE ABOUT ME
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 23 }}>
                      Credentials
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                        width: {
                            xl: 60,
                            lg: 60,
                            md:60,
                            sm: 150,
                            xs: 100,
                          },
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      className="batman"
                      onClick={() => {
                        router.push("/credentials");
                      }}
                    ></button>
                  </Box>
                </Stack>
              </Box>
            </div>
            {/* project*/}
            <div className="animate__animated animate__zoomIn animate__delay-1s secondrow">
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xl: 235,
                    lg: 235,
                    md: 235,
                    sm: 300,
                    xs: 300,
                  },
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <Stack
                  sx={{
                    height: "65%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={require("../assets/projectimg.jpeg")}
                    placeholder="empty"
                    alt="sign"
                    style={{
                      height: "80%",
                      width: "80%",
                      borderRadius: 10,
                      marginTop: 30,
                    }}
                  />
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
                      }}
                    >
                      SHOWCASE
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 23 }}>
                      Projects
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xl: 60,
                        lg: 60,
                        md:60,
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
                        router.push("/project");
                      }}
                    ></button>
                  </Box>
                </Stack>
              </Box>
            </div>
            {/* !project*/}
          </Stack>
          {/* !container */}
        </Box>
      </Stack>
    </>
  );
}
