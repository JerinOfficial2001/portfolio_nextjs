import { getAllUsers, getUserByID } from "@/controller/auth";
import { GetAllProfile } from "@/controller/profile";
import Layout from "@/layouts/Layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { MyContextState } from "./_app";

export default function Dashboard() {
  const { profiles, setprofiles } = useContext(MyContextState);
  const router = useRouter();
  useEffect(() => {
    GetAllProfile().then((data) => {
      setprofiles(data);
    });
  }, []);
  const handleRoute = (id) => {
    router.push(`/${id}`);
  };
  return (
    <Layout dashboard={true}>
      <Toaster position="top-center" />
      <Grid container columnGap={4} rowGap={1} sx={{ width: "100%" }}>
        {profiles?.map((item) => {
          return (
            <Grid key={item._id} item md={2.7}>
              <div
                style={{ width: "100%" }}
                className="animate__animated animate__zoomIn animate__delay-1s thirdrow"
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: {
                      xl: 350,
                      lg: 350,
                      md: 350,
                      sm: 300,
                      xs: 300,
                    },
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    flexDirection: "column",
                    cursor: "pointer",
                    borderRadius: 8,
                    border: "1px solid #232323",
                    padding: 3,
                    boxShadow: "0 0 0 2px black",
                  }}
                >
                  <Box
                    sx={{
                      height: "215px",
                      width: "90%",
                      background:
                        "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                      borderRadius: "40px 0px 40px 0px",
                      boxShadow: "0px 0px 5px black",
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.image !== "null" && item.image ? (
                      <img
                        src={item.image.url}
                        alt="ProfilePic"
                        style={{
                          height: "215px",
                          width: "100%",
                          borderRadius: "40px 0px 40px 0px",
                          boxShadow: "0px 0px 5px whitesmoke",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    ) : (
                      <Image
                        src={require(!item.gender ||
                          item.gender == "male" ||
                          item.gender == "MALE"
                          ? "../assets/male.png"
                          : "../assets/female.png")}
                        alt="NoProfile"
                        style={{
                          height: "80%",
                          width: "80%",
                          marginTop: "21px",
                          borderRadius: "50%",
                        }}
                      />
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
                          minWidth: "200px",
                        }}
                      >
                        {item.role}
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: 23,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.name}
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
                          handleRoute(item.userID);
                        }}
                      ></button>
                    </Box>
                  </Stack>
                </Box>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}
