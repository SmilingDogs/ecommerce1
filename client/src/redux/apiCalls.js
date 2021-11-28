import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerFailure,
  registerStart,
  registerSuccess
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const register = async (dispatch, newUserData) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", newUserData);

    dispatch(registerSuccess(res.status));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err.response);
    dispatch(loginFailure(err.response.data));
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
  }
};
