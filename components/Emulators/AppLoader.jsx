import { Box, CircularProgress, Skeleton } from "@mui/material";
import React from "react";

export default function AppLoader() {
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
          boxShadow: "0px 1px 0px 1px #474747",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          height: "427px",
          width: "255px",
          background: "#232222",
          borderRadius: 8,
          transform: "rotateZ(2deg)",
          right: "-20px",
          boxShadow: "0px 1px 0px 1px #474747",
        }}
      />
      <Box
        sx={{
          height: 460,
          width: 250,
          background: "#232222",
          borderRadius: 8,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 2px 0px 0.5px #474747",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            background: "#3f3f3f",
            height: "100%",
            width: "100%",
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Skeleton>
      </Box>
    </Box>
  );
}
