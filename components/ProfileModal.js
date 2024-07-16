import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  inputLabelClasses,
} from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { Autorenew, Close } from "@mui/icons-material";
import { CreateProfile, UpdateProfile } from "@/controller/profile";
import { getUserByID } from "@/controller/auth";

export default function ProfileModal({ open, handleClose, data, fetchData }) {
  const router = useRouter();
  const { homepage } = router.query;
  const id = homepage;
  const [isProcessing, setisProcessing] = useState(false);
  const [inputData, setinputData] = useState({
    qualification: "",
    about: "",
    image: null,
    role: "",
    name: "",
    userID: id,
    from: "",
  });
  const [gender, setgender] = useState("");
  const GetGender = async () => {
    const Gender = await getUserByID(id);
    setgender(Gender?.gender);
  };
  useEffect(() => {
    if (open) {
      setinputData({
        qualification: data ? data.qualification : "",
        about: data ? data.about : "",
        image: data ? data.image : null,
        role: data ? data.role : "",
        name: data ? data.name : "",
        userID: id,
        from: data ? data.from : "",
      });
      GetGender();
    }
  }, [open]);
  const submitHandler = async (DATA) => {
    const requiredFields = [
      "name",
      "role",
      "about",
      "qualification",
      "userID",
      "from",
    ];
    const isFieldsFilled = requiredFields.every((key) => DATA[key] !== "");
    if (isFieldsFilled) {
      setisProcessing(true);
      const formDatas = new FormData();
      Object.entries(DATA).forEach(([key, value]) =>
        formDatas.append(key, value)
      );
      if (data == null || data == undefined) {
        CreateProfile(formDatas).then((response) => {
          if (response) {
            if (response.status == "ok") {
              toast.success(response.message);
              handleClose();
              fetchData();
            } else {
              handleClose();
            }
          }
          setisProcessing(false);
        });
      } else {
        UpdateProfile(formDatas, data._id).then((response) => {
          if (response.status == "ok") {
            fetchData();
            toast.success(response.message);
            handleClose();
          } else {
            handleClose();
          }
          setisProcessing(false);
        });
      }
    } else {
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
      name: "role",
      label: "Role",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.role ? inputData.role : "",
      type: "text",
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
      name: "qualification",
      label: "Qualification",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.qualification ? inputData.qualification : "",
      type: "text",
    },
    {
      name: "from",
      label: "Place",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.from ? inputData.from : "",
      type: "text",
    },
    {
      name: "about",
      label: "About",
      placeholder: "",
      onChange: handleOnchange,
      value: inputData.about ? inputData.about : "",
      type: "text",
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
            xl: "50%",
            lg: "50%",
            md: "50%",
            sm: "90%",
            xs: "90%",
          },
          height: {
            xl: "90%",
            lg: "90%",
            md: "90%",
            sm: "100%",
            xs: "100%",
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
        <IconButton
          sx={{ position: "absolute", top: 15, right: 15, color: "whitesmoke" }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
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
                sm: 20,
                xs: 20,
              },
              fontWeight: "bold",
            }}
          >
            {data == null || data == undefined
              ? "Add Profile"
              : "Update Profile"}
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
                    <Box
                      component={"img"}
                      src={
                        inputData.image && inputData.image != "null"
                          ? inputData?.image instanceof Blob ||
                            inputData.image instanceof File
                            ? URL.createObjectURL(inputData.image)
                            : inputData?.image?.url
                          : gender == "MALE"
                          ? "/male.png"
                          : "/female.png"
                      }
                      alt="profile"
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
        <Box
          sx={{
            width: "100%",
            position: "relative",
            display: "contents",
          }}
        >
          <IconButton
            sx={{
              color: "white",
              background: "#323232",
              opacity: isProcessing ? 1 : 0,
              transition: ".3s",
              position: !isProcessing ? "absolute" : "static",
              top: 0,
            }}
          >
            <Autorenew className="loadingBtn" sx={{ color: "#fff" }} />
          </IconButton>
          <Button
            onClick={() => {
              submitHandler(inputData);
            }}
            variant="outlined"
            sx={{
              color: "white",
              background: "#323232",
              borderRadius: 2,
              "&:hover": {
                background: "white",
                color: "#68d06666",
              },
              textTransform: "none",
              paddingX: 3,
              opacity: isProcessing ? 0 : 1,
              transition: ".3s",
              position: isProcessing ? "absolute" : "static",
              top: 0,
            }}
          >
            {data == null || data == undefined ? "Add" : " Update"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
