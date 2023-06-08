import {
  ALL_BRAND_REQUEST,
  ALL_BRAND_SUCCESS,
  ALL_BRAND_FAIL,
  BRAND_REQUEST,
  BRAND_SUCCESS,
  BRAND_FAIL,
  BRAND_REGISTER_REQUEST,
  BRAND_REGISTER_SUCCESS,
  BRAND_REGISTER_FAIL,
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_UPDATE_REQUEST,
  BRAND_UPDATE_SUCCESS,
  BRAND_UPDATE_FAIL,
} from "./BrandConstants";

import * as api from "../api";

export const BrandLists = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BRAND_REQUEST });

    const { data } = await api.BrandAllAPI();

    dispatch({
      type: ALL_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BRAND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const BrandActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: BRAND_REQUEST });

    const { data } = await api.BrandAPI();

    dispatch({
      type: BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRAND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const BrandRegister = (Brand) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_REGISTER_REQUEST,
    });

    const { data } = await api.BrandRegisterAPI(Brand);

    dispatch({
      type: BRAND_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRAND_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const BrandDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_DELETE_REQUEST,
    });

    await api.BrandDeleteAPI(id);

    dispatch({
      type: BRAND_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: BRAND_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const BrandUpdate = (id, Brand) => async (dispatch) => {
  try {
    dispatch({
      type: BRAND_UPDATE_REQUEST,
    });

    const { data } = await api.BrandUpdateAPI(id, Brand);

    dispatch({
      type: BRAND_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRAND_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};