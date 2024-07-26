import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CheckCircle, ContentCopy } from "@mui/icons-material";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";

export default function RequestCard({ props }) {
  const { inputs, request, url, title, token, query, params, endpoint } = props;
  const [output, setoutput] = useState(null);
  const [copied, setCopied] = useState(false);
  const [inputDatas, setinputDatas] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  let color = "white";
  switch (request) {
    case "GET":
      color = "#1db21d";
      break;
    case "POST":
      color = "#b5b50c";
      break;
    case "PUT":
      color = "#0c57b0";
      break;
    case "DELETE":
      color = "#b00c0c";
      break;

    default:
      break;
  }
  const queryDatas = (array) => {
    const combinedObject = array.reduce((acc, item) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    return "?" + new URLSearchParams(combinedObject).toString();
  };
  const paramsData = (array) => {
    const combinedObject = array.map((elem) => elem.value).join("/");
    if (combinedObject) {
      return "/" + combinedObject;
    } else {
      return combinedObject;
    }
  };
  const URL = url + endpoint + paramsData(params) + queryDatas(query);
  const handleSubmit = async () => {
    switch (request) {
      case "POST":
        color = "#b5b50c";
        break;
      case "PUT":
        color = "#0c57b0";
        break;
      case "DELETE":
        color = "#b00c0c";
        break;

      default:
        break;
    }
  };
  const fetchData = async () => {
    switch (request) {
      case "GET":
        try {
          const { data } = await axios.get(URL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (data) {
            setoutput(data);
            setisLoading(false);
          }
        } catch (error) {
          setisLoading(false);
          setoutput("Something went wrong");
        }
        break;

      default:
        setisLoading(false);
        break;
    }
  };
  useEffect(() => {
    fetchData();
    if (inputs && inputs.label > 0) {
      setinputDatas();
    }
  }, []);
  if (inputs && inputs.length > 0) {
    // Reduce the array to a single object
    const result = inputs.reduce((acc, item) => {
      if (item.name === "text") {
        // Handle "text" type inputs
        acc[item.name] = "";
      } else if (item.name === "select") {
        // Handle "select" type inputs
        acc[item.name] = item.menus.defaultVal || "";
      }
      return acc;
    }, {});

    console.log(result); // Log the final object
  }
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Stack
        sx={{
          width: "60%",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {/** Title  **/}
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Chip
            label={request}
            sx={{
              background: color,
              color: "white",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          />
          <Typography sx={{ color: "gray", fontFamily: "cursive" }}>
            / {title}
          </Typography>
        </Box>
        {/** URL  **/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "10px",
            background: "#c4b3b3",
            padding: "5px",
          }}
        >
          <Typography
            title={URL}
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
            {URL.toString()}
          </Typography>
          <CopyToClipboard
            text={URL}
            onCopy={() => {
              handleCopy();
            }}
          >
            <IconButton variant="contained">
              {copied ? (
                <CheckCircle sx={{ color: "#1db21d" }} />
              ) : (
                <ContentCopy />
              )}
            </IconButton>
          </CopyToClipboard>
        </Box>
        {/** Body  **/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderRadius: "10px",
            padding: "5px",
            gap: 3,
          }}
        >
          {queryDatas(query) && (
            <Stack sx={{ fontFamily: "cursive" }}>
              <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                Query
              </Typography>
              {query.map((elem, index) => {
                return (
                  <List key={index} sx={{ color: "gray" }}>
                    {`${elem.key} : ${elem.value}`}{" "}
                  </List>
                );
              })}
            </Stack>
          )}
          {paramsData(params) && (
            <Stack sx={{ fontFamily: "cursive" }}>
              <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                Params
              </Typography>
              {params.map((elem, index) => {
                return (
                  <List key={index} sx={{ color: "gray" }}>
                    {`${elem.key} : ${elem.value}`}{" "}
                  </List>
                );
              })}
            </Stack>
          )}
        </Box>
        {/** Token  **/}
        {token && (
          <Box
            sx={{
              fontFamily: "cursive",
              color: "#424242",
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "center",
              fontWeight: "bold",
              marginTop: 2,
            }}
          >
            Token :
            <Typography
              sx={{
                maxWidth: "550px",
                flexWrap: "nowrap",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {token}
            </Typography>
          </Box>
        )}
        {/** Inputs  **/}
        {inputs && (
          <Grid container rowGap={0.3} columnGap={0.3} sx={{ width: "100%" }}>
            {inputs.map((elem, index) => {
              return (
                <Grid xl={3.9} lg={3.9} item key={index}>
                  <Box>
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
                      value={elem.name}
                      onChange={elem.onChange}
                      name={elem.name}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Stack>
      {/** OUTPUT  **/}
      {!isLoading ? (
        <Stack
          sx={{
            fontFamily: "cursive",
            background: "#1a1a1a",
            padding: 2,
            borderRadius: "10px",
            width: "40%",
          }}
        >
          <Typography
            sx={{
              color: "gray",
              fontWeight: "bold",
            }}
          >
            Output
          </Typography>
          <List sx={{ color: "gray", maxHeight: "250px", overflowY: "auto" }}>
            <pre>{JSON.stringify(output, null, 2)}</pre>
          </List>
        </Stack>
      ) : (
        <Stack
          sx={{
            height: "250px",
            justifyContent: "center",
            alignItems: "center",
            background: "#1a1a1a",
            padding: 2,
            borderRadius: "10px",
            width: "40%",
          }}
        >
          <Loader />
        </Stack>
      )}
    </Box>
  );
}
