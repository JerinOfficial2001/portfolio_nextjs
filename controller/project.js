export const CreateProjects = async (data) => {
  try {
    const result = await axios.post(`${API}/Projects/add`, data);
    if (result.status == "ok") {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("CreateProjects ERR", error);
  }
};
export const GetProjectsByID = async (id) => {
  try {
    const result = await axios.get(`${API}/Projects/get/${id}`);
    if (result.status == "ok") {
      toast.success(result.data);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.log("GetProjects ERR", error);
  }
};
