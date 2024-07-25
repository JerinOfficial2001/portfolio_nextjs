import Layout from "@/layouts/Layout";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetParticularProjectByID } from "@/controller/project";
import { CheckCircle, Close, ContentCopy, Menu } from "@mui/icons-material";
import { MyContextState } from "./_app";
import CopyToClipboard from "react-copy-to-clipboard";

export default function ProjectPage() {
  const { setdirection } = useContext(MyContextState);
  const router = useRouter();
  const { projectID } = router.query;
  const [projectData, setprojectData] = useState({});
  const [endPoints, setendPoints] = useState("");
  const [showImgs, setshowImgs] = useState(false);
  const buttonStyles = [
    "btn btn-1",
    "btn btn-2",
    "btn btn-3",
    "btn btn-4",
    "btn btn-5",
  ];
  const cookie = getDecryptedCookie("Jers_folio_userData");

  const cachedCookie = cookie ? JSON.parse(cookie) : false;

  useEffect(() => {
    if (projectID) {
      GetParticularProjectByID(projectID).then((data) => {
        setprojectData(data);
        setCopied(data.credentials?.map(() => ({ isCopied: false })));
      });
    }
    setdirection(true);
    return () => {
      setdirection(false);
    };
  }, [projectID]);
  const [copied, setCopied] = useState([]);

  const handleCopy = (index) => {
    const prevArr = [...copied];
    prevArr[index].isCopied = true;
    setCopied(prevArr);
    setTimeout(() => {
      prevArr[index].isCopied = false;
      setCopied(prevArr);
    }, 3000);
  };
  return (
    <>
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
          {/* <IconButton
            sx={{
              color: "white",
              position: "absolute",
              top: 25,
              left: 25,
              zIndex: 11111,
              opacity: showImgs ? 0 : 1,
              transition: ".3s",
              boxShadow: "0 0 0 1px #5a5a5a",
              background: "#00000091",
              "&:hover": {
                background: "#ffffff66",
                color: "black",
              },
            }}
            onClick={() => {
              setshowImgs(true);
            }}
          >
            <Menu />
          </IconButton> */}
          {/* <Stack
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
          </Stack> */}
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
          {projectData?.credentials &&
            projectData?.credentials.length !== 0 && (
              <Stack
                sx={{
                  marginBottom: 2,
                  width: "90%",
                  borderRadius: "10px",
                  padding: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#ffffff0a",
                }}
              >
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontFamily: "cursive",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Credentials
                </Typography>
                {projectData?.credentials.map((elem, index) => {
                  return (
                    <Stack key={index} sx={{ width: "100%" }}>
                      <Typography
                        sx={{ color: "#7c7c7c", fontFamily: "cursive" }}
                      >
                        {elem.Key}
                      </Typography>
                      <Box
                        sx={{
                          background: "#262626",
                          height: 40,
                          width: "100%",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#696666",
                            fontFamily: "cursive",
                            marginLeft: 2,
                          }}
                        >
                          {elem.Value}
                        </Typography>
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#61616169",
                            borderRadius: "0 10px 10px 0",
                          }}
                        >
                          <CopyToClipboard
                            text={elem.Value}
                            onCopy={() => {
                              handleCopy(index);
                            }}
                          >
                            <IconButton>
                              {copied[index]?.isCopied ? (
                                <CheckCircle
                                  sx={{
                                    color: "cornflowerblue",
                                  }}
                                />
                              ) : (
                                <ContentCopy sx={{ color: "#b5b5b5" }} />
                              )}
                            </IconButton>
                          </CopyToClipboard>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            )}
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
    </>
  );
}
