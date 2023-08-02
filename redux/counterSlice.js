import { getProjects } from "./actions";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dataBase: [],
  projects: [],
  createStatus: null,
  status: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getDatas: (state, { payload }) => {
      console.log("PAYLOAD", payload);
      state.dataBase = payload;
    },
  },
  extraReducers: {
    [getProjects.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload;
      state.createStatus = "success";
    },
    [getProjects.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});
export const { getDatas } = counterSlice.actions;
export default counterSlice.reducer;
