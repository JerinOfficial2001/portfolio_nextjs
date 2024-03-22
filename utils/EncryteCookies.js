import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export const setEncryptedCookie = (name, value) => {
  const encryptedValue = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
  const option = {
    httpOnly: false,
    secure: true,
  };
  Cookies.set(name, encryptedValue, option);
  Cookies.set("toggletheme", false);
};

export const getDecryptedCookie = (name) => {
  const encryptedValue = Cookies.get(name);
  // console.log(encryptedValue, "NAME");

  if (encryptedValue) {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  return null;
};
