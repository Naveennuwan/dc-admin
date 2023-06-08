import {
  ALL_CATEGORY_LIST_REQUEST,
  ALL_CATEGORY_LIST_SUCCESS,
  ALL_CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_REGISTER_REQUEST,
  CATEGORY_REGISTER_SUCCESS,
  CATEGORY_REGISTER_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
} from "./CategoryConstants";

import * as api from "../api";

export const CategoryList = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_LIST_REQUEST });

    const { data } = await api.CategoryAllAPI();

    dispatch({
      type: ALL_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CategoryActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    const { data } = await api.CategoryAPI();

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CategoryRegister = (job_type) => async (dispatch) => {
  console.log(job_type);
  try {
    dispatch({
      type: CATEGORY_REGISTER_REQUEST,
    });

    const { data } = await api.CategoryRegisterAPI(job_type);

    dispatch({
      type: CATEGORY_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CategoryDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_DELETE_REQUEST,
    });

    await api.CategoryDeleteAPI(id);

    dispatch({
      type: CATEGORY_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const CategoryUpdate = (id, job_type) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_UPDATE_REQUEST,
    });

    const { data } = await api.CategoryUpdateAPI(id, job_type);

    dispatch({
      type: CATEGORY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};