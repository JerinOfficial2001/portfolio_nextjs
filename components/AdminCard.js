import supabase from "@/config/Supabase";
import Typography  from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";

export default function AdminCard({dataBase}) {
   
   
    const {name,email,subject,message}=dataBase
  
   

  return (
    <Stack
      sx={{
        height: {
          xl: 250,
          lg: 250,
          md: 250,
          sm: 250,
          xs: 210,
        },
        width: "100%",
        background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
        borderRadius: 10,
        padding: 5,
        gap:3
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: {
            xl: 20,
            lg: 20,
            md: 20,
            sm: 20,
            xs: 20,
          },
        }}
      >
        Name : {name}
      </Typography>
      <Typography  sx={{ color: "white", fontWeight: "bold", fontSize: {
            xl: 20,
            lg: 20,
            md: 20,
            sm: 20,
            xs: 20,
          },}}>
        Email : {email}
      </Typography>
      <Typography sx={{ color: "white", fontWeight: "bold", fontSize: {
            xl: 20,
            lg: 20,
            md: 20,
            sm: 15,
            xs: 15,
          },}}>
        Subject : {subject}
      </Typography>
      <Typography  sx={{ color: "white",fontSize: {
            xl: 20,
            lg: 20,
            md: 20,
            sm: 15,
            xs: 15,
          }, fontWeight: "bold" }}>
        Message : {message}
      </Typography>
    </Stack>
  );
}
