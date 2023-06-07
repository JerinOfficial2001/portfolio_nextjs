const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  dataBase: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getDatas: (state, { payload }) => {
      console.log("PAYLOAD",payload);
      state.dataBase = payload;
    },
  },
});
export const { getDatas } = counterSlice.actions;
export default counterSlice.reducer;
