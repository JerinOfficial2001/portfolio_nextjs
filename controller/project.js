import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateProjects = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/Projects/add`, formDatas);
    if (data.status == "ok") {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("CreateProjects ERR", error);
  }
};
export const GetProjectsByID = async (id, category) => {
  try {
    const { data } = await axios.get(
      `${API}/Projects/get/${id}?category=${category}`
    );
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
export const UpdateProject = async (formDatas, id) => {
  try {
    const { data } = await axios.put(`${API}/Projects/update/${id}`, formDatas);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
