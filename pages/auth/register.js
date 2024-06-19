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
import { register } from "@/controller/auth";
import { Autorenew } from "@mui/icons-material";

export default function Register() {
  const [isProcessing, setisProcessing] = useState(false);
  const router = useRouter();
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
    const requiredFields = ["name", "role", "email", "password", "gender"];
    const isFieldsFilled = requiredFields.every((key) => data[key] !== "");
    if (isFieldsFilled) {
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
            gap: 1,
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
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
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
              Create Account
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
          <Typography
            sx={{
              color: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontFamily: "cursive",
            }}
          >
            Already have an account?&nbsp;
            <span
              onClick={() => {
                router.push("/auth/login");
              }}
              style={{
                color: "skyblue",
                cursor: "pointer",
              }}
            >
              Login
            </span>
          </Typography>
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
            {isProcessing ? (
              <Autorenew className="loadingBtn" />
            ) : (
              "Create Account"
            )}
          </Button>
        </Box>
      </Container>
    </>
  );
}
