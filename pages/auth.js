import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  inputLabelClasses,
} from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import Admin from "./admin";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function Auth() {
  const router = useRouter();
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
    image: "",
    role: "",
    gender: "",
    name: "",
  });
  const { password, email } = inputData;

  const submitHandler = async () => {
    if (password === "Jerin@2001" && email === "jerin_25_01") {
      toast.success("Logged in Successfully");
      router.push("/admin");
      setinputData({
        password: "",
        email: "",
      });
    }
  };
  const handleSetFormDatas = (name, value) => {
    setinputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    handleSetFormDatas(name, value);
    console.log(name, value);
  };
  const inputField = [
    {
      name: "image",
      label: "Choose",
      placeholder: "",
      onChange: handleOnchange,
      value: "",
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
  ];
  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "50%",
              lg: "50%",
              md: "50%",
              sm: "80%",
              xs: "90%",
            },
            height: {
              xl: "90%",
              lg: "90%",
              md: "90%",
              sm: "70%",
              xs: "60%",
            },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            borderRadius: 10,
            padding: {
              xl: 5,
              lg: 5,
              md: 5,
              sm: 5,
              xs: 2,
            },
            position: "relative",
            boxShadow: "0px 0px 5px black",
          }}
        >
          <Stack
            direction="row"
            sx={{
              height: 100,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              position: "absolute",
              top: 0,
            }}
          >
            <Image
              placeholder="empty"
              src={require("../assets/star-2.png")}
              style={{ height: "47%", width: "50px" }}
            />

            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xl: 70,
                  lg: 70,
                  md: 70,
                  sm: 30,
                  xs: 20,
                },
                fontWeight: "bold",
              }}
            >
              Login
            </Typography>

            <Image
              placeholder="empty"
              src={require("../assets/star-2.png")}
              style={{ height: "47%", width: "50px" }}
            />
          </Stack>
          <Stack
            sx={{
              overflow: "hidden",
              "&:hover": {
                overflowY: "auto", // Show overflow when hovering over the side menu
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
              gap: 2,
            }}
          >
            {inputField.map((elem, index) => {
              if (elem.type == "radio") {
                return (
                  <FormControl
                    sx={{ width: "100%", color: "#60605F" }}
                    key={index}
                  >
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
                );
              } else {
                return (
                  <TextField
                    key={index}
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
                  />
                );
              }
            })}
            <Button
              onClick={() => {
                submitHandler();
              }}
              variant="outlined"
              sx={{
                color: "white",
                background: "#323232",
                borderRadius: 2,
                "&:hover": {
                  background: "white",
                  color: "#323232",
                },
                textTransform: "none",
                width: "20%",
                height: {
                  xl: "30px",
                  lg: "30px",
                  md: "30px",
                  sm: "30px",
                  xs: "20px",
                },
                fontSize: {
                  xl: "10px",
                  lg: "10px",
                  md: "10px",
                  sm: "10px",
                  xs: "8px",
                },
                position: "absolute",
                bottom: 20,
              }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
