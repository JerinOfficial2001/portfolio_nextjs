import Layout from "@/layouts/Layout";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material";
import ContactInfo from "@/components/ContactInfo";
import * as icon from "react-icons/ai"

export default function contact() {
  const router = useRouter();

  const [inputData, setinputData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = inputData;
  return (
    <>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            height: "80vh",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: 300,
            }}
          >
            <div className="animate__animated animate__bounceInUp animate__delay-1s">
              <Typography sx={{ color: "white", fontWeight: "bold" }}>
                CONTACT INFO
              </Typography>
            </div>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
                height: "72%",
                width: "100%",
              }}
            >
              <ContactInfo />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "22%",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div className="animate__animated animate__bounceInUp animate__delay-1s">
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  SOCIAL INFO
                </Typography>
              </div>
              <div
                className="animate__animated animate__zoomIn animate__delay-1s"
                style={{
                  height: "80%",
                  width: "100%",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <Button
                onClick={()=>{router.push("https://www.linkedin.com/in/jerin-t-8866581a0")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "29%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineLinkedin size="50px" />
                </Button>
                
                <Button
                onClick={()=>{router.push("https://github.com/jerin2001")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "29%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineGithub size="50px"/>
                </Button>
                <Button
                onClick={()=>{router.push("https://wa.me/qr/EMQB2VSLPRJLL1")}}
                  sx={{
                    color: "white",
                    background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                    height: "100%",
                    width: "29%",
                    borderRadius: "50%",
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                  }}
                >
                  <icon.AiOutlineWhatsApp size="50px"/>
                </Button>
              </div>
            </Box>
          </Stack>
          {/* contact input field          */}
          <Stack sx={{ height: "100%", width: "70%" }}>
            <div
              className="animate__animated animate__zoomIn animate__delay-1s"
              style={{
                background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                height: "98%",
                width: "95%",
                borderRadius: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: "40px",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  height: 100,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "83%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    margin: "40px 0px 0px 40px",
                  }}
                >
                  <Typography
                    sx={{ color: "white", fontSize: 40, fontWeight: "bold" }}
                  >
                    {"Let's"} work
                  </Typography>
                  <Typography
                    sx={{ color: "#5b78f6", fontSize: 40, fontWeight: "bold" }}
                  >
                    together.
                  </Typography>
                </Box>
                <Box sx={{ height: "100%", width: "37px" }}>
                  <Image
                    placeholder="empty"
                    src={require("../assets/icon2.png")}
                    alt="star"
                    style={{ height: "95%", width: "100%" }}
                  />
                </Box>
              </Stack>
              <Box
                sx={{
                  width: "90%",
                  height: "90%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <TextField
                  variant="outlined"
                  sx={{
                    width: "100%",
                    outline: "none",
                    background: "#252525",
                    borderRadius: 3,
                    "& fieldset": { border: "none" },
                    input: { color: "white" },
                  }}
                  label="Name*"
                  InputLabelProps={{
                    sx: {
                      color: "#6b756b",
                      [`&.${inputLabelClasses.shrink}`]: {
                        display: "none",
                      },
                    },
                  }}
                  value={name}
                  onChange={(e) => {
                    setinputData({ ...inputData, name: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  sx={{
                    width: "100%",
                    outline: "none",
                    background: "#252525",
                    borderRadius: 3,
                    "& fieldset": { border: "none" },
                    input: { color: "white" },
                  }}
                  label="Email*"
                  InputLabelProps={{
                    sx: {
                      color: "#6b756b",
                      [`&.${inputLabelClasses.shrink}`]: {
                        display: "none",
                      },
                    },
                  }}
                  value={email}
                  onChange={(e) => {
                    setinputData({ ...inputData, email: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  sx={{
                    width: "100%",
                    outline: "none",
                    background: "#252525",
                    borderRadius: 3,
                    "& fieldset": { border: "none" },
                    input: { color: "white" },
                  }}
                  label="Subject*"
                  InputLabelProps={{
                    sx: {
                      color: "#6b756b",
                      [`&.${inputLabelClasses.shrink}`]: {
                        display: "none",
                      },
                    },
                  }}
                  value={subject}
                  onChange={(e) => {
                    setinputData({ ...inputData, subject: e.target.value });
                  }}
                />
                <TextField
                  variant="outlined"
                  sx={{
                    width: "100%",
                    outline: "none",
                    background: "#252525",
                    borderRadius: 3,
                    "& fieldset": { border: "none" },
                    input: { color: "white" },
                  }}
                  label="Message*"
                  InputLabelProps={{
                    sx: {
                      color: "#6b756b",
                      [`&.${inputLabelClasses.shrink}`]: {
                        display: "none",
                      },
                    },
                  }}
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setinputData({ ...inputData, message: e.target.value });
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    background: "#323232",
                    borderRadius: 2,
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                    textTransform: "none",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </div>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}
