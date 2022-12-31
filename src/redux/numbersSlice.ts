import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useAppSelector } from "./hook";
type userSliceType = {
  numbers: number[][];
};
const initialState: userSliceType = {
  numbers: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

const numbersSlice = createSlice({
  initialState,
  name: "numbers",
  reducers: {
    setNumbers(state: any, action: any) {
      state.numbers = action.payload;
    },
  },
});

export default numbersSlice.reducer;
export const { setNumbers } = numbersSlice.actions;
export const selectNumbers = (state: RootState) => state.numbers;

export const useNumbers = () => {
  const numbers = useAppSelector(selectNumbers);
  return numbers.numbers ? (numbers.numbers as number[][]) : null;
};
