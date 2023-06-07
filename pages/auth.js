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
import { useSession } from "@supabase/auth-helpers-react";
import Admin from "./admin";
import { useRouter } from "next/router";

export default function Auth() {
  const router =useRouter()
  const session =useSession()
    const [dataBase, setdataBase] = useState([])
  const [inputData, setinputData] = useState({
    password: "",
    email: "",
   
  });
  const { password, email, } = inputData;

const submitHandler=async()=>{
  if(password !=="" && email !=="" ){
const {error}=await supabase.auth.signInWithPassword({
  email:email,
  password:password
})
if(error){
  console.log("AUTH",error);
}  
setinputData({
    password: "",
  email: "",
  
})
}
  
}

  return (
    <>
    {!session?
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
                  width: {
                    xl:'50%',
                    lg:'50%',
                    md:'50%',
                    sm:'80%',
                    xs:'90%'
                  },
                  height: {
                    xl:'70%',
                    lg:'70%',
                    md:'70%',
                    sm:'70%',
                    xs:'60%'
                  },
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  background:
                      "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
                      borderRadius:10,
                      padding:{
                        xl:5,
                        lg:5,
                        md:5,
                        sm:5,
                        xs:2
                      },
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
                type="email"
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
               type="password"
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
                  value={password}
                  onChange={(e) => {
                    setinputData({ ...inputData, password: e.target.value });
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
                    height: {
                      xl:'50px',
                      lg:'50px',
                      md:'50px',
                      sm:'50px',
                      xs:'30px'
                    },
                   
                  }}
                >
                 Login
                </Button>
                <Button
                onClick={()=>{
                  router.push("/")
                }}
                  variant="outlined"
                  sx={{
                    color: "white",
                    background: "#323232",
                    borderRadius: 2,
                    "&:hover": {
                      background: "white",
                      color: "#323232",
                    },
                    textTransform: "none",
                    width: "20%",
                    height: {
                      xl:'30px',
                      lg:'30px',
                      md:'30px',
                      sm:'30px',
                      xs:'20px'
                    },
                   fontSize:{
                    xl:'10px',
                    lg:'10px',
                    md:'10px',
                    sm:'10px',
                    xs:'8px'
                   },
                   position:"absolute",
                   bottom:20
                  }}
                >
                 Home
                </Button>
              </Box>
    </Container>
  :
  <Admin/>
  }
  </>
  );
}
