import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

//two states for now in order to set up form handling.
export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;

//important link https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978
