import {
  Autorenew,
  CheckCircle,
  Close,
  ContentCopyOutlined,
  EditSharp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
  inputLabelClasses,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { UpdateUser } from "@/controller/auth";
import toast, { Toaster } from "react-hot-toast";
import { getDecryptedCookie, setEncryptedCookie } from "@/utils/EncryteCookies";

export default function ViewProfileModal({ open, handleClose }) {
  const cookie = getDecryptedCookie("userData");
  const userData = cookie ? JSON.parse(cookie) : false;
  const router = useRouter();
  const { id, homepage } = router.query;
  const [copied, setCopied] = useState(false);
  const [openModal, setOpen] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  const [isProcessing, setisProcessing] = useState(false);
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
    image: null,
    role: "USER",
    gender: "MALE",
    name: "",
    _id: "",
  });
  console.log(openModal, inputData.image);
  useEffect(() => {
    if (userData) {
      setinputData({
        password: userData.password,
        email: userData.email,
        image:
          userData.image && userData.image != "null" ? userData.image : null,
        role: userData.role,
        gender: userData.gender,
        name: userData.name,
        _id: userData._id,
      });
    }
  }, [open, openModal, cookie]);

  const submitHandler = async (data) => {
    setisProcessing(true);
    const requiredFields = ["name", "role", "email", "password", "gender"];
    const isFieldsFilled = requiredFields.every((key) => data[key] !== "");
    if (isFieldsFilled) {
      const formDatas = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        formDatas.append(key, value)
      );
      // console.log(formDatas);
      UpdateUser(formDatas, inputData, userData).then((res) => {
        if (res.status == "ok") {
          setisProcessing(false);
          setOpen(false);
          setEncryptedCookie("userData", JSON.stringify(res.data));
        } else {
          setisProcessing(false);
        }
      });
    } else {
      setisProcessing(false);
      toast.error("All fields are mandatory");
    }
  };
  const handleSetFormDatas = (name, value) => {
    setinputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    handleSetFormDatas(name, value);
  };
  const inputField = [
    {
      name: "image",
      label: "Choose",
      placeholder: "",
      onChange: (event) => {
        setinputData((prev) => ({ ...prev, image: event.target.files[0] }));
      },
      value: inputData.image,
      type: "image",
    },
    {
      name: "name",
      label: "Name",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.name ? inputData.name : "",
      type: "text",
    },
    {
      name: "role",
      label: "Role",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.role ? inputData.role : "USER",
      type: "radio",
      radios: [
        {
          label: "Admin",
          value: "ADMIN",
        },
        {
          label: "User",
          value: "USER",
        },
      ],
    },
    {
      name: "gender",
      label: "Gender",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.gender ? inputData.gender : "MALE",
      type: "radio",
      radios: [
        {
          label: "Male",
          value: "MALE",
        },
        {
          label: "Female",
          value: "FEMALE",
        },
      ],
    },
    {
      name: "email",
      label: "Email",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.email ? inputData.email : "",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.password ? inputData.password : "",
      type: "password",
    },
  ];
  return (
    <Modal
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
      }}
      open={open}
      onClose={handleClose}
    >
      <Stack
        sx={{
          background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
          boxShadow: "0px 0px 5px black",
          height: "100vh",
          width: 400,
          borderRadius: "20px 0 0 20px",
          alignItems: "center",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <Toaster position="top-center" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 2,
            marginTop: 2,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
              marginLeft: 1,
            }}
          >
            My Account
          </Typography>
          <IconButton sx={{ color: "whitesmoke" }} onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <Divider
          variant="middle"
          sx={{
            borderColor: "cornflowerblue",
            borderWidth: 2,
            width: "90%",
            borderRadius: 10,
          }}
        />

        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 1,
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
              padding: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              cursor: "pointer",
              boxShadow: "0px 0px 5px cornflowerblue",
              "&:hover": {
                boxShadow: "0px 0px 5px white",
              },
            }}
            onClick={() => {
              setOpen(!openModal);
            }}
          >
            {openModal ? (
              <Close sx={{ color: "red", fontSize: 15 }} />
            ) : (
              <EditSharp sx={{ color: "white", fontSize: 15 }} />
            )}
          </Box>
        </Box>

        {!openModal && (
          <Box
            component={"img"}
            style={{
              margin: 10,
              borderRadius: "50%",
              height: "200px",
              width: "200px",
            }}
            src={
              inputData.image && inputData.image != null
                ? inputData.image instanceof Blob ||
                  inputData.image instanceof File
                  ? URL.createObjectURL(inputData.image)
                  : inputData?.image?.url
                : inputData.gender == "MALE"
                ? "/male.png"
                : "/female.png"
            }
            alt="logo"
          />
        )}
        {!openModal && (
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
              position: "relative",
            }}
          >
            {userData?.name}
            <Chip
              sx={{
                color: "color",
                background: "cornflowerblue",
                height: 23,
                position: "absolute",
                marginLeft: 1,
                maxWidth: "unset",
              }}
              label={userData?.role}
            />
          </Typography>
        )}
        {!openModal && (
          <Typography
            sx={{
              fontWeight: "bold",
              color: "slategray",
            }}
          >
            {userData?.email}
          </Typography>
        )}
        {!openModal && (
          <CopyToClipboard
            style={{
              background: "lightgray",
              width: "90%",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
            text={`https://portfolio-nextjs-psi-wheat.vercel.app/${
              userData?._id ? userData?._id : id ? id : homepage
            }`}
            onCopy={() => handleCopy()}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  color: "#525252",
                  padding: 1.5,
                  fontWeight: "bold",
                  fontSize: 15,
                  flexWrap: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                component="span"
                align="left"
              >
                https://portfolio-nextjs-psi-wheat.vercel.app/
                {userData?._id ? userData?._id : id ? id : homepage}
              </Typography>
              <Box
                sx={{
                  height: "100%",
                  background: "black",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingX: 1,
                  borderRadius: "0 10px 10px 0",
                }}
              >
                {copied ? (
                  <CheckCircle
                    sx={{
                      color: "cornflowerblue",
                    }}
                  />
                ) : (
                  <ContentCopyOutlined sx={{ color: "white" }} />
                )}
              </Box>
            </Box>
          </CopyToClipboard>
        )}
        {openModal && (
          <Stack sx={{ padding: 2, gap: 2 }}>
            <Grid
              container
              sx={{
                overflow: "hidden",
                "&:hover": {
                  overflowY: "auto",
                },
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f5f5f5",
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#bdbdbd",
                  borderRadius: "4px",
                  "&:hover": {
                    background: "#a5a5a5",
                  },
                },
                width: "100%",
                alignItems: "center",
              }}
              rowGap={2}
            >
              {inputField.map((elem, index) => {
                if (elem.type == "image") {
                  return (
                    <Grid
                      key={index}
                      item
                      md={12}
                      sm={12}
                      xs={12}
                      lg={12}
                      xl={12}
                      sx={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                      columnGap={2}
                    >
                      <Box
                        sx={{
                          borderRadius: "50%",
                          border: "2px solid cornflowerblue",
                          height: "110px",
                          width: "150px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component={"img"}
                          src={
                            inputData.image && inputData.image != "null"
                              ? inputData.image instanceof Blob ||
                                inputData.image instanceof File
                                ? URL.createObjectURL(inputData.image)
                                : inputData?.image?.url
                              : require(inputData.gender == "MALE"
                                  ? "../assets/male.png"
                                  : "../assets/female.png")
                          }
                          alt="profile"
                          style={{
                            objectFit: "contain",
                            height: "100px",
                            width: "100px",
                            borderRadius: "50%",
                          }}
                        />
                      </Box>

                      <TextField
                        accept="image/*"
                        type="file"
                        variant="outlined"
                        sx={{
                          width: "100%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                          input: { color: "white" },
                        }}
                        InputLabelProps={{
                          sx: {
                            color: "#6b756b",
                            [`&.${inputLabelClasses.shrink}`]: {
                              display: "none",
                            },
                          },
                        }}
                        onChange={elem.onChange}
                        name={elem.name}
                      />
                    </Grid>
                  );
                } else if (elem.type == "radio") {
                  return (
                    <Grid item md={6} sm={6} xs={12} lg={6} xl={6} key={index}>
                      <FormControl sx={{ width: "100%", color: "#60605F" }}>
                        <FormLabel
                          sx={{ color: "#60605F" }}
                          id="demo-radio-buttons-group-label"
                        >
                          {elem.label}
                        </FormLabel>
                        <RadioGroup
                          onChange={elem.onChange}
                          value={elem.value}
                          sx={{ flexDirection: "row" }}
                          aria-labelledby="demo-radio-buttons-group-label"
                          name={elem.name}
                        >
                          {elem.radios.map((item, itemIndex) => (
                            <FormControlLabel
                              key={itemIndex}
                              value={item.value}
                              control={<Radio />}
                              label={item.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid
                      item
                      md={12}
                      sm={12}
                      xs={12}
                      lg={12}
                      xl={12}
                      sx={{ alignItems: "center" }}
                      key={index}
                    >
                      <TextField
                        type={elem.type}
                        variant="outlined"
                        sx={{
                          width: "100%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                          input: { color: "white" },
                        }}
                        label={elem.label}
                        InputLabelProps={{
                          sx: {
                            color: "#6b756b",
                            [`&.${inputLabelClasses.shrink}`]: {
                              display: "none",
                            },
                          },
                        }}
                        value={elem.value}
                        onChange={elem.onChange}
                        name={elem.name}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
            <Button
              onClick={() => {
                submitHandler(inputData);
              }}
              variant="outlined"
              sx={{
                color: "white",
                borderRadius: 2,
                textTransform: "none",
                height: {
                  xl: "40px",
                  lg: "40px",
                  md: "40px",
                  sm: "40px",
                  xs: "30px",
                },
                fontSize: {
                  xl: "15px",
                  lg: "15px",
                  md: "15px",
                  sm: "15px",
                  xs: "15px",
                },
                fontWeight: "bold",
              }}
            >
              {isProcessing ? (
                <Autorenew className="loadingBtn" />
              ) : (
                "Update Account"
              )}
            </Button>
          </Stack>
        )}
      </Stack>
    </Modal>
  );
}
