import axios from "axios";

export const CreateResume = async (data) => {
  try {
    const result = await axios.post(`${API}/resume/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateResume ERR", error);
  }
};
export const GetResumeByID = async (id) => {
  try {
    const result = await axios.get(`${API}/resume/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetResume ERR", error);
  }
};
