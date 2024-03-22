import axios from "axios";

export const CreateContact = async (data) => {
  try {
    const result = await axios.post(`${API}/contact/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateContact ERR", error);
  }
};
export const GetContactByID = async (id) => {
  try {
    const result = await axios.get(`${API}/contact/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetContact ERR", error);
  }
};
export const CreateMsg = async (data) => {
  try {
    const result = await axios.post(`${API}/contact/msg/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateMsg ERR", error);
  }
};
export const GetMsgByID = async (id) => {
  try {
    const result = await axios.get(`${API}/contact/msg/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetMsg ERR", error);
  }
};
