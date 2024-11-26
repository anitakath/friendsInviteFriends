import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friendsList: [],
  selectedFriends: []
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setFriendsList: (state, action) => {
     
    },
    setSelectedFriends: (state, action) => {
      
    },

  },
});

export const {
  addSentInvitation,
  addReceivedInvitation,
  acceptInvitation,
  rejectInvitation,
} = friendsSlice.actions;

export default friendsSlice.reducer;
