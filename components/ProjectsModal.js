import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Chip, Grid, IconButton, Modal, OutlinedInput } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import {
  Add,
  Close,
  Delete,
  Edit,
  GitHub,
  LinkedIn,
  Star,
  WhatsApp,
} from "@mui/icons-material";
import { getUserByID } from "@/controller/auth";
import { CreateProjects, UpdateProject } from "@/controller/project";
import { UpdateProfile } from "@/controller/profile";

export default function ProjectsModal({
  open,
  handleClose,
  data,
  id,
  fetchData,
}) {
  const router = useRouter();
  const [inputData, setinputData] = useState({
    image: [],
    endpoint: [],
    title: "",
    link: "",
    userID: id,
    isVisible: true,
  });
  useEffect(() => {
    if (open) {
      setinputData({
        image: data?.image ? data?.image : [],
        endpoint: data?.endpoint ? data?.endpoint : [],
        title: data?.title ? data?.title : "",
        link: data?.link ? data?.link : "",
        userID: id,
        isVisible: data?.isVisible ? data?.isVisible : true,
      });
    }
  }, [open]);

  const handleSetFormDatas = (name, value) => {
    setinputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    handleSetFormDatas(name, value);
  };
  const [endPointsData, setendPointsData] = useState({
    Path: "",
    Page: "",
  });
  const handleAddEndpoints = (value) => {
    handleSetFormDatas("endpoint", [...inputData.endpoint, value]);
  };
  const handleEndpointOnchange = (event) => {
    const { name, value } = event.target;
    setendPointsData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitEndpoints = () => {
    if (endPointsData.Title !== "" && endPointsData.Page !== "") {
      handleAddEndpoints(endPointsData);
      setendPointsData({ Path: "", Page: "" });
    }
  };
  const inputField = [
    {
      name: "title",
      label: "Project Name",
      onChange: handleOnchange,
      value: inputData.title,
      type: "text",
    },
    {
      name: "image",
      placeholder: "",
      onChange: (event) => {
        const files = event.target.files;
        const fileList = Array.from(files);
        setinputData((prev) => ({ ...prev, image: fileList }));
      },
      value: inputData.image,
      type: "file",
    },
    {
      name: "endpoint",
      label: "EndPoint",
      inputs: [
        {
          name: "Page",
          value: endPointsData.Page ? endPointsData.Page : "",
          onchange: handleEndpointOnchange,
          size: "small",
        },
        {
          name: "Path",
          value: endPointsData.Path ? endPointsData.Path : "",
          onchange: handleEndpointOnchange,
          size: "small",
        },
      ],
      placeholder: "",
      type: "endpoint",
    },
    {
      name: "link",
      label: "Link",
      onChange: handleOnchange,
      value: inputData.link,
      type: "text",
    },
  ];
  const handleKeyEnter = (event) => {
    const { name, value } = event.target;
    if (value !== "" && event.key == "Enter") {
      if (name == "Page" || name == "Path") {
        handleSubmitEndpoints();
      }
    }
  };
  const submitHandler = async (DATA) => {
    const requiredFields = ["endpoint", "link", "userID", "image", "title"];
    const isFieldsFilled = requiredFields.every((key) => {
      if (key == "image" || key == "endpoint") {
        return DATA[key].length !== 0;
      } else {
        return DATA[key] !== "" && DATA[key] !== undefined;
      }
    });
    if (isFieldsFilled) {
      const formDatas = new FormData();
      const endpointJSON = JSON.stringify(DATA.endpoint);
      inputData.image.forEach((image) => {
        formDatas.append("image", image);
      });
      const INPUT_DATAS = {
        endpoint: endpointJSON,
        link: DATA.link,
        userID: DATA.userID,
        title: DATA.title,
      };

      Object.entries(INPUT_DATAS).forEach(([key, value]) =>
        formDatas.append(key, value)
      );

      if (data == null || data == undefined) {
        CreateProjects(formDatas).then((response) => {
          if (response?.status == "ok") {
            toast.success(response.message);
            handleClose();
            fetchData();
          } else {
            handleClose();
          }
        });
      } else {
        UpdateProject(formDatas, data._id).then((response) => {
          if (response?.status == "ok") {
            fetchData();
            toast.success(response.message);
            handleClose();
          } else {
            handleClose();
          }
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
                ? "Add Project"
                : "Update Project"}
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
              if (elem.type == "multiInputs") {
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
              } else if (elem.type == "file") {
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
                    {inputData.image.length !== 0 ? (
                      <input
                        multiple
                        type="file"
                        style={{
                          width: "100%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: "10px",
                          padding: 10,
                          color: "gray",
                        }}
                        onChange={elem.onChange}
                        name={elem.name}
                      />
                    ) : (
                      <input
                        multiple
                        type="file"
                        style={{
                          width: "100%",
                          outline: "none",
                          background: "#252525",
                          borderRadius: "10px",
                          padding: 10,
                          color: "gray",
                        }}
                        onChange={elem.onChange}
                        name={elem.name}
                        value=""
                      />
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        overflow: "hidden",
                        "&:hover": {
                          overflowX: "auto",
                        },
                        "&::-webkit-scrollbar": {
                          height: "8px",
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
                      {inputData?.image?.map((img, index) => (
                        <img
                          key={index}
                          src={
                            typeof img == "string"
                              ? img
                              : URL.createObjectURL(img)
                          }
                          alt="img"
                          style={{
                            height: "60px",
                            width: "100px",
                            objectFit: "cover",
                            objectPosition: "top",
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
              } else if (elem.type == "endpoint") {
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
                      onClick={handleSubmitEndpoints}
                    >
                      <Add />
                    </IconButton>
                    <Typography sx={{ color: "gray", width: "100%" }}>
                      {elem.label}
                    </Typography>
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
                    {inputData.endpoint.map((edu, eduIndex) => (
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
                              {edu.Page}
                            </Typography>
                            <Chip
                              size="small"
                              label={edu.Path}
                              color="success"
                              sx={{ color: "white" }}
                            />
                          </Box>
                          <Box>
                            <IconButton
                              onClick={() => {
                                const newData = inputData.endpoint.find(
                                  (i, index) => index == eduIndex
                                );
                                setendPointsData(newData);
                                const newDatas = inputData.endpoint.filter(
                                  (i, index) => index !== eduIndex
                                );
                                handleSetFormDatas("endpoint", newDatas);
                              }}
                              sx={{ color: "slategray" }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                const newData = inputData.endpoint.filter(
                                  (i, index) => index !== eduIndex
                                );
                                handleSetFormDatas("endpoint", newData);
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
                      size="small"
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
              background: "#323232",
              borderRadius: 2,
              "&:hover": {
                background: "white",
                color: "#68d06666",
              },
              textTransform: "none",
              paddingX: 3,
            }}
          >
            {data == null || data == undefined ? "Add" : " Update"}
          </Button>
        </Box>
      </Modal>
    </>
  );
}
