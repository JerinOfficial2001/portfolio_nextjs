import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Modal,
  OutlinedInput,
  Radio,
  RadioGroup,
  inputLabelClasses,
} from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import {
  Add,
  Autorenew,
  Close,
  Delete,
  Edit,
  GitHub,
  LinkedIn,
  Star,
  WhatsApp,
} from "@mui/icons-material";
import { getUserByID } from "@/controller/auth";
import { CreateCredentials, UpdateCredentials } from "@/controller/credentials";

export default function CredentialsModal({
  open,
  handleClose,
  data,
  id,
  fetchData,
}) {
  const router = useRouter();
  const [isProcessing, setisProcessing] = useState(false);
  const [inputData, setinputData] = useState({
    image: null,
    education: [],
    skills: [],
    link: {
      Github: "",
      LinkedIn: "",
      Whatsapp: "",
    },
    userID: id,
    isDeleteImage: false,
  });
  const [gender, setgender] = useState("");
  const GetGender = async () => {
    const Gender = await getUserByID(id);
    setgender(Gender?.gender);
  };
  useEffect(() => {
    if (open) {
      setinputData({
        image: data ? data.image : null,
        education: data ? data.education : [],
        skills: data ? data.skills : [],
        link: {
          Github: data ? data.link.Github : "",
          LinkedIn: data ? data.link.LinkedIn : "",
          Whatsapp: data ? data.link.Whatsapp : "",
        },
        userID: id,
        isDeleteImage: false,
      });
      GetGender();
    }
  }, [open]);

  const handleSetFormDatas = (name, value) => {
    setinputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    handleSetFormDatas(name, value);
  };
  const [skills, setskills] = useState("");
  const [links, setlinks] = useState({
    Github: "",
    LinkedIn: "",
    Whatsapp: "",
  });
  const [educationData, seteducationData] = useState({
    Institution: "",
    Course: "",
    Year: "",
    Score: "",
  });
  const handleAddSkills = (value) => {
    handleSetFormDatas("skills", [...inputData.skills, value]);
    setskills("");
  };
  const handleAddEducations = (value) => {
    handleSetFormDatas("education", [...inputData.education, value]);
  };
  const handleLinkOnchange = (event) => {
    const { name, value } = event.target;
    handleSetFormDatas("link", { ...inputData.link, [name]: value });
  };
  const handleSkillsOnchange = (event) => {
    const { name, value } = event.target;
    setskills(value);
  };
  const handleEducationOnchange = (event) => {
    const { name, value } = event.target;
    seteducationData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitEducations = () => {
    if (
      educationData.Institution !== "" &&
      educationData.Course !== "" &&
      educationData.Year !== ""
    ) {
      handleAddEducations(educationData);
      seteducationData({ Institution: "", Course: "", Year: "" });
    }
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
      name: "education",
      label: "Education",
      inputs: [
        {
          name: "Institution",
          value: educationData.Institution ? educationData.Institution : "",
          onchange: handleEducationOnchange,
          size: "large",
        },
        {
          name: "Course",
          value: educationData.Course ? educationData.Course : "",
          onchange: handleEducationOnchange,
          size: "large",
        },
        {
          name: "Score",
          value: educationData.Score ? educationData.Score : "",
          onchange: handleEducationOnchange,
          size: "small",
        },
        {
          name: "Year",
          value: educationData.Year ? educationData.Year : "",
          onchange: handleEducationOnchange,
          size: "small",
        },
      ],
      placeholder: "",
      type: "education",
    },
    {
      name: "skills",
      label: "Skills",
      placeholder: "",
      onChange: handleSkillsOnchange,
      value: skills ? skills : "",
      type: "multiInputs",
    },
    {
      name: "link",
      label: "Links",
      inputs: [
        {
          name: "Github",
          value: inputData?.link?.Github ? inputData.link.Github : "",
          onchange: handleLinkOnchange,
          icon: <GitHub />,
        },
        {
          name: "LinkedIn",
          value: inputData?.link?.LinkedIn ? inputData.link.LinkedIn : "",
          onchange: handleLinkOnchange,
          icon: <LinkedIn />,
        },
        {
          name: "Whatsapp",
          value: inputData?.link?.Whatsapp ? inputData.link.Whatsapp : "",
          onchange: handleLinkOnchange,
          icon: <WhatsApp />,
        },
      ],
      type: "links",
    },
  ];
  const handleKeyEnter = (event) => {
    const { name, value } = event.target;
    if (value !== "" && event.key == "Enter") {
      if (name == "skills") {
        handleAddSkills(value);
        setskills("");
      } else if (name == " Institution" || name == "Course" || name == "Year") {
        handleSubmitEducations();
      }
    }
  };
  const submitHandler = async (DATA) => {
    const requiredFields = ["education", "skills", "link", "userID"];
    const isFieldsFilled = requiredFields.every((key) => {
      if (key == "userID") {
        return DATA[key] !== "";
      } else if (key == "image") {
        return DATA[key] !== null;
      } else if (key == "link") {
        return (
          DATA[key].Github !== "" &&
          DATA[key].Whatsapp !== "" &&
          DATA[key].LinkedIn !== ""
        );
      } else {
        return DATA[key].length !== 0;
      }
    });
    if (isFieldsFilled) {
      setisProcessing(true);

      const formDatas = new FormData();
      const educationJSON = JSON.stringify(DATA.education);
      const skillsJSON = JSON.stringify(DATA.skills);
      const linkJSON = JSON.stringify(DATA.link);
      const INPUT_DATAS = {
        image: DATA.image,
        education: educationJSON,
        skills: skillsJSON,
        link: linkJSON,
        userID: DATA.userID,
        isDeleteImage: DATA.isDeleteImage,
      };
      Object.entries(INPUT_DATAS).forEach(([key, value]) =>
        formDatas.append(key, value)
      );
      if (data == null || data == undefined) {
        CreateCredentials(formDatas).then((response) => {
          if (response?.status == "ok") {
            toast.success(response.message);
            handleClose();
            fetchData();
          } else {
            handleClose();
          }
          setisProcessing(false);
        });
      } else {
        UpdateCredentials(formDatas, data._id).then((response) => {
          if (response?.status == "ok") {
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
  return (
    <>
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
          <Toaster position="top-center" />
          <IconButton
            sx={{
              position: "absolute",
              top: 15,
              right: 15,
              color: "whitesmoke",
            }}
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
                  sm: 10,
                  xs: 10,
                },
                fontWeight: "bold",
              }}
            >
              {data == null || data == undefined
                ? "Add Credentials"
                : "Update Credentials"}
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
                        position: "relative",
                      }}
                    >
                      <img
                        src={
                          inputData.image && inputData.image != "null"
                            ? inputData.image instanceof Blob ||
                              inputData.image instanceof File
                              ? URL.createObjectURL(inputData.image)
                              : inputData?.image?.url
                            : "/Signature.png"
                        }
                        alt="profile"
                        style={{
                          objectFit: "contain",
                          height: "90%",
                          width: "90%",
                          borderRadius: "50%",
                        }}
                      />
                      {inputData.image && inputData.image != "null" && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            height: "100%",
                            width: "100%",
                            borderRadius: "50%",
                            bgcolor: "#000000a3",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            onClick={() => {
                              handleSetFormDatas("image", null);
                              handleSetFormDatas("isDeleteImage", true);
                            }}
                            sx={{
                              color: "red",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              fontFamily: "cursive",
                            }}
                          >
                            Remove
                          </Button>
                        </Box>
                      )}
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
                      onChange={elem.onChange}
                      name={elem.name}
                    />
                  </Grid>
                );
              } else if (elem.type == "multiInputs") {
                return (
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    lg={12}
                    xl={12}
                    sx={{ alignItems: "center", position: "relative" }}
                    key={index}
                  >
                    <OutlinedInput
                      onKeyDown={handleKeyEnter}
                      style={{ zIndex: 1 }}
                      endAdornment={
                        <IconButton
                          sx={{ color: "white" }}
                          onClick={() => {
                            if (skills !== "") {
                              handleAddSkills(skills);
                            }
                          }}
                        >
                          <Add />
                        </IconButton>
                      }
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
                      placeholder={elem.label}
                      value={elem.value}
                      onChange={elem.onChange}
                      name={elem.name}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        background: "#312f2f2e",
                        height: "100px",
                        borderRadius: "0 0 10px 10px",
                        padding: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
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
                      }}
                    >
                      {inputData.skills?.map((text, index) => (
                        <Chip
                          key={index}
                          label={text}
                          color="info"
                          sx={{ color: "white" }}
                          onDelete={() => {
                            const newData = inputData.skills.filter(
                              (i) => i !== text
                            );
                            handleSetFormDatas("skills", newData);
                          }}
                        />
                      ))}
                    </Box>
                  </Grid>
                );
              } else if (elem.type == "links") {
                return (
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    lg={12}
                    xl={12}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      background: "#312f2f2e",
                      borderRadius: "10px",
                      gap: 1,
                      padding: 2,
                    }}
                    key={index}
                  >
                    <Typography sx={{ color: "gray" }}>{elem.label}</Typography>
                    {elem.inputs.map((input, inputIndex) => (
                      <OutlinedInput
                        key={inputIndex}
                        size="small"
                        type="text"
                        variant="outlined"
                        placeholder={input.name}
                        startAdornment={input.icon}
                        sx={{
                          width: "100%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                          input: { color: "skyblue", paddingLeft: 1 },
                        }}
                        value={input.value}
                        onChange={input.onchange}
                        name={input.name}
                      />
                    ))}
                  </Grid>
                );
              } else if (elem.type == "education") {
                return (
                  <Grid
                    item
                    md={12}
                    sm={12}
                    xs={12}
                    lg={12}
                    xl={12}
                    sx={{
                      display: "flex",
                      position: "relative",
                      background: "#312f2f2e",
                      borderRadius: "10px",
                      gap: 1,
                      padding: 2,
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <IconButton
                      sx={{
                        color: "white",
                        position: "absolute",
                        right: 5,
                        top: 5,
                      }}
                      onClick={handleSubmitEducations}
                    >
                      <Add />
                    </IconButton>
                    <Typography sx={{ color: "gray" }}>{elem.label}</Typography>
                    {elem.inputs.map((input, inputIndex) => (
                      <OutlinedInput
                        onKeyDown={handleKeyEnter}
                        key={inputIndex}
                        size="small"
                        type="text"
                        variant="outlined"
                        placeholder={input.name}
                        startAdornment={<Star sx={{ color: "gray" }} />}
                        sx={{
                          width: input.size == "large" ? "100%" : "49%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: 3,
                          "& fieldset": { border: "none" },
                          input: { color: "skyblue", paddingLeft: 1 },
                        }}
                        value={input.value}
                        onChange={input.onchange}
                        name={input.name}
                      />
                    ))}
                    {inputData.education.map((edu, eduIndex) => (
                      <Stack
                        key={eduIndex}
                        sx={{
                          width: "100%",
                          padding: 2,
                          borderBottom: "2px solid slategray",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 3,
                              color: "#17759b",
                            }}
                          >
                            <Typography sx={{ fontWeight: "bold" }}>
                              {edu.Course}
                            </Typography>
                            <Chip
                              size="small"
                              label={edu.Score}
                              color="success"
                              sx={{ color: "white" }}
                            />
                          </Box>
                          <Typography sx={{ color: "gray" }}>
                            {edu.Year}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "white",
                              marginLeft: "5px",
                              marginTop: "5px",
                            }}
                          >
                            {edu.Institution}
                          </Typography>
                          <Box>
                            <IconButton
                              onClick={() => {
                                const newData = inputData.education.find(
                                  (i, index) => index == eduIndex
                                );
                                seteducationData(newData);
                                const newDatas = inputData.education.filter(
                                  (i, index) => index !== eduIndex
                                );
                                handleSetFormDatas("education", newDatas);
                              }}
                              sx={{ color: "slategray" }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                const newData = inputData.education.filter(
                                  (i, index) => index !== eduIndex
                                );
                                handleSetFormDatas("education", newData);
                              }}
                              sx={{ color: "red" }}
                            >
                              <Delete />
                            </IconButton>
                          </Box>
                        </Box>
                      </Stack>
                    ))}
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
    </>
  );
}
