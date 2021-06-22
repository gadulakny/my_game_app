import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {},
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
