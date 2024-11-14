
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  userId: null,
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});


export default authSlice.reducer;
export const { setLogin, setLogout, setUserId, setUser } = authSlice.actions;