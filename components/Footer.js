import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

export default function Footer() {
    const [openBtn, setopenBtn] = useState(false);
    const router = useRouter();
  
    const menus = [
      {
        id: 1,
        title: "Home",
        to: "/",
        icon: <HomeOutlinedIcon />,
      },
      {
        id: 2,
        title: "About",
        to: "/",
        icon: <InventoryOutlinedIcon />,
      },
      {
        id: 3,
        title: "Works",
        to: "/project",
        icon: <InventoryOutlinedIcon />,
      },
      {
        id: 4,
        title: "Contact",
        to: "/contact",
        icon: <ContactPhoneOutlinedIcon />,
      },
    ];
  return (
    <Box
    sx={{
      display: "flex",
      gap: 3,
      width: "100%",
      justifyContent: "center",
      left: 0,
      alignItems: "center",
      flexDirection:'column',
      height:280,
      marginTop:5
    }}
  >
 <Typography variant="h4" color="white" fontWeight="bold">
        JeRin
      </Typography>
    <Stack
      direction="row"
      sx={{ width: "30%", justifyContent: "space-between" }}
    >
      {menus.map((menu, id) => {
        return (
          <>
          <div  key={id} onClick={()=>{router.push(menu.to)}}>
            <Typography 
             
              sx={{
                color: "#606060",
                fontWeight: "bold",
                "&:hover": { color: "white" },
                cursor:'pointer',
                
              }}
            >
          
              {menu.title}
            </Typography >
            </div>
          </>
        );
      })}
    </Stack>
    
  </Box>
  )
}
