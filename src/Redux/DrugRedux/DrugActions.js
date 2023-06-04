import {
    ALL_DRUG_LIST_REQUEST,
    ALL_DRUG_LIST_SUCCESS,
    ALL_DRUG_LIST_FAIL,
    DRUG_LIST_REQUEST,
    DRUG_LIST_SUCCESS,
    DRUG_LIST_FAIL,
    DRUG_REGISTER_REQUEST,
    DRUG_REGISTER_SUCCESS,
    DRUG_REGISTER_FAIL,
    DRUG_REGISTER_RESET,
    DRUG_DELETE_REQUEST,
    DRUG_DELETE_SUCCESS,
    DRUG_DELETE_FAIL,
    DRUG_UPDATE_REQUEST,
    DRUG_UPDATE_SUCCESS,
    DRUG_UPDATE_FAIL,
  } from "./DrugConstants.js";
  import * as api from "../api.js";
  
  export const DrugList = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_DRUG_LIST_REQUEST });
  
      const { data } = await api.DrugAllAPI();
  
      dispatch({
        type: ALL_DRUG_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_DRUG_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const DrugActiveList = () => async (dispatch) => {
    try {
      dispatch({ type: DRUG_LIST_REQUEST });
  
      const { data } = await api.DrugAPI();
  
      dispatch({
        type: DRUG_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DRUG_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const DrugRegister = (Drug) => async (dispatch) => {
    try {
      dispatch({
        type: DRUG_REGISTER_REQUEST,
      });
      const { data } = await api.DrugRegisterAPI(Drug);
  
      if (data.error === "Drug Name Exists") {
        throw "Drug Name is already exists";
      } else {
        dispatch({
          type: DRUG_REGISTER_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: DRUG_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const DrugRegisterReset = () => async (dispatch) => {
    dispatch({
      type: DRUG_REGISTER_RESET,
    });
  };
  
  export const DrugDelete = (id) => async (dispatch) => {
    try {
      dispatch({
        type: DRUG_DELETE_REQUEST,
      });
  
      await api.DrugDeleteAPI(id);
  
      dispatch({
        type: DRUG_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DRUG_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const DrugUpdate = (id, Drug) => async (dispatch) => {
    try {
      dispatch({
        type: DRUG_UPDATE_REQUEST,
      });
  
      const { data } = await api.DrugUpdateAPI(id, Drug);
  
      if (data.error === "Sorry, Drug Name Exists.") {
        throw ("Drug Name is already exists");
      } else {
        dispatch({
          type: DRUG_UPDATE_SUCCESS,
        });
      }
    } catch (error) {
      dispatch({
        type: DRUG_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };