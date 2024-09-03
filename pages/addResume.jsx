import Input from "@/components/Input";
import ResumeLayout from "@/components/resume/ResumeLayout";
import SkillsContainer from "@/components/resume/SkillsContainer";
import {
  Add,
  Delete,
  Edit,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddResume() {
  const resumeData = {
    name: "John",
    role: "Frondend Developer",
    mail: "abc@gmail.com",
    portfolio_link: "http://example.com",
    linkedIn: "johnLinkedInAcc",
    phone: "9876732846",
    git: "Johnny",
    state: "Tamilnadu",
    district: "Coimbatore",
    country: "India",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ad iure accusamus accusantium veritatis, ab est aut excepturi facilis sunt ipsam et nulla eos tempora possimus quae eum aliquam",
    education: [
      {
        from: "2019",
        to: "2023",
        institution: "abc college of Technology",
        department: "Degree-Department",
        percentage: "8.8",
      },
      {
        from: "2018",
        to: "2019",
        institution: "abc matric higher secondary school",
        department: "HSC",
        percentage: "80",
      },
      {
        from: "2016",
        to: "2017",
        institution: "abc matric higher secondary school",
        department: "SSLC",
        percentage: "85",
      },
    ],
    skills: {
      technical: ["Mern stack", "NextJs"],
      soft: ["skill1"],
      language: ["English", "Tamil", "Hindi"],
    },
    experience: [],
  };
  const scrollRef = useRef(null);
  const [inputDatas, setinputDatas] = useState({
    name: "",
    role: "",
    mail: "",
    portfolio_link: "",
    linkedIn: "",
    phone: "",
    git: "",
    state: "",
    district: "",
    country: "",
    about: "",
    education: [],
    skills: [],
    experience: [],
  });
  const [visible, setvisible] = useState(false);

  const handleFormData = (key, value) => {
    setinputDatas((prev) => ({ ...prev, [key]: value }));
  };
  const handleVisibility = () => {
    setvisible(!visible);
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    handleFormData(name, value);
  };

  const [education, seteducation] = useState({
    from: "",
    to: "",
    institution: "",
    department: "",
    percentage: "",
  });
  const handleEducationData = (key, value) => {
    seteducation((prev) => ({ ...prev, [key]: value }));
  };
  const handleEducationOnchange = (e) => {
    const { name, value } = e.target;
    handleEducationData(name, value);
  };
  const handleSubmitEducations = () => {
    if (
      education.institution !== "" &&
      education.department !== "" &&
      education.from !== "" &&
      education.to !== "" &&
      education.percentage !== ""
    ) {
      handleFormData("education", [...inputDatas.education, education]);
      seteducation({
        from: "",
        to: "",
        institution: "",
        department: "",
        percentage: "",
      });
    } else {
      toast.error("Missing mandatory field");
    }
  };
  const inputArray = [
    {
      name: "name",
      label: "Name",
      placeholder: "Name",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.name,
      width: "2",
    },
    {
      name: "role",
      label: "Role",
      placeholder: "Role",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.role,
      width: "2",
    },
    {
      name: "mail",
      label: "Email",
      placeholder: "Email",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.mail,
      width: "2",
    },
    {
      name: "phone",
      label: "Mobile Number",
      placeholder: "Mobile Number",
      type: "number",
      onChange: handleOnchange,
      value: inputDatas.phone,
      width: "2",
    },
    {
      name: "linkedIn",
      label: "LinkedIn",
      placeholder: "LinkedIn",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.linkedIn,
      width: "2",
    },
    {
      name: "git",
      label: "GitHub",
      placeholder: "GitHub",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.git,
      width: "2",
    },
    {
      name: "district",
      label: "District",
      placeholder: "District",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.district,
      width: "3",
    },
    {
      name: "state",
      label: "State",
      placeholder: "State",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.state,
      width: "3",
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Country",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.country,
      width: "3",
    },
    {
      name: "about",
      label: "Career objective",
      placeholder: "type here...",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.about,
      width: "1",
      mode: "big",
    },
    {
      name: "education",
      label: "Education",
      placeholder: "Education",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.education,
      width: "1",
      mode: "expandable",
      subInput: [
        {
          name: "institution",
          label: "Institution or School",
          placeholder: "type you institution or school name",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.institution,
          width: "1",
        },
        {
          name: "department",
          label: "Department or class",
          placeholder: "eg : BE / HSC / SSLC",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.department,
          width: "2",
        },
        {
          name: "percentage",
          label: "Percentage or CGPA",
          placeholder: "eg : 80 or 8.8",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.percentage,
          width: "2",
        },
        {
          name: "from",
          label: "From",
          placeholder: "From",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.from,
          width: "2",
        },
        {
          name: "to",
          label: "To",
          placeholder: "To",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.to,
          width: "2",
        },
      ],
      submitHandler: handleSubmitEducations,
    },
    {
      name: "skills",
      label: "Skills",
      placeholder: "Skills",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.skills,
      width: "1",
      mode: "expandable",
      subInput: [
        {
          name: "institution",
          label: "Institution or School",
          placeholder: "type you institution or school name",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.institution,
          width: "1",
        },
        {
          name: "department",
          label: "Department or class",
          placeholder: "eg : BE / HSC / SSLC",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.department,
          width: "2",
        },
        {
          name: "percentage",
          label: "Percentage or CGPA",
          placeholder: "eg : 80 or 8.8",
          type: "text",
          onChange: handleEducationOnchange,
          value: education.percentage,
          width: "2",
        },
        {
          name: "from",
          label: "From",
          placeholder: "From",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.from,
          width: "2",
        },
        {
          name: "to",
          label: "To",
          placeholder: "To",
          type: "date",
          onChange: handleEducationOnchange,
          value: education.to,
          width: "2",
        },
      ],
      submitHandler: handleSubmitEducations,
    },
  ];

  const [openCollapse, setopenCollapse] = useState(
    inputArray.map(() => ({ isOpen: false, isAdd: false }))
  );
  const handleOpenCollapse = (index) => {
    const prevArr = [...openCollapse];
    prevArr[index].isOpen = !prevArr[index]?.isOpen;
    setopenCollapse(prevArr);
  };
  const handleEnableAdd = (index) => {
    const prevArr = [...openCollapse];
    prevArr[index].isAdd = !prevArr[index]?.isAdd;
    setopenCollapse(prevArr);
  };
  //   useEffect(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [openCollapse]);
  useEffect(() => {
    setinputDatas({
      name: resumeData.name,
      role: resumeData.role,
      mail: resumeData.mail,
      portfolio_link: resumeData.portfolio_link,
      linkedIn: resumeData.linkedIn,
      phone: resumeData.phone,
      git: resumeData.git,
      state: resumeData.state,
      district: resumeData.district,
      country: resumeData.country,
      about: resumeData.about,
      education: resumeData.education,
      skills: resumeData.skills,
      experience: resumeData.experience,
    });
  }, []);

  return (
    <div className="w-full flex flex-row items-starts justify-between relative gap-5">
      <Toaster position="top-center" />
      <div className="max-h-[90vh] w-[50%] sticky top-0 overflow-y-auto">
        <Grid container sx={{ width: "100%" }} spacing={2}>
          {inputArray.map((elem, index) => {
            if (
              (elem.width == "2" || elem.width == "3" || elem.width == "1") &&
              elem.mode != "expandable"
            ) {
              return (
                <Grid
                  key={index}
                  md={elem.width == "2" ? 6 : elem.width == "3" ? 4 : 12}
                  item
                >
                  <Input
                    value={elem.value}
                    type={elem.type}
                    label={elem.label}
                    placeholder={elem.placeholder}
                    onChange={elem.onChange}
                    name={elem.name}
                    multiline={elem.mode == "big" ? true : false}
                  />
                </Grid>
              );
            } else if (elem.mode == "expandable") {
              return (
                <Grid key={index} md={12} item>
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "none",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                    startIcon={
                      openCollapse[index]?.isOpen ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )
                    }
                    onClick={() => {
                      handleOpenCollapse(index);
                    }}
                  >
                    {elem.label}
                  </Button>
                  <Collapse
                    in={openCollapse[index]?.isOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    {elem.name == "skills" ? (
                      <div>
                        <p className="text-[gray]">Technical skills</p>
                        <SkillsContainer
                          data={elem.value.technical}
                          handleFormData={handleFormData}
                        />
                        <p className="text-[gray]">Soft skills</p>
                        <SkillsContainer
                          data={elem.value.soft}
                          handleFormData={handleFormData}
                        />
                        <p className="text-[gray]">Languages</p>
                        <SkillsContainer
                          data={elem.value.language}
                          handleFormData={handleFormData}
                        />
                      </div>
                    ) : (
                      elem.value.map((val, valIndex) => {
                        if (elem.name == "education") {
                          return (
                            <Stack
                              key={valIndex}
                              sx={{
                                width: "100%",
                                padding: 2,
                                borderBottom: "2px solid slategray",
                                mb: 2,
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
                                    {val.department}
                                  </Typography>
                                  <Chip
                                    size="small"
                                    label={val.percentage}
                                    color="success"
                                    sx={{ color: "white" }}
                                  />
                                </Box>
                                <Typography sx={{ color: "gray" }}>
                                  {val.from.substr(0, 4)}-{val.to.substr(0, 4)}
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
                                  {val.institution}
                                </Typography>
                                <Box>
                                  <IconButton
                                    onClick={() => {
                                      const newData = elem.value.find(
                                        (i, index) => index == valIndex
                                      );
                                      seteducation(newData);
                                      const newDatas = elem.value.filter(
                                        (i, index) => index !== valIndex
                                      );
                                      handleFormData("education", newDatas);
                                    }}
                                    sx={{ color: "slategray" }}
                                  >
                                    <Edit />
                                  </IconButton>
                                  <IconButton
                                    onClick={() => {
                                      const newData = elem.value.filter(
                                        (i, index) => index !== valIndex
                                      );
                                      handleFormData("education", newData);
                                    }}
                                    sx={{ color: "red" }}
                                  >
                                    <Delete />
                                  </IconButton>
                                </Box>
                              </Box>
                            </Stack>
                          );
                        }
                      })
                    )}
                    {openCollapse[index]?.isAdd ? (
                      <Grid
                        container
                        sx={{ width: "100%", ml: "1px", mb: 1 }}
                        spacing={2}
                      >
                        {elem.subInput?.map((input, inputIndex) => {
                          return (
                            <Grid
                              key={inputIndex}
                              md={
                                input.width == "2"
                                  ? 6
                                  : input.width == "3"
                                  ? 4
                                  : 12
                              }
                              item
                            >
                              <Input
                                value={input.value}
                                type={input.type}
                                label={input.label}
                                placeholder={input.placeholder}
                                onChange={input.onChange}
                                multiline={input.mode == "big" ? true : false}
                                name={input.name}
                              />
                            </Grid>
                          );
                        })}
                        <div className="w-full flex flex-row-reverse items-center">
                          <Button
                            onClick={elem.submitHandler}
                            startIcon={<Add />}
                            variant="contained"
                            sx={{
                              color: "white",
                              borderRadius: 4,
                              "&:hover": {
                                color: "white",
                                border: "2px solid lavender",
                              },
                              textTransform: "none",
                              height: 43,
                              width: 130,
                              marginTop: 2,
                              border: "2px solid cornflowerblue",
                              // fontFamily: "cursive",
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </Grid>
                    ) : (
                      <div
                        onClick={() => {
                          handleEnableAdd(index);
                        }}
                        className="w-full flex justify-center items-center text-[gray]  "
                      >
                        <p
                          className="rounded-[10px] px-2 p-1 cursor-pointer"
                          style={{ border: "1px solid gray" }}
                        >
                          Add {elem.value.length > 0 ? "More" : elem.label}
                        </p>
                      </div>
                    )}
                    <div ref={scrollRef}></div>
                  </Collapse>
                </Grid>
              );
            }
          })}
        </Grid>
        <div
          className="sticky bottom-0 mt-2 flex items-center flex-row-reverse px-2 gap-5 bg-[#0f0f0f] p-3"
          style={{ borderTop: "1.5px solid white", zIndex: 2 }}
        >
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Save
          </button>
          <div className="flex flex-row items-baseline justify-center gap-1 text-[gray]">
            hide
            <Switch
              checked={visible}
              sx={{
                "&.MuiSwitch-root .MuiSwitch-track": {
                  background: "gray",
                },

                "&.MuiSwitch-root .MuiButtonBase-root": {
                  color: "gray",

                  "&:hover": {
                    color: "white",
                    transition: ".3s",
                  },
                },
              }}
              onChange={handleVisibility}
              size="small"
            />
            show
          </div>
        </div>
      </div>
      <div className="h-[842px] w-[595px]">
        <ResumeLayout data={inputDatas} />
      </div>
    </div>
  );
}
