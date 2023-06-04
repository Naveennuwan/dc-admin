import {
  ALL_SUPPLIER_LIST_REQUEST,
  ALL_SUPPLIER_LIST_SUCCESS,
  ALL_SUPPLIER_LIST_FAIL,
  SUPPLIER_LIST_REQUEST,
  SUPPLIER_LIST_SUCCESS,
  SUPPLIER_LIST_FAIL,
  SUPPLIER_REGISTER_REQUEST,
  SUPPLIER_REGISTER_SUCCESS,
  SUPPLIER_REGISTER_RESET,
  SUPPLIER_REGISTER_FAIL,
  SUPPLIER_DELETE_REQUEST,
  SUPPLIER_DELETE_SUCCESS,
  SUPPLIER_DELETE_FAIL,
  SUPPLIER_UPDATE_REQUEST,
  SUPPLIER_UPDATE_SUCCESS,
  SUPPLIER_UPDATE_FAIL,
  SUPPLIER_DETAILS_REQUEST,
  SUPPLIER_DETAILS_SUCCESS,
  SUPPLIER_DETAILS_FAIL,
} from "./SupplierConstants";
import * as api from "../api";

export const SupplierList = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SUPPLIER_LIST_REQUEST });

    const { data } = await api.SupplierAllAPI();
    dispatch({
      type: ALL_SUPPLIER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_SUPPLIER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupplierActiveList = () => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_LIST_REQUEST });

    const { data } = await api.SupplierAPI();
    dispatch({
      type: SUPPLIER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPPLIER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupplierRegister = (SUPPLIER) => async (dispatch) => {
  try {
    dispatch({
      type: SUPPLIER_REGISTER_REQUEST,
    });

    const { data } = await api.SupplierRegisterAPI(SUPPLIER);
    if (data.error === "Particular Condition Name Exists") {
      throw "Particular Condition Name is already exists";
    } else {
      dispatch({
        type: SUPPLIER_REGISTER_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const SupplierRegisterReset = () => async (dispatch) => {
  dispatch({
    type: SUPPLIER_REGISTER_RESET,
  });
};

export const SupplierDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SUPPLIER_DELETE_REQUEST,
    });

    await api.SupplierDeleteAPI(id);

    dispatch({
      type: SUPPLIER_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SUPPLIER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupplierUpdate = (id, Supplier) => async (dispatch) => {
  try {
    dispatch({
      type: SUPPLIER_UPDATE_REQUEST,
    });
    const { data, status } = await api.SupplierUpdateAPI(id, Supplier);

    if (status === 200) {
      dispatch({
        type: SUPPLIER_UPDATE_SUCCESS,
      });
    }
  } catch (error) {
    dispatch({
      type: SUPPLIER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SupplierDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUPPLIER_DETAILS_REQUEST });
    const { data } = await api.SupplierDetailsAPI(id);
    dispatch({
      type: SUPPLIER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUPPLIER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
