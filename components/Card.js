import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Card({ project, handleOpen }) {
  const [hover, sethover] = useState(false);
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: 276,
          height: "210px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="wrapper">
          <div className="card">
            <img
              onMouseEnter={() => {
                sethover(true);
              }}
              src={project.image[0]}
              alt="loading..."
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                objectFit: "contain",
                objectPosition: "top",
              }}
            />
            {hover && (
              <div
                onMouseLeave={() => {
                  sethover(false);
                }}
                style={{
                  display: "flex",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.74)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => {
                    router.push(`/projectPage?projectID=${project?._id}`);
                  }}
                  sx={{
                    color: "white",
                    border: "2px solid white",
                    textTransform: "none",
                  }}
                >
                  {project.title}
                </Button>
                <IconButton
                  onClick={() => {
                    handleOpen(project._id);
                  }}
                  sx={{
                    color: "gray",
                    position: "absolute",
                    right: 3,
                    bottom: 1,
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Edit />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </Box>
    </>
  );
}
