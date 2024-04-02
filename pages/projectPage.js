import Layout from "@/layouts/Layout";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "animate.css";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetParticularProjectByID } from "@/controller/project";
import { Close, Menu } from "@mui/icons-material";

export default function ProjectPage() {
  const router = useRouter();
  const { projectID } = router.query;
  const [projectData, setprojectData] = useState({});
  const [endPoints, setendPoints] = useState("");
  const [showImgs, setshowImgs] = useState(true);
  const buttonStyles = [
    "btn btn-1",
    "btn btn-2",
    "btn btn-3",
    "btn btn-4",
    "btn btn-5",
  ];
  const cookie = getDecryptedCookie("userData");

  const cachedCookie = cookie ? JSON.parse(cookie) : false;

  useEffect(() => {
    if (projectID) {
      GetParticularProjectByID(projectID).then((data) => {
        setprojectData(data);
      });
    }
  }, [projectID]);
  return (
    <Layout maxWidth={true} direction={true}>
      <div
        style={{ width: "70%" }}
        className="animate__animated animate__zoomIn animate__delay-1s  "
      >
        <Stack
          direction="row"
          sx={{
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            height: "500px",
            borderRadius: "40px",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #232323",
            position: "relative",
            padding: "15px",
            width: "100%",
          }}
        >
          <iframe
            src={`${projectData?.link}${endPoints}`}
            width="100%"
            height="100%"
            style={{
              borderRadius: "30px",
              border: "2px solid cornflowerblue",
              cursor: "pointer",
              pointerEvents: showImgs ? "none" : "auto",
            }}
          ></iframe>
          <IconButton
            sx={{
              color: "white",
              position: "absolute",
              top: 20,
              left: 20,
            }}
            onClick={() => {
              setshowImgs(true);
            }}
          >
            <Menu />
          </IconButton>
          <Stack
            sx={{
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "250px",
              background: "#111010cf",
              borderRadius: "30px 0 0 30px",
              transition: "1s",
              transition: "opacity 1s",
              opacity: showImgs ? 1 : 0,
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
            <Box
              sx={{
                gap: 2,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "relative",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "sticky",
                  top: 0,
                  color: "white",
                  width: "100%",
                  alignItems: "flex-end",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton
                  sx={{
                    color: "white",
                  }}
                  onClick={() => {
                    setshowImgs(false);
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
              {projectData?.image &&
                projectData.image.map((img, index) => (
                  <img
                    key={index}
                    alt="img"
                    src={img}
                    style={{
                      height: "100px",
                      width: "70%",
                      objectFit: "contain",
                      border: "2px solid #f7f7f7",
                      borderRadius: "10px",
                      padding: 3,
                    }}
                  />
                ))}
            </Box>
          </Stack>
        </Stack>
      </div>
      <div
        className="animate__animated animate__zoomIn animate__delay-1s  "
        style={{ width: "30%" }}
      >
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {projectData?.endpoint?.length !== 0 &&
            projectData?.endpoint?.map((btn, index) => (
              <Button
                key={index}
                className={buttonStyles[index % buttonStyles.length]}
                onClick={() => {
                  setendPoints(btn.Path);
                }}
              >
                {btn.Page}
              </Button>
            ))}
          <Button
            variant="outlined"
            onClick={() => {
              router.push(projectData?.link);
            }}
          >
            Visit Website
          </Button>
        </Stack>
      </div>
    </Layout>
  );
}
