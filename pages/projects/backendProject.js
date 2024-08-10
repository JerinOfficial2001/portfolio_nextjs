import Input from "@/components/Input";
import RequestCard from "@/components/Projects/RequestCard";
import {
  CheckCircle,
  ContentCopy,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Collapse,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function BackendProject() {
  const AllRequests = {
    credentials: [
      { key: "phone", value: "09876567567557", type: "number" },
      { key: "password", value: "Demo@123", type: "text" },
      { key: "role", value: "Demo@123", type: "text" },
    ],
    authUrl: "https://accountbookapi.vercel.app/api/v1/auth/login",
    isAuthVisible: true,
    userID: "",
    dataKeyForToken: "token",
    requests: [
      {
        method: "GET",
        title: "GET Requests",
        contents: [
          {
            request: "GET",
            _id: 1,
            url: "https://accountbookapi.vercel.app",
            title: "GetStatistics",
            endpoint: "/api/v1/statics/get",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
            query: [
              { key: "userid", value: "66a1f39dbbdf0f64ad7afd58" },
              { key: "type", value: "CUSTOMER" },
            ],
            params: [],
            isAuthenticated: true,
          },
          {
            request: "GET",
            _id: 2,
            url: "https://accountbookapi.vercel.app",
            title: "GetParty",
            endpoint: "/api/v1/party/get",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
            query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
            params: [{ key: "StatisticID", value: "66a1f39dbbdf0f64ad7afd5a" }],
            isAuthenticated: true,
          },
          {
            request: "GET",
            _id: 3,
            url: "https://accountbookapi.vercel.app",
            title: "GetCollections",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
            endpoint: "/api/v1/collection/get",
            query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
            params: [
              {
                key: "CollectionID",
                value: "66a1f3c2bbdf0f64ad7afd66",
              },
            ],
            isAuthenticated: true,
          },
        ],
      },
      {
        method: "POST",
        title: "POST Requests",
        contents: [
          {
            request: "POST",
            _id: 1,
            url: "https://accountbookapi.vercel.app",
            title: "CreateParty",
            endpoint: "/api/v1/party/create",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmExZjM5ZGJiZGYwZjY0YWQ3YWZkNTgiLCJpYXQiOjE3MjE5ODcxMTh9.Kwp4efimqaBHvFP4T_KxMBYyHPOADqkDAy83-KbrJC4",
            query: [{ key: "userid", value: "66a1f39dbbdf0f64ad7afd58" }],
            params: [],
            inputs: [
              {
                name: "staticsID",
                type: "text",
              },
              {
                name: "partyname",
                type: "text",
              },
              {
                name: "phone",
                type: "number",
              },
              {
                name: "type",
                type: "select",
                menus: {
                  values: ["CUSTOMER", "SUPPLIER"],
                  defaultVal: "CUSTOMER",
                },
              },
            ],
            isAuthenticated: true,
          },
        ],
      },
    ],
  };
  const [openAuth, setopenAuth] = useState(false);
  const [openCollapse, setopenCollapse] = useState(
    AllRequests.requests.length > 0
      ? AllRequests.requests.map(() => ({ isOpen: true }))
      : []
  );

  const [inputDatas, setinputDatas] = useState(null);
  useEffect(() => {
    if (AllRequests.requests.length > 0) {
      setopenCollapse(AllRequests.requests.map(() => ({ isOpen: true })));
    }
    const inputData = {};
    AllRequests.credentials.forEach((elem) => {
      inputData[elem.key] = "";
    });
    setinputDatas(inputData);
  }, [AllRequests.requests.length, AllRequests.credentials.length]);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setinputDatas((prev) => ({ ...prev, [name]: value }));
  };
  const inputFields = AllRequests.credentials.map((elem) => ({
    name: elem.key,
    label: elem.key,
    placeholder: "",
    value: inputDatas ? inputDatas[elem.key] : "",
    onChange: (e) => handleOnchange(e),
    type: elem.type,
  }));
  const renderJson = (data) => {
    if (typeof data === "object" && data !== null) {
      return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.entries(data).map(([key, value]) => (
            <li key={key} style={{ marginBottom: "8px" }}>
              <span style={{ color: "blue" }}>{key}:</span>
              <span style={{ color: "brown", marginLeft: "4px" }}>
                {renderJson(value)}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    return <span>{String(data)}</span>;
  };
  const handleOpenCollapse = (index) => {
    const prevArr = [...openCollapse];
    prevArr[index].isOpen = !prevArr[index]?.isOpen;
    setopenCollapse(prevArr);
  };
  const [copied, setCopied] = useState(
    AllRequests.credentials?.map(() => ({ isCopied: false }))
  );

  const handleCopy = (index) => {
    const prevArr = [...copied];
    prevArr[index].isCopied = true;
    setCopied(prevArr);
    setTimeout(() => {
      prevArr[index].isCopied = false;
      setCopied(prevArr);
    }, 3000);
  };
  return (
    <Suspense>
      <Stack sx={{ width: "100%", gap: 2, alignItems: "flex-start" }}>
        <Stack
          sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: { xs: "95%", lg: "50%" },
              borderRadius: "10px",
              background: "#c4b3b3",
              padding: "5px",
              gap: 1,
              position: "sticky",
              top: "100px",
            }}
          >
            <Chip
              label="Base URL"
              sx={{ fontFamily: "cursive", fontWeight: "bold" }}
            />
            <Typography
              // title={URL}
              sx={{
                color: "gray",
                fontFamily: "cursive",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "87%",
                flexWrap: "nowrap",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              : https://accountbookapi.vercel.app
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
          direction={{ xs: "column", lg: openAuth ? "row" : "column" }}
        >
          {AllRequests?.credentials &&
            AllRequests?.credentials.length !== 0 && (
              <Stack
                sx={{
                  marginBottom: 2,
                  width: { xs: "90%", lg: "300px" },
                  borderRadius: "10px",
                  padding: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#ffffff0a",
                }}
              >
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Credentials
                </Typography>
                {AllRequests?.credentials.map((elem, index) => {
                  return (
                    <Stack key={index} sx={{ width: "100%" }}>
                      <Typography
                        sx={{ color: "#7c7c7c", textTransform: "capitalize" }}
                      >
                        {elem.key}
                      </Typography>
                      <Box
                        sx={{
                          background: "#262626",
                          height: 40,
                          width: "100%",
                          borderRadius: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#696666",
                            marginLeft: 2,
                          }}
                        >
                          {elem.value}
                        </Typography>
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#61616169",
                            borderRadius: "0 10px 10px 0",
                          }}
                        >
                          <CopyToClipboard
                            text={elem.value}
                            onCopy={() => {
                              handleCopy(index);
                            }}
                          >
                            <IconButton>
                              {copied[index]?.isCopied ? (
                                <CheckCircle
                                  sx={{
                                    color: "cornflowerblue",
                                  }}
                                />
                              ) : (
                                <ContentCopy sx={{ color: "#b5b5b5" }} />
                              )}
                            </IconButton>
                          </CopyToClipboard>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>
            )}
          {openAuth ? (
            <Stack
              sx={{
                marginBottom: 2,
                width: { xs: "90%", lg: "300px" },
                borderRadius: "10px",
                padding: 2,
                justifyContent: "center",
                alignItems: "center",
                background: "#ffffff0a",
                gap: 2.5,
              }}
            >
              <Typography
                sx={{
                  color: "whitesmoke",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginBottom: 1,
                }}
              >
                Authenticate
              </Typography>
              {inputFields.length > 0 &&
                inputFields.map((elem, index) => {
                  return (
                    <Input
                      key={index}
                      label={elem.label}
                      value={elem.value}
                      onChange={elem.onChange}
                      name={elem.name}
                      type={elem.type}
                    />
                  );
                })}
            </Stack>
          ) : (
            <Button
              onClick={() => {
                setopenAuth(true);
              }}
              variant="contained"
              sx={{
                color: "white",
                background: "#323232",
                borderRadius: 4,
                "&:hover": {
                  background: "#323232",
                  color: "white",
                  border: "2px solid lavender",
                },
                textTransform: "none",
                height: 43,
                width: 130,
                marginBottom: {
                  xl: 0,
                  lg: 0,
                  md: 0,
                  sm: 3,
                  xs: 3,
                },
                border: "2px solid cornflowerblue",
                // fontFamily: "cursive",
              }}
            >
              Authenticate
            </Button>
          )}
        </Stack>
        {AllRequests.requests.map((methods, index) => {
          return (
            <Stack key={index} sx={{ width: "100%" }}>
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontFamily: "cursive",
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
                {methods.title}
              </Button>
              <Collapse
                in={openCollapse[index]?.isOpen}
                timeout="auto"
                unmountOnExit
              >
                <Stack
                  sx={{ gap: 2, display: "flex", flexDirection: "column" }}
                >
                  {methods.contents.map((elem, index) => {
                    if (elem.isAuthenticated) {
                      return (
                        <Stack
                          key={elem._id}
                          sx={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography sx={{ color: "gray" }}>
                            Token required to view {elem.title}
                          </Typography>
                        </Stack>
                      );
                    } else {
                      return (
                        <RequestCard
                          key={elem._id}
                          props={{
                            request: elem.request,
                            url: elem.url,
                            title: elem.title,
                            endpoint: elem.endpoint,
                            token: elem.token,
                            query: elem.query,
                            params: elem.params,
                            inputs: elem.inputs,
                          }}
                        />
                      );
                    }
                  })}
                </Stack>
              </Collapse>
            </Stack>
          );
        })}
      </Stack>
    </Suspense>
  );
}
