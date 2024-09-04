import { Box, Chip } from "@mui/material";
import React from "react";

export default function SkillsContainer({ data, handleFormData }) {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#312f2f2e",
        height: "100px",
        borderRadius: "10px",
        padding: 2,
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        overflow: "hidden",
        "&:hover": {
          overflowY: "auto",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f5f5f5",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#bdbdbd",
          borderRadius: "4px",
          "&:hover": {
            background: "#a5a5a5",
          },
        },
      }}
    >
      {data?.map((text, index) => (
        <Chip
          key={index}
          label={text}
          color="info"
          sx={{ color: "white" }}
          onDelete={() => {
            const newData = data.filter((i) => i !== text);
            handleFormData(newData);
          }}
        />
      ))}
    </Box>
  );
}
