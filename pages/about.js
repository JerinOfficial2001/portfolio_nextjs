import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import  Divider  from "@mui/material/Divider";
import { useRouter } from "next/router";
import FirstrowAbout from "@/about/FirstrowAbout";

export default function About() {
  const router =useRouter()
  return (
    <>
      <Layout>
        <FirstrowAbout/>
        {/* 2nd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 300 }}>
        <div className="animate__animated animate__zoomIn animate__delay-1s" style={{width: "50%",}}>
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "100%",
              borderRadius: 8,
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexDirection: "column",
            }}
          >
            <Stack sx={{
             
              height: "90%",
              width: "90%",
              gap: 1,
            }}>
             
             <Box sx={{
             height: "100%",
             width: "100%",
             gap: 3,
             display:'flex',
             flexDirection:'column'
             
           }}>
             <Typography sx={{ color: "white", fontSize: 20 }}>
                SKILLS
              </Typography>
              <Stack sx={{
             height: "90%",
             width: "100%",
             gap: 1,
             flexDirection:'row'
             
           }}>
                <Box sx={{
             height: "90%",
             width: "50%",
             gap: 1,
             display:'flex',
             flexDirection:'column'
             
           }}>
                
                <Typography sx={{ color: "white", fontSize: 20 }}>
                   NextJS
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   ReactJS
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   Redux
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   HTML & CSS
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   Rest API
                 </Typography>
                </Box>
                <Divider sx={{color:'white'}}/>
                <Box sx={{
             height: "90%",
             width: "50%",
             gap: 1,
             display:'flex',
             flexDirection:'column'
             
           }}>
                   
                <Typography sx={{ color: "white", fontSize: 20 }}>
                   Supabase
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                  FL Studio
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   Photoshop
                 </Typography>
                 <Typography sx={{ color: "white", fontSize: 20 }}>
                   Animiz
                 </Typography>
                 
                </Box>
                </Stack>
             
             </Box>
              
            </Stack>
          </Box>
          </div>
  {/* Education       */}
  <div className="animate__animated animate__zoomIn animate__delay-1s" style={{width: "50%",}}>
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "100%",
              borderRadius: 8,
              gap: 2,
              flexDirection: "column",
              alignItems:'center',
              justifyContent:'center',
              display:'flex'
            }}
          >
             <Stack sx={{
             
             height: "90%",
             width: "90%",
             gap: 1,
           }}>
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
                    fontSize: 13,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  2019 - 2023
                </Typography>
                <Typography sx={{ color: "white", fontSize: 20 }}>
                Bachelor Degree in Mechatronics
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 13,
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
                    fontSize: 13,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  2018 - 2019
                </Typography>
                <Typography sx={{ color: "white", fontSize: 20 }}>
                HSC
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 13,
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
                    fontSize: 13,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  2016 - 2017
                </Typography>
                <Typography sx={{ color: "white", fontSize: 20 }}>
                SSLC
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 13,
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
        {/* 3rd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 250 }}>
          {/* blog          */}
          <div className="animate__animated animate__zoomIn animate__delay-1s" style={{width: "25%",}}>
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
          </div>
          {/* specialization */}
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
          {/* profiles          */}
          <div className="animate__animated animate__zoomIn animate__delay-1s" style={{width: "25%",}}>
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
        </Stack>
      </Layout>
    </>
  );
}
