import {
  PATIENT_TYPE_LIST_REQUEST,
  PATIENT_TYPE_LIST_SUCCESS,
  PATIENT_TYPE_LIST_FAIL,
} from "./PatientTypeConstants";

import * as api from "../api";

export const PatientTypeAction = () => async (dispatch) => {
  try {
    dispatch({ type: PATIENT_TYPE_LIST_REQUEST });

    const { data } = await api.getPatientTypesAPI();

    dispatch({
      type: PATIENT_TYPE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PATIENT_TYPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};