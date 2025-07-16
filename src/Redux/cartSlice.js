import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) item.qty += 1;
    },
    DecrementQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    }
  },
});

export const { AddItem, RemoveItem,IncrementQty,DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;
