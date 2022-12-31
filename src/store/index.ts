import { configureStore } from "@reduxjs/toolkit";
import numbersSlice from "../redux/numbersSlice";

export const store = configureStore({
  reducer: {
    numbers: numbersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
