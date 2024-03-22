import axios from "axios";

export const CreateCredentials = async (data) => {
  try {
    const result = await axios.post(`${API}/credentials/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateCredentials ERR", error);
  }
};
export const GetCredentialsByID = async (id) => {
  try {
    const result = await axios.get(`${API}/credentials/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetCredentials ERR", error);
  }
};
