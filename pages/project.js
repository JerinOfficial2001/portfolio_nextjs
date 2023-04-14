import Layout from "@/layouts/Layout";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import gallery from "../assets/gallery.jpeg";
import student from "../assets/student.jpeg";
import recipebook from "../assets/recipebook.jpeg";
import shopify from "../assets/shopify.jpeg";
import { useRouter } from "next/router";

export default function Project() {
  const router=useRouter()
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
            marginTop:{ xl:5,lg:5,md:5,sm:10,xs:10},
          }}
        >
          <Box sx={{ borderBottom: "5px solid red" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: {xl:60,lg:60,md:60,sm:20,xs:20},
                fontFamily: "cursive",
                " -webkit-text-stroke-color": "black",
              }}
            >
              MY PROJECTS
            </Typography>
          </Box>
          {projects.map((project, index) => {
            return (
              <Box
              key={index}
                sx={{
                  width: "100%",
                  height: "280px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div onClick={()=>{router.push(project.to)}} className="wrapper">
                  <div className="card">
                    <Image
                      src={project.image}
                      alt="loading..."
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </Box>
            );
          })}
        </Stack>
      </Layout>
    </>
  );
}
