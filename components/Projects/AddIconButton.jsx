import { Add, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

export default function AddIconButton({ onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#151617",
        borderRadius: 2,
        boxShadow: "0 1px 0px 1px gray",
      }}
    >
      <IconButton
        size="small"
        onClick={onClick}
        sx={{
          color: "white",
          height: 20,
          width: 20,
        }}
      >
        <Edit sx={{ fontSize: "15px" }} />
      </IconButton>
    </Box>
  );
}
