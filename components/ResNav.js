import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";


export default function ResNav() {
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
    <Stack
        sx={{
          width: {
            xl: "67%",
            lg: "67%",
            md: "67%",
            sm: "100%",
            xs: "100%",
          },
          justifyContent: "space-between",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          background: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "#0f0f0f",
            xs: "#0f0f0f",
          },
          position: {
            xl: "sticky",
            lg: "sticky",
            md: "sticky",
            sm: "absolute",
            xs: "absolute",
          },
          top: 60,
          alignItems: {
            xl: "normal",
            lg: "normal",
            md: "normal",
            sm: "center",
            xs: "center",
          },
          gap: {
            xl: 0,
            lg: 0,
            md: 0,
            sm: 4,
            xs: 4,
          },
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            width: "45%",
            justifyContent: "space-between",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            alignItems: {
              xl: "normal",
              lg: "normal",
              md: "normal",
              sm: "center",
              xs: "center",
            },
            gap: {
              xl: 0,
              lg: 0,
              md: 0,
              sm: 4,
              xs: 4,
            },
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
        <Box>
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
      </Stack>
  )
}
