import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import "animate.css";
import { useRouter } from "next/router";
import { IconButton, TextField } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import ProfileModal from "@/components/ProfileModal";
import CredentialsModal from "@/components/CredentialsModal";

export default function Firstrow({
  data,
  profile,
  isMyProfile,
  fetchData,
  credentials,
}) {
  const router = useRouter();
  const { homepage } = router.query;
  const location = router.pathname;
  const [isImgHover, setisImgHover] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const [openCredentials, setopenCredentials] = useState(false);
  const handleProfileClose = () => {
    setopenProfile(false);
  };
  const handleCredentialsClose = () => {
    setopenCredentials(false);
  };
  return (
    <>
      <Stack
        width="100%"
        sx={{
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          gap: 3,
          alignItems: "center",
        }}
      >
        {/* 1st */}
        <div className="animate__animated animate__zoomIn animate__delay-1s  secondrow">
          <Stack
            direction="row"
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              height: "310px",
              width: "100%",
              borderRadius: "40px",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "15px",
              border: "1px solid #232323",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "70%",
                width: "40%",
                background: "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                borderRadius: "40px 0px 40px 0px",
                boxShadow: "0px 0px 5px black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {profile?.image !== "null" && profile?.image ? (
                <img
                  src={profile.image.url}
                  alt="ProfilePic"
                  style={{
                    height: "98%",
                    width: "98%",
                    borderRadius: "40px 0px 40px 0px",
                  }}
                />
              ) : (
                <Image
                  className="userImg"
                  src={require(!data?.gender ||
                    data?.gender == "male" ||
                    data?.gender == "MALE"
                    ? "../assets/male.png"
                    : "../assets/female.png")}
                  alt="NoProfile"
                  style={{
                    height: "85%",
                    width: "80%",
                    borderRadius: "0px 0px 40px 0px",
                  }}
                />
              )}
              {/* {isMyProfile && (
                <Box
                  onMouseEnter={() => {
                    setisImgHover(true);
                  }}
                  onMouseLeave={() => {
                    setisImgHover(false);
                  }}
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    borderRadius: "40px 0px 40px 0px",
                    color: "white",
                    background: isImgHover ? "#2e29295e" : "",
                    transition: "1s",
                  }}
                >
                  {isImgHover && (
                    <Edit on sx={{ fontSize: "50px", transition: "1s" }} />
                  )}
                </Box>
              )} */}
            </Box>
            <Box
              sx={{
                height: "60%",
                width: "45%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: {
                      xl: 15,
                      lg: 15,
                      md: 15,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {profile ? profile?.role : "Add Role"}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      xl: 40,
                      lg: 40,
                      md: 40,
                      sm: 40,
                      xs: 20,
                    },
                    fontWeight: "bold",
                  }}
                >
                  {profile ? profile.name : "Add Name"}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      xl: 15,
                      lg: 15,
                      md: 15,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {profile ? profile.qualification : "Add Qualification"}
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: {
                      xl: 15,
                      lg: 15,
                      md: 15,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {/* An Aspiring MERN stack Developer */}
                  {profile ? profile.about : "Add About"}
                </Typography>
              </Box>
            </Box>
            {isMyProfile && (
              <IconButton
                onClick={() => {
                  setopenProfile(true);
                }}
                sx={{
                  position: "absolute",
                  bottom: 15,
                  right: 15,
                  color: "whitesmoke",
                  background: "#9d999924 !important",
                  "&:hover": {
                    boxShadow: "0 0 0 1px black",
                  },
                }}
              >
                {profile == null || profile == undefined ? <Add /> : <Edit />}
              </IconButton>
            )}
          </Stack>
        </div>

        {/* 2nd */}
        <Box
          sx={{
            width: {
              xl: "48%",
              lg: "48%",
              md: "48%",
              sm: "100%",
              xs: "100%",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <div
            className="animate__animated animate__zoomIn animate__delay-1s "
            style={{ width: "100%" }}
          >
            <Stack
              sx={{
                width: "100%",
                height: 60,
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                borderRadius: 8,
                cursor: "pointer",
                border: "1px solid #232323",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <marquee width="90%" direction="left" behavior="scroll">
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: {
                      xl: 15,
                      lg: 15,
                      md: 15,
                      sm: 15,
                      xs: 10,
                    },
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ color: "white" }}> * </span>I am&nbsp;
                  <span style={{ color: "white" }}>
                    {profile ? profile.name : "$NAME"}
                  </span>
                  &nbsp;from&nbsp;
                  {profile ? profile.from : "$PLACE"}&nbsp;
                  <span style={{ color: "white" }}> * </span>
                  <span style={{ color: "white" }}>
                    &nbsp; {profile ? profile.role : "$ROLE"}&nbsp;
                  </span>
                  <span style={{ color: "white" }}> * </span>I am&nbsp;
                  <span style={{ color: "white" }}>
                    {profile ? profile.name : "$NAME"}
                  </span>
                  &nbsp;from&nbsp;
                  {profile ? profile.from : "$PLACE"}&nbsp;
                  <span style={{ color: "white" }}> * </span>
                  <span style={{ color: "white" }}>
                    &nbsp; {profile ? profile.role : "$ROLE"}&nbsp;
                  </span>
                  <span style={{ color: "white" }}> * </span>I am&nbsp;
                  <span style={{ color: "white" }}>
                    {profile ? profile.name : "$NAME"}
                  </span>
                  &nbsp;from&nbsp;
                  {profile ? profile.from : "$PLACE"}&nbsp;
                  <span style={{ color: "white" }}> * </span>
                  <span style={{ color: "white" }}>
                    &nbsp; {profile ? profile.role : "$ROLE"}&nbsp;
                  </span>
                </Typography>
              </marquee>
            </Stack>
          </div>
          {/* container  */}
          <Stack
            sx={{
              width: "100%",

              gap: 3,
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            {/* creditials */}
            <div
              className="animate__animated animate__zoomIn animate__delay-1s secondrow"

              // onMouseEnter={() => {
              //   sethoverEffect(true);
              // }}
              // onMouseLeave={() => {
              //   sethoverEffect(false);
              // }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xl: 235,
                    lg: 235,
                    md: 235,
                    sm: 300,
                    xs: 250,
                  },
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                  cursor: "pointer",
                  border: "1px solid #232323",
                  paddingTop: 2,
                }}
              >
                <Box
                  onMouseEnter={() => {
                    setisImgHover(true);
                  }}
                  onMouseLeave={() => {
                    setisImgHover(false);
                  }}
                  sx={{
                    height: 130,
                    width: 180,
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {isMyProfile && (
                    <Box
                      sx={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        borderRadius: "10px",
                        background: isImgHover ? "#00000094" : "",
                        transition: ".3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          setopenCredentials(true);
                        }}
                        sx={{
                          boxShadow: isImgHover ? "0 0 0 1px gray" : "",
                          color: isImgHover ? "white" : "black",
                          height: 50,
                          width: 50,
                          backgroundColor: "#877f7f69 !important",
                        }}
                      >
                        {profile == null || profile == undefined ? (
                          <Add />
                        ) : (
                          <Edit />
                        )}
                      </IconButton>
                    </Box>
                  )}
                  {credentials ? (
                    <img
                      src={credentials?.image?.url}
                      placeholder="empty"
                      alt="sign"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <Box component="img" alt="sign" src="/Signature.png" />
                  )}
                </Box>

                <Stack
                  direction="row"
                  sx={{
                    height: "35%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "60%",
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#5a5a5a",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      MORE ABOUT ME
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 23 }}>
                      Credentials
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xl: 60,
                        lg: 60,
                        md: 60,
                        sm: 150,
                        xs: 100,
                      },
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <button
                      className="batman"
                      onClick={() => {
                        router.push(
                          `/credentials${
                            homepage && homepage !== "homepage"
                              ? "?id=" + homepage
                              : data
                              ? "?id=" + data?._id
                              : ""
                          }`
                        );
                      }}
                    ></button>
                  </Box>
                </Stack>
              </Box>
            </div>
            {/* project*/}
            <div className="animate__animated animate__zoomIn animate__delay-1s secondrow">
              <Box
                sx={{
                  width: "100%",
                  height: {
                    xl: 235,
                    lg: 235,
                    md: 235,
                    sm: 300,
                    xs: 300,
                  },
                  background:
                    "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                  cursor: "pointer",
                  border: "1px solid #232323",
                }}
              >
                <Stack sx={{ height: "65%", width: "100%" }}>
                  <Box
                    component="img"
                    alt="services"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "32px 32px 0 0",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    src={"/project.jpg"}
                  />
                </Stack>

                <Stack
                  direction="row"
                  sx={{
                    height: "35%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "60%",
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#5a5a5a",
                        fontSize: 13,
                        fontWeight: "bold",
                      }}
                    >
                      SHOWCASE
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 23 }}>
                      Projects
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xl: 60,
                        lg: 60,
                        md: 60,
                        sm: 150,
                        xs: 100,
                      },
                      height: "90%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                      flexDirection: "column",
                    }}
                  >
                    <button
                      className="batman"
                      onClick={() => {
                        router.push("/project");
                      }}
                    ></button>
                  </Box>
                </Stack>
              </Box>
            </div>
            {/* !project*/}
          </Stack>
          {/* !container */}
        </Box>
      </Stack>
      <ProfileModal
        open={openProfile}
        handleClose={handleProfileClose}
        data={profile}
        id={data?._id}
        fetchData={fetchData}
      />
      <CredentialsModal
        open={openCredentials}
        handleClose={handleCredentialsClose}
        data={credentials}
        id={data?._id}
        fetchData={fetchData}
      />
    </>
  );
}
