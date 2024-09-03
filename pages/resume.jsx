import { getResume } from "@/redux/actions";
import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "animate.css";
import { Add } from "@mui/icons-material";
import { GET_USERDATA } from "@/utils/EncryteCookies";
import { useRouter } from "next/router";

export default function Resume() {
  const userData = GET_USERDATA();
  const router = useRouter();
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);

  return (
    <div className="w-[100%] min-h-[80vh] rounded-md p-2 flex ">
      {isClient && (
        <>
          {userData ? (
            <Grid container sx={{ width: "100%" }}>
              <Grid item>
                <div className="animate__animated animate__zoomIn">
                  <Stack
                    onClick={() => {
                      router.push("/addResume");
                    }}
                    sx={{
                      height: "280px",
                      width: "220px",
                      background: "#626262",
                      borderRadius: 3,
                      boxShadow: "0 1px 2px gray",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div className="h-full w-full flex items-center justify-center hover:bg-[#00000085] rounded-[10px] translate-all duration-[.3s]">
                      <Add fontSize="large" />
                    </div>
                  </Stack>
                </div>
              </Grid>
            </Grid>
          ) : (
            <div className="h-[500px] w-full flex items-center justify-center">
              <Box component={"img"} src="/NoResume.png" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
