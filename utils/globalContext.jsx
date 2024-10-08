import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getDecryptedCookie } from "./EncryteCookies";
import { useRouter } from "next/router";
import { useMediaQuery, useTheme } from "@mui/material";

const GlobalContext = createContext();
export const useGlobalContext = () => {
  const result = useContext(GlobalContext);
  return result;
};
export default function GlobalContextProvider({ children }) {
  const printRef = useRef();

  const [resumes, setresumes] = useState([]);
  const [userData, setuserData] = useState(null);
  const [profiles, setprofiles] = useState([]);
  const [direction, setdirection] = useState(false);
  const [customStyle, setcustomStyle] = useState(null);
  const cookie = getDecryptedCookie("Jers_folio_userData");

  useEffect(() => {
    const cachedData = cookie ? cookie : false;
    if (cachedData) {
      setuserData(cachedData);
    }
  }, [cookie]);
  const theme = useTheme();
  const isxs = useMediaQuery(theme.breakpoints.only("xs"));
  const issm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));
  const [windowPathName, setwindowPathName] = useState("#portfolio");
  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setwindowPathName(window.location.hash);
    }
  }, [currentHash]);
  return (
    <GlobalContext.Provider
      value={{
        printRef,
        isLg,
        isMd,
        isXl,
        issm,
        isxs,
        setcustomStyle,
        direction,
        setdirection,
        userData,
        profiles,
        setprofiles,
        customStyle,
        windowPathName,
        setwindowPathName,
        resumes,
        setresumes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
