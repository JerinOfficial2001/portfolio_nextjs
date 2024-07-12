import { Android } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function NoData() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "427px",
          width: "255px",
          background: "#232222",
          borderRadius: 8,
          transform: "rotateZ(358deg)",
          left: "-20px",
          boxShadow: "0px 1px 0px .5px #626262",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: 8,
            border: "10px solid #323232",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "427px",
          width: "255px",
          background: "#232222",
          borderRadius: 8,
          transform: "rotateZ(2deg)",
          right: "-20px",
          boxShadow: "0px 1px 0px .5px #626262",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: 8,
            border: "10px solid #323232",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          height: 460,
          width: 250,
          background: "#232222",
          borderRadius: 8,
          zIndex: 1,
          boxShadow: "0px 1px 0px .5px #626262",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: 8,
            border: "10px solid #323232",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#c9c9c9",
          }}
        >
          <Android sx={{ fontSize: "50px" }} />
          <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
            No application found
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
