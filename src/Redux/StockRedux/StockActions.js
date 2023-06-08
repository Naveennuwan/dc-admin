import {
  ALL_STOCK_REQUEST,
  ALL_STOCK_SUCCESS,
  ALL_STOCK_FAIL,
  STOCK_REGISTER_REQUEST,
  STOCK_REGISTER_SUCCESS,
  STOCK_REGISTER_FAIL,
} from "./StockConstants";

import * as api from "../api";

export const StockLists = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_STOCK_REQUEST });

    const { data } = await api.StockAPI();

    dispatch({
      type: ALL_STOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_STOCK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const StockRegister = (stock) => async (dispatch) => {
  try {
    dispatch({
      type: STOCK_REGISTER_REQUEST,
    });

    const { data } = await api.StockRegisterAPI(stock);

    dispatch({
      type: STOCK_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STOCK_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
