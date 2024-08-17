import { Add } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import Loader from "../Loader";
import Card from "../Card";

export default function WebsiteLayout({
  projectsData,
  isOwner,
  handleOpen,
  isLoading,
  title,
  fetchData,
}) {
  return (
    <Stack
      sx={{
        overflowY: "scroll",
        maxHeight: "520px",
        width: { lg: "700px", sm: "100%", xs: "100%" },
        boxShadow:
          projectsData?.length > 4 ? "inset 0 -10px 10px -10px grey" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          gap: 2,
          top: 0,
          position: "sticky",
          zIndex: 1,
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: "#707070",
            fontSize: 25,
            fontFamily: "monospace",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid
        sx={{
          position: "relative",
          justifyContent: "space-evenly",
        }}
        container
        direction="row"
        rowGap={4}
        columnGap={4}
        columns={8}
      >
        {projectsData?.length > 0 ? (
          projectsData?.map((project, index) => {
            return (
              <Card
                fetchData={fetchData}
                title={title}
                key={index}
                project={project}
                handleOpen={handleOpen}
              />
            );
          })
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="img" src={"/noproject.png"}></Box>
          </Box>
        )}
      </Grid>
    </Stack>
  );
}
