import Emulator from "@/components/Emulator";
import ProjectModal from "@/components/Modals/ProjectModal";
import AddIconButton from "@/components/Projects/AddIconButton";
import { GetParticularProjectByID } from "@/controller/project";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { Download } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Application() {
  const router = useRouter();
  const { projectID, id } = router.query;
  const cookie = getDecryptedCookie("userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const isOwner = cachedCookie && cachedCookie?._id == id;
  const [isLoading, setisLoading] = useState(false);
  const [projectData, setprojectData] = useState(null);
  const [openModel, setopenModel] = useState(false);
  useEffect(() => {
    if (projectID) {
      GetParticularProjectByID(projectID).then((data) => {
        setprojectData(data);
      });
    }
  }, []);
  const handleOpen = () => {
    setopenModel(true);
  };
  const handleClose = () => {
    setopenModel(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <div className="animate__animated animate__zoomIn animate__delay-1s  ">
        <Emulator images={projectData?.images} />
      </div>

      <div className="animate__animated animate__zoomIn animate__delay-1s  ">
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
            disabled={!projectData?.apk_id}
            endIcon={<Download />}
            startIcon={
              <Box
                component={"img"}
                sx={{ height: 30, borderRadius: "50%" }}
                src={
                  projectData?.image
                    ? projectData?.image.url
                    : "/AndroidIcon.jpg"
                }
              />
            }
            sx={{
              borderRadius: 2,
              background: "#878181",
              color: "black",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                background: "white",
              },
            }}
          >
            {projectData?.title}
          </Button>
        </Stack>
      </div>
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
