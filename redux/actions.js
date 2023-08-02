import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./api";
import { toast } from "react-hot-toast";

export const addProject = async (val) => {
  console.log("VAL", val);
  try {
    const res = await axios.post(API + "/add", val);
    if (res.data.status === "added") {
      toast.success("Project Added");
    }
    console.log("ADDED", res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    try {
      const res = await axios.get(API + "/get");
      console.log("PROJECTS", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removeProject = async (id) => {
  console.log("VAL", id);
  try {
    const res = await axios.delete(API + `/${id}`);
    if (res.data.status === "deleted") {
      toast.success("Project Deleted");
    }
  } catch (error) {
    console.log(error);
  }
};
