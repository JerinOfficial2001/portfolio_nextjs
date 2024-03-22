import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./api";
import { toast } from "react-hot-toast";

export const addProject = async (val) => {
  try {
    const res = await axios.post(API + "/projects/add", val);
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
      const res = await axios.get(API + "/projects/get");
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
    const res = await axios.delete(API + `/projects/remove/${id}`);
    if (res.data.status === "deleted") {
      toast.success("Project Deleted");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addResume = async (val) => {
  console.log("VAL", val);
  try {
    const res = await axios.post(API + "/resume/add", val);
    if (res.data.status === "added") {
      toast.success("Resume Added");
    }
    console.log("ADDED", res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getResume = createAsyncThunk("resume/getResume", async () => {
  try {
    const res = await axios.get(API + "/resume/get");
    console.log("PROJECTS", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateResume = async (id, resume) => {
  console.log("VAL", id);
  try {
    const res = await axios.put(API + `/resume/update/${id}`, {
      image: resume,
    });
    if (res.data.status === "updated") {
      toast.success("Resume Updated");
    }
    console.log("Updated", res.data.data);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
