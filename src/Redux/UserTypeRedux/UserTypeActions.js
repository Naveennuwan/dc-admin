import {
  USER_TYPE_REQUEST,
  USER_TYPE_SUCCESS,
  USER_TYPE_FAIL,
} from "./UserTypeConstants";

import * as api from "../api";

export const UserTypeList = () => async (dispatch) => {
  try {
    dispatch({ type: USER_TYPE_REQUEST });

    const { data } = await api.getUserTypesAPI();

    dispatch({
      type: USER_TYPE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_TYPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};