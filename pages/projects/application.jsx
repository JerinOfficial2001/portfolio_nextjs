import Emulator from "@/components/Emulator";
import { Download } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Application() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <div className="animate__animated animate__zoomIn animate__delay-1s  ">
        <Emulator image={"/Emulators/JersAppDarkMode.JPG"} />
      </div>

      <div className="animate__animated animate__zoomIn animate__delay-1s  ">
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "system-ui",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            App Name
          </Typography>
          <Typography
            sx={{
              color: "slategray",
              fontFamily: "system-ui",
            }}
          >
            Real time chat application
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[
              "React Native",
              "Socket.io",
              "Node Js",
              "Express Js",
              "MongoDB",
            ].map((elem, index) => (
              <Chip
                key={index}
                label={elem}
                sx={{
                  color: "white",
                  fontFamily: "system-ui",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  background: "red",
                }}
              />
            ))}
          </Box>
          <Button
            endIcon={<Download />}
            startIcon={
              <Box
                component={"img"}
                sx={{ height: 30, borderRadius: "50%" }}
                src={"/AndroidIcon.jpg"}
              />
            }
            sx={{
              borderRadius: 2,
              background: "#878181",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                background: "white",
              },
            }}
          >
            App Name
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
