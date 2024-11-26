
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isRegistered: true,
  isLoggedIn: false,
  userId: null,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
    },
    setUserId: (state, action) => {
      state.userId = action.payload; // Setze die User-ID
    },
    setUser: (state, action) => {
      state.user = action.payload; // Setze die Benutzerdaten
    },
    setIsRegistered: (state, action)=>{
      state.isRegistered = action.payload;
    }

  },
});


export default authSlice.reducer;
export const { setLogin, setLogout, setUserId, setUser, setIsRegistered } = authSlice.actions;