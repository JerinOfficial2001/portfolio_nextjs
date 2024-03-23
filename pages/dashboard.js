import { getAllUsers } from "@/controller/auth";
import Layout from "@/layouts/Layout";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  const handleRoute = (id) => {
    router.push(`/portfolio/${id}`);
  };
  return (
    <Layout>
      <Grid container columnGap={2} sx={{ width: "100%" }}>
        {Users?.map((item) => {
          return (
            <Grid key={item._id} item md={3}>
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
                  }}
                >
                  <Box
                    sx={{
                      height: "218px",
                      width: "90%",
                      background:
                        "linear-gradient(to right,#6a8bec,#b9e1fd,#61b8e4)",
                      borderRadius: "40px 0px 40px 0px",
                      boxShadow: "0px 0px 5px black",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image.url}
                        placeholder="empty"
                        alt="sign"
                        style={{
                          height: "98%",
                          width: "98%",
                          // marginTop: "21px",
                          borderRadius: "40px 0px 40px 0px",
                        }}
                      />
                    ) : (
                      <Image
                        src={require(!item.gender || item.gender == "male"
                          ? "../assets/male.png"
                          : "../assets/female.png")}
                        placeholder="empty"
                        alt="sign"
                        style={{
                          height: "91%",
                          width: "99%",
                          marginTop: "21px",
                          borderRadius: "0px 0px 40px 0px",
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
                        }}
                      >
                        {item.email}
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: 23 }}>
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
                          handleRoute(item._id);
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
