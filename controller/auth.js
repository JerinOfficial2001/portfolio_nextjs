import { setEncryptedCookie } from "@/utils/EncryteCookies";
import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const login = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/auth/login`, formDatas);
    if (data.status == "ok") {
      setEncryptedCookie("token", data.data);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("LOGIN ERR", error);
  }
};
export const register = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/auth/register`, formDatas);
    if (data.status == "ok") {
      toast.success(data.message);
    } else {
      toast.error(data.message);
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
    const { data } = await axios.get(`${API}/auth/allUsers`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetAllUser ERR", error);
  }
};
const getUserData = async (token) => {
  console.log(token);
  try {
    const { data } = await axios.get(`${API}/userData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status == "ok") {
      setEncryptedCookie("userData", data.data);
      toast.success("Login Success");
      window.location.href = "/homepage";
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetUserData ERR", error);
  }
};
