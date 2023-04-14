import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import  Stack  from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


export default function Homepage() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box sx={{ borderBottom: "5px solid red" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: {xl:60,lg:60,md:60,sm:30,xs:30},
                fontFamily: "cursive",
                " -webkit-text-stroke-color": "black",
              }}
            >
              I'M JERIN
            </Typography>
            
          </Box>
         
          
        </Box>
        <Stack sx={{
            width:'60%',
            gap:4,
            marginLeft:{xl: 15,lg:15,md:15,sm:0,xs:0},
          }}>
            <Typography variant="h6" fontWeight='bold' color='white'>Skills</Typography>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             Nextjs
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             Reactjs
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             Redux
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             HTML & CSS
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             Material UI
            </Typography>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <PlayArrowIcon/>
            <Typography
              sx={{
                color: "black",
                fontSize:20
              }}
            >
             Rest API
            </Typography>
            </Box>
          </Stack>
      </Layout>
    </>
  );
}
