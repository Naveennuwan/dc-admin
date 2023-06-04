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

// export const BrandActiveList = () => async (dispatch) => {
//   try {
//     dispatch({ type: BRAND_REQUEST });

//     const { data } = await api.BrandAPI();

//     dispatch({
//       type: BRAND_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: BRAND_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

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

// export const BrandDelete = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: BRAND_DELETE_REQUEST,
//     });

//     await api.BrandDeleteAPI(id);

//     dispatch({
//       type: BRAND_DELETE_SUCCESS,
//     });
//   } catch (error) {
//     dispatch({
//       type: BRAND_DELETE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const BrandUpdate = (id, Brand) => async (dispatch) => {
//   try {
//     dispatch({
//       type: BRAND_UPDATE_REQUEST,
//     });

//     const { data } = await api.BrandUpdateAPI(id, Brand);

//     dispatch({
//       type: BRAND_UPDATE_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: BRAND_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const BrandDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: BRAND_DETAILS_REQUEST });

//     const { data } = await api.BrandDetailsAPI(id);

//     dispatch({
//       type: BRAND_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: BRAND_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
