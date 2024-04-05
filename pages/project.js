import Layout from "@/layouts/Layout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import gallery from "../assets/gallery.jpeg";
import student from "../assets/student.jpeg";
import blog from "../assets/blog.jpeg";
import recipebook from "../assets/recipebook.jpeg";
import shopify from "../assets/shopify.jpeg";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Card from "@/components/Card";
import Grid from "@mui/material/Grid";
import {
  GetParticularProjectByID,
  GetProjectsByID,
} from "@/controller/project";
import { useRouter } from "next/router";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { GetAllProfile } from "@/controller/profile";
import { Box, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import ProjectsModal from "@/components/ProjectsModal";
import Loader from "@/components/Loader";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [projectsData, setprojectsData] = useState([]);
  const cookie = getDecryptedCookie("userData");
  const [isLoading, setisLoading] = useState(true);
  const cachedCookie = cookie ? JSON.parse(cookie) : false;
  const [isHovered, setisHovered] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const [particularProject, setparticularProject] = useState(null);
  const handleClose = () => {
    setopenModel(false);
  };
  const fetchData = () => {
    GetAllProfile().then((profiles) => {
      const profileIDs = profiles.map((elem) => elem.userID);
      if (profileIDs.includes(id)) {
        GetProjectsByID(id ? id : cachedCookie?._id).then((data) => {
          setisLoading(false);
          setprojectsData(data);
        });
      }
    });
  };
  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      router.push("/");
    }
  }, []);
  useEffect(() => {
    if (id && !openModel) {
      fetchData();
    }
  }, [openModel]);

  const handleOpen = (id) => {
    if (id) {
      GetParticularProjectByID(id).then((data) => {
        setopenModel(true);
        setparticularProject(data);
      });
    } else {
      setparticularProject(null);
    }
  };

  return (
    <>
      <Layout>
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <Stack
              direction="row"
              sx={{
                height: 100,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                alt="img"
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />

              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xl: 60,
                    lg: 60,
                    md: 60,
                    sm: 30,
                    xs: 25,
                  },
                  fontWeight: "bold",
                }}
              >
                𝓜𝔂 𝓹𝓻𝓸𝓳𝓮𝓬𝓽𝓼
              </Typography>

              <Image
                alt="img"
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />
            </Stack>
          </div>
          <Grid container direction="row" rowGap={2} columnGap={2} columns={8}>
            {isLoading ? (
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader />
              </Box>
            ) : projectsData.length !== 0 ? (
              projectsData?.map((project, index) => {
                return (
                  <Card key={index} project={project} handleOpen={handleOpen} />
                );
              })
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#9a9696",
                  borderRadius: "50px",
                  position: "relative",
                }}
                onMouseEnter={() => {
                  setisHovered(true);
                }}
                onMouseLeave={() => {
                  setisHovered(false);
                }}
              >
                <Box component="img" src={"/noproject.png"}></Box>
                <Box
                  hidden={id !== cachedCookie._id}
                  sx={{
                    position: "absolute",
                    opacity: isHovered ? 1 : 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: isHovered ? "#020202a1" : "",
                    transition: ".5s",
                    borderRadius: "50px",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      handleOpen();
                    }}
                    sx={{
                      color: "white",
                    }}
                  >
                    <Add
                      sx={{
                        fontSize: 100,
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Grid>
        </Stack>
      </Layout>
      <ProjectsModal
        open={openModel}
        handleClose={handleClose}
        data={particularProject}
        id={id}
        fetchData={fetchData}
      />
    </>
  );
}
