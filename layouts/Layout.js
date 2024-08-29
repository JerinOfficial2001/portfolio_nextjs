import Container from "@mui/material/Container";
import React, { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function Layout({
  children,
  direction,
  dashboard,
  maxWidth,
  customStyle,
}) {
  const router = useRouter();
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.pathname]);
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
          <div ref={scrollRef}></div>
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
