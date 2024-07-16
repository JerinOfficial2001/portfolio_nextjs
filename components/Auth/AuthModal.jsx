import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IconButton, Grid, inputLabelClasses, Modal } from "@mui/material";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { Autorenew, Close } from "@mui/icons-material";
import { login, register } from "@/controller/auth";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";

export default function AuthModal({ open, handleClose }) {
  const router = useRouter();
  const [isProcessing, setisProcessing] = useState(false);
  const [IsSignUP, setIsSignUP] = useState(false);
  const [swipeInputs, setswipeInputs] = useState(false);
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
    image: null,
    role: "USER",
    gender: "MALE",
    name: "",
  });

  const submitHandler = async (data) => {
    setisProcessing(true);
    const requiredFields = IsSignUP
      ? ["name", "role", "email", "password", "gender"]
      : ["email", "password"];
    const isFieldsFilled = requiredFields.every((key) => data[key] !== "");
    if (isFieldsFilled) {
      if (IsSignUP) {
        const formDatas = new FormData();
        Object.entries(data).forEach(([key, value]) =>
          formDatas.append(key, value)
        );
        // console.log(formDatas);
        register(formDatas).then((res) => {
          if (res) {
            setisProcessing(false);
          }
        });
      } else {
        login(inputData).then((res) => {
          if (res) {
            setisProcessing(false);
          }
        });
      }
    } else {
      toast.error("All fields are mandatory");
      setisProcessing(false);
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
      open={open}
      onClose={handleClose}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: {
            xl: "70%",
            lg: "70%",
            md: "70%",
            sm: "100%",
            xs: "100%",
          },
          height: {
            xl: "80%",
            lg: "80%",
            md: "80%",
            sm: "70%",
            xs: "70%",
          },
          display: "flex",
          justifyContent: "center",
          flexDirection: IsSignUP ? "row-reverse" : "flex",
          alignItems: "center",
          gap: 1,
          background: "#000000e0",
          borderRadius: 10,
          position: "relative",
          boxShadow: "0px 0px 5px #438ad0",
          transition: "linear .3s",
        }}
      >
        <Toaster />

        <IconButton
          sx={{ position: "absolute", top: 15, right: 15, color: "whitesmoke" }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Stack
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(inputData);
          }}
          className={!IsSignUP ? "lefttoright" : "righttoleft"}
          direction="column"
          sx={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            padding: {
              xl: 5,
              lg: 5,
              md: 5,
              sm: 5,
              xs: 2,
            },
            transition: "linear .3s",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {
                xl: 30,
                lg: 30,
                md: 30,
                sm: 10,
                xs: 10,
              },
              fontWeight: "bold",
              fontFamily: "cursive",
            }}
          >
            {IsSignUP ? "Create Account" : "Sign In"}
          </Typography>{" "}
          {IsSignUP && !swipeInputs ? (
            <Grid
              container
              sx={{
                overflowY: "auto",
                height: { lg: "auto", xs: "330px" },
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
                        <Image
                          src={
                            inputData.image !== null
                              ? URL.createObjectURL(inputData.image)
                              : require(inputData.gender == "MALE"
                                  ? "../../assets/male.png"
                                  : "../../assets/female.png")
                          }
                          alt="profile"
                          width={100}
                          height={100}
                          style={{
                            objectFit: "cover",
                            height: "90%",
                            width: "90%",
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
                              control={<Radio sx={{ color: "#60605F" }} />}
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
          ) : (
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
                if (elem.name == "email" || elem.name == "password") {
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
          )}
          <Button
            type="submit"
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
                md: "10px",
                sm: "10px",
                xs: "8px",
              },
              fontWeight: "bold",
            }}
          >
            {isProcessing ? (
              <Autorenew className="loadingBtn" />
            ) : IsSignUP ? (
              "CREATE ACCOUNT"
            ) : (
              "SIGN IN"
            )}
          </Button>
        </Stack>
        <Stack
          direction="column"
          sx={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            background: "#0d0d0f",
            height: "100%",
            borderRadius: IsSignUP ? "40px 0 0 40px" : "0 40px 40px 0",
            transition: "linear .3s",
            gap: 2,
          }}
          className={IsSignUP ? "lefttoright" : "righttoleft"}
        >
          <Image
            className="userImg"
            src={require(!inputData?.gender ||
              inputData?.gender == "male" ||
              inputData?.gender == "MALE"
              ? "../../assets/male.png"
              : "../../assets/female.png")}
            alt="NoProfile"
            style={{
              height: "30%",
              width: "35%",
              borderRadius: "0px 0px 40px 0px",
            }}
          />
          <Button
            onClick={() => {
              setTimeout(() => {
                setswipeInputs(IsSignUP);
              }, 1300);
              setIsSignUP(!IsSignUP);
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
                md: "10px",
                sm: "10px",
                xs: "8px",
              },
              fontWeight: "bold",
            }}
          >
            {IsSignUP ? "SIGN IN" : "SIGN UP"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
