import { configureStore } from "@reduxjs/toolkit";
import { memesReducer } from "../reducer/memesSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});