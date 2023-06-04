import {
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAIL,
  DOCTOR_UPDATE_REQUEST,
  DOCTOR_UPDATE_SUCCESS,
  DOCTOR_UPDATE_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
} from "./DoctorConstants";

import * as api from "../api";

export const DoctorLists = () => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_LIST_REQUEST });

    const { data } = await api.DoctorAllAPI();

    console.log(data)

    dispatch({
      type: DOCTOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DoctorRegister = (Doctor) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_REGISTER_REQUEST,
    });

    const { data } = await api.DoctorRegisterAPI(Doctor);

    dispatch({
      type: DOCTOR_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DoctorDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_DELETE_REQUEST,
    });

    await api.DoctorDeleteAPI(id);

    dispatch({
      type: DOCTOR_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DoctorUpdate = (id,Information) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_UPDATE_REQUEST,
    });

    const { data } = await api.DoctorUpdateAPI(id,Information);

    dispatch({
      type: DOCTOR_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DoctorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_DETAILS_REQUEST })

    const { data } = await api.DoctorDetailsAPI(id);
    
    dispatch({
      type: DOCTOR_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DOCTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}