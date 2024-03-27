import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/lib/task";
export const makeStore = ()=> configureStore({
  reducer: {
    task: taskReducer
  }
});
