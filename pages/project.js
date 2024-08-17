import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect, useState } from "react";
import {
  GetParticularProjectByID,
  GetProjectsByID,
} from "@/controller/project";
import { useRouter } from "next/router";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetAllProfile } from "@/controller/profile";
import { Box, Button, IconButton } from "@mui/material";
import { Add, MapsUgcOutlined, Reply } from "@mui/icons-material";
import Loader from "@/components/Loader";
import EmulatorCarousel from "@/components/EmulatorCarousel";
import ProjectModal from "@/components/Modals/ProjectModal";
import { MyContextState } from "./_app";
import WebsiteLayout from "@/components/Projects/WebsiteLayout";
import AddProjectComponent from "@/components/Projects/AddProjectComponent";
import { Toaster } from "react-hot-toast";

export default function Project() {
  const { setcustomStyle } = useContext(MyContextState);
  const router = useRouter();
  const { id } = router.query;
  const [websiteDatas, setprojectsData] = useState([]);
  const [appDatas, setAppDatas] = useState([]);
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const [isLoading, setisLoading] = useState(true);
  const [isWebLoading, setisWebLoading] = useState(true);
  const [isApploading, setisApploading] = useState(true);
  const [openModel, setopenModel] = useState(false);
  const [particularProject, setparticularProject] = useState(null);
  const [modalName, setmodalName] = useState("");
  const [isAddProject, setisAddProject] = useState(false);
  const handleClose = () => {
    setopenModel(false);
  };
  const fetchData = () => {
    // setisApploading(true);
    // setisWebLoading(true);
    setisLoading(true);
    GetAllProfile().then((profiles) => {
      const profileIDs = profiles?.map((elem) => elem.userID);
      if (profileIDs?.includes(id)) {
        GetProjectsByID(
          id ? id : cachedCookie?._id,
          "Website",
          cachedCookie ? cachedCookie?._id : false
        ).then((data) => {
          setisWebLoading(false);
          setprojectsData(data);
        });
        GetProjectsByID(
          id ? id : cachedCookie?._id,
          "Application",
          cachedCookie ? cachedCookie?._id : false
        ).then((data) => {
          setisApploading(false);
          setAppDatas(data);
        });
      }
      setisLoading(false);
    });
  };

  useEffect(() => {
    if (id && !openModel) {
      fetchData();
    }
  }, [openModel, id]);
  useEffect(() => {
    if (appDatas.length == 0 && websiteDatas.length == 0) {
      setisAddProject(true);
    } else {
      setisAddProject(false);
    }
  }, [appDatas?.length, websiteDatas?.length]);

  const handleOpen = (id, modalType) => {
    setmodalName(modalType);
    setopenModel(true);
    if (id) {
      GetParticularProjectByID(id).then((data) => {
        setparticularProject(data);
      });
    } else {
      setparticularProject(null);
    }
  };
  const isOwner = cachedCookie && cachedCookie?._id == id;
  const noData = websiteDatas.length == 0 && appDatas.length == 0;
  const AddProjectButtons = [
    {
      name: "Website",
      onclick: () => handleOpen(null, "Website"),
      icon: (
        <Box
          component={"img"}
          sx={{ objectFit: "contain" }}
          src="/websiteImg.png"
        />
      ),
    },
    {
      name: "Application",
      onclick: () => handleOpen(null, "Application"),
      icon: (
        <Box
          component={"img"}
          sx={{ objectFit: "contain" }}
          src="/AndroidIcon.png"
        />
      ),
    },
    {
      name: "Backend",
      onclick: () => handleOpen(null, "Backend"),
      icon: (
        <Box
          component={"img"}
          sx={{ objectFit: "contain" }}
          src="/backend.png"
        />
      ),
    },
  ];
  return (
    <>
      {!openModel && <Toaster position="top-center" />}
      {!noData && isOwner && (
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            transition: ".3s",
          }}
        >
          {isAddProject ? (
            <IconButton
              onClick={() => {
                setisAddProject(false);
              }}
              sx={{ color: "white" }}
            >
              <Reply />
            </IconButton>
          ) : (
            <Button
              startIcon={<Add />}
              sx={{
                color: "#919191",
                fontFamily: "monospace",
                textTransform: "none",
                border: "2px solid #919191",
                borderRadius: 4,
                fontWeight: "bold",
              }}
              onClick={() => {
                setisAddProject(true);
              }}
            >
              Add Project
            </Button>
          )}
        </Box>
      )}
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: {
              lg: "row",
              sm: "column",
              xs: "column",
            },
          }}
        >
          {isOwner &&
            !isApploading &&
            !isLoading &&
            !isWebLoading &&
            isAddProject && (
              <AddProjectComponent AddProjectButtons={AddProjectButtons} />
            )}
          {noData && !isApploading && !isLoading && !isWebLoading && (
            <Box
              sx={{
                width: "100%",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                sx={{ objectFit: "contain" }}
                src="/noproject.png"
              />
            </Box>
          )}
          {!isAddProject && (
            <Stack sx={{ width: "100%" }}>
              <WebsiteLayout
                projectsData={websiteDatas}
                isLoading={isWebLoading}
                isOwner={isOwner}
                handleOpen={handleOpen}
                title={"Website"}
                fetchData={fetchData}
              />
              <WebsiteLayout
                projectsData={[
                  {
                    category: "Backend",
                    image: { url: "/backend.png" },
                    title: "Account_book API",
                    isVisible: true,
                    userID: "66276a73361a148fef6608c2",
                  },
                ]}
                isLoading={isWebLoading}
                isOwner={isOwner}
                handleOpen={handleOpen}
                title={"Backend"}
                fetchData={fetchData}
              />
            </Stack>
          )}
          {!isAddProject && (
            <EmulatorCarousel
              datas={appDatas}
              isLoading={isApploading}
              isOwner={isOwner}
              handleOpen={handleOpen}
              id={id}
            />
          )}
          <ProjectModal
            open={openModel}
            handleClose={handleClose}
            data={particularProject}
            id={id}
            fetchData={fetchData}
            modalType={modalName}
          />
        </Stack>
      )}
    </>
  );
}
