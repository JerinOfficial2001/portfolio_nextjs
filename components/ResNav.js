import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Avatar, Typography } from "@mui/material";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import Cookies from "js-cookie";
import { Logout } from "@mui/icons-material";
import { StyledBadge } from "./Navbar";

export default function ResNav({
  setmenuBtn,
  setopenViewProfile,
  setopenAuthModel,
}) {
  const router = useRouter();
  const location = router.pathname;
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedData = cookie ? JSON.parse(cookie) : false;
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);
  const { homepage, id } = router.query;
  const menus = [
    {
      id: 1,
      title: "Home",
      to: `/${
        homepage && homepage !== "homepage"
          ? homepage
          : userData
          ? userData?._id
          : id
          ? id
          : "66276a73361a148fef6608c2"
      }`,
      path: "/[homepage]",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 2,
      title: "About",
      to: `/credentials${
        homepage && homepage !== "homepage"
          ? "?id=" + homepage
          : userData
          ? "?id=" + userData?._id
          : id
          ? "?id=" + id
          : "?id=66276a73361a148fef6608c2"
      }`,
      path: "/credentials",
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
          : "?id=66276a73361a148fef6608c2"
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
          : "?id=66276a73361a148fef6608c2"
      }`,
      path: "/contact",
      icon: <ContactPhoneOutlinedIcon />,
    },
  ];
  const handleLogout = () => {
    Cookies.remove("Jers_folio_userData");
    Cookies.remove("token");
    window.location.href = "/";
  };
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            width: "100%",
          }}
        >
          {userData && (
            <Button
              onClick={() => {
                setmenuBtn(false);
                setopenViewProfile(true);
              }}
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontFamily: "cursive",
              }}
              startIcon={
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt={userData?.name}
                    src={
                      userData?.image !== "null"
                        ? userData?.image?.url
                        : userData.gender == "male" || userData.gender == "MALE"
                        ? "/male.png"
                        : "/female.png"
                    }
                    sx={{ objectFit: "cover", objectPosition: "top" }}
                    sizes="small"
                  />
                </StyledBadge>
              }
            >
              View Profile
            </Button>
          )}
        </Box>
        {menus.map((menu, id) => {
          return (
            <>
              <div
                key={id}
                onClick={() => {
                  router.push(menu.to);
                  setmenuBtn(false);
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
        })}{" "}
        <Button
          onClick={() => {
            if (userData) {
              router.push("/feedback");
            } else {
              setopenAuthModel(true);
            }
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

            border: "2px solid cornflowerblue",
            fontFamily: "cursive",
          }}
        >
          {userData ? "Feedback" : "Login"}
        </Button>
        {userData !== null && (
          <Button
            sx={{
              color: "white",
              borderRadius: 4,
              "&:hover": {
                color: "white",
              },
            }}
            startIcon={<Logout />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </Box>
    </Stack>
  );
}
