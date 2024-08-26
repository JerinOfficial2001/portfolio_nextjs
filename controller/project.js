import { API, APK_URL } from "@/utils/api";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateProjects = async (formDatas) => {
  try {
    const { data } = await axios.post(`${API}/Projects/add`, formDatas);
    if (data.status == "ok") {
      return data;
    } else {
      toast.error(data.message);
      return [];
    }
  } catch (error) {
    console.log("CreateProjects ERR", error);
  }
};
export const GetProjectsByID = async (id, category, isLoggedIn) => {
  try {
    const { data } = await axios.get(
      `${API}/Projects/get/${id}?category=${category}&isLoggedIn=${isLoggedIn}`
    );
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
      return [];
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
export const ProjectVisibility = async (formDatas, id) => {
  try {
    const { data } = await axios.put(
      `${API}/Projects/visibility/${id}`,
      formDatas
    );
    if (data.status == "ok") {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
// export const UploadAPK = async (user_id, projectID, apk) => {
//   try {
//     const { data } = await axios.post(
//       `${APK_URL}/Projects/uploadapk?userID=${user_id}&projectID=${projectID}`,
//       apk
//     );
//     if (data) {
//       if (data.status == "ok") {
//         toast.success("APK uploaded successfully");
//       } else {
//         toast.error(data.message);
//       }
//       return data;
//     }
//   } catch (error) {
//     console.log("UploadAPK ERR", error);
//   }
// };
export const UploadAPK = async (user_id, projectID, apk, progressCallback) => {
  try {
    const { data } = await axios.post(
      `${APK_URL}/Projects/uploadapk?userID=${user_id}&projectID=${projectID}`,
      apk,
      {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable && progressCallback) {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            progressCallback(progress);
          }
        },
      }
    );

    if (data) {
      if (data.status === "ok") {
        toast.success("APK uploaded successfully");
      } else {
        toast.error(data.message);
      }
      return data;
    }
  } catch (error) {
    console.log("UploadAPK ERR", error);
    toast.error("Failed to upload APK");
  }
};
export const GetAPK = async (user_id, projectID) => {
  try {
    const { data } = await axios.get(
      `${API}/Projects/getapk?userID=${user_id}&projectID=${projectID}`
    );
    if (data && data.status == "ok") {
      return data.data;
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log("UploadAPK ERR", error);
  }
};
export const GetAllVisibleProjects = async (id) => {
  try {
    const { data } = await axios.get(`${API}/Projects/getallprojects`);
    if (data.status == "ok") {
      return data.data;
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
export const DeleteAPK = async (apk_id) => {
  try {
    const { data } = await axios.delete(`${API}/Projects/deleteapk/${apk_id}`);
    if (data.status == "ok") {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("UploadAPK ERR", error);
  }
};
