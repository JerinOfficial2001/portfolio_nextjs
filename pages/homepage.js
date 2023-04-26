import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import "animate.css";
import { useRouter } from "next/router";

export default function Homepage() {
  // const [hoverEffect, sethoverEffect] = useState(false);
  const router = useRouter();
  return (
    <>
      <Layout>
      {/* <style>
                          .batman:before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: rgb(255, 255, 255);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all .5s ease;
 }</style> */}
        <Stack spacing={3} width="100%" sx={{
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          gap:3,
          alignItems:'center'
        }}>
          <div
            className="animate__animated animate__zoomIn animate__delay-1s firstrow"
          >
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
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  A Web Developer
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                >
                  Jerin T
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  BE-MCT
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  I am a Web Developer from Coimbatore
                </Typography>
              </Box>
            </Box>
          </div>

          <Box
            sx={{
              height: 320,
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
              className="animate__animated animate__zoomIn animate__delay-1s"
              style={{ width: "100%" }}
            >
              <Stack
                sx={{
                  width: "100%",
                  height: 60,
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              ></Stack>
            </div>
            {/* container  */}
            <Stack
              
              sx={{
                width: "100%",
                height: 250,
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
                className="animate__animated animate__zoomIn animate__delay-1s"
                style={{ width: "50%" }}
                
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
                    height: "100%",
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
                        width: "20%",
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
                        
                      >
                        
                        </button>
                    </Box>
                  </Stack>
                </Box>
              </div>
              {/* project*/}
              <div
                className="animate__animated animate__zoomIn animate__delay-1s"
                style={{ width: "50%" }}
                
              >
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
                        width: "20%",
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
                        style={{
                          position:'relative',
                         
                        }}
                        onClick={() => {
                          router.push("/project");
                        }}
                        
                      >
                        
                        </button>
                    </Box>
                  </Stack>
                </Box>
              </div>
            </Stack>
          </Box>
        </Stack>
        {/* 2nd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 250 }}>
          {/* blog          */}
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "25%" }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
                cursor: "pointer",
                borderRadius: 8,
              }}
            >
              <Stack sx={{ height: 130, width: "100%" }}></Stack>

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
                    width: "20%",
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
                        
                      >
                        
                        </button>
                </Box>
              </Stack>
            </Box>
          </div>
          {/* specialization */}
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "50%" }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "100%",
                width: "100%",
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <Stack sx={{ height: 130, width: "100%" }}></Stack>

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
                    width: "80%",
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
                    specialization
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: 23 }}>
                    Services Offering
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "10%",
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
                        
                      >
                        
                        </button>
                </Box>
              </Stack>
            </Box>
          </div>
          {/* profiles          */}
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "25%" }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "100%",
                width: "100%",
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
              }}
            >
              <Stack sx={{ height: 130, width: "100%" }}></Stack>

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
                    Stay With Me
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: 23 }}>
                    Profiles
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "20%",
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
                        style={{
                          position:'relative',
                         
                        }}
                        onClick={() => {
                          router.push("/");
                        }}
                        
                      >
                        
                        </button>
                </Box>
              </Stack>
            </Box>
          </div>
        </Stack>
        {/* 3rd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 230 }}>
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "50%" }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "100%",
                width: "100%",
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
              }}
            ></Box>
          </div>
          <div
            className="animate__animated animate__zoomIn animate__delay-1s"
            style={{ width: "50%" }}
            onClick={() => {
              router.push("/contact");
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "100%",
                width: "100%",
                borderRadius: 8,
                cursor: "pointer",
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
                  src={require("../assets/icon2.png")}
                  alt="star"
                  style={{ height: "100%", width: "50px" }}
                />
              </Stack>
              <Box
                sx={{
                  width: "90%",
                  height: 70,
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
              </Box>
            </Box>
          </div>
        </Stack>
      </Layout>
    </>
  );
}
