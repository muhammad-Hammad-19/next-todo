import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.push(action.payload);
    },
    deletF: (state, action) => {
      return state.filter((d, i) => i !== action.payload);
    },
    update: (state, action) => {
      const { id, title } = action.payload;
      const updtae = state.map((item, i) => {
        if (i === id) {
          return title.trim().length === 0 ? item : { ...item, title };
        }
        return item;
      });
      return updtae;
    },
  },
});
export const { deletF, increment, update } = counterSlice.actions;

export default counterSlice.reducer;
