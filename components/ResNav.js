import React, { useEffect, useState } from "react";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import { useGlobalContext } from "@/utils/globalContext";
import { IoDesktopOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { PhoneAndroid } from "@mui/icons-material";

export default function ResNav() {
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
      icon: <IoHome size={"25px"} />,
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
      icon: <CgProfile size={"25px"} />,
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
  const dashboardMenus = [
    {
      id: 1,
      title: "Portfolio",
      to: "#portfolio",
      path: "/#portfolio",
      icon: <LuLayoutList size={"25px"} />,
    },
    {
      id: 2,
      title: "Application",
      to: "#applications",
      path: "/#applications",
      icon: <PhoneAndroid />,
    },
    {
      id: 3,
      title: "Website",
      to: "#websites",
      path: "/#websites",
      icon: <IoDesktopOutline size={"25px"} />,
    },
  ];
  const { windowPathName } = useGlobalContext();

  const MenuData = location == "/" ? dashboardMenus : menus;
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
        position: "fixed",
        bottom: 0,
        alignItems: "center",
        zIndex: 1000,
        borderRadius: 2,
        boxShadow: "0px -1px 3px gray",
        background: "#0f0f0f",
        height: "50px",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          width: "98%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {MenuData.map((menu, id) => {
          const activeMenu =
            location.includes(menu.path) ||
            (location == "/" && menu.title == "Home") ||
            windowPathName == menu.to ||
            (menu.title == "Portfolio" && windowPathName == "#portfolio")
              ? true
              : false;
          return (
            <Box
              key={id}
              onClick={() => {
                router.push(menu.to);
              }}
              sx={{
                ...(activeMenu
                  ? {
                      color: "white",
                    }
                  : {
                      color: "#606060",
                    }),

                "&:hover": { color: "white" },
                display: "flex",
                justifyContent: activeMenu ? "flex-start" : "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                height: "100%",
                width: "90px",
              }}
            >
              {menu.icon}
              <Typography
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all .3s",
                  fontSize: "8px",
                }}
              >
                {menu.title}
              </Typography>
              {activeMenu && (
                <Box
                  component={"img"}
                  src="/ActiveBar.svg"
                  sx={{
                    position: "absolute",
                    top: -1,
                    filter: "contrast(0.5)",
                    zIndex: -1,
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
}
