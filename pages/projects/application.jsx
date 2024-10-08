import Emulator from "@/components/Emulator";
import ProjectModal from "@/components/Modals/ProjectModal";
import AddIconButton from "@/components/Projects/AddIconButton";
import { GetParticularProjectByID } from "@/controller/project";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { API, APK_URL } from "@/utils/api";
import { Autorenew, Download } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Application() {
  const router = useRouter();
  const { projectID, id } = router.query;
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const isOwner = cachedCookie && cachedCookie?._id == id;
  const [projectData, setprojectData] = useState(null);
  const [openModel, setopenModel] = useState(false);
  useEffect(() => {
    if (projectID) {
      GetParticularProjectByID(projectID).then((data) => {
        setprojectData(data);
      });
    }
  }, [openModel]);
  const handleOpen = () => {
    setopenModel(true);
  };
  const handleClose = () => {
    setopenModel(false);
  };
  const handleDownloadAPK = async () => {
    if (projectData && projectData.apk_id) {
      setIsLoading(true);

      try {
        const downloadUrl = `${APK_URL}/Projects/downloadapk/${projectData.apk_id}`;
        const response = await fetch(downloadUrl);

        if (response.ok) {
          const blob = await response.blob();
          const contentDisposition =
            response.headers.get("Content-Disposition") || "";
          const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
          const filename = filenameMatch ? filenameMatch[1] : "download.apk"; // Default filename if not provided

          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = filename;
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        } else {
          console.error("Download failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("APK not found");
    }
  };
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {!openModel && <Toaster position="top-center" />}
      <div className="animate__animated animate__zoomIn animate__delay-1s  ">
        <Emulator images={projectData?.images} />
      </div>
      <Box
        sx={{
          position: {
            lg: "static",
            sm: "absolute",
            xs: "absolute",
          },
          background: {
            lg: "transparent",
            sm: "#0101018c",
            xs: "#0101018c",
          },
        }}
      >
        <div className="animate__animated animate__zoomIn animate__delay-1s ">
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "system-ui",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                {projectData?.title}
              </Typography>
              {isOwner && <AddIconButton onClick={handleOpen} />}
            </Box>
            <Typography
              sx={{
                color: "slategray",
                fontFamily: "system-ui",
              }}
            >
              {projectData?.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                width: "60%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {projectData?.tools?.map((elem, index) => (
                <Chip
                  key={index}
                  label={elem}
                  sx={{
                    color: "white",
                    fontFamily: "system-ui",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    background: "red",
                  }}
                />
              ))}
            </Box>
            <Button
              onClick={isLoading ? undefined : handleDownloadAPK}
              disabled={
                !projectData?.apk_id ||
                projectData?.apk_id == "null" ||
                isLoading
              }
              endIcon={<Download />}
              startIcon={
                isLoading ? (
                  <Autorenew className="loadingBtn" />
                ) : (
                  <Box
                    component={"img"}
                    sx={{ height: 30, borderRadius: "50%" }}
                    src={
                      projectData?.image &&
                      projectData?.apk_id &&
                      projectData?.apk_id != "null"
                        ? projectData?.image.url
                        : "/AndroidIcon.jpg"
                    }
                  />
                )
              }
              sx={{
                borderRadius: 2,
                background: "#bebebe",
                color: "black",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  background: "#ffffff70",
                  color: "white",
                },
              }}
            >
              {!projectData?.apk_id || projectData?.apk_id == "null"
                ? "APK not available"
                : projectData?.title}
            </Button>
          </Stack>
        </div>
      </Box>

      <ProjectModal
        open={openModel}
        handleClose={handleClose}
        data={projectData}
        id={id}
        fetchData={() => {
          router.push(
            `/projects/application?id=${id}&projectID=${projectData._id}`
          );
        }}
        modalType={"Application"}
      />
    </Box>
  );
}
