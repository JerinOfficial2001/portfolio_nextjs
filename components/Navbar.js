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
      title: "HOME",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "MY PROJECTS",
      to: "/project",
      icon: <InventoryOutlinedIcon />,
    },
    {
      title: "CONTACT",
      to: "/contact",
      icon: <ContactPhoneOutlinedIcon />,
    },
  ];
  return (
    <div
      style={{
        width: { xl: "5%", lg: "5%", md: "5%", sm: "100%", xs: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xl: "column",
            lg: "column",
            md: "column",
            sm: "row",
            xs: "row",
          },
          gap: 2,
          position: "fixed",
          height: { xl: "100vh", lg: "100vh", md: "100vh", sm: 50, xs: 50 },
          width: "100%",
          marginTop:{ xl:0,lg:0,md:0,sm:2,xs:2},
        }}
      >
        {menus.map((menu, index) => {
          return (
            <>
              <Stack direction="row" key={index}>
                <IconButton
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
                  }}
                >
                  {menu.icon}
                </IconButton>
                {openBtn && (
                  <Button
                    onMouseLeave={() => {
                      setopenBtn(false);
                    }}
                  >
                    {menu.title}
                  </Button>
                )}
              </Stack>
            </>
          );
        })}
      </Box>
    </div>
  );
}
