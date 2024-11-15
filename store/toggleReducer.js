import { Mode } from "@/constants/Colors";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: 0,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      state.colorScheme = action.payload; // Setze den Farbmodus auf den übergebenen Wert
    },
    toggleColorScheme: (state) => {
      state.colorScheme = (state.colorScheme + 1) % Mode.length;// Toggle zwischen zwei Modi (0 und 1)
    },
  },
});

export const { setColorScheme, toggleColorScheme } = toggleSlice.actions;
export default toggleSlice.reducer;
