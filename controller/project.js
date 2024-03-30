import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateProjects = async (data) => {
  try {
    const result = await axios.post(`${API}/Projects/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateProjects ERR", error);
  }
};
export const GetProjectsByID = async (id) => {
  try {
    const { data } = await axios.get(`${API}/Projects/get/${id}`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
export const GetParticularProjectByID = async (id) => {
  try {
    const { data } = await axios.get(`${API}/Projects/getByID/${id}`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
