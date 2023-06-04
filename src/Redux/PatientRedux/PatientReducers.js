import {
  ALL_PATIANT_LIST_REQUEST,
  ALL_PATIANT_LIST_SUCCESS,
  ALL_PATIANT_LIST_FAIL,
  PATIANT_LIST_REQUEST,
  PATIANT_LIST_SUCCESS,
  PATIANT_LIST_FAIL,
  PATIANT_REGISTER_REQUEST,
  PATIANT_REGISTER_SUCCESS,
  PATIANT_REGISTER_FAIL,
  PATIANT_DELETE_REQUEST,
  PATIANT_DELETE_SUCCESS,
  PATIANT_DELETE_FAIL,
  PATIANT_UPDATE_REQUEST,
  PATIANT_UPDATE_SUCCESS,
  PATIANT_UPDATE_FAIL,
  PATIANT_UPDATE_RESET,
  PATIANT_DETAILS_REQUEST,
  PATIANT_DETAILS_SUCCESS,
  PATIANT_DETAILS_FAIL,
} from "./PatientConstants";

export const PatientReducer = (state = { Patient: [] }, action) => {
  switch (action.type) {
    case ALL_PATIANT_LIST_REQUEST:
      return { loading: true, Patient: [] };
    case ALL_PATIANT_LIST_SUCCESS:
      return { loading: false, Patient: action.payload };
    case ALL_PATIANT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PatientActiveReducer = (state = { Patient: [] }, action) => {
  switch (action.type) {
    case PATIANT_LIST_REQUEST:
      return { loading: true, Patient: [] };
    case PATIANT_LIST_SUCCESS:
      return { loading: false, Patient: action.payload };
    case PATIANT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PatientRegisterReducer = (state = { Patient: [] }, action) => {
  switch (action.type) {
    case PATIANT_REGISTER_REQUEST:
      return { loading: true, Patient: [] };
    case PATIANT_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        Patient: action.payload,
      };
    case PATIANT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PatientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIANT_DELETE_REQUEST:
      return { loading: true, Patient: [] };
    case PATIANT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PATIANT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PatientUpdateReducer = (state = { Patient: {} }, action) => {
  switch (action.type) {
    case PATIANT_UPDATE_REQUEST:
      return { loading: true };
    case PATIANT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PATIANT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PATIANT_UPDATE_RESET:
      return { Patient: {} };
    default:
      return state;
  }
};

export const PatientDetailsReducer = (state = { Patient: {} }, action) => {
  switch (action.type) {
    case PATIANT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PATIANT_DETAILS_SUCCESS:
      return { loading: false, Patient: action.payload };
    case PATIANT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
