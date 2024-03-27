import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [1,2,3,4,5],
  inProgress: [],
  esqa: [],
  completed: [],
};

export const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    moveInProgress: (state, action) => {
      state.todo = state.todo.filter((eachTask)=>eachTask!==action.payload);
      state.inProgress = [...state.inProgress, action.payload];
    },
    moveESQA: (state, action) => {
      state.inProgress = state.inProgress.filter((eachTask)=>eachTask!==action.payload);
      state.esqa = [...state.esqa, action.payload];
    },
    moveCompleted: (state, action) => {
      state.esqa = state.esqa.filter((eachTask)=>eachTask!==action.payload);
      state.completed = [...state.completed, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { moveInProgress, moveESQA, moveCompleted } = task.actions;

export default task.reducer;
