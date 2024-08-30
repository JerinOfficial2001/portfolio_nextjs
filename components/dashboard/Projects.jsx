import { GetAllProfile } from "@/controller/profile";
import Layout from "@/layouts/Layout";
import {
  Box,
  Grid,
  IconButton,
  Link,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { Add } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { useQuery } from "@tanstack/react-query";
import { GetAllVisibleProjects } from "@/controller/project";
import BulletCarousel from "../Projects/BulletCarousel";
import { SwiperSlide } from "swiper/react";

export default function Projects() {
  const [isHovered, setisHovered] = useState(false);
  const [openModel, setopenModel] = useState(false);
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedData = cookie ? JSON.parse(cookie) : false;
  const router = useRouter();

  const handleRoute = (id) => {
    router.push(`/${id}`);
  };
  const handleOpen = () => {
    setopenModel(true);
  };
  const handleClose = () => {
    setopenModel(false);
  };
  const { data: projects, isLoading } = useQuery({
    queryKey: ["getAllProjects"],
    queryFn: GetAllVisibleProjects,
  });
  return (
    <Grid
      direction={"column"}
      container
      sx={{
        width: { xs: "100%", md: "60%" },
        justifyContent: {
          xl: "normal",
          lg: "normal",
          md: "normal",
          sm: "normal",
          xs: "space-between",
        },
        padding: { xl: 0, xs: 0 },
        marginLeft: "0px !important",
      }}
      rowGap={{ xs: 0, md: 2 }}
    >
      {isLoading ? (
        [1, 2, 3, 4].map((item) => (
          <Grid key={item} item md={2.7} sm={12} xs={5.5}>
            <Skeleton
              variant="rectangular"
              sx={{
                height: {
                  xl: 350,
                  lg: 350,
                  md: 350,
                  sm: 300,
                  xs: 200,
                },
                width: "100%",
                background: "#3f3f3f",
                borderRadius: 10,
                marginBottom: 2,
              }}
            />
          </Grid>
        ))
      ) : projects.length > 0 ? (
        projects?.map((item) => {
          return (
            <Grid key={item._id} item sx={{ width: "-webkit-fill-available" }}>
              <div
                style={{ width: "100%" }}
                className="animate__animated animate__zoomIn animate__delay-1s thirdrow"
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",

                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xl: 2, lg: 2, md: 2, sm: 2, xs: 0 },
                    flexDirection: "column",
                    cursor: "pointer",
                    borderRadius: 8,
                    border: "1px solid #232323",
                    boxShadow: "0 0 0 2px black",
                    marginTop: { xl: 0, lg: 0, md: 0, sm: 0, xs: 2 },
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      height: "90px",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 2,
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction={"row"}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          height: "60px",
                          width: "60px",
                          background:
                            "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                          boxShadow: "0px 0px 5px black",
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          padding: 0.2,
                        }}
                      >
                        {item.profileImg !== "null" && item.profileImg ? (
                          <Box
                            component={"img"}
                            src={item.profileImg.url}
                            alt="ProfilePic"
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                              objectPosition: "center",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <Image
                            src={require(!item.gender ||
                              item.gender == "male" ||
                              item.gender == "MALE"
                              ? "../../assets/male.png"
                              : "../../assets/female.png")}
                            alt="NoProfile"
                            style={{
                              height: "80%",
                              width: "80%",
                            }}
                          />
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: {
                              xl: 23,
                              lg: 23,
                              md: 23,
                              sm: 23,
                              xs: 15,
                            },
                            textTransform: "capitalize",
                          }}
                        >
                          {item.userName}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#5a5a5a",
                            fontSize: {
                              xl: 13,
                              lg: 13,
                              md: 13,
                              sm: 13,
                              xs: 10,
                            },
                            fontWeight: "bold",
                            minWidth: {
                              xl: "200px",
                              lg: "200px",
                              md: "200px",
                              sm: "200px",
                              xs: "100px",
                            },
                          }}
                        >
                          {item.role}
                        </Typography>
                      </Box>
                    </Stack>

                    <Link href={`/project?id=${item.userID}`}>visit</Link>
                  </Stack>
                  <Box
                    sx={{
                      height: { xs: "150px", md: "300px" },
                      width: "100%",
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                      borderRadius: "30px 30px 0 0",
                      position: "relative",
                    }}
                  >
                    {item.image !== "null" &&
                      item.image &&
                      item.images.length == 0 && (
                        <img
                          src={item.image.url}
                          alt="ProfilePic"
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      )}
                    {item.images && item.images.length > 0 && (
                      <img
                        src={item.image.url}
                        alt="ProfilePic"
                        style={{
                          height: "60%",
                          objectFit: "contain",
                          objectPosition: "center",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    {item.images && item.images.length > 0 && (
                      <Stack
                        sx={{
                          width: "60%",
                          justifyContent: "center",
                          height: "100%",
                          alignItems: "center",
                        }}
                      >
                        <BulletCarousel disableAutoPlay={true}>
                          {item.images.map((image, index) => {
                            return (
                              <SwiperSlide key={index}>
                                <img
                                  src={image.url}
                                  alt="ProfilePic"
                                  style={{
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "center",
                                    zIndex: 1,
                                    width: "100%",
                                  }}
                                />
                              </SwiperSlide>
                            );
                          })}
                        </BulletCarousel>
                      </Stack>
                    )}
                  </Box>
                  <Stack
                    direction="row"
                    sx={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: { xl: 0, xs: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xl: 23,
                            lg: 23,
                            md: 23,
                            sm: 23,
                            xs: 15,
                          },
                          textTransform: "capitalize",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5a5a5a",
                          fontSize: {
                            xl: 13,
                            lg: 13,
                            md: 13,
                            sm: 13,
                            xs: 10,
                          },
                          fontWeight: "bold",
                          minWidth: {
                            xl: "200px",
                            lg: "200px",
                            md: "200px",
                            sm: "200px",
                            xs: "100px",
                          },
                        }}
                      >
                        {item.category} :{" "}
                        {item.link ? (
                          <a
                            target="_blank"
                            href={item.link}
                            style={{
                              color: "#26269d",
                              textDecoration: "underline",
                            }}
                          >
                            {item.link}
                          </a>
                        ) : (
                          item.description
                        )}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          xl: 60,
                          lg: 60,
                          md: 60,
                          sm: 150,
                          xs: 60,
                        },
                        height: "90%",
                        display: { xl: "flex", xs: "none" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: "column",
                      }}
                    >
                      <button
                        className="batman"
                        onClick={() => {
                          handleRoute(item.userID);
                        }}
                      ></button>
                    </Box>
                  </Stack>
                </Box>
              </div>
            </Grid>
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
            flexDirection: "column",
            height: "400px",
          }}
          onMouseEnter={() => {
            setisHovered(true);
          }}
          onMouseLeave={() => {
            setisHovered(false);
          }}
        >
          <GroupsIcon sx={{ height: "200px", width: "300px" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            No Profiles found
          </Typography>
          <Box
            hidden={!cachedData}
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
  );
}
