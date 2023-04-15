import Layout from "@/layouts/Layout";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery from "../assets/gallery.jpeg";
import student from "../assets/student.jpeg";
import recipebook from "../assets/recipebook.jpeg";
import shopify from "../assets/shopify.jpeg";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Image from "next/image";
import React, { useState } from "react";
import Card from "@/components/Card";

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
  ];

  return (
    <>
      <Layout>
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            marginTop: { xl: 5, lg: 5, md: 5, sm: 10, xs: 10 },
          }}
        >
          <Box sx={{ borderBottom: "5px solid red" }}>
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
          {projects.map((project, index) => {
            return (
              <Card project={project} key={index}/>
            );
          })}
        </Stack>
      </Layout>
    </>
  );
}
