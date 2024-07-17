import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const GetAllFeedbacks = async () => {
  const { data } = await axios.get(API + "/feedbacks/getfeedbacks");
  if (data && data.status == "ok") {
    return data.data;
  } else {
    toast.error(`Can't get feedbacks`);
  }
};
export const UpdateFeedback = async (id, text) => {
  const { data } = await axios.put(API + "/feedbacks/update/" + id, { text });
  if (data && data.status == "ok") {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
};
export const AddFeedback = async (formData) => {
  try {
    const { data } = await axios.post(API + "/feedbacks/add", formData);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log("ADD Feedback", error);
  }
};
export const DeleteFeedback = async (id) => {
  const { data } = await axios.delete(API + "/feedbacks/delete/" + id);
  if (data && data.status == "ok") {
    toast.success(data.message);
    return "success";
  } else {
    toast.error(data.message);
  }
};
