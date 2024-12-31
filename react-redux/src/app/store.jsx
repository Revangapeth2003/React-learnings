import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../slices/UserSlice";
//../Components/slices
const store = configureStore({
  reducer: {
    userInfo: UserSlice,
  },
});
export default store;
