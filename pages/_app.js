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
import { Box, Stack } from "@mui/material";

export const queryClient = new QueryClient();
export const MyContextState = createContext({});
export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  const cookie = getDecryptedCookie("Jers_folio_userData");
  const [userData, setuserData] = useState(null);
  const [profiles, setprofiles] = useState([]);
  const [direction, setdirection] = useState(false);
  const [customStyle, setcustomStyle] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const cachedData = cookie ? cookie : false;
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SocketProvider>
          <MyContextState.Provider
            value={{
              setcustomStyle,
              direction,
              setdirection,
              userData,
              profiles,
              setprofiles,
            }}
          >
            {router.pathname == "/feedback" ? (
              <Component {...pageProps} />
            ) : (
              <Stack sx={{ width: "100%", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "75%",
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
                <Layout
                  direction={direction}
                  customStyle={customStyle}
                  dashboard={router.pathname == "/"}
                >
                  <Component {...pageProps} />
                </Layout>
              </Stack>
            )}
          </MyContextState.Provider>
        </SocketProvider>
      </Provider>
    </QueryClientProvider>
  );
}
