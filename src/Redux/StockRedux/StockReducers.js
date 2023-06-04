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

// export const BrandActiveReducer = (state = { Brand: [] }, action) => {
//   switch (action.type) {
//     case BRAND_REQUEST:
//       return { loading: true, Brand: [] };
//     case BRAND_SUCCESS:
//       return { loading: false, Brand: action.payload };
//     case BRAND_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

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

// export const BrandDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case BRAND_DELETE_REQUEST:
//       return { loading: true, Brand: [] };
//     case BRAND_DELETE_SUCCESS:
//       return { loading: false, success: true };
//     case BRAND_DELETE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const BrandUpdateReducer = (state = { Brand: {} }, action) => {
//   switch (action.type) {
//     case BRAND_UPDATE_REQUEST:
//       return { loading: true };
//     case BRAND_UPDATE_SUCCESS:
//       return { loading: false, success: true, Brand: action.payload };
//     case BRAND_UPDATE_FAIL:
//       return { loading: false, error: action.payload };
//     case BRAND_UPDATE_RESET:
//       return { Brand: {} };
//     default:
//       return state;
//   }
// };

// export const BrandDetailsReducer = (state = { Brand: {} }, action) => {
//   switch (action.type) {
//     case BRAND_DETAILS_REQUEST:
//       return { loading: true, ...state };
//     case BRAND_DETAILS_SUCCESS:
//       return { loading: false, job: action.payload };
//     case BRAND_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
