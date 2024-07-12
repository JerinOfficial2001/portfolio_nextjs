import { Box } from "@mui/material";
import React from "react";

export default function Emulator({ image }) {
  return (
    <div
      style={{
        position: "relative",
        perspective: "1000px",
        height: "80vh",
        width: "340px",
      }}
      className="userImg"
    >
      <Box
        sx={{
          height: "89.5%",
          position: "absolute",
          top: 24,
          left: 60,
          width: "70.5%",
          transform: "rotate3d(850, 1900, -300, 26deg)",
        }}
        component={"img"}
        src={image}
      />
      <Box
        sx={{ width: "100%", height: "100%", zIndex: 1, position: "relative" }}
        component={"img"}
        src="/Emulators/EmulatorIphone.png"
      />
    </div>
  );
}
