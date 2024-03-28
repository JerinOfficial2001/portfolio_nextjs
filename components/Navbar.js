import IconButton from "@mui/material/IconButton";
import React, { useContext, useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ResNav from "./ResNav";
import { MyContextState } from "@/pages/_app";
import { Logout } from "@mui/icons-material";
import Cookies from "js-cookie";
import { getDecryptedCookie } from "@/utils/EncryteCookies";

export default function Navbar() {
  const [menuBtn, setmenuBtn] = useState(false);
  const router = useRouter();
  const cookie = getDecryptedCookie("userData");
  const [userData, setuserData] = useState(null);
  const cachedData = cookie ? JSON.parse(cookie) : false;
  useEffect(() => {
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);
  const { homepage, id } = router.query;
  const location = router.pathname;
  const menus = [
    {
      id: 0,
      title: "Dashboard",
      to: "/",
      path: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 1,
      title: "Home",
      to: homepage ? homepage : id ? id : userData ? userData._id : "/homepage",
      path: "/[homepage]",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 2,
      title: "About",
      to: `/about${
        homepage && homepage !== "homepage"
          ? "?id=" + homepage
          : userData
          ? "?id=" + userData?._id
          : id
          ? "?id=" + id
          : ""
      }`,
      path: "/about",
      icon: <InventoryOutlinedIcon />,
    },
    {
      id: 3,
      title: "Works",
      to: `/project${
        homepage && homepage !== "homepage"
          ? "?id=" + homepage
          : userData
          ? "?id=" + userData?._id
          : id
          ? "?id=" + id
          : ""
      }`,
      path: "/project",
      icon: <InventoryOutlinedIcon />,
    },
    {
      id: 4,
      title: "Contact",
      to: `/contact${
        homepage && homepage !== "homepage"
          ? "?id=" + homepage
          : userData
          ? "?id=" + userData?._id
          : id
          ? "?id=" + id
          : ""
      }`,
      path: "/contact",
      icon: <ContactPhoneOutlinedIcon />,
    },
  ];
  const handleLogout = () => {
    Cookies.remove("userData");
    Cookies.remove("token");
    window.location.href = "/";
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        left: 0,
        height: 120,
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        style={{ cursor: "pointer" }}
      >
        <Button sx={{ textTransform: "none" }}>
          <Typography variant="h4" color="white" fontWeight="bold">
            𝘗𝘰𝘳𝘵𝘧𝘰𝘭𝘪𝘰
          </Typography>
        </Button>
      </div>
      {menuBtn && <ResNav />}
      <Stack
        direction="row"
        sx={{
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },

            gap: {
              xl: 2,
              lg: 2,
              md: 2,
              sm: 4,
              xs: 4,
            },
          }}
        >
          {menus.map((menu, id) => {
            return (
              <div
                key={id}
                onClick={() => {
                  if (location !== menu.path) {
                    if (homepage || userData || id || menu.to == "/") {
                      router.push(menu.to);
                    }
                  }
                }}
              >
                <Typography
                  sx={{
                    color: location == menu.path ? "white" : "#606060",
                    fontWeight: "bold",
                    "&:hover": { color: "white" },
                    cursor: "pointer",
                  }}
                >
                  {menu.title}
                </Typography>
              </div>
            );
          })}
        </Box>
      </Stack>
      <Box
        sx={{
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={() => {
            router.push(userData ? "/contact" : "/auth/login");
          }}
          variant="contained"
          sx={{
            color: "white",
            background: "#323232",
            borderRadius: 4,
            "&:hover": {
              background: "#323232",
              color: "white",
              border: "2px solid lavender",
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
            border: "2px solid cornflowerblue",
          }}
        >
          {userData ? "Let's Talk" : "Login"}
        </Button>
        {userData !== null && (
          <IconButton
            sx={{ color: "white", boxShadow: "0 0 0 1px black" }}
            onClick={handleLogout}
          >
            <Logout />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        {!menuBtn ? (
          <IconButton
            size="big"
            onClick={() => {
              setmenuBtn(true);
            }}
          >
            <MenuOutlinedIcon sx={{ color: "white", fontSize: 40 }} />
          </IconButton>
        ) : (
          <IconButton
            size="big"
            onClick={() => {
              setmenuBtn(false);
            }}
          >
            <CloseOutlinedIcon sx={{ color: "white", fontSize: 40 }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
