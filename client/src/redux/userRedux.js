import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    registrationStatus: "",
    errorResponse: ""
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload; //todo action.payload === {...others, accessToken}
      state.error = false;
      state.errorResponse = "";
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorResponse = action.payload; //todo action.payload === err.response.data
    },

    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.registrationStatus = action.payload //todo action.payload === res.status == 201
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;

    },

    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerFailure,
  registerSuccess
} = userSlice.actions;
export default userSlice.reducer;
