import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  receivedInvitations: [],
  sentInvitations: [],
  acceptedInvitations: [],
  rejectedInvitations: [],
};

const invitationSlice = createSlice({
  name: "invitations",
  initialState,
  reducers: {
    addSentInvitation: (state, action) => {
      state.sentInvitations.push(action.payload);
    },
    addReceivedInvitation: (state, action) => {
      state.receivedInvitations.push(action.payload);
    },
    acceptInvitation: (state, action) => {
      const index = state.receivedInvitations.findIndex(
        (invite) => invite.id === action.payload.id
      );
      if (index !== -1) {
        const [acceptedInvite] = state.receivedInvitations.splice(index, 1);
        state.acceptedInvitations.push(acceptedInvite);
      }
    },
    rejectInvitation: (state, action) => {
      const index = state.receivedInvitations.findIndex(
        (invite) => invite.id === action.payload.id
      );
      if (index !== -1) {
        const [rejectedInvite] = state.receivedInvitations.splice(index, 1);
        state.rejectedInvitations.push(rejectedInvite);
      }
    },
  },
});


export const {
  addSentInvitation,
  addReceivedInvitation,
  acceptInvitation,
  rejectInvitation,
} = invitationSlice.actions;

export default invitationSlice.reducer;