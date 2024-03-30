import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";

export default function Card({ project }) {
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
        <div
          onClick={() => {
            router.push(`/projectPage?projectID=${project?._id}`);
          }}
          className="wrapper"
        >
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
                  sx={{
                    color: "white",
                    border: "2px solid white",
                    textTransform: "none",
                  }}
                >
                  {project.title}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Box>
    </>
  );
}
