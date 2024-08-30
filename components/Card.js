import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import { IconButton, Stack, Switch, Typography } from "@mui/material";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { ProjectVisibility } from "@/controller/project";

export default function Card({ project, handleOpen, title, fetchData }) {
  const [hover, sethover] = useState(false);
  const [visible, setvisible] = useState(
    project.isVisible ? project.isVisible : false
  );
  const router = useRouter();
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  useEffect(() => {
    if (project.isVisible) {
      setvisible(project.isVisible);
    }
  }, [project.isVisible]);
  const handleVisibility = (e) => {
    if (project && project?._id) setvisible(e.target.checked);
    ProjectVisibility({ isVisible: e.target.checked }, project?._id);
  };

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: "210px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {cachedCookie && (
          <Stack
            sx={{
              // position: "absolute",
              // right: 3,
              // bottom: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Switch
              checked={visible}
              sx={{
                "&.MuiSwitch-root .MuiSwitch-track": {
                  background: "gray",
                },

                "&.MuiSwitch-root .MuiButtonBase-root": {
                  color: "gray",

                  "&:hover": {
                    color: "white",
                    transition: ".3s",
                  },
                },
              }}
              onChange={handleVisibility}
              size="small"
            />
            <Typography
              sx={{
                color: "gray",
                fontFamily: "cursive",
                fontSize: 10,
                marginBottom: 2,
              }}
            >
              Visible
            </Typography>
            <IconButton
              onClick={() => {
                handleOpen(project._id, title);
              }}
              sx={{
                color: "gray",
                "&:hover": {
                  color: "white",
                  transition: ".3s",
                },
                padding: 0,
              }}
            >
              <Edit />
            </IconButton>
            <Typography
              sx={{ color: "gray", fontFamily: "cursive", fontSize: 10 }}
            >
              Edit
            </Typography>
          </Stack>
        )}
        <div className="wrapper">
          <div className="card">
            <img
              onMouseEnter={() => {
                sethover(true);
              }}
              src={project.image.url}
              alt="loading..."
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
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
                    router.push(
                      title == "Website"
                        ? `/projectPage?projectID=${project?._id}`
                        : `/projects/backendProject?projectID=${project?._id}`
                    );
                  }}
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
