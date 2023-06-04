import {
  ALL_SUPPLIER_LIST_REQUEST,
  ALL_SUPPLIER_LIST_SUCCESS,
  ALL_SUPPLIER_LIST_FAIL,
  SUPPLIER_LIST_REQUEST,
  SUPPLIER_LIST_SUCCESS,
  SUPPLIER_LIST_FAIL,
  SUPPLIER_REGISTER_REQUEST,
  SUPPLIER_REGISTER_SUCCESS,
  SUPPLIER_REGISTER_FAIL,
  SUPPLIER_DELETE_REQUEST,
  SUPPLIER_DELETE_SUCCESS,
  SUPPLIER_DELETE_FAIL,
  SUPPLIER_UPDATE_REQUEST,
  SUPPLIER_UPDATE_SUCCESS,
  SUPPLIER_UPDATE_FAIL,
  SUPPLIER_UPDATE_RESET,
  SUPPLIER_DETAILS_REQUEST,
  SUPPLIER_DETAILS_SUCCESS,
  SUPPLIER_DETAILS_FAIL,
} from "./SupplierConstants";

export const SupplierReducer = (state = { Supplier: [] }, action) => {
  switch (action.type) {
    case ALL_SUPPLIER_LIST_REQUEST:
      return { loading: true, Supplier: [] };
    case ALL_SUPPLIER_LIST_SUCCESS:
      return { loading: false, Supplier: action.payload };
    case ALL_SUPPLIER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SupplierActiveReducer = (state = { Supplier: [] }, action) => {
  switch (action.type) {
    case SUPPLIER_LIST_REQUEST:
      return { loading: true, Supplier: [] };
    case SUPPLIER_LIST_SUCCESS:
      return { loading: false, Supplier: action.payload };
    case SUPPLIER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SupplierRegisterReducer = (state = { Supplier: [] }, action) => {
  switch (action.type) {
    case SUPPLIER_REGISTER_REQUEST:
      return { loading: true, Supplier: [] };
    case SUPPLIER_REGISTER_SUCCESS:
      return { loading: false, success: true, Supplier: action.payload };
    case SUPPLIER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SupplierDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SUPPLIER_DELETE_REQUEST:
      return { loading: true, Supplier: [] };
    case SUPPLIER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case SUPPLIER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SupplierUpdateReducer = (state = { Supplier: {} }, action) => {
  switch (action.type) {
    case SUPPLIER_UPDATE_REQUEST:
      return { loading: true };
    case SUPPLIER_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case SUPPLIER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case SUPPLIER_UPDATE_RESET:
      return { Supplier: {} };
    default:
      return state;
  }
};

export const SupplierDetailsReducer = (state = { Supplier: {} }, action) => {
  switch (action.type) {
    case SUPPLIER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SUPPLIER_DETAILS_SUCCESS:
      return { loading: false, Supplier: action.payload };
    case SUPPLIER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
