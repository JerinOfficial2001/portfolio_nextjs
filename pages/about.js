import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import  Divider  from "@mui/material/Divider";

export default function About() {
  return (
    <>
      <Layout>
        <Stack direction="row" spacing={3} width="100%">
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: 370,
              width: "32%",
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
          <Box
            sx={{
              height: 370,
              width: "65%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                sx={{ color: "white", fontSize: 70, fontWeight: "bold" }}
              >
                SELF-SUMMARY
              </Typography>
              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />
            </Stack>
            {/* container  */}
            <Stack
              direction="row"
              sx={{
                width: "100%",
                height: 400,
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
                cursor: "pointer",
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
                    style={{ height: "100%", width: "50px" }}
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
                    sx={{ color: "white", fontSize: 35, fontWeight: "bold" }}
                  >
                    Jerin
                  </Typography>
                  <Typography sx={{ color: "#9c9c9c", fontSize: 20 }}>
                    I am from Coimbatore.Currently pursuing BE-MCT (final year).
                    Building immersive web experiences with React.
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* 2nd */}
        <Stack direction="row" spacing={3} width="100%" sx={{ height: 300 }}>
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
  {/* Education       */}
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "100%",
              width: "50%",
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
              
              </Stack>
          </Box>
        </Stack>
        {/* 3rd */}
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
            <Stack
              sx={{
                height: 100,
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
        </Stack>
      </Layout>
    </>
  );
}
