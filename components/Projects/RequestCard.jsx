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
import { Autorenew, CheckCircle, ContentCopy } from "@mui/icons-material";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import Input from "../Input";

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
  }
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: 2,
      }}
    >
      <Stack
        sx={{
          width: { xs: "100%", lg: "60%" },
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
              fontWeight: "bold",
            }}
          />
          <Typography sx={{ color: "gray" }}>/ {title}</Typography>
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
            <Stack>
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
            <Stack>
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
                maxWidth: { xs: "200px", sm: "500px", lg: "550px" },
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
          <Grid
            container
            rowGap={0.3}
            columnGap={0.3}
            direction={"row"}
            sx={{ width: "100%", justifyContent: "space-between" }}
          >
            <Grid xs={12} sm={7.5} md={6} lg={6.5}>
              <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                Payload :
              </Typography>
              <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                {"{"}
              </Typography>
              {inputs.map((elem, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      color: "white",
                      marginBottom: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        justifyContent: "center",
                        color: "gray",
                        fontWeight: "bold",
                      }}
                    >
                      {elem.name}
                    </Typography>
                    <Stack direction={"row"} gap={1}>
                      <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                        :
                      </Typography>

                      <Input
                        type={elem.type}
                        label={elem.label}
                        onChange={elem.onChange}
                        name={elem.name}
                        height="10px"
                        width="250px"
                      />
                    </Stack>
                  </Box>
                );
              })}
              <Typography sx={{ color: "gray", fontWeight: "bold" }}>
                {"}"}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              md={6}
              lg={5}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={isLoading ? undefined : handleSubmit}
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
                  border: "2px solid cornflowerblue",
                }}
                size="small"
              >
                {isLoading ? (
                  <Autorenew
                    sx={{
                      color: "#265482",
                      transition: ".3s",
                      marginBottom: 0.3,
                    }}
                    className="loadingBtn"
                  />
                ) : (
                  <>Submit</>
                )}
              </Button>
            </Grid>
          </Grid>
        )}
      </Stack>
      {/** OUTPUT  **/}
      {!isLoading ? (
        <Stack
          sx={{
            background: "#1a1a1a",
            padding: 2,
            borderRadius: "10px",
            width: { xs: "100%", lg: "40%" },
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
