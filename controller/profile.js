import axios from "axios";

export const CreateProfile = async (data) => {
  try {
    const result = await axios.post(`${API}/profile/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateProfile ERR", error);
  }
};
export const GetProfileByID = async (id) => {
  try {
    const result = await axios.get(`${API}/profile/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetProfile ERR", error);
  }
};
