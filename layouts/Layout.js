import Container from "@mui/material/Container";
import React from "react";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          width="100%"
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Navbar />
          <Stack
            sx={{
              width: {
                xl: "50%",
                lg: "50%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
              alignItems: "center",
            }}
          >
            {children}
          </Stack>
          <Box
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
          </Box>
        </Stack>
      </Container>
    </>
  );
}
