import {
  ALL_DISEASE_REQUEST,
  ALL_DISEASE_SUCCESS,
  ALL_DISEASE_FAIL,
  DISEASE_REQUEST,
  DISEASE_SUCCESS,
  DISEASE_FAIL,
  DISEASE_REGISTER_REQUEST,
  DISEASE_REGISTER_SUCCESS,
  DISEASE_REGISTER_FAIL,
  DISEASE_DELETE_REQUEST,
  DISEASE_DELETE_SUCCESS,
  DISEASE_DELETE_FAIL,
  DISEASE_UPDATE_REQUEST,
  DISEASE_UPDATE_SUCCESS,
  DISEASE_UPDATE_FAIL,
} from "./DiseaseConstants";

import * as api from "../api";

export const DiseaseLists = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_DISEASE_REQUEST });

    const { data } = await api.DiseaseAllAPI();

    dispatch({
      type: ALL_DISEASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_DISEASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DiseaseActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: DISEASE_REQUEST });

    const { data } = await api.DiseaseAPI();

    dispatch({
      type: DISEASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DiseaseRegister = (Disease) => async (dispatch) => {
  try {
    dispatch({
      type: DISEASE_REGISTER_REQUEST,
    });

    const { data } = await api.DiseaseRegisterAPI(Disease);

    dispatch({
      type: DISEASE_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DiseaseDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DISEASE_DELETE_REQUEST,
    });

    await api.DiseaseDeleteAPI(id);

    dispatch({
      type: DISEASE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const DiseaseUpdate = (id, Disease) => async (dispatch) => {
  try {
    dispatch({
      type: DISEASE_UPDATE_REQUEST,
    });

    const { data } = await api.DiseaseUpdateAPI(id, Disease);

    dispatch({
      type: DISEASE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};