import { getResume } from "@/redux/actions";
import { Box, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "animate.css";
import { Add } from "@mui/icons-material";
import { GET_USERDATA } from "@/utils/EncryteCookies";
import { useRouter } from "next/router";
import { useGlobalContext } from "@/utils/globalContext";
import ResumeLayout from "@/components/resume/ResumeLayout";

export default function Resume() {
  const userData = GET_USERDATA();
  const router = useRouter();
  const [isClient, setisClient] = useState(false);
  const { resumes, setresumes } = useGlobalContext();
  useEffect(() => {
    setisClient(true);
  }, []);
  return (
    <div className="w-[100%] min-h-[80vh] rounded-md p-2 flex ">
      {isClient && (
        <>
          <Grid container sx={{ width: "100%" }} spacing={3}>
            {resumes.length > 0
              ? resumes?.map((elem, index) => {
                  return (
                    <Grid item key={index}>
                      <div className="animate__animated animate__zoomIn">
                        <Stack
                          onClick={() => {
                            router.push({
                              pathname: "/viewResume",
                              query: { id: elem._id },
                            });
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
                            <ResumeLayout data={elem} size={"small"} />
                          </div>
                        </Stack>
                      </div>
                    </Grid>
                  );
                })
              : !userData && (
                  <Grid item>
                    <div className="absolute h-[500px] w-full flex items-center justify-center">
                      <Box component={"img"} src="/NoResume.png" />
                    </div>
                  </Grid>
                )}
            {userData && (
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
            )}
          </Grid>
        </>
      )}
    </div>
  );
}
