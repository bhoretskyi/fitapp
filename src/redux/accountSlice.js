import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "account",
  initialState: { balance: 500 },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;
export const accountReducer = slice.reducer;
