import Layout from "@/layouts/Layout";
import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "animate.css";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetParticularProjectByID } from "@/controller/project";

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
    <Layout direction={true}>
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
          onMouseEnter={() => {
            setshowImgs(false);
          }}
          onMouseLeave={() => {
            setshowImgs(true);
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

          <Stack
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "200px",
              background: "#111010cf",
              borderRadius: "30px 0 0 30px",
              gap: 2,
              padding: 2,
              transition: "1s",
              transition: "opacity 1s",
              opacity: showImgs ? 1 : 0,
            }}
          >
            {projectData?.image &&
              projectData.image.map((img, index) => (
                <img
                  key={index}
                  alt="img"
                  src={img}
                  style={{
                    height: "100px",
                    width: "100%",
                    objectFit: "contain",
                    border: "2px solid #f7f7f7",
                    borderRadius: "10px",
                    padding: 3,
                  }}
                />
              ))}
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
                  setendPoints(btn.page);
                }}
              >
                {btn.title}
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