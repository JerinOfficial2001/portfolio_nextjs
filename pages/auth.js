import Box from "@mui/material/Box";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import{ inputLabelClasses} from "@mui/material";
import  Container from "@mui/material/Container";

import supabase from "@/config/Supabase";
import Image from "next/image";

export default function Auth() {
    const [dataBase, setdataBase] = useState([])
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
   
  });
  const { password, email, } = inputData;

const submitHandler=async()=>{
  if(password !=="" && email !=="" ){
const {error,data}=await supabase.from('portfolio').insert({name, email, subject, message})
if(data){
  setdataBase(data)
}else{
  console.log(error);
}  
setinputData({
    password: "",
  email: "",
  
})
}
  
}

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Box
                sx={{
                  width: "70%",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                      borderRadius:10,
                      padding:5,
                position:'relative',

                }}
              >
                 <Stack
              direction="row"
              sx={{
                height: 100,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                position:'absolute',
                top:0
              }}
            >
              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />

              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xl: 70,
                    lg: 70,
                    md: 70,
                    sm: 30,
                    xs: 20,
                  },
                  fontWeight: "bold",
                }}
              >
                Login
              </Typography>

              <Image
                placeholder="empty"
                src={require("../assets/star-2.png")}
                style={{ height: "47%", width: "50px" }}
              />
            </Stack>
               
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
                <Button
                onClick={()=>{
                  submitHandler()
                }}
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
                    width: "30%",
                    height: "50px",
                   
                  }}
                >
                 Login
                </Button>
              </Box>
    </Container>
  );
}
