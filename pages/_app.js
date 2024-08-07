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

const queryClient = new QueryClient();
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
            {router.pathname == "/feedback" || router.pathname == "/" ? (
              <Component {...pageProps} />
            ) : (
              <Layout direction={direction} customStyle={customStyle}>
                <Component {...pageProps} />
              </Layout>
            )}
          </MyContextState.Provider>
        </SocketProvider>
      </Provider>
    </QueryClientProvider>
  );
}
