import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import  Divider  from "@mui/material/Divider";
import { useRouter } from "next/router";
import FirstrowAbout from "@/about/FirstrowAbout";
import SecondrowAbout from "@/about/SecondrowAbout";


export default function ThirdrowAbout() {
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
      alignItems: "center",
    }}
  >
    {/* profiles          */}
    <div className="animate__animated animate__zoomIn animate__delay-1s thirdrow">
    <Box
        sx={{
          background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
          height: {
            xl: 250,
            lg: 250,
            md: 250,
            sm: 300,
            xs: 250,
          },
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
    <div className="animate__animated animate__zoomIn animate__delay-1s secondrow">
      <Box
        sx={{
          background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
          height: {
            xl: 250,
            lg: 250,
            md: 250,
            sm: 300,
            xs: 250,
          },
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
            width: "90%",
            justifyContent: "space-between",
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
                xs: 300,
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
                xs: 150,
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
   {/* credentials */}
    <div className="animate__animated animate__zoomIn animate__delay-1s thirdrow">
       <Box
        sx={{
          background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
          height: {
            xl: 250,
            lg: 250,
            md: 250,
            sm: 300,
            xs: 250,
          },
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
  </Stack>
  );
}
