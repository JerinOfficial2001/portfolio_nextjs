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
import {
  CreateProjects,
  GetAPK,
  UpdateProject,
  UploadAPK,
} from "@/controller/project";
import "animate.css";
import CircularProgressWithLabel from "../Projects/CircularProgressWithLabel";
import { queryClient } from "@/pages/_app";

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
    credentials: [],
    title: "",
    link: "",
    userID: id,
    isVisible: true,
    description: "",
    tools: [],
    file: null,
    deletedIds: [],
    apk_id: "",
    request: [],
    baseUrl: "",
  });

  const [tools, settools] = useState("");
  const [apk, setapk] = useState(null);
  const IsApplication = modalType == "Application";
  const IsWebsite = modalType == "Website";
  const IsBackend = modalType == "Backend";
  const fetchApk = () => {
    if (data._id) {
      GetAPK(id, data._id).then((data) => {
        if (data) {
          setapk(data);
          handleSetFormDatas("apk_id", data.fileId);
        }
      });
    }
  };
  useEffect(() => {
    if (open) {
      if (IsWebsite) {
        setinputData({
          image: data?.image ? data?.image : null,
          endpoint: data?.endpoint ? data?.endpoint : [],
          credentials: data?.credentials ? data?.credentials : [],
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
          apk_id: data?.apk_id ? data?.apk_id : "",
        });
        if (data) {
          fetchApk();
        }
      } else if (IsBackend) {
        setinputData({
          title: data?.title ? data?.title : "",
          image: data?.image ? data?.image : null,
          userID: id,
          isVisible: data?.isVisible ? data?.isVisible : true,
          baseUrl: data?.baseUrl ? data?.baseUrl : "",
          request: data?.request ? data?.request : [],
        });
      } else {
        handleClose();
      }
    }
  }, [data, IsApplication, IsWebsite, IsBackend, open]);
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
  const [requestData, setrequestData] = useState({
    Path: "",
    query: "",
    params: "",
    token: "",
  });
  const [credentialsData, setcredentialsData] = useState({
    Key: "",
    Value: "",
  });
  const handleAddEndpoints = (value) => {
    handleSetFormDatas("endpoint", [...inputData.endpoint, value]);
  };
  const handleAddCredentials = (value) => {
    handleSetFormDatas("credentials", [...inputData.credentials, value]);
  };
  const handleEndpointOnchange = (event) => {
    const { name, value } = event.target;
    setendPointsData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCredentialsOnchange = (event) => {
    const { name, value } = event.target;
    setcredentialsData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitEndpoints = () => {
    if (endPointsData.Path !== "" && endPointsData.Page !== "") {
      handleAddEndpoints(endPointsData);
      setendPointsData({ Path: "", Page: "" });
    }
  };
  const handleSubmitCredentials = () => {
    if (credentialsData.Key !== "" && credentialsData.Value !== "") {
      handleAddCredentials(credentialsData);
      setcredentialsData({ Key: "", Value: "" });
    }
  };
  // const handleUploadApk = () => {
  //   if (inputData.file) {
  //     setisProcessing(true);
  //     const formData = new FormData();
  //     formData.append("file", inputData.file);
  //     UploadAPK(id, data._id, formData).then((data) => {
  //       if (data && data?.status == "ok") {
  //         handleSetFormDatas("apk_id", data.fileId);
  //         handleSetFormDatas("file", null);
  //         fetchApk();
  //       }
  //       setisProcessing(false);
  //     });
  //   } else {
  //     toast.error("Pick a file to upload");
  //   }
  // };
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleUploadApk = () => {
    if (inputData.file) {
      setisProcessing(true);
      const formData = new FormData();
      formData.append("file", inputData.file);

      // Set up a state to track progress

      // Pass the progress callback to UploadAPK
      UploadAPK(id, data._id, formData, (progress) => {
        setUploadProgress(progress);
      }).then((data) => {
        if (data && data.status === "ok") {
          handleSetFormDatas("apk_id", data.fileId);
          handleSetFormDatas("file", null);
          fetchApk();
        }
        setisProcessing(false);
        setUploadProgress(0); // Reset progress after upload is complete
      });
    } else {
      toast.error("Pick a file to upload");
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
      name: "credentials",
      label: "Credentials",
      inputs: [
        {
          name: "Key",
          value: credentialsData.Key ? credentialsData.Key : "",
          onchange: handleCredentialsOnchange,
          size: "small",
        },
        {
          name: "Value",
          value: credentialsData.Value ? credentialsData.Value : "",
          onchange: handleCredentialsOnchange,
          size: "small",
        },
      ],
      placeholder: "",
      type: "endpoint",
      value: inputData.credentials,
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
      handleSubmit: handleUploadApk,
    },
  ];
  const handleKeyEnter = (event) => {
    const { name, value } = event.target;
    if (value !== "" && event.key == "Enter") {
      if (name == "Page" || name == "Path") {
        handleSubmitEndpoints();
      } else if (name == "Key" || name == "Value") {
        handleSubmitCredentials();
      } else if (name == "tools") {
        handleAddArrayData("tools", inputData, value, settools);
      }
    }
  };
  const submitHandler = async (DATA) => {
    if (endPointsData.Page !== "" || endPointsData.Path !== "") {
      toast.error("Kindly add typed endpoints");
      return;
    }
    if (credentialsData.Key !== "" || credentialsData.Value !== "") {
      toast.error("Kindly add typed credentials");
      return;
    }
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
      const credentialsJSON = JSON.stringify(DATA.credentials);
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
          apk_id: DATA.apk_id,
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
          credentials: credentialsJSON,
        };
      }
      Object.entries(INPUT_DATAS).forEach(([key, value]) =>
        formDatas.append(key, value)
      );

      if (data == null || data == undefined) {
        CreateProjects(formDatas).then((response) => {
          if (response?.status == "ok") {
            queryClient.invalidateQueries({ queryKey: ["projects"] });
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
            queryClient.invalidateQueries({ queryKey: ["projects"] });
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
        open={open || uploadProgress > 0 || isProcessing}
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
          <Toaster position="top-center" />

          <Box
            sx={{
              width: { lg: "550px", sm: "100%", xs: "100%" },
              height: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "100%",
                xs: "100%",
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
                    sm: 15,
                    xs: 15,
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
                      {data != null && data != undefined && (
                        <Stack
                          sx={{
                            width: "100%",
                            position: "relative",
                            justifyContent: "center",
                            position: "relative",
                          }}
                        >
                          <Typography
                            sx={{ color: "#808080", fontWeight: "bold" }}
                          >
                            {elem.label}
                          </Typography>
                          {apk && (
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: 2,
                                marginTop: 2,
                                transition: ".3s",
                                flexDirection: "column",
                              }}
                            >
                              <Box
                                sx={{
                                  background: "#323232",
                                  borderRadius: 2,
                                  height: "60px",
                                  width: "60%",
                                  display: "flex",
                                  alignItems: "center",
                                  paddingX: 5,
                                  gap: 1,
                                  position: "relative",
                                }}
                              >
                                <Box
                                  component={"img"}
                                  src="/AndroidIcon.jpg"
                                  sx={{ height: "80%", borderRadius: "100%" }}
                                />
                                <Typography sx={{ color: "#a9a9a9" }}>
                                  {apk.filename}
                                </Typography>
                                <IconButton
                                  onClick={() => {
                                    setapk(null);
                                  }}
                                  sx={{
                                    color: "#ba2121",
                                    position: "absolute",
                                    right: 5,
                                  }}
                                  size="small"
                                >
                                  <Close fontSize="small" />
                                </IconButton>
                              </Box>
                              <Typography
                                sx={{
                                  color: "gray",
                                  fontWeight: "bold",
                                  marginTop: "10px",
                                }}
                              >
                                <span style={{ color: "yellow" }}> *</span>{" "}
                                Don't forget to save after Uploading APK
                              </Typography>
                            </Box>
                          )}

                          {!apk && (
                            <Stack
                              sx={{
                                position: "relative",
                                justifyContent: "center",
                              }}
                            >
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
                                  transition: ".3s",
                                }}
                                onChange={elem.onChange}
                                name={elem.name}
                              />
                              {inputData.file && !apk && (
                                <Box
                                  sx={{
                                    position: "absolute",
                                    right: 10,
                                  }}
                                >
                                  {uploadProgress != 0 && (
                                    <CircularProgressWithLabel
                                      value={uploadProgress}
                                    />
                                  )}
                                  {uploadProgress == 0 &&
                                    (isProcessing ? (
                                      <Autorenew
                                        sx={{
                                          color: "#265482",
                                          transition: ".3s",
                                          marginBottom: 0.3,
                                        }}
                                        className="loadingBtn"
                                      />
                                    ) : (
                                      <Button
                                        onClick={() => {
                                          console.log("test");
                                          isProcessing
                                            ? undefined
                                            : handleUploadApk();
                                        }}
                                        sx={{
                                          border: "2px solid #265482",
                                          color: "#265482",
                                          borderRadius: 6,
                                          transition: ".3s",
                                          zIndex: 10,
                                        }}
                                        size="small"
                                      >
                                        Upload
                                      </Button>
                                    ))}
                                </Box>
                              )}
                            </Stack>
                          )}
                        </Stack>
                      )}
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
                        onClick={
                          elem.name == "credentials"
                            ? handleSubmitCredentials
                            : handleSubmitEndpoints
                        }
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
                                {edu.Page || edu.Key}
                              </Typography>
                              <Chip
                                size="small"
                                label={edu.Path || edu.Value}
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
                                  const newDatas = elem.value.filter(
                                    (i, index) => index !== eduIndex
                                  );
                                  if (elem.name == "credentials") {
                                    setcredentialsData(newData);
                                    handleSetFormDatas("credentials", newDatas);
                                  } else {
                                    setendPointsData(newData);
                                    handleSetFormDatas("endpoint", newDatas);
                                  }
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
                                  if (elem.name == "credentials") {
                                    handleSetFormDatas("credentials", newData);
                                  } else {
                                    handleSetFormDatas("endpoint", newData);
                                  }
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
                  opacity: isProcessing && !inputData.file ? 1 : 0,
                  transition: ".3s",
                  position:
                    !isProcessing && !inputData.file ? "absolute" : "static",
                  top: 0,
                }}
              >
                <Autorenew className="loadingBtn" sx={{ color: "#fff" }} />
              </IconButton>
              <Button
                disabled={inputData.file}
                onClick={() => {
                  isProcessing ? undefined : submitHandler(inputData);
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
                  opacity: isProcessing && !inputData.file ? 0 : 1,
                  transition: ".3s",
                  position:
                    isProcessing && !inputData.file ? "absolute" : "static",
                  top: 0,
                }}
              >
                {data == null || data == undefined ? "Add" : " Save"}
              </Button>
            </Box>
          </Box>
        </div>
      </Modal>
    </>
  );
}
