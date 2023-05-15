import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface stateType {
  value: number;
}

const initialState: stateType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: stateType) => {
      state.value += 1;
    },
    decrement: (state: stateType) => {
      state.value -= 1;
    },
    incrementByAmount: (state: stateType, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
