import IconButton from "@mui/material/IconButton";
import React, { useContext, useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import {
  Avatar,
  Badge,
  Divider,
  Menu,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import { Login, Logout, MoreVert } from "@mui/icons-material";
import Cookies from "js-cookie";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import AuthModal from "./Auth/AuthModal";
import ViewProfileModal from "./ViewProfileModal";
import { useGlobalContext } from "@/utils/globalContext";
import { IoHome } from "react-icons/io5";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Navbar({ dashboard }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [menuBtn, setmenuBtn] = useState(false);

  const router = useRouter();
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const cachedData = cookie ? JSON.parse(cookie) : false;
  const [userData, setuserData] = useState(null);
  const [openAuthModel, setopenAuthModel] = useState(false);
  useEffect(() => {
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);
  const { homepage, id } = router.query;
  const location = router.pathname;
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
  const dashboardMenus = [
    {
      id: 1,
      title: "Portfolio's",
      to: "#portfolio",
      path: "/#portfolio",
      icon: <HomeOutlinedIcon />,
    },
    {
      id: 2,
      title: "Applications",
      to: "#applications",
      path: "/#applications",
      icon: <InventoryOutlinedIcon />,
    },
    {
      id: 3,
      title: "Websites",
      to: "#websites",
      path: "/#websites",
      icon: <InventoryOutlinedIcon />,
    },
  ];
  const handleLogout = () => {
    Cookies.remove("Jers_folio_userData");
    Cookies.remove("token");
    window.location.href = "/";
    handleClose();
  };
  const handleLogin = () => {
    setopenAuthModel(true);
    handleClose();
  };
  const handleAuthModalClose = () => {
    setopenAuthModel(false);
  };
  const [openViewProfile, setopenViewProfile] = useState(false);
  const handleViewProfileClose = () => {
    setopenViewProfile(false);
  };
  const { windowPathName, isMd, isXl, isLg, isxs, issm } = useGlobalContext();
  const MenuData = dashboard ? dashboardMenus : menus;
  useEffect(() => {
    handleClose();
  }, [isMd, isXl, isLg, isxs, issm]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        left: 0,
        top: 0,
        height: 80,
        position: "relative",
        alignItems: "center",
        background: "#0f0f0f",
      }}
    >
      <Button
        onClick={() => {
          router.push("/");
        }}
        sx={{
          width: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <img src="/NameLogo.png" />
      </Button>

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
              xl: 8,
              lg: 8,
              md: 8,
              sm: 4,
              xs: 4,
            },
            alignItems: "center",
          }}
        >
          {MenuData.map((menu, id) => {
            return (
              <div
                key={id}
                onClick={() => {
                  if (location !== menu.path) {
                    router.push(menu.to);
                  }
                }}
              >
                <Typography
                  sx={{
                    ...(location.includes(menu.path) ||
                    (location == "/" && menu.title == "Home") ||
                    windowPathName == menu.to
                      ? {
                          color: "cornflowerblue",
                          border: "2px solid cornflowerblue",

                          "&:hover": { scale: "1.1", color: "white" },
                        }
                      : {
                          border: "none",
                          color: " #606060",
                          "&:hover": { scale: "1.2", color: "white" },
                        }),
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: ".3s",
                    // fontFamily: "cursive",
                    textTransform: "uppercase",
                    padding: 1,
                    borderRadius: 10,
                    paddingX: 2,
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
        {!userData && (
          <Button
            onClick={() => {
              router.push("/feedback");
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
              // fontFamily: "cursive",
            }}
          >
            Global Chat
          </Button>
        )}
        {dashboard && userData && (
          <IconButton
            onClick={() => {
              if (userData) {
                router.push("/" + userData._id);
              }
            }}
            variant="contained"
            sx={{
              color: "white",
              background: "#323232",
              "&:hover": {
                background: "#323232",
                color: "white",
                border: "2px solid lavender",
              },
              textTransform: "none",
              border: "2px solid cornflowerblue",
              // fontFamily: "cursive",
            }}
          >
            <IoHome />
          </IconButton>
        )}
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
            marginBottom: {
              xl: 0,
              lg: 0,
              md: 0,
              sm: 3,
              xs: 3,
            },
            border: "2px solid cornflowerblue",
            // fontFamily: "cursive",
          }}
        >
          {userData ? "Global Chat" : "Login"}
        </Button>
        {userData !== null && (
          <IconButton
            title={userData?.name}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt={userData?.name}
                src={
                  userData?.image && userData?.image !== "null"
                    ? userData?.image?.url
                    : userData.gender == "male" || userData.gender == "MALE"
                    ? "/male.png"
                    : "/female.png"
                }
                sx={{ objectFit: "cover", objectPosition: "top" }}
              />
            </StyledBadge>
          </IconButton>
        )}
        <Menu
          sx={{
            "& .MuiPaper-root": {
              background:
                "linear-gradient(to right, #1e1e1e, #1a1a1a, #141414)",
              color: "whitesmoke",
              boxShadow: "0 0 0 1px #4d59a9",
              borderRadius: 5,
              padding: { xs: 0, md: 1 },
              height: !userData ? "50px" : "auto",
            },
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {userData && (
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "medium",
                width: 250,
              }}
              onClick={() => {
                handleClose();
                setopenViewProfile(true);
                // router.push("/profilePage");
              }}
            >
              <Avatar
                sx={{ width: 50, height: 50, objectPosition: "top" }}
                alt={userData?.name}
                src={
                  userData?.image && userData?.image !== "null"
                    ? userData?.image?.url
                    : userData?.gender == "male" || userData?.gender == "MALE"
                    ? "/male.png"
                    : "/female.png"
                }
              />
              <Stack>
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {userData?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "slategray",
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  View Profile
                </Typography>
              </Stack>
            </MenuItem>
          )}
          {userData && (
            <Divider
              variant="middle"
              sx={{
                borderColor: "cornflowerblue",
                borderWidth: 2,
                borderRadius: 10,
              }}
            />
          )}
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "medium",
              p: { xs: 0, md: "auto" },
              px: { xs: 2, md: "auto" },
            }}
            onClick={userData ? handleLogout : handleLogin}
          >
            <Box
              sx={{
                width: 25,
                height: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {userData ? <Logout fontSize="medium" /> : <Login />}
            </Box>
            {userData ? "Logout" : "Login"}
          </MenuItem>
        </Menu>
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
        {userData !== null ? (
          <IconButton
            title={userData?.name}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt={userData?.name}
                src={
                  userData?.image && userData?.image !== "null"
                    ? userData?.image?.url
                    : userData.gender == "male" || userData.gender == "MALE"
                    ? "/male.png"
                    : "/female.png"
                }
                sx={{ objectFit: "cover", objectPosition: "top" }}
              />
            </StyledBadge>
          </IconButton>
        ) : (
          <IconButton size="big" onClick={handleClick}>
            <MoreVert sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
        )}
      </Box>
      <AuthModal open={openAuthModel} handleClose={handleAuthModalClose} />
      <ViewProfileModal
        open={openViewProfile}
        handleClose={handleViewProfileClose}
      />
    </Box>
  );
}
