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
  DRUG_UPDATE_RESET,
} from "./DrugConstants";

export const DrugReducer = (state = { Drug: [] }, action) => {
  switch (action.type) {
    case ALL_DRUG_LIST_REQUEST:
      return { loading: true, Drug: [] };
    case ALL_DRUG_LIST_SUCCESS:
      return { loading: false, Drug: action.payload };
    case ALL_DRUG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DrugActiveReducer = (state = { Drug: [] }, action) => {
  switch (action.type) {
    case DRUG_LIST_REQUEST:
      return { loading: true, Drug: [] };
    case DRUG_LIST_SUCCESS:
      return { loading: false, Drug: action.payload };
    case DRUG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DrugRegisterReducer = (state = { Drug: [] }, action) => {
  switch (action.type) {
    case DRUG_REGISTER_REQUEST:
      return { loading: true, Drug: [] };
    case DRUG_REGISTER_SUCCESS:
      return { loading: false, success: true, Drug: action.payload };
    case DRUG_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case DRUG_REGISTER_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};

export const DrugDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DRUG_DELETE_REQUEST:
      return { loading: true, Drug: [] };
    case DRUG_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DRUG_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DrugUpdateReducer = (state = { Drug: {} }, action) => {
  switch (action.type) {
    case DRUG_UPDATE_REQUEST:
      return { loading: true };
    case DRUG_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DRUG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DRUG_UPDATE_RESET:
      return { Drug: {} };
    default:
      return state;
  }
};
