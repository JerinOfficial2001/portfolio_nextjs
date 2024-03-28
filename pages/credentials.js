import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import "animate.css";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import ProfileCard from "@/components/ProfileCard";
import { Chip, Grid } from "@mui/material";
import { GetProfileByID } from "@/controller/profile";
import { GetCredentialsByID } from "@/controller/credentials";

export default function Credentials() {
  const router = useRouter();
  const { id } = router.query;
  const [Credentials, setCredentials] = useState({});
  const [profile, setprofile] = useState({});
  const fetchData = () => {
    if (id) {
      GetProfileByID(id).then((data) => {
        setprofile(data);
      });
      GetCredentialsByID(id).then((data) => {
        setCredentials(data);
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <Stack
        sx={{
          width: "100%",
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
        <ProfileCard links={Credentials?.link} profile={profile} />
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
                {profile?.name ? profile.name : "NAME"}
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
                    {Credentials?.skills && Credentials.skills.length !== 0 ? (
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
        </Box>
      </Stack>
    </Layout>
  );
}
