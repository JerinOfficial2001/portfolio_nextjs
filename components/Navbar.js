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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ResNav from "./ResNav";
import { MyContextState } from "@/pages/_app";
import { Logout } from "@mui/icons-material";
import Cookies from "js-cookie";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import AuthModal from "./Auth/AuthModal";
import ViewProfileModal from "./ViewProfileModal";

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
  const cookie = getDecryptedCookie("userData");
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
  const handleLogout = () => {
    Cookies.remove("userData");
    Cookies.remove("token");
    window.location.href = "/";
    handleClose();
  };
  const handleAuthModalClose = () => {
    setopenAuthModel(false);
  };
  const [openViewProfile, setopenViewProfile] = useState(false);
  const handleViewProfileClose = () => {
    setopenViewProfile(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        left: 0,
        height: 80,
        position: "relative",
        alignItems: "center",
        background: {
          lg: "transparent",
          sm: "black",
          xs: "black",
        },
      }}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <Button sx={{ textTransform: "none" }}>
          <Typography
            variant="h6"
            color="white"
            fontWeight="bold"
            fontFamily="cursive"
          >
            Jers-folio
          </Typography>
        </Button>
      </div>
      {menuBtn && !dashboard && (
        <ResNav
          setmenuBtn={setmenuBtn}
          setopenViewProfile={setopenViewProfile}
          setopenAuthModel={setopenAuthModel}
        />
      )}
      {!dashboard && (
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
            {menus.map((menu, id) => {
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
                      (location == "/" && menu.title == "Home")
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
                      fontFamily: "cursive",
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
      )}
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
            fontFamily: "cursive",
          }}
        >
          {userData ? "Feedback" : "Login"}
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
              padding: 1,
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
          <Divider
            variant="middle"
            sx={{
              borderColor: "cornflowerblue",
              borderWidth: 2,
              borderRadius: 10,
            }}
          />
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "medium",
            }}
            onClick={handleLogout}
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
              <Logout fontSize="medium" />
            </Box>
            Logout
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
      <AuthModal open={openAuthModel} handleClose={handleAuthModalClose} />
      <ViewProfileModal
        open={openViewProfile}
        handleClose={handleViewProfileClose}
      />
    </Box>
  );
}
