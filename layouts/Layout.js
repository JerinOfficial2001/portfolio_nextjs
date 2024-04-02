import Container from "@mui/material/Container";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children, direction, dashboard, maxWidth }) {
  return (
    <>
      <div className="animate__animated animate__fadeInDownBig ">
        <Container maxWidth={maxWidth}>
          <Stack
            width="100%"
            sx={{
              flexDirection: "column",
            }}
          >
            <Navbar dashboard={dashboard} />
            <Stack
              direction={direction ? "row" : "column"}
              spacing={3}
              sx={{
                alignItems: "center",
              }}
            >
              {children}
            </Stack>

            <Footer />
          </Stack>
        </Container>
      </div>
    </>
  );
}
