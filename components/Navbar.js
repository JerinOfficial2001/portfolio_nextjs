import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

export default function Navbar() {
  const [openBtn, setopenBtn] = useState(false);
  const router = useRouter();

  const menus = [
    {
        id:1,
      title: "HOME",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
        id:2,
      title: "MY PROJECTS",
      to: "/project",
      icon: <InventoryOutlinedIcon />,
    },
    {
        id:3,
      title: "CONTACT",
      to: "/contact",
      icon: <ContactPhoneOutlinedIcon />,
    },
  ];
  return (
    <div>
      <Box
        sx={{
          display: {
            sm: "none",
            xs: "none",
            lg: "block",
            md: "block",
            xl: "block",
          },
          gap: 2,
          position: "fixed",
          height: "100vh",
          width: "5%",
          marginTop:20,
          gap:10
        }}
      >
        {menus.map((menu, id) => {
          return (
            <>
              
                <IconButton
                
                key={id}
                  onMouseEnter={() => {
                    setopenBtn(true);
                  }}
                  onClick={() => {
                    router.push(menu.to);
                  }}
                  sx={{
                    background: "linear-gradient(to right,black,white,blue)",
                    border: "1px solid white",
                    "&:hover": { boxShadow: "0px 0px 5px white" },
                    marginBottom:2
                  }}
                >
                  {menu.icon}
                </IconButton>
            </>
          );
        })}
      </Box>
{/* small screen */}
<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            sm: "row",
            xs: "row",
          },
          display: {
            sm: "block",
            xs: "block",
            lg: "none",
            md: "none",
            xl: "none",
          },
          gap: 2,
          position: "fixed",
          height: { sm: 50, xs: 50 },
          width: "100%",
          marginTop:{sm:2,xs:2},
        }}
      >
       
              <Stack direction="row" sx={{alignItems:'center',justifyContent:'center',gap:5,width:'90%'}}>
                <Button
                  onClick={() => {
                    router.push("/");
                  }}
                  sx={{
                    background: "linear-gradient(to right,black,white,blue)",
                    border: "1px solid white",
                    height:20,
                    color:'black',
                    fontSize:10
                    }}
                >
                  HOME
                </Button>
                <Button
                  onClick={() => {
                    router.push("/project");
                  }}
                  sx={{
                    background: "linear-gradient(to right,black,white,blue)",
                    border: "1px solid white",
                    "&:hover": { boxShadow: "0px 0px 5px white" },
                    height:20,
                    color:'black',
                    fontSize:10
                    }}
                >
                  My projects
                </Button>
                <Button
                  onClick={() => {
                    router.push("/contact");
                  }}
                  sx={{
                    background: "linear-gradient(to right,black,white,blue)",
                    border: "1px solid white",
                    "&:hover": { boxShadow: "0px 0px 5px white" },
                    height:20,
                    color:'black',
                    fontSize:10
                    }}
                >
                  Contact
                </Button>
               
              </Stack>
            
      </Box>
    </div>
  );
}
