import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import counterReducer from "../redux/counterSlice";
import { createContext, useEffect, useState } from "react";
import { getDecryptedCookie } from "@/utils/EncryteCookies";
import Layout from "@/layouts/Layout";

export const MyContextState = createContext({});
export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  const cookie = getDecryptedCookie("userData");
  const [userData, setuserData] = useState(null);
  const [profiles, setprofiles] = useState([]);
  const [direction, setdirection] = useState(false);
  const [customStyle, setcustomStyle] = useState(null);
  useEffect(() => {
    const cachedData = cookie ? cookie : false;
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);

  return (
    <Provider store={store}>
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
        <Layout direction={direction} customStyle={customStyle}>
          <Component {...pageProps} />
        </Layout>
      </MyContextState.Provider>
    </Provider>
  );
}
