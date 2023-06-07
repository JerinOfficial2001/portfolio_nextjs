import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import "animate.css";
import  Typography  from "@mui/material/Typography";
import { useRouter } from "next/router";
import ProfileCard from "@/components/ProfileCard";

export default function Credentials() {
    const router = useRouter();
  return (
    <Layout>
      <Stack  sx={{ width: "100%",gap:10,
      flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }, }}>
        
      <ProfileCard/>
        <Box sx={{ width: {
          xl: "60%",
          lg: "60%",
          md: "60%",
          sm: "100%",
          xs: "100%",
        },display:'flex',justifyContent:'center'}}>
                  <Stack sx={{width:'100%',gap:5}}>
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
              {/* education */}
              <Stack sx={{
             
             height: "90%",
             width: "100%",
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
              {/* skills */}
              <Stack sx={{
             
             height: "90%",
             width: "100%",
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
            gap: 10,
            flexDirection:'row',
           
            
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
                  </Stack>

        </Box>
      </Stack>
    </Layout>
  );
}
