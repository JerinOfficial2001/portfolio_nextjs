import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

export const SECRET_KEY = process.env.NEXT_PUBLIC_COOKIE_KEY;

export const setEncryptedCookie = (name, value) => {
  try {
    const encryptedValue = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    const option = {
      httpOnly: false,
      secure: true,
    };
    Cookies.set(name, encryptedValue, option);
  } catch (error) {
    console.error("Encryption Error:", error);
    // Handle the error appropriately (e.g., logging, fallback mechanism)
  }
};

export const getDecryptedCookie = (name) => {
  const encryptedValue = Cookies.get(name);

  if (encryptedValue) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("Decryption Error:", error);
      return null; // Return null or handle the error case based on your application's logic
    }
  }
  return null;
};
