import {
  TREATEMENT_TYPE_LIST_REQUEST,
  TREATEMENT_TYPE_LIST_SUCCESS,
  TREATEMENT_TYPE_LIST_FAIL,
} from "./TreatementTypeConstants";

import * as api from "../api";

export const TreatementTypeList = () => async (dispatch) => {
  try {
    dispatch({ type: TREATEMENT_TYPE_LIST_REQUEST });

    const { data } = await api.getTreatementTypesAPI();

    dispatch({
      type: TREATEMENT_TYPE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TREATEMENT_TYPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};