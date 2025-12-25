import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/feature/todo/todoSilice.js"; // make sure the path is correct

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
