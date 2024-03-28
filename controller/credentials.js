import { API } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateCredentials = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/credentials/add`, formDatas, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (data.status == "ok") {
      return data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("CreateCredentials ERR", error);
  }
};
export const GetCredentialsByID = async (id) => {
  try {
    const { data } = await axios.get(`${API}/credentials/get/${id}`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetCredentials ERR", error);
  }
};
export const UpdateCredentials = async (formDatas, id) => {
  try {
    const { data } = await axios.put(
      `${API}/credentials/update/${id}`,
      formDatas,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data.status == "ok") {
      return data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("UpdateCredentials ERR", error);
  }
};
