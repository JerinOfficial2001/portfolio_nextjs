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
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "@/redux/actions";

export default function Project() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  // const projects = useSelector((state) => state.counter.projects);
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
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />

              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xl: 70,
                    lg: 70,
                    md: 70,
                    sm: 30,
                    xs: 25,
                  },
                  fontWeight: "bold",
                }}
              >
                MY PROJECTS
              </Typography>

              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />
            </Stack>
          </div>
          <Grid container direction="row" rowGap={2} columnGap={2} columns={8}>
            {projects?.map((project) => {
              return <Card project={project} key={project._id} />;
            })}
          </Grid>
        </Stack>
      </Layout>
    </>
  );
}
