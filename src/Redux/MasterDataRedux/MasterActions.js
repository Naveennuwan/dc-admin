import {
  MASTER_REQUEST,
  MASTER_SUCCESS,
  MASTER_FAIL,
  MASTER_UPDATE_REQUEST,
  MASTER_UPDATE_SUCCESS,
  MASTER_UPDATE_FAIL,
} from "./MasterConstants";

import * as api from "../api";

export const MasterLists = () => async (dispatch) => {
  try {
    dispatch({ type: MASTER_REQUEST });

    const { data } = await api.MasterAPI();

    dispatch({
      type: MASTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MASTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const MasterUpdate = (id, Master) => async (dispatch) => {
  try {
    dispatch({
      type: MASTER_UPDATE_REQUEST,
    });

    const { data } = await api.MasterUpdateAPI(id, Master);

    dispatch({
      type: MASTER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MASTER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};