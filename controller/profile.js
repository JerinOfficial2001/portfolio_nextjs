import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateProfile = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/profile/add`, formDatas);
    if (data.status == "ok") {
      return data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("CreateProfile ERR", error);
  }
};
export const GetProfileByID = async (id) => {
  try {
    const { data } = await axios.get(`${API}/profile/get/${id}`);
    if (data.status == "ok") {
      return data.data;
    } else {
      // toast.error(data.message);
      return null;
    }
  } catch (error) {
    console.log("GetProfile ERR", error);
  }
};
export const UpdateProfile = async (formDatas, id) => {
  try {
    const { data } = await axios.put(`${API}/profile/update/${id}`, formDatas);
    if (data.status == "ok") {
      return data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("UpdateProfile ERR", error);
  }
};
export const GetAllProfile = async () => {
  try {
    const { data } = await axios.get(`${API}/profile/get`);
    if (data.status == "ok") {
      return data.data;
    } else {
      // toast.error(data.message);
      return [];
    }
  } catch (error) {
    console.log("GetProfile ERR", error);
  }
};
export const GetProfileByUserID = async (UserID) => {
  try {
    const { data } = await axios.get(`${API}/profile/get`);
    if (data.status == "ok") {
      const profiles = data.data;

      const currentProfile = profiles.find((elem) => elem.userID == UserID);
      if (currentProfile) {
        return currentProfile;
      } else {
        return null;
      }
    } else {
      // toast.error(data.message);
      return null;
    }
  } catch (error) {
    console.log("GetProfile ERR", error);
  }
};
