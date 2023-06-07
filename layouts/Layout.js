import Container from "@mui/material/Container";
import React from "react";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
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
    
          <Footer/>
        </Stack>
      </Container>
      </div>
    </>
  );
}
