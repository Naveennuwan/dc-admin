import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../UserRedux/UserConstant.js";
import { Error } from "../../Components/ToastNotification";

import * as api from "../api";

export const login = (loginData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const res = await api.userLoginAPI(loginData);

    if (res.status === 200) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    }else if(res.response.status === 422){
      dispatch({
        type: USER_LOGIN_FAIL,
      });
      Error("Please Check Your Login Cridential");
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const logout = (navigate) => async (dispatch) => {
  await api.userLogout();

  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });

  navigate("/");
};
