import Layout from "@/layouts/Layout";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery from "../assets/gallery.jpeg";
import student from "../assets/student.jpeg";
import blog from "../assets/blog.jpeg";
import recipebook from "../assets/recipebook.jpeg";
import shopify from "../assets/shopify.jpeg";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";
import Card from "@/components/Card";
import  Grid  from "@mui/material/Grid";

export default function Project() {

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
          <Box sx={{ borderBottom: "5px solid red",marginBottom:5 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: { xl: 60, lg: 60, md: 60, sm: 20, xs: 20 },
                fontFamily: "cursive",
                " -webkit-text-stroke-color": "black",
                
              }}
            >
              MY PROJECTS
            </Typography>
          </Box>
          <Grid container direction="row" rowGap={2} columnGap={2} columns={8}>
          {projects.map((project, index) => {
            return (
              <Card project={project} key={index}/>
            );
          })}
          </Grid>
        </Stack>
      </Layout>
    </>
  );
}
