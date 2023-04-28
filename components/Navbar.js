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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ResNav from "./ResNav";

export default function Navbar() {
  const [menuBtn, setmenuBtn] = useState(false);

  const router = useRouter();
  const location = router.pathname;
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
      to: "/about",
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
        gap: 10,
        width: "100%",
        justifyContent: "space-between",
        left: 0,
        marginTop: 5,
        height: 120,
        position: "relative",
      }}
    >
      <div onClick={()=>{router.push('/auth')}} style={{cursor:'pointer'}}>
        <Button sx={{textTransform:'none'}}>
        <Typography variant="h4" color="white" fontWeight="bold">
        JeRin
      </Typography>
        </Button>
      
      </div>
     {menuBtn && <ResNav/>}
      <Stack direction="row"
        sx={{
          display:{
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
          width: "70%",
          
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            width: "47%",
            justifyContent: "space-between",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
           
            gap: {
              xl: 0,
              lg: 0,
              md: 0,
              sm: 4,
              xs: 4,
            },
            marginLeft:25
          }}
        >
          {menus.map((menu, id) => {
            return (
              <>
                <div
                  key={id}
                  onClick={() => {
                    router.push(menu.to);
                  }}
                >
                  <Typography
                    sx={{
                      color: location == menu.to ? "white" : "#606060",
                      fontWeight: "bold",
                      "&:hover": { color: "white" },
                      cursor: "pointer",
                    }}
                  >
                    {menu.title}
                  </Typography>
                </div>
              </>
            );
          })}
        </Box>
       
      </Stack>
      <Box sx={{
        display:{
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
          }}>
          <Button
            onClick={() => {
              router.push("/contact");
            }}
            variant="contained"
            sx={{
              color: "white",
              background: "#323232",
              borderRadius: 4,
              "&:hover": {
                background: "white",
                color: "#323232",
              },
              textTransform: "none",
              height: 43,
              width: 130,
              marginBottom: {
                xl: 0,
                lg: 0,
                md: 0,
                sm: 3,
                xs: 3,
              },
            }}
          >
            {"Let's Talk"}
          </Button>
        </Box>
      <Box sx={{
        display:{
          xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
        }
      }}>
        {!menuBtn? 
        <IconButton size="big" onClick={()=>{setmenuBtn(true)}}>
          <MenuOutlinedIcon sx={{ color: "white", fontSize: 40 }} />
        </IconButton>:
        <IconButton size="big" onClick={()=>{setmenuBtn(false)}}>
          <CloseOutlinedIcon sx={{ color: "white", fontSize: 40 }}/>
        </IconButton>}
      </Box>
    </Box>
  );
}
