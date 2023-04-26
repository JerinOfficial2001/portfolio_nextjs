import Container from "@mui/material/Container";
import React from "react";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
     <div className="animate__animated animate__fadeInDownBig " >
      <Container >
        <Stack
          width="100%"
          sx={{
            flexDirection: "column",
          }}
        >
          <Navbar />
          <Stack
         spacing={3}
            sx={{
              alignItems: "center",
           
            }}
          >
            {children}
          </Stack>
          {/* <Box
            sx={{
              display: {
                sm: "none",
                xs: "none",
                lg: "block",
                md: "block",
                xl: "block",
              },
            }}
          >
            <Image
              placeholder="blur"
              alt="img"
              style={{
                height: "550px",
                width: "40%",
                position: "fixed",
              }}
              src={require("../assets/jshadow.png")}
            />
          </Box> */}
          <Footer/>
        </Stack>
      </Container>
      </div>
    </>
  );
}
