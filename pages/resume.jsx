import { getResume } from "@/redux/actions";
import { Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import "animate.css";
import { Add } from "@mui/icons-material";

export default function Resume() {
  return (
    <div className="w-[100%] min-h-[80vh] rounded-md p-2 flex ">
      <Grid container sx={{ width: "100%" }}>
        <Grid item>
          <div className="animate__animated animate__zoomIn">
            <Stack
              sx={{
                height: "280px",
                width: "220px",
                background: "white",
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
    </div>
  );
}
