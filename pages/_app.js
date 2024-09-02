import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import counterReducer from "../redux/counterSlice";
import { createContext, useEffect, useState } from "react";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";
import { SocketProvider } from "@/utils/socket";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import GlobalContextProvider from "@/utils/globalContext";
import ResNav from "@/components/ResNav";

export const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

  const router = useRouter();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isxs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SocketProvider>
          <GlobalContextProvider>
            {router.pathname == "/feedback" ? (
              <Component {...pageProps} />
            ) : (
              <Stack sx={{ width: "100%", alignItems: "center" }}>
                <Box
                  sx={{
                    width: { xs: "100%", md: "75%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // position: "fixed",
                    // top: 0,
                    zIndex: 2,
                  }}
                >
                  <Navbar dashboard={router.pathname == "/"} />
                </Box>
                <Layout dashboard={router.pathname == "/"}>
                  <Component {...pageProps} />
                </Layout>
                {(isSm || isxs) && <ResNav />}
              </Stack>
            )}
          </GlobalContextProvider>
        </SocketProvider>
      </Provider>
    </QueryClientProvider>
  );
}
