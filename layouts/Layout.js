import Container from "@mui/material/Container";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Layout({
  children,
  direction,
  dashboard,
  maxWidth,
  customStyle,
}) {
  return (
    <div className="animate__animated animate__fadeInDownBig ">
      <Container maxWidth={maxWidth}>
        <Stack
          width="100%"
          sx={{
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 2,
            }}
          >
            <Navbar dashboard={dashboard} />
          </Box>
          <Stack
            direction={direction ? "row" : "column"}
            spacing={3}
            {...(customStyle
              ? customStyle
              : {
                  sx: {
                    alignItems: dashboard ? "flex-start" : "center",
                  },
                })}
          >
            {children}
          </Stack>

          <Footer />
        </Stack>
      </Container>
    </div>
  );
}
