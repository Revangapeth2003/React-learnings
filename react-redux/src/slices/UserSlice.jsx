import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //reducers is an function.It is used to handle the state
    //All the conditions will be written in reducers
    setUsers: (state, action) => {
      //reducers parameter kulla eppothume (state,action) nu solli oru parameter pass agum.
      //    state.that stateName - !important
      //    action.payload - !important
      state.users = [...state.users, ...action.payload]; // Corrected 'user' to 'users' and spread action.payload
    },
    deleteUsers: (state, action) => {
      state.users = state.users.filter((Users, index) => {
        index !== action.payload;
      });
    },
  },
});

export const { setUsers, deleteUsers } = userSlice.actions; // Exporting the action
export default userSlice.reducer; // Exporting the reducer
