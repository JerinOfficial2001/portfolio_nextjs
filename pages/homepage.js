import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <Layout>
        <Stack direction="row" spacing={3} width="100%">
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: 320,
              width: "49%",
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "70%",
                width: "40%",
                background: "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                borderRadius:'40px 0px 40px 0px',
                boxShadow:'0px 0px 5px black'
              }}
            >
              <Image
                  src={require("../assets/dp.png")}
                  placeholder="empty"
                  alt="sign"
                  style={{
                    height: "90%",
                    width: "99%",
                    marginTop:"21px",
                    borderRadius:'0px 0px 40px 0px'
                  }}
                />

            </Box>
            <Box sx={{ height: "60%", width: "45%" }}></Box>
          </Box>
          <Box
            sx={{
              height: 320,
              width: "48%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
            }}
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
            {/* container  */}
            <Stack
              direction="row"
              sx={{
                width: "100%",
                height: 250,
                gap: 3,
              }}
            >
              {/* creditials */}
              <Box
                sx={{
                  width: "50%",
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
                      gap: 2,
                      flexDirection: "column",
                    }}
                  ></Box>
                </Stack>
              </Box>
              {/* project              */}
              <Box
                sx={{
                  width: "50%",
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
                  ></Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* 2nd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 250 }}>
          {/* blog          */}
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "25%",
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
              ></Box>
            </Stack>
          </Box>
          {/* specialization */}
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "50%",
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
                  width: "70%",
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
                  width: "20%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                }}
              ></Box>
            </Stack>
          </Box>
          {/* profiles          */}
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "25%",
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
              ></Box>
            </Stack>
          </Box>
        </Stack>
        {/* 3rd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 230 }}>
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "50%",
              borderRadius: 8,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: "column",
            }}
          ></Box>
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "50%",
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
        </Stack>
      </Layout>
    </>
  );
}
