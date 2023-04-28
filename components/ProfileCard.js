import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import "animate.css";
import Image from "next/image";
import  Typography  from "@mui/material/Typography";
import * as icon from "react-icons/ai"
import  Button  from "@mui/material/Button";
import { useRouter } from "next/router";

export default function ProfileCard() {
    const router = useRouter();
  return (
 
    <div
          className="animate__animated animate__zoomIn animate__delay-1s"
      
        >
       
          <Stack
            sx={{
                width:{
                  xl: 370,
                lg: 370,
                md: 370,
                sm: "100%",
                xs: "100%",
                },height:600,
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
             
              
            }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: 300,
                width: "100%",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column',
                gap:2,
               
              }}
            >
              <Box
                sx={{
                  height: "95%",
                  width: "85%",
                  background:
                    "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
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
              <Typography
                  sx={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  JERIN
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  BE-Mechatronic engineering
                </Typography>
                <div
                className="animate__animated animate__zoomIn animate__delay-1s"
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  gap: "15px",
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Button
                onClick={()=>{router.push("https://www.linkedin.com/in/jerin-t-8866581a0")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "10%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineLinkedin size="50px" />
                </Button>
                
                <Button
                onClick={()=>{router.push("https://github.com/jerin2001")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "10%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineGithub size="50px"/>
                </Button>
                <Button
                onClick={()=>{router.push("https://wa.me/qr/EMQB2VSLPRJLL1")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "10%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineWhatsApp size="50px"/>
                </Button>
              </div>
              <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    background: "#323232",
                    borderRadius: 2,
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                    textTransform: "none",
                    width: "90%",
                    height: "50px",
                  }}
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Contact Me
                </Button>
            </Box>
          </Stack>
       
        </div>
  )
}
