import { Add } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "../Loader";
import Card from "../Card";

export default function WebsiteLayout({
  projectsData,
  isOwner,
  handleOpen,
  isLoading,
  title,
}) {
  return (
    <Stack
      sx={{
        overflowY: "scroll",
        height: "520px",
        width: "600px",
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
        {/* {isOwner && (
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
              onClick={() => {
                handleOpen(null, title);
              }}
              sx={{
                color: "white",
                height: 20,
                width: 20,
              }}
            >
              <Add fontSize="20px" />
            </IconButton>
          </Box>
        )} */}
      </Box>
      <Grid
        sx={{ position: "relative" }}
        container
        direction="row"
        rowGap={4}
        columnGap={4}
        columns={8}
      >
        {isLoading ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </Box>
        ) : projectsData.length > 0 ? (
          projectsData?.map((project, index) => {
            return (
              <Card
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
