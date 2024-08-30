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
  const scrollContainerRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.pathname]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current.scrollTop;
      if (scrollTop > 0) {
        setScrolled(scrollTop > 0);
      } else {
        setScrolled(scrollTop > 0);
      }
    };

    const currentRef = scrollContainerRef.current;
    currentRef.addEventListener("scroll", handleScroll);

    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="animate__animated animate__fadeInDownBig w-[100%]"
      style={{
        overflowY: "scroll",
        height: "88vh",
      }}
    >
      <Container maxWidth={maxWidth}>
        <Stack
          width="100%"
          sx={{
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* <div
            style={{
              height: "1px",
              position: "sticky",
              top: -10,
              zIndex: 2,
              boxShadow: scrolled ? "#ffffff5c 0px 9px 9px 1px" : "",
              transition: "all .3s",
            }}
          ></div> */}
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
