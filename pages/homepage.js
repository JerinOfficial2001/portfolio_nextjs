import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import nextjsimg from "../assets/nextjs.png";
import reactimg from "../assets/react.png";
import reduximg from "../assets/redux.png";
import htmlcssimg from "../assets/htmlcss.png";
import restapiimg from "../assets/restapi.png";
import Button from "@mui/material/Button";
import Image from "next/image";

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
                fontSize: { xl: 60, lg: 60, md: 60, sm: 30, xs: 30 },
                fontFamily: "cursive",
                " -webkit-text-stroke-color": "black",
              }}
            >
              I'M JERIN
            </Typography>
          </Box>
        </Box>
        <Stack
          sx={{
            width: "60%",
            gap: 4,
            marginLeft: { xl: 15, lg: 15, md: 15, sm: 0, xs: 0 },
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
                placeholder="empty"
                alt="nextjs"
                src={nextjsimg}
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
              <Button sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                NextJS
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
                placeholder="empty"
                alt="react"
                src={reactimg}
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
              <Button sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                ReactJS
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
                placeholder="empty"
                alt="redux"
                src={reduximg}
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
              <Button sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                Redux
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
                placeholder="empty"
                alt="htmlcss"
                src={htmlcssimg}
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
              <Button sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                HTML & CSS
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
                placeholder="empty"
                alt="restapi"
                src={restapiimg}
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
              <Button sx={{ width: "100%", height: "100%", borderRadius: 20 }}>
                Rest API
              </Button>
            </Box>
          </Box>
        </Stack>
      </Layout>
    </>
  );
}
