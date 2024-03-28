import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import counterReducer from "../redux/counterSlice";
import { createContext, useEffect, useState } from "react";
import { getDecryptedCookie } from "@/utils/EncryteCookies";

export const MyContextState = createContext({});
export default function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  const cookie = getDecryptedCookie("userData");
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    const cachedData = cookie ? cookie : false;
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);

  return (
    <Provider store={store}>
      <MyContextState.Provider value={{ userData }}>
        <Component {...pageProps} />
      </MyContextState.Provider>
    </Provider>
  );
}
