import {
  ALL_STOCK_REQUEST,
  ALL_STOCK_SUCCESS,
  ALL_STOCK_FAIL,
  STOCK_REGISTER_REQUEST,
  STOCK_REGISTER_SUCCESS,
  STOCK_REGISTER_FAIL,
} from "./StockConstants";

export const StockReducer = (state = { Stock: [] }, action) => {
  switch (action.type) {
    case ALL_STOCK_REQUEST:
      return { loading: true, Stock: [] };
    case ALL_STOCK_SUCCESS:
      return { loading: false, Stock: action.payload };
    case ALL_STOCK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const StockRegisterReducer = (state = { Stock: [] }, action) => {
  switch (action.type) {
    case STOCK_REGISTER_REQUEST:
      return { loading: true, Stock: [] };
    case STOCK_REGISTER_SUCCESS:
      return { loading: false, success: true, Stock: action.payload };
    case STOCK_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};