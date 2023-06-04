import {
  ALL_PATIANT_LIST_REQUEST,
  ALL_PATIANT_LIST_SUCCESS,
  ALL_PATIANT_LIST_FAIL,
  PATIANT_LIST_REQUEST,
  PATIANT_LIST_SUCCESS,
  PATIANT_LIST_FAIL,
  PATIANT_REGISTER_REQUEST,
  PATIANT_REGISTER_SUCCESS,
  PATIANT_REGISTER_FAIL,
  PATIANT_DELETE_REQUEST,
  PATIANT_DELETE_SUCCESS,
  PATIANT_DELETE_FAIL,
  PATIANT_UPDATE_REQUEST,
  PATIANT_UPDATE_SUCCESS,
  PATIANT_UPDATE_FAIL,
  PATIANT_DETAILS_REQUEST,
  PATIANT_DETAILS_SUCCESS,
  PATIANT_DETAILS_FAIL,
} from "./PatientConstants";

import * as api from "../api";

export const PatientAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PATIANT_LIST_REQUEST });

    const { data } = await api.PatientAllAPI();

    dispatch({
      type: ALL_PATIANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PATIANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PatientAllLists = () => async (dispatch) => {
  try {
    dispatch({ type: PATIANT_LIST_REQUEST });

    const { data } = await api.PatientAPI();

    dispatch({
      type: PATIANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PATIANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PatientRegister = (Patient) => async (dispatch) => {
  try {
    dispatch({
      type: PATIANT_REGISTER_REQUEST,
    });

    const { data } = await api.PatientRegisterAPI(Patient);

    dispatch({
      type: PATIANT_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PATIANT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PatientDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PATIANT_DELETE_REQUEST,
    });

    await api.PatientDeleteAPI(id);

    dispatch({
      type: PATIANT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PATIANT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PatientUpdate = (id, Patient) => async (dispatch) => {
  try {
    dispatch({
      type: PATIANT_UPDATE_REQUEST,
    });

    const { data } = await api.PatientUpdateAPI(id, Patient);

    dispatch({
      type: PATIANT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PATIANT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const PatientDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PATIANT_DETAILS_REQUEST });

    const { data } = await api.PatientDeleteAPI(id);
    
    dispatch({
      type: PATIANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PATIANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
