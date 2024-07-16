import { MapsUgcOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function AddProjectComponent({ AddProjectButtons }) {
  const router = useRouter();
  return (
    <Stack
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        gap: 5,
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: { lg: 40, sm: 20, xs: 20 },
          fontFamily: "monospace",
        }}
      >
        Welcome to Jers-folio
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 2,
        }}
      >
        {AddProjectButtons.map((elem, index) => {
          return (
            <Stack
              key={index}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Button
                onClick={elem.onclick}
                sx={{
                  background: "#2b2b2b",
                  borderRadius: 10,
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    background: "#585858",
                  },
                  height: "150px",
                  width: "150px",
                }}
              >
                {elem.icon}
              </Button>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {elem.name}
              </Typography>
            </Stack>
          );
        })}
      </Box>
      <Button
        onClick={() => {
          router.push("/feedback");
        }}
        startIcon={<MapsUgcOutlined />}
        sx={{
          background: "red",
          borderRadius: 10,
          fontWeight: "bold",
          color: "white",
          "&:hover": {
            background: "#ff05059c",
          },
        }}
      >
        Request
      </Button>
    </Stack>
  );
}
