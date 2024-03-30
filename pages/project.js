import Layout from "@/layouts/Layout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import gallery from "../assets/gallery.jpeg";
import student from "../assets/student.jpeg";
import blog from "../assets/blog.jpeg";
import recipebook from "../assets/recipebook.jpeg";
import shopify from "../assets/shopify.jpeg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Grid from "@mui/material/Grid";
import { GetProjectsByID } from "@/controller/project";
import { useRouter } from "next/router";
import { getDecryptedCookie } from "@/utils/EncryteCookies";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [projectsData, setprojectsData] = useState([]);
  const cookie = getDecryptedCookie("userData");

  const cachedCookie = cookie ? JSON.parse(cookie) : false;

  useEffect(() => {
    if (id || cachedCookie) {
      GetProjectsByID(id ? id : cachedCookie?._id).then((data) => {
        setprojectsData(data);
      });
    }
  }, []);

  const projects = [
    {
      title: "Gallery",
      to: "https://image-gallery-sand.vercel.app/",
      image: gallery,
    },
    {
      title: "Student Management",
      to: "https://studentmanagement-supabase.vercel.app/",
      image: student,
    },
    {
      title: "Recipebook",
      to: "https://recipe-supabase.vercel.app/",
      image: recipebook,
    },
    {
      title: "Shopify",
      to: "https://shopifymedia.vercel.app/",
      image: shopify,
    },
    {
      title: "Blog",
      to: "https://blogpage-nextjs-git-jerin-jerin2001.vercel.app/",
      image: blog,
    },
  ];

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
            {projectsData?.map((project, index) => {
              return <Card key={index} project={project} />;
            })}
          </Grid>
        </Stack>
      </Layout>
    </>
  );
}
