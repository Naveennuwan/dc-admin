import {
  ALL_ALERGY_REQUEST,
  ALL_ALERGY_SUCCESS,
  ALL_ALERGY_FAIL,
  ALERGY_REQUEST,
  ALERGY_SUCCESS,
  ALERGY_FAIL,
  ALERGY_REGISTER_REQUEST,
  ALERGY_REGISTER_SUCCESS,
  ALERGY_REGISTER_FAIL,
  ALERGY_DELETE_REQUEST,
  ALERGY_DELETE_SUCCESS,
  ALERGY_DELETE_FAIL,
  ALERGY_UPDATE_REQUEST,
  ALERGY_UPDATE_SUCCESS,
  ALERGY_UPDATE_FAIL,
  ALERGY_UPDATE_RESET,
} from "./AlergyConstants";

export const AlergyReducer = (state = { Alergy: [] }, action) => {
  switch (action.type) {
    case ALL_ALERGY_REQUEST:
      return { loading: true, Alergy: [] };
    case ALL_ALERGY_SUCCESS:
      return { loading: false, Alergy: action.payload };
    case ALL_ALERGY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AlergyActiveReducer = (state = { Alergy: [] }, action) => {
  switch (action.type) {
    case ALERGY_REQUEST:
      return { loading: true, Alergy: [] };
    case ALERGY_SUCCESS:
      return { loading: false, Alergy: action.payload };
    case ALERGY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AlergyRegisterReducer = (state = { Alergy: [] }, action) => {
  switch (action.type) {
    case ALERGY_REGISTER_REQUEST:
      return { loading: true, Alergy: [] };
    case ALERGY_REGISTER_SUCCESS:
      return { loading: false, success: true, Alergy: action.payload };
    case ALERGY_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AlergyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERGY_DELETE_REQUEST:
      return { loading: true, Alergy: [] };
    case ALERGY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ALERGY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AlergyUpdateReducer = (state = { Alergy: {} }, action) => {
  switch (action.type) {
    case ALERGY_UPDATE_REQUEST:
      return { loading: true };
    case ALERGY_UPDATE_SUCCESS:
      return { loading: false, success: true, Alergy: action.payload };
    case ALERGY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ALERGY_UPDATE_RESET:
      return { Alergy: {} };
    default:
      return state;
  }
};
