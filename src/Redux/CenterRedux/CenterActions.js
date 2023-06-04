import {
  CENTER_REQUEST,
  CENTER_SUCCESS,
  CENTER_FAIL,
} from "./CenterConstants";

import * as api from "../api";

export const GetCenters = () => async (dispatch) => {
  try {
    dispatch({ type: CENTER_REQUEST });

    const { data } = await api.getCenterAPI();

    dispatch({
      type: CENTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CENTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};