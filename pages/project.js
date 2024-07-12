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
import { MapsUgcOutlined } from "@mui/icons-material";
import Loader from "@/components/Loader";
import EmulatorCarousel from "@/components/EmulatorCarousel";
import ProjectModal from "@/components/Modals/ProjectModal";
import { MyContextState } from "./_app";
import WebsiteLayout from "@/components/Projects/WebsiteLayout";
import AddProjectComponent from "@/components/Projects/AddProjectComponent";

export default function Project() {
  const { setcustomStyle } = useContext(MyContextState);
  const router = useRouter();
  const { id } = router.query;
  const [websiteDatas, setprojectsData] = useState([]);
  const [appDatas, setAppDatas] = useState([]);
  const cookie = getDecryptedCookie("userData");
  const [isLoading, setisLoading] = useState(true);
  const [isWebLoading, setisWebLoading] = useState(true);
  const [isApploading, setisApploading] = useState(true);
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const [openModel, setopenModel] = useState(false);
  const [particularProject, setparticularProject] = useState(null);
  const [modalName, setmodalName] = useState("");
  const [isAddProject, setisAddProject] = useState(false);
  const handleClose = () => {
    setopenModel(false);
  };
  const fetchData = () => {
    GetAllProfile().then((profiles) => {
      const profileIDs = profiles?.map((elem) => elem.userID);
      if (profileIDs?.includes(id)) {
        GetProjectsByID(id ? id : cachedCookie?._id, "Website").then((data) => {
          setisWebLoading(false);
          setprojectsData(data);
        });
        GetProjectsByID(id ? id : cachedCookie?._id, "Application").then(
          (data) => {
            setisApploading(false);
            setAppDatas(data);
          }
        );
      }
    });
  };
  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      router.push("/");
    }
    // setcustomStyle({ alignItems: "center", position: "sticky", top: "70px" });
  }, []);
  useEffect(() => {
    if (id && !openModel) {
      fetchData();
    }
  }, [openModel]);
  useEffect(() => {
    if (appDatas.length == 0 && websiteDatas.length == 0) {
      setisAddProject(true);
    } else {
      setisAddProject(false);
    }
  }, [appDatas.length, websiteDatas.length]);

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
  ];
  return (
    <>
      {!isAddProject && !noData && (
        <Box sx={{ width: "100%", alignItems: "center", display: "flex" }}>
          <Button
            onClick={() => {
              setisAddProject(true);
            }}
          >
            Add Project
          </Button>
        </Box>
      )}

      <Stack
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
        direction={"row"}
      >
        {isOwner && isAddProject && (
          <AddProjectComponent AddProjectButtons={AddProjectButtons} />
        )}
        {noData && (
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
        {websiteDatas?.length != 0 && !isAddProject && (
          <WebsiteLayout
            projectsData={websiteDatas}
            isLoading={isWebLoading}
            isOwner={isOwner}
            handleOpen={handleOpen}
            title={"Website"}
          />
        )}
        {appDatas?.length !== 0 && !isAddProject && (
          <EmulatorCarousel
            datas={appDatas}
            isLoading={isApploading}
            isOwner={isOwner}
            handleOpen={handleOpen}
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
    </>
  );
}
