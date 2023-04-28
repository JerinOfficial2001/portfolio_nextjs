import  Typography  from '@mui/material/Typography'
import  Container  from '@mui/material/Container'
import React from 'react'
import  Box  from '@mui/material/Box';

export default function Page404() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:3,
        flexDirection:'row',
        color:'white'
      }}
    >
      <Typography variant='h4' sx={{color:'white',fontWeight:'bold'}}>404</Typography>
   <Box sx={{height:50,width:1.2,background:'white'}}></Box>
    <Typography> This page could not be found.</Typography>
   
    </Container>
  )
}
