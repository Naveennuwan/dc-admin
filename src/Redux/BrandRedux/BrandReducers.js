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
  BRAND_UPDATE_RESET,
} from "./BrandConstants";

export const BrandReducer = (state = { Brand: [] }, action) => {
  switch (action.type) {
    case ALL_BRAND_REQUEST:
      return { loading: true, Brand: [] };
    case ALL_BRAND_SUCCESS:
      return { loading: false, Brand: action.payload };
    case ALL_BRAND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BrandActiveReducer = (state = { Brand: [] }, action) => {
  switch (action.type) {
    case BRAND_REQUEST:
      return { loading: true, Brand: [] };
    case BRAND_SUCCESS:
      return { loading: false, Brand: action.payload };
    case BRAND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BrandRegisterReducer = (state = { Brand: [] }, action) => {
  switch (action.type) {
    case BRAND_REGISTER_REQUEST:
      return { loading: true, Brand: [] };
    case BRAND_REGISTER_SUCCESS:
      return { loading: false, success: true, Brand: action.payload };
    case BRAND_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BrandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_DELETE_REQUEST:
      return { loading: true, Brand: [] };
    case BRAND_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BrandUpdateReducer = (state = { Brand: {} }, action) => {
  switch (action.type) {
    case BRAND_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_UPDATE_SUCCESS:
      return { loading: false, success: true, Brand: action.payload };
    case BRAND_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case BRAND_UPDATE_RESET:
      return { Brand: {} };
    default:
      return state;
  }
};
