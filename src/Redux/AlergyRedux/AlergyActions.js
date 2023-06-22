import {
  ALL_ALERGY_REQUEST,
  ALL_ALERGY_SUCCESS,
  ALL_ALERGY_FAIL,
  ALERGY_REQUEST,
  ALERGY_SUCCESS,
  ALERGY_FAIL,
  ALERGY_REGISTER_REQUEST,
  ALERGY_REGISTER_SUCCESS,
  ALERGY_REGISTER_FAIL,
  ALERGY_DELETE_REQUEST,
  ALERGY_DELETE_SUCCESS,
  ALERGY_DELETE_FAIL,
  ALERGY_UPDATE_REQUEST,
  ALERGY_UPDATE_SUCCESS,
  ALERGY_UPDATE_FAIL,
} from "./AlergyConstants";

import * as api from "../api";

export const AlergyLists = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ALERGY_REQUEST });

    const { data } = await api.AlergyAllAPI();

    dispatch({
      type: ALL_ALERGY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ALERGY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AlergyActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: ALERGY_REQUEST });

    const { data } = await api.AlergyAPI();

    dispatch({
      type: ALERGY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERGY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AlergyRegister = (Alergy) => async (dispatch) => {
  try {
    dispatch({
      type: ALERGY_REGISTER_REQUEST,
    });

    const { data } = await api.AlergyRegisterAPI(Alergy);

    dispatch({
      type: ALERGY_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERGY_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AlergyDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ALERGY_DELETE_REQUEST,
    });

    await api.AlergyDeleteAPI(id);

    dispatch({
      type: ALERGY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ALERGY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const AlergyUpdate = (id, Alergy) => async (dispatch) => {
  try {
    dispatch({
      type: ALERGY_UPDATE_REQUEST,
    });

    const { data } = await api.AlergyUpdateAPI(id, Alergy);

    dispatch({
      type: ALERGY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALERGY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};