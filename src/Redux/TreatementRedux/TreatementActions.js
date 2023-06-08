import {
  ALL_TREATEMENT_LIST_REQUEST,
  ALL_TREATEMENT_LIST_SUCCESS,
  ALL_TREATEMENT_LIST_FAIL,
  TREATEMENT_LIST_REQUEST,
  TREATEMENT_LIST_SUCCESS,
  TREATEMENT_LIST_FAIL,
  TREATEMENT_REGISTER_REQUEST,
  TREATEMENT_REGISTER_SUCCESS,
  TREATEMENT_REGISTER_RESET,
  TREATEMENT_REGISTER_FAIL,
  TREATEMENT_DELETE_REQUEST,
  TREATEMENT_DELETE_SUCCESS,
  TREATEMENT_DELETE_FAIL,
  TREATEMENT_UPDATE_REQUEST,
  TREATEMENT_UPDATE_SUCCESS,
} from "./TreatementConstants";
import * as api from "../api";

export const TreatementList = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TREATEMENT_LIST_REQUEST });

    const { data } = await api.TreatementAllAPI();

    dispatch({
      type: ALL_TREATEMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TREATEMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const TreatementActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: TREATEMENT_LIST_REQUEST });

    const { data } = await api.TreatementAllAPI();

    dispatch({
      type: TREATEMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TREATEMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const TreatementRegister = (Treatement) => async (dispatch) => {
  try {
    dispatch({
      type: TREATEMENT_REGISTER_REQUEST,
    });
    const { data } = await api.TreatementRegisterAPI(Treatement);

    dispatch({
      type: TREATEMENT_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TREATEMENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const TreatementRegisterReset = () => async (dispatch) => {
  dispatch({
    type: TREATEMENT_REGISTER_RESET,
  });
};

export const TreatementDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TREATEMENT_DELETE_REQUEST,
    });

    await api.TreatementDeleteAPI(id);

    dispatch({
      type: TREATEMENT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TREATEMENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const TreatementUpdate = (id, Treatement) => async (dispatch) => {
  try {
    dispatch({
      type: TREATEMENT_UPDATE_REQUEST,
    });

    await api.TreatementUpdateAPI(id, Treatement);

    dispatch({
      type: TREATEMENT_UPDATE_SUCCESS,
    });
  } catch (error) {
    throw error;
  }
};