import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import linkedin from "../assets/linkedin.jpg";
import Image from "next/image";
import github from "../assets/GitHub.jpg";
import yt from "../assets/yt.png";
import insta from "../assets/insta.jpeg";
import wp from "../assets/watsapp.jpg";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function contact() {
    const router =useRouter()
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
          <Box sx={{ borderBottom: "5px solid red", cursor: "pointer" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: {xl:40,lg:40,md:40,sm:20,xs:20},
                fontFamily: "cursive",
                " -webkit-text-stroke-color": "black",
              }}
            >
              CONTACT DETAILS
            </Typography>
          </Box>
        </Box>
        <Stack
          sx={{
            width: "60%",
            gap: 4,
            marginLeft:{xl: 15,lg:15,md:15,sm:0,xs:0},
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                border: "1px solid white",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <Image
                alt="linkedin"
                src={github}
                style={{ height: 42, width: 70 }}
              />
            </Avatar>
            <Box
              sx={{
                background:
                  "linear-gradient(to right, white,white, rgba(0, 0, 0, 0.236))",
                borderRadius: 20,
                height: 30,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Button onClick={()=>{router.push("https://github.com/jerin2001")}} sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                GitHub
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                border: "1px solid black",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <Image
                alt="linkedin"
                src={linkedin}
                style={{ height: 50, width: 60 }}
              />
            </Avatar>
            <Box
              sx={{
                background:
                  "linear-gradient(to right, white,white, rgba(0, 0, 0, 0.236))",
                borderRadius: 20,
                height: 30,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Button onClick={()=>{router.push("https://www.linkedin.com/in/jerin-t-8866581a0")}} sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                Linkedin
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                border: "1px solid black",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <Image
                alt="linkedin"
                src={insta}
                style={{ height: 40, width: 50 }}
              />
            </Avatar>
            <Box
              sx={{
                background:
                  "linear-gradient(to right, white,white, rgba(0, 0, 0, 0.236))",
                borderRadius: 20,
                height: 30,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Button onClick={()=>{router.push("https://www.instagram.com/jerin_25_01/")}} sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                Instagram
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
             
              sx={{
                border: "1px solid black",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <Image
                alt="whatsapp"
                src={wp}
                style={{ height: 40, width: 50 }}
              />
            </Avatar>
            <Box
              sx={{
                background:
                  "linear-gradient(to right, white,white, rgba(0, 0, 0, 0.236))",
                borderRadius: 20,
                height: 30,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Button onClick={()=>{router.push("https://wa.me/qr/EMQB2VSLPRJLL1")}} sx={{width:"100%",height:'100%',borderRadius: 20}}>Whatsapp</Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
             
              sx={{
                border: "1px solid black",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <Image
                alt="youtube"
                src={yt}
                style={{ height: 40, width: 40 }}
              />
            </Avatar>
            <Box
              sx={{
                background:
                  "linear-gradient(to right, white,white, rgba(0, 0, 0, 0.236))",
                borderRadius: 20,
                height: 30,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Button onClick={()=>{router.push("https://github.com/jerin2001")}} sx={{width:"100%",height:'100%',borderRadius: 20}}>Youtube</Button>
            </Box>
          </Box>
        </Stack>
      </Layout>
    </>
  );
}
