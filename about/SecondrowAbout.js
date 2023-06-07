import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";

export default function SecondrowAbout() {
  const router = useRouter();
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
      }}
    >
      <div className="animate__animated animate__zoomIn animate__delay-1s secondrow">
        <Box
          sx={{
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            height: {
              xl: 300,
              lg: 300,
              md: 300,
              sm: 300,
              xs: 250,
            },
            width: "100%",
            borderRadius: 8,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            flexDirection: "column",
            border:'1px solid #232323'

          }}
        >
          <Stack
            sx={{
              height: "90%",
              width: "90%",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                gap: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "white", fontSize: 20 }}>
                SKILLS
              </Typography>
              <Stack
                sx={{
                  height: "90%",
                  width: "100%",
                  gap: 1,
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    height: "90%",
                    width: "50%",
                    gap: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    NextJS
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    ReactJS
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    Redux
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    HTML & CSS
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    Rest API
                  </Typography>
                </Box>
                <Divider sx={{ color: "white" }} />
                <Box
                  sx={{
                    height: "90%",
                    width: "50%",
                    gap: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    Supabase
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    FL Studio
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    Photoshop
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    Animiz
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </div>
      {/* Education       */}
      <div className="animate__animated animate__zoomIn animate__delay-1s secondrow">
        <Box
          sx={{
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            height: {
              xl: 300,
              lg: 300,
              md: 300,
              sm: 300,
              xs: 250,
            },
            width: "100%",
            borderRadius: 8,
            gap: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            border:'1px solid #232323'

          }}
        >
          <Stack
            sx={{
              height: "90%",
              width: "90%",
              gap: 1,
            }}
          >
            <Typography sx={{ color: "white", fontSize: 20 }}>
              EDUCATION
            </Typography>
            <Box
              sx={{
                width: "100%",
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
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                2019 - 2023
              </Typography>
              <Typography sx={{ color: "white", fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      }, }}>
                Bachelor Degree in Mechatronics
              </Typography>
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: {
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                SNS College Of Technology
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
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
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                2018 - 2019
              </Typography>
              <Typography sx={{ color: "white", fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      }, }}>HSC</Typography>
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: {
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Saru Matric Higher Secondary School
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
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
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                2016 - 2017
              </Typography>
              <Typography sx={{ color: "white", fontSize: {
                        xl: 20,
                        lg: 20,
                        md: 20,
                        sm: 20,
                        xs: 15,
                      }, }}>
                SSLC
              </Typography>
              <Typography
                sx={{
                  color: "#5a5a5a",
                  fontSize: {
                    xl: 13,
                    lg: 13,
                    md: 13,
                    sm: 13,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Saru Matric Higher Secondary School
              </Typography>
            </Box>
          </Stack>
        </Box>
      </div>
    </Stack>
  );
}
