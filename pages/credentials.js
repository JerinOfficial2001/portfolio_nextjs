import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import ProfileCard from "@/components/ProfileCard";
import { Chip, Grid, Skeleton } from "@mui/material";
import { GetAllProfile, GetProfileByID } from "@/controller/profile";
import { GetCredentialsByID } from "@/controller/credentials";
import { useGlobalContext } from "@/utils/globalContext";
import { useQuery } from "@tanstack/react-query";

export default function Credentials() {
  const router = useRouter();
  const {} = useGlobalContext();

  const { id } = router.query;
  const {
    data: profiles,
    isError: profilesErr,
    isLoading: profilesLoading,
  } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => GetProfileByID(id),
    enabled: !!id,
  });
  const {
    data: profile,
    isError: profileErr,
    isLoading: profileLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => GetProfileByID(id),
    enabled: !!id && !!profiles,
  });
  const {
    data: Credentials,
    isError: credentialErr,
    isLoading: CredentialsLoading,
  } = useQuery({
    queryKey: ["credential"],
    queryFn: () => GetCredentialsByID(id),
    enabled: !!id && !!profiles,
  });
  // useEffect(() => {
  //   if (profilesErr || profileErr || credentialErr) {
  //     router.push("/");
  //   }
  // }, [profilesErr, profileErr, credentialErr]);
  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "70%" },
        gap: 10,
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
      }}
    >
      <ProfileCard
        links={Credentials?.link}
        profile={profile}
        isLoading={profileLoading || profilesLoading}
      />
      <Box
        sx={{
          width: {
            xl: "60%",
            lg: "60%",
            md: "60%",
            sm: "100%",
            xs: "100%",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!CredentialsLoading && !profilesLoading ? (
          <div className="animate__animated animate__zoomIn  ">
            <Stack sx={{ width: "100%", gap: 5 }}>
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
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {profile?.role ? profile.role : "ROLE"}
                </Typography>
                <Typography
                  sx={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                >
                  {profile?.name ? profile?.name : "NAME"}
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 2,
                  }}
                >
                  {profile?.qualification
                    ? profile.qualification
                    : "QUALIFICATION"}
                </Typography>
                <Typography
                  sx={{
                    color: "#5a5a5a",
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {profile?.about ? profile.about : "ABOUT"}
                </Typography>
              </Box>
              {/* education */}
              <Stack
                sx={{
                  height: "90%",
                  width: "100%",
                  gap: 1,
                }}
              >
                <Typography sx={{ color: "white", fontSize: 20 }}>
                  EDUCATION
                </Typography>
                {Credentials?.education &&
                Credentials?.education?.length !== 0 ? (
                  Credentials.education.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100%",
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
                          textTransform: "uppercase",
                        }}
                      >
                        {item.Year}
                      </Typography>
                      <Typography sx={{ color: "white", fontSize: 20 }}>
                        {item.Course}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5a5a5a",
                          fontSize: 13,
                          fontWeight: "bold",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.Institution}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Box
                    sx={{
                      width: "100%",
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
                        textTransform: "uppercase",
                      }}
                    >
                      YEAR
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: 20 }}>
                      COURSE
                    </Typography>
                    <Typography
                      sx={{
                        color: "#5a5a5a",
                        fontSize: 13,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      INSTITUTION
                    </Typography>
                  </Box>
                )}
              </Stack>
              {/* skills */}
              <Stack
                sx={{
                  height: "90%",
                  width: "100%",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    gap: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ color: "white", fontSize: 20 }}>
                    SKILLS
                  </Typography>
                  <Stack
                    sx={{
                      height: "90%",
                      width: "100%",
                      gap: 10,
                      flexDirection: "row",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        width: "100%",
                        gap: 1,
                      }}
                    >
                      {Credentials?.skills &&
                      Credentials.skills.length !== 0 ? (
                        Credentials?.skills.map((skill, index) => (
                          <Grid item key={index}>
                            <Chip label={skill} color="warning" />
                          </Grid>
                        ))
                      ) : (
                        <Grid item>
                          <Chip label="skill" color="warning" />
                        </Grid>
                      )}
                    </Grid>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </div>
        ) : (
          <Stack sx={{ width: "100%", gap: 5 }}>
            <Box
              sx={{
                width: "90%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Skeleton
                sx={{ bgcolor: "#34363a", height: "40px", width: "70%" }}
              />
              <Skeleton animation="wave" sx={{ bgcolor: "#34363a" }} />
              <Skeleton animation={false} sx={{ bgcolor: "#34363a" }} />
            </Box>
            {/* education */}
            <Stack
              sx={{
                height: "90%",
                width: "100%",
                gap: 1,
              }}
            >
              {[1, 2, 3].map((_, index) => (
                <Stack>
                  <Skeleton
                    sx={{
                      bgcolor: "#34363a",
                      height: "40px",
                      width: `${200 + index * 40}px`,
                    }}
                    animation="wave"
                  />
                  <Skeleton sx={{ bgcolor: "#34363a" }} />
                </Stack>
              ))}
            </Stack>
            {/* skills */}
            <Stack
              sx={{
                height: "90%",
                width: "100%",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  gap: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Skeleton
                  sx={{
                    bgcolor: "#34363a",
                    height: "40px",
                    width: "60%",
                  }}
                  animation="wave"
                />
                <Stack
                  direction={"row"}
                  sx={{ flexWrap: "wrap", gap: 2, justifyContent: "center" }}
                >
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Skeleton
                      key={index}
                      sx={{
                        bgcolor: "#34363a",
                        width: "100px",
                        height: "35px",
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}
