import React from "react";
import "animate.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import  Typography from "@mui/material/Typography"
import  MailOutline  from "@mui/icons-material/MailOutline";
import  LocationOnOutlined  from "@mui/icons-material/LocationOnOutlined";
import CallOutlined  from "@mui/icons-material/CallOutlined";

export default function ContactInfo() {
    const contactinfos =[
        {
            title:"MAIL US",
            contact1:'jerinofficial25@gmail.com',
            contact2:'jerinjerijree@gmail.com',
            icon:<MailOutline/>,
        },
        {
            title:"CONTACT US",
            contact1:'+91 9384912517',
            contact2:'+91 9952530558',
            icon:<CallOutlined/>,
        },
        {
            title:"LOCATION",
            contact1:'2/147 Pudupeerkadavu',
            contact2:'Government school opposite',
            contact3:'Erodu-638451',
            icon:<LocationOnOutlined/>,
        },
    ]
  return (
    <>
    {contactinfos.map((info,index)=>{
        return (
    <div key={index}
      className="animate__animated animate__zoomIn animate__delay-1s"
      style={{ height: "120px", width: "100%"}}
    >
      <Stack direction="row" alignItems="center" height='100%' width='100%' color='white' gap="20px">
        <Box
          sx={{
            height: "60%",
            width: "70px",
            background: "linear-gradient(to right,#1e1e1e,#1a1a1a,#141414)",
            borderRadius:2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
           {info.icon}
        </Box>
        
        <Stack
          sx={{
            height: "70%",
            display: "flex",
            justifyContent: "center",
            gap:0.5
          }}
        >
           <Typography sx={{
            fontSize: {
              xl: 14,
              lg: 14,
              md: 14,
              sm: 14,
              xs: 12,
            },
           }} color="#5b5b5b"  fontWeight="bold">{info.title}</Typography>
           <Typography sx={{
            fontSize: {
              xl: 14,
              lg: 14,
              md: 14,
              sm: 14,
              xs: 12,
            },
           }} color="white"  fontWeight="bold">{info.contact1}</Typography>
           <Typography sx={{
            fontSize: {
              xl: 14,
              lg: 14,
              md: 14,
              sm: 14,
              xs: 12,
            },
           }} color="white"  fontWeight="bold">{info.contact2}</Typography>
           <Typography sx={{
            fontSize: {
              xl: 14,
              lg: 14,
              md: 14,
              sm: 14,
              xs: 10,
            },
           }} color="white" fontWeight="bold">{info.contact3}</Typography>


        </Stack>
      </Stack>
    </div>
    )
})}
    </>
  );
}
