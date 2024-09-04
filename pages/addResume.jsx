import Input from "@/components/Input";
import ResumeLayout from "@/components/resume/ResumeLayout";
import SkillsContainer from "@/components/resume/SkillsContainer";
import { useGlobalContext } from "@/utils/globalContext";
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
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactToPrint from "react-to-print";

export default function AddResume() {
  const { resumes, setresumes, printRef, isxs } = useGlobalContext();
  const router = useRouter();
  const resumeData = {
    _id: Math.random().toString(36).substr(2, 8),
    isVisible: false,
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
    experience: [
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
      {
        role: "Frontend developer",
        company_name: "ABC solutions",
        from: "2024/06/2",
        to: "2023/07/3",
        place: "Coimbatore",
        state: "Tamilnadu",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ullam at nesciunt atque quibusdam possimus qui distinctio",
        skills: ["Mern stack", "NextJs"],
      },
    ],
  };
  const scrollRef = useRef(null);
  const [inputDatas, setinputDatas] = useState({
    _id: "",
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
    skills: {
      technical: [],
      soft: [],
      language: [],
    },
    experience: [],
    isVisible: false,
  });

  const handleFormData = (key, value) => {
    setinputDatas((prev) => ({ ...prev, [key]: value }));
  };
  const handleVisibility = (state) => {
    handleFormData("isVisible", state);
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
  const [skills, setskills] = useState({
    technical: "",
    soft: "",
    language: "",
  });
  const [experience, setexperience] = useState({
    from: "",
    to: "",
    company_name: "",
    role: "",
    description: "",
    skills: [],
    place: "",
    state: "",
  });
  const [learnedSkill, setlearnedSkill] = useState("");
  const handleEducationData = (key, value) => {
    seteducation((prev) => ({ ...prev, [key]: value }));
  };
  const handleSkillsData = (key, value) => {
    setskills((prev) => ({ ...prev, [key]: value }));
  };
  const handleExperienceData = (key, value) => {
    setexperience((prev) => ({ ...prev, [key]: value }));
  };
  const handleEducationOnchange = (e) => {
    const { name, value } = e.target;
    handleEducationData(name, value);
  };
  const handleSkillsOnchange = (e) => {
    const { name, value } = e.target;
    handleSkillsData(name, value);
  };
  const handleExperienceOnchange = (e) => {
    const { name, value } = e.target;
    handleExperienceData(name, value);
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
  const handleSubmitSkill = (key) => {
    if (
      skills.technical !== "" ||
      skills.soft !== "" ||
      skills.language !== ""
    ) {
      if (key == "technical") {
        inputDatas.skills.technical.push(skills.technical);
      } else if (key == "soft") {
        inputDatas.skills.soft.push(skills.soft);
      } else if (key == "language") {
        inputDatas.skills.language.push(skills.language);
      }
      setskills({
        technical: "",
        soft: "",
        language: "",
      });
    } else {
      toast.error("Missing mandatory field");
    }
  };
  const handleSubmitLearnedSkills = () => {
    if (learnedSkill != "") {
      experience.skills.push(learnedSkill);
      setlearnedSkill("");
    } else {
      toast.error("Fill the skill input");
    }
  };
  const handleSubmitExperience = () => {
    if (
      experience.company_name !== "" &&
      experience.description !== "" &&
      experience.from !== "" &&
      experience.to !== "" &&
      experience.state !== "" &&
      experience.place !== "" &&
      experience.skills.length != 0
    ) {
      handleFormData("experience", [...inputDatas.experience, experience]);
      setexperience({
        from: "",
        to: "",
        company_name: "",
        role: "",
        description: "",
        skills: [],
        place: "",
        state: "",
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
      value: [],
      width: "1",
      mode: "expandable",
      subInput: [
        {
          name: "technical",
          label: "Technical skill",
          placeholder: "eg : HTML,Java,Python,Git etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.technical,
          arrValue: inputDatas.skills.technical,
          width: "1",
        },
        {
          name: "soft",
          label: "Soft skill",
          placeholder: "eg : Team Player,Hard Work etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.soft,
          arrValue: inputDatas.skills.soft,
          width: "1",
        },
        {
          name: "language",
          label: "Language",
          placeholder: "eg : Tamil,English,Hindi etc...",
          type: "text",
          onChange: handleSkillsOnchange,
          value: skills.language,
          arrValue: inputDatas.skills.language,
          width: "1",
        },
      ],
      submitHandler: (key) => handleSubmitSkill(key),
      handleUpdatedData: (name, data) =>
        handleFormData("skills", {
          ...inputDatas.skills,
          [name]: data,
        }),
    },
    {
      name: "experience",
      label: "Experience",
      placeholder: "experience",
      type: "text",
      onChange: handleOnchange,
      value: inputDatas.experience,
      width: "1",
      mode: "expandable",
      subInput: [
        {
          name: "company_name",
          label: "Company Name",
          placeholder: "eg : ABC solutions",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.company_name,
          width: "2",
        },
        {
          name: "role",
          label: "Role",
          placeholder: "eg : Mern stack developer",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.role,
          width: "2",
        },

        {
          name: "place",
          label: "Place",
          placeholder: "eg : coimbatore",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.place,
          width: "2",
        },
        {
          name: "state",
          label: "State",
          placeholder: "eg : Tamilnadu",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.state,
          width: "2",
        },
        {
          name: "description",
          label: "Description",
          placeholder: "type about your experience...",
          type: "text",
          onChange: handleExperienceOnchange,
          value: experience.description,
          width: "1",
          mode: "big",
        },
        {
          name: "skill",
          label: "Learned skills",
          placeholder: "type skills you have learned...",
          type: "text",
          onChange: (e) => setlearnedSkill(e.target.value),
          value: learnedSkill,
          width: "1",
          arrValue: experience.skills,
          submitHandler: handleSubmitLearnedSkills,
        },
        {
          name: "from",
          label: "From",
          placeholder: "From",
          type: "date",
          onChange: handleExperienceOnchange,
          value: experience.from,
          width: "2",
        },
        {
          name: "to",
          label: "To",
          placeholder: "To",
          type: "date",
          onChange: handleExperienceOnchange,
          value: experience.to,
          width: "2",
        },
      ],
      submitHandler: handleSubmitExperience,
      handleUpdatedData: (name, data) => handleExperienceData("skills", data),
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
  const handleEnableAdd = (index, isOpen) => {
    const prevArr = [...openCollapse];
    prevArr[index].isAdd = isOpen ? isOpen : !prevArr[index]?.isAdd;
    setopenCollapse(prevArr);
  };
  //   useEffect(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [openCollapse]);
  useEffect(() => {
    setinputDatas({
      _id: resumeData._id,
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
      isVisible: false,
    });
  }, []);
  const handleSubmit = () => {
    setresumes([...resumes, inputDatas]);
    router.push("/resume");
  };
  return (
    <div
      className="w-full flex  items-starts justify-between relative gap-5"
      style={{
        flexDirection: isxs ? "column" : "row",
      }}
    >
      <Toaster position="top-center" />
      <div
        style={{
          position: isxs ? "relative" : "sticky",
          maxHeight: isxs ? "100%" : "90vh",
        }}
        className=" w-[100%] top-0 overflow-y-auto pt-2"
      >
        <Grid container sx={{ width: "100%" }} spacing={2}>
          {inputArray.map((elem, index) => {
            if (
              (elem.width == "2" || elem.width == "3" || elem.width == "1") &&
              elem.mode != "expandable"
            ) {
              return (
                <Grid
                  key={index}
                  xs={12}
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
                <Grid key={index} xs={12} md={12} item>
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
                    {elem.value?.map((val, valIndex) => {
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
                                    handleEnableAdd(index, true);
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
                      } else if (elem.name == "experience") {
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
                                  gap: 1,
                                  color: "#17759b",
                                }}
                              >
                                <div>
                                  <Typography sx={{ fontWeight: "bold" }}>
                                    {val.company_name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      color: "gray",
                                      fontSize: "13px",
                                    }}
                                  >
                                    {val.role}
                                  </Typography>
                                </div>
                                |
                                <Typography
                                  sx={{
                                    color: "gray",
                                    fontSize: "13px",
                                  }}
                                >
                                  {val.place}
                                </Typography>
                                |
                                <Typography
                                  sx={{
                                    color: "gray",
                                    fontSize: "13px",
                                  }}
                                >
                                  {val.state}
                                </Typography>
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
                              <div>
                                <div className="flex gap-2">
                                  {val.skills.map((skill, skillIndex) => {
                                    return (
                                      <Chip
                                        key={skillIndex}
                                        size="small"
                                        label={skill}
                                        color="success"
                                        sx={{ color: "white" }}
                                      />
                                    );
                                  })}
                                </div>
                                <Typography
                                  sx={{
                                    color: "white",
                                    marginLeft: "5px",
                                    marginTop: "5px",
                                  }}
                                >
                                  {val.description}
                                </Typography>
                              </div>

                              <Box>
                                <IconButton
                                  onClick={() => {
                                    const newData = elem.value.find(
                                      (i, index) => index == valIndex
                                    );
                                    setexperience(newData);
                                    const newDatas = elem.value.filter(
                                      (i, index) => index !== valIndex
                                    );
                                    handleFormData("experience", newDatas);
                                    handleEnableAdd(index, true);
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
                                    handleFormData("experience", newData);
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
                    })}
                    {openCollapse[index]?.isAdd || elem.name == "skills" ? (
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
                              sx={{
                                flexDirection: "column",
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                width: "100%",
                                gap: 1,
                              }}
                            >
                              {elem.name == "skills" ||
                              input.name == "skill" ? (
                                <div className="w-full flex flex-row gap-2">
                                  <Input
                                    value={input.value}
                                    type={input.type}
                                    label={input.label}
                                    placeholder={input.placeholder}
                                    onChange={input.onChange}
                                    multiline={
                                      input.mode == "big" ? true : false
                                    }
                                    name={input.name}
                                  />
                                  {(elem.name == "skills" ||
                                    input.name == "skill") && (
                                    <Button
                                      size="small"
                                      onClick={
                                        input.name == "skill"
                                          ? input.submitHandler
                                          : () => elem.submitHandler(input.name)
                                      }
                                      variant="contained"
                                      sx={{
                                        color: "white",
                                        borderRadius: 4,
                                        "&:hover": {
                                          color: "white",
                                          border: "2px solid lavender",
                                        },
                                        textTransform: "none",
                                        border: "2px solid cornflowerblue",
                                      }}
                                    >
                                      Add
                                    </Button>
                                  )}
                                </div>
                              ) : (
                                <Input
                                  value={input.value}
                                  type={input.type}
                                  label={input.label}
                                  placeholder={input.placeholder}
                                  onChange={input.onChange}
                                  multiline={input.mode == "big" ? true : false}
                                  name={input.name}
                                />
                              )}
                              {(elem.name == "skills" ||
                                input.name == "skill") && (
                                <SkillsContainer
                                  data={input.arrValue}
                                  handleFormData={(data) =>
                                    elem.handleUpdatedData(input.name, data)
                                  }
                                />
                              )}
                            </Grid>
                          );
                        })}
                        {elem.name != "skills" && (
                          <Grid
                            item
                            sx={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row-reverse",
                            }}
                          >
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
                          </Grid>
                        )}
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
          <ReactToPrint
            trigger={() => {
              return (
                <button
                  type="button"
                  className="text-white hover:text-white border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800"
                >
                  Print
                </button>
              );
            }}
            content={() => printRef.current}
          />

          <button
            onClick={handleSubmit}
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            Save
          </button>
          <div className="flex flex-row items-baseline justify-center gap-1 text-[gray]">
            hide
            <Switch
              checked={inputDatas.isVisible}
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
              onChange={(e) => {
                handleVisibility(e.target.checked);
              }}
              size="small"
            />
            show
          </div>
        </div>
      </div>
      <div>
        <ResumeLayout data={inputDatas} />
      </div>
      <div style={{ display: "none" }}>
        <div ref={printRef}>
          <ResumeLayout data={inputDatas} notRes={true} />
        </div>
      </div>
    </div>
  );
}
