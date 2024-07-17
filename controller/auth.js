import { setEncryptedCookie } from "@/utils/EncryteCookies";
import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const login = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/auth/login`, formDatas);
    if (data.status == "ok") {
      setEncryptedCookie("token", data.data);
      getUserData(data.data);
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (error) {
    console.log("LOGIN ERR", error);
  }
};
export const register = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/auth/register`, formDatas);
    if (data.status == "ok") {
      toast.success(data.message);
      window.location.href = `/auth/login`;
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (error) {
    console.log("REGISTER ERR", error);
  }
};
export const getUserByID = async (id) => {
  try {
    const { data } = await axios.get(`${API}/auth/get/${id}`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
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
  try {
    const { data } = await axios.get(`${API}/auth/userData`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.status == "ok") {
      toast.success("Login Success");
      setEncryptedCookie("Jers_folio_userData", JSON.stringify(data.data));
      window.location.href = `/${data.data._id}`;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetUserData ERR", error);
  }
};
export const UpdateUser = async (formDatas, inputData, userData) => {
  try {
    const { data } = await axios.put(
      `${API}/auth/update?userID=${inputData._id}`,
      formDatas,
      {
        headers: {
          Authorization: "Bearer " + userData.accessToken,
        },
      }
    );
    if (data.status == "ok") {
      toast.success("Updated successfully");
      return data;
    } else {
      toast.error(data.message);
    }
    return data;
  } catch (error) {
    console.log("UPDATE ACCOUNT ERR", error);
  }
};
