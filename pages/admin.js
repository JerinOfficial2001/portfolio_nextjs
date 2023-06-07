import { useSession } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import Page404 from "./page404";
import supabase from "@/config/Supabase";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AdminCard from "@/components/AdminCard";

export default function Admin() {
  const session = useSession();
  const [dataBase, setdataBase] = useState([]);
  const logoutHandler = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("SIGNOUT", error);
    }
  };
  const getData = async () => {
    const { error, data } = await supabase
      .from("portfolio")
      .select(`name,email,subject,message`);
    if (data) {
           setdataBase(data);
    } else {
      console.log("FETCH", error);
    }
  };
  useEffect(() => {
    getData();
  }, [dataBase]);
  return (
    <>
      {session ? (
        <Container
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",

            color: "white",
            position: "relative",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              height: "100px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
              position: "absolute",
              top: 0,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              ADMIN
            </Typography>
            <IconButton
              onClick={() => {
                logoutHandler();
              }}
              variant="contained"
            >
              <Logout sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Stack sx={{ width: "90%", position: "absolute", top: 100, gap: 3 }}>
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Notifications
            </Typography>
            {dataBase.map((datas)=>{
                return(<AdminCard dataBase={datas}/>)
            })}
            
            

          </Stack>
        </Container>
      ) : (
        <Page404 />
      )}
    </>
  );
}
