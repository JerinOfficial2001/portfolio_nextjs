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
  Grid,
  Radio,
  RadioGroup,
  inputLabelClasses,
} from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { login } from "@/controller/auth";
import { Autorenew } from "@mui/icons-material";

export default function Auth() {
  const router = useRouter();
  const [isProcessing, setisProcessing] = useState(false);
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
  });

  const submitHandler = async (data) => {
    setisProcessing(true);
    const requiredFields = ["email", "password"];
    const isFieldsFilled = requiredFields.every((key) => data[key] !== "");
    if (isFieldsFilled) {
      login(inputData).then((res) => {
        if (res) {
          setisProcessing(false);
        }
      });
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
    <>
      <Toaster position="top-center" />
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
          <Box
            component="img"
            sx={{ height: 200, width: 200 }}
            src="/LOGO.png"
          />
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xl: 40,
                  lg: 40,
                  md: 40,
                  sm: 20,
                  xs: 10,
                },
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              Login
            </Typography>
          </Stack>

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
            })}
            <Grid
              md={12}
              sm={12}
              xs={12}
              lg={12}
              xl={12}
              sx={{ alignItems: "center" }}
              item
            >
              <Typography sx={{ color: "white", fontFamily: "cursive" }}>
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    router.push("/auth/register");
                  }}
                  style={{
                    color: "skyblue",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </span>
              </Typography>
            </Grid>
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
                md: "10px",
                sm: "10px",
                xs: "8px",
              },
              fontWeight: "bold",
            }}
          >
            {isProcessing ? <Autorenew className="loadingBtn" /> : " Login"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
