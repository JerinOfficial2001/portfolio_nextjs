import {
  AttachFile,
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Send,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

export default function Feedback() {
  const scrollRef = useRef();
  const router = useRouter();
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* //*Header */}
      <Stack
        sx={{
          zIndex: 2,
          transform: "rotate(270deg)",
          position: "absolute",
          left: -30,
          top: 150,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 40,
            fontFamily: "monospace",
          }}
        >
          JERS-folio
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
            fontFamily: "cursive",
          }}
        >
          Create your portfolio
        </Typography>
      </Stack>
      <Button
        sx={{
          display: { lg: "flex", sm: "none", xs: "none" },
          position: "absolute",
          right: 35,
          top: 55,
          zIndex: 2,
          border: "2px solid  #828282",
          borderRadius: 10,
          width: "280px",
          height: "60px",
          color: " #828282",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </Button>
      <IconButton
        sx={{
          display: { lg: "none", sm: "flex", xs: "flex" },
          position: "absolute",
          right: 5,
          top: 50,
          zIndex: 2,
          border: "2px solid  #828282",
          borderRadius: 10,
          color: " white",
          fontWeight: "bold",
          fontFamily: "cursive",
        }}
        onClick={() => {
          router.push("/");
        }}
      >
        <Home />
      </IconButton>
      {/* //*INPUT field */}
      <Stack
        sx={{
          zIndex: 2,
          position: "absolute",
          left: { lg: 10, sm: 0, xs: 0 },
          bottom: 40,
          width: { lg: "35%", sm: "100%", xs: "100%" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "cursive",
          }}
        >
          FOLLOW US
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
            fontFamily: "cursive",
            width: "200px",
          }}
        >
          You can Create your own portfolio here and give us your feedback
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {[
            { icon: <LinkedIn />, link: "" },
            { icon: <Facebook />, link: "" },
            { icon: <Instagram />, link: "" },
          ].map((elem, index) => {
            return (
              <IconButton key={index} sx={{ color: "white" }}>
                {elem.icon}
              </IconButton>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <TextField
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #828282 !important",
              },
              "& .MuiInputBase-root": {
                borderRadius: 20,
                height: { lg: "70px", sm: "50px", xs: "50px" },
                paddingX: 3,
              },
            }}
            fullWidth
            inputProps={{
              style: {
                color: "gray",
                fontWeight: "bold",
                fontFamily: "cursive",
              },
            }}
            placeholder="Type your feedback here"
          />
          <IconButton
            sx={{
              color: "white",
              position: "absolute",
              right: 65,
            }}
          >
            <AttachFile />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              position: "absolute",
              right: 15,
              background: "#66f06670",
              "&:hover": {
                background: "#61a166",
              },
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Stack>
      {/* //*Title on vdo */}
      <Stack
        sx={{
          display: { lg: "flex", sm: "none", xs: "none" },
          zIndex: 2,
          position: "absolute",
          left: 310,
          top: 170,
          width: "35%",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 60,
            fontFamily: "monospace",
            width: "320px",
            lineHeight: "60px",
          }}
        >
          WE <br />
          BUILD PORTFOLIO
        </Typography>
        <Typography
          sx={{
            color: "gray",
            fontSize: 15,
            fontFamily: "cursive",
            width: "200px",
          }}
        >
          You can Create your own portfolio here and give us your feedback
        </Typography>
      </Stack>
      {/* //*ChatBubble */}
      <Stack
        sx={{
          zIndex: 1,
          position: "absolute",
          right: { lg: 60, sm: 0, xs: 0 },
          top: { lg: 35, sm: 0, xs: 0 },
          width: { lg: "45%", sm: "70%", xs: "70%" },
          padding: 2,
          gap: 2,
          height: { lg: "625px", sm: "85vh", xs: "85vh" },
          overflowY: "auto",
        }}
      >
        {[
          {
            id: 2,
            name: "James",
            message:
              "You can Create your own portfolio here and give us your feedback",
            date: "2:54PM",
          },
          {
            id: 1,
            name: "John",
            message:
              "You can Create your own portfolio here and give us your feedback",
            date: "2:54PM",
          },
          {
            id: 3,
            name: "John",
            message:
              "You can Create your own portfolio here and give us your feedback",
            image: "/AndroidIcon.png",
            date: "2:54PM",
          },
          {
            id: 4,
            name: "John",
            message:
              "You can Create your own portfolio here and give us your feedback",
            date: "2:54PM",
          },
          {
            id: 5,
            name: "John",
            image: "/services.jpg",
            date: "2:54PM",
          },
          {
            id: 6,
            name: "John",
            message:
              "You can Create your own portfolio here and give us your feedback",
            date: "2:54PM",
          },
          {
            id: 7,
            name: "John",
            message:
              "You can Create your own portfolio here and give us your feedback",
            date: "2:54PM",
          },
        ].map((elem, index) => {
          const isSender = elem.id == 1;
          return (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: isSender ? "flex-end" : "flex-start",
              }}
            >
              <Stack
                sx={{
                  borderRadius: isSender
                    ? "20px 20px 0px 20px"
                    : "0px 20px 20px 20px",
                  background: "#17981252",
                  padding: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "monospace",
                  }}
                >
                  {elem.name}
                </Typography>
                {elem.image && (
                  <Box
                    component={"img"}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: 6,
                      maxWidth: { lg: "500px", sm: "280px", xs: "280px" },
                    }}
                    src={elem.image}
                  />
                )}

                <Typography
                  sx={{
                    color: "#d4d4d4",
                    fontSize: 15,
                    fontFamily: "cursive",
                    width: "200px",
                  }}
                >
                  {elem.message}
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: 10,
                      fontFamily: "cursive",
                    }}
                  >
                    {elem.date}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          );
        })}
        <div ref={scrollRef} />
      </Stack>
      <Box
        component={"img"}
        src="/Subtract.png"
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 1,
          pointerEvents: "none",
          objectFit: "cover",
        }}
      ></Box>
      <video
        autoPlay
        playsinline
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/Bgvdo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
