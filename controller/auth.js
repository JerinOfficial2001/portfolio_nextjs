import { setEncryptedCookie } from "@/utils/EncryteCookies";
import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const login = async (data) => {
  try {
    const result = await axios.post(`${API}/auth/login`, data);
    if (result.status == "ok") {
      setEncryptedCookie("token", result.data);
      const token = await axios.get(`${API}/userData`, {
        headers: {
          Authorization: `Bearer ${result.data}`,
        },
      });
      if (token.status == "ok") {
        setEncryptedCookie("userData", token.data);
        toast.success("Login Success");
      } else {
        toast.error(result.message);
      }
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("LOGIN ERR", error);
  }
};
export const register = async (data) => {
  try {
    const result = await axios.post(`${API}/auth/register`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("REGISTER ERR", error);
  }
};
export const getUserByID = async (id) => {
  try {
    const result = await axios.get(`${API}/auth/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetUserByID ERR", error);
  }
};
export const getAllUsers = async () => {
  try {
    const result = await axios.get(`${API}/auth/allUsers`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetAllUser ERR", error);
  }
};
