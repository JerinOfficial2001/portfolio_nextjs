import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Chip, Grid, IconButton, Modal, OutlinedInput } from "@mui/material";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import {
  Add,
  Autorenew,
  CancelOutlined,
  Close,
  Delete,
  Edit,
  Star,
} from "@mui/icons-material";
import { CreateProjects, UpdateProject } from "@/controller/project";
import "animate.css";

export default function ProjectModal({
  open,
  handleClose,
  data,
  id,
  fetchData,
  modalType,
}) {
  const [isProcessing, setisProcessing] = useState(false);
  const [inputData, setinputData] = useState({
    image: null,
    images: [],
    endpoint: [],
    title: "",
    link: "",
    userID: id,
    isVisible: true,
    description: "",
    tools: [],
    file: null,
    deletedIds: [],
  });

  const [tools, settools] = useState("");
  const IsApplication = modalType == "Application";
  const IsWebsite = modalType == "Website";
  useEffect(() => {
    if (open) {
      if (IsWebsite) {
        setinputData({
          image: data?.image ? data?.image : null,
          endpoint: data?.endpoint ? data?.endpoint : [],
          title: data?.title ? data?.title : "",
          link: data?.link ? data?.link : "",
          userID: id,
          isVisible: data?.isVisible ? data?.isVisible : true,
          deletedIds: [],
        });
      } else if (IsApplication) {
        setinputData({
          image: data?.image ? data?.image : null,
          images: data?.images ? data?.images : [],
          title: data?.title ? data?.title : "",
          userID: id,
          tools: data?.tools ? data?.tools : [],
          file: data?.file ? data?.file : null,
          description: data?.description ? data?.description : "",
          isVisible: data?.isVisible ? data?.isVisible : true,
          deletedIds: [],
        });
      }
    }
  }, [data, IsApplication, IsWebsite, open]);
  const handleSetFormDatas = (name, value) => {
    setinputData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddArrayData = (name, prevState, value, valueState) => {
    setinputData((prev) => ({ ...prev, [name]: [...prevState[name], value] }));
    valueState("");
  };
  const handleDeleteArrayData = (name, prevState, value) => {
    setinputData((prev) => ({
      ...prev,
      [name]: [...prevState[name].filter((i) => i != value)],
    }));
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
  const WebsiteInputs = [
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
        const files = event.target.files[0];
        handleSetFormDatas("image", files);
      },
      value: inputData.image,
      type: "image",
      isArray: false,
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
      value: inputData.endpoint,
    },
    {
      name: "link",
      label: "Link",
      onChange: handleOnchange,
      value: inputData.link,
      type: "text",
    },
  ];
  const ApplicationInputs = [
    {
      name: "image",
      label: "App Icon",
      placeholder: "",
      onChange: (event) => {
        const files = event.target.files[0];
        handleSetFormDatas("image", files);
      },
      value: inputData.image,
      type: "image",
    },
    {
      name: "title",
      label: "Application Name",
      onChange: handleOnchange,
      value: inputData.title,
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      onChange: handleOnchange,
      value: inputData.description,
      type: "text",
    },
    {
      name: "images",
      label: "Screenshots",
      placeholder: "",
      onChange: (event) => {
        const files = event.target.files;
        const fileList = Array.from(files);
        setinputData((prev) => ({
          ...prev,
          images: [...inputData?.images, ...fileList],
        }));
      },
      value: inputData.images,
      type: "images",
      isArray: true,
      height: "90px",
    },
    {
      name: "tools",
      label: "Tools",
      onChange: (e) => settools(e.target.value),
      value: tools,
      type: "multiInputs",
      addHandler: () => handleAddArrayData("tools", inputData, tools, settools),
      addedDatas: inputData.tools,
      handleDelete: (value) => handleDeleteArrayData("tools", inputData, value),
    },
    {
      name: "file",
      label: "Upload APK file",
      placeholder: "",
      onChange: (event) => {
        const files = event.target.files[0];
        handleSetFormDatas("file", files);
      },
      value: inputData.file,
      type: "upload",
    },
  ];
  const handleKeyEnter = (event) => {
    const { name, value } = event.target;
    if (value !== "" && event.key == "Enter") {
      if (name == "Page" || name == "Path") {
        handleSubmitEndpoints();
      } else if (name == "tools") {
        handleAddArrayData("tools", inputData, value, settools);
      }
    }
  };
  const submitHandler = async (DATA) => {
    const requiredFields = IsApplication
      ? ["description", "file", "image", "title"]
      : ["endpoint", "link", "userID", "image", "title"];
    const isFieldsFilled = requiredFields.every((key) => {
      if (key == "images" || key == "endpoint") {
        return DATA[key].length !== 0;
      } else {
        return DATA[key] !== "" && DATA[key] !== undefined;
      }
    });
    if (isFieldsFilled && modalType) {
      setisProcessing(true);
      const formDatas = new FormData();
      const endpointJSON = JSON.stringify(DATA.endpoint);
      const toolsJSON = JSON.stringify(DATA.tools);
      const deletedIdsJSON = JSON.stringify(DATA.deletedIds);
      if (IsApplication) {
        // if (DATA?.images instanceof Blob || DATA?.images instanceof File) {
        DATA?.images?.forEach((image) => {
          formDatas.append("images", image);
        });
        // } else {
        //   const imagesJSON = JSON.stringify(DATA.images);
        //   formDatas.append("images", imagesJSON);
        // }
        // DATA?.tools?.forEach((image) => {
        //   formDatas.append("tools", image);
        // });
      }
      let INPUT_DATAS;
      if (IsApplication) {
        INPUT_DATAS = {
          userID: DATA.userID,
          title: DATA.title,
          image: DATA.image,
          isVisible: DATA.isVisible,
          category: modalType,
          description: DATA.description,
          tools: toolsJSON,
          deletedIds: deletedIdsJSON,
        };
      } else if (IsWebsite) {
        INPUT_DATAS = {
          endpoint: endpointJSON,
          link: DATA.link,
          userID: DATA.userID,
          title: DATA.title,
          image: DATA.image,
          isVisible: DATA.isVisible,
          category: modalType,
          deletedIds: deletedIdsJSON,
        };
      }
      console.log(INPUT_DATAS, modalType);
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
          setisProcessing(false);
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
          setisProcessing(false);
        });
      }
    } else {
      toast.error("All fields are mandatory");
    }
  };
  const inputField = IsApplication ? ApplicationInputs : WebsiteInputs;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: IsApplication ? "flex-end" : "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
          className={`animate__animated animate__faster ${
            IsApplication ? "animate__slideInRight" : "animate__slideInLeft"
          }`}
        >
          <Box
            sx={{
              width: "550px",
              height: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "70%",
                xs: "60%",
              },
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              borderRadius: IsApplication
                ? "30px 0px 0px 30px"
                : "0 30px 30px 0px",
              padding: {
                xl: 5,
                lg: 5,
                md: 5,
                sm: 5,
                xs: 2,
              },
              position: "relative",
              background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
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
                    xl: 25,
                    lg: 25,
                    md: 25,
                    sm: 10,
                    xs: 10,
                  },
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  textTransform: "uppercase",
                }}
              >
                {data == null || data == undefined
                  ? `Add ${modalType}`
                  : `Update ${modalType}`}
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
                  const ImageSrc = elem.value
                    ? elem.value instanceof Blob || elem.value instanceof File
                      ? URL.createObjectURL(elem.value)
                      : elem.value.url
                    : IsApplication
                    ? "/AndroidIcon.png"
                    : IsWebsite
                    ? "/websiteimg.png"
                    : "/LOGO.png";
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
                          borderRadius: IsApplication ? "50%" : 5,
                          border: "2px solid cornflowerblue",
                          height: "110px",
                          width: IsApplication ? "150px" : 300,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          component={"img"}
                          src={ImageSrc}
                          alt="logo"
                          style={{
                            objectFit: "contain",
                            height: "90%",
                            width: "90%",
                            borderRadius: IsApplication ? "50%" : 5,
                          }}
                        />
                      </Box>
                      <Stack sx={{ width: "100%" }}>
                        <Typography
                          sx={{ color: "#808080", fontWeight: "bold" }}
                        >
                          {elem.label}
                        </Typography>
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
                      </Stack>
                    </Grid>
                  );
                } else if (elem.type == "upload") {
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
                      <Stack sx={{ width: "100%" }}>
                        <Typography
                          sx={{ color: "#808080", fontWeight: "bold" }}
                        >
                          {elem.label}
                        </Typography>
                        <TextField
                          accept=".apk"
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
                      </Stack>
                    </Grid>
                  );
                } else if (elem.type == "images") {
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
                      <Typography sx={{ color: "#808080", fontWeight: "bold" }}>
                        {elem.label}
                      </Typography>
                      {elem?.value?.length !== 0 ? (
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
                          display: "-webkit-inline-box",
                          gap: 1,
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
                        {elem.isArray &&
                          elem.value?.map((img, imgIndex) => {
                            const imgSrc =
                              img instanceof Blob || img instanceof File
                                ? URL.createObjectURL(img)
                                : img.url;
                            return (
                              <Box
                                sx={{
                                  height: elem.height ? elem.height : "60px",
                                  position: "relative",
                                  width: elem.height ? "40px" : "100px",
                                }}
                                key={imgIndex}
                              >
                                <Box
                                  sx={{
                                    "&:hover": {
                                      background: "rgba(0, 0, 0, 0.74)",
                                    },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    cursor: "pointer",
                                    transistion: "0.3s",
                                  }}
                                >
                                  <IconButton
                                    onClick={() => {
                                      const imgArr = elem.value?.filter(
                                        (i, imgindex) => imgIndex !== imgindex
                                      );

                                      handleSetFormDatas(elem.name, imgArr);
                                      handleSetFormDatas("deletedIds", [
                                        ...inputData.deletedIds,
                                        elem.value[imgIndex].public_id,
                                      ]);
                                    }}
                                    sx={{
                                      color: "white",
                                      border: "1 px solid white",
                                    }}
                                  >
                                    <CancelOutlined />
                                  </IconButton>
                                </Box>
                                <img
                                  key={index}
                                  src={imgSrc}
                                  alt="img"
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "top",
                                  }}
                                />
                              </Box>
                            );
                          })}
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
                      <Typography sx={{ color: "gray" }}>
                        {elem.label}
                      </Typography>
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
                      {elem?.value?.map((edu, eduIndex) => (
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
                                  const newData = elem.value.find(
                                    (i, index) => index == eduIndex
                                  );
                                  setendPointsData(newData);
                                  const newDatas = elem.value.filter(
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
                                  const newData = elem.value.filter(
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
                        size="small"
                        style={{
                          zIndex: 1,
                          marginBottom:
                            elem?.addedDatas?.length > 0 ? "90px" : 0,
                        }}
                        endAdornment={
                          <IconButton
                            sx={{ color: "white" }}
                            onClick={elem.addHandler}
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
                      {elem?.addedDatas?.length > 0 && (
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
                            position: "absolute",
                            top: 30,
                          }}
                        >
                          {elem.addedDatas?.map((text, index) => (
                            <Chip
                              key={index}
                              label={text}
                              color="info"
                              sx={{ color: "white" }}
                              onDelete={() => {
                                elem.handleDelete(text);
                              }}
                            />
                          ))}
                        </Box>
                      )}
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
        </div>
      </Modal>
    </>
  );
}
