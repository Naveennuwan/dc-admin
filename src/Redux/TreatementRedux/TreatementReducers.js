import {
  ALL_TREATEMENT_LIST_REQUEST,
  ALL_TREATEMENT_LIST_SUCCESS,
  ALL_TREATEMENT_LIST_FAIL,
  TREATEMENT_LIST_REQUEST,
  TREATEMENT_LIST_SUCCESS,
  TREATEMENT_LIST_FAIL,
  TREATEMENT_REGISTER_REQUEST,
  TREATEMENT_REGISTER_SUCCESS,
  TREATEMENT_REGISTER_FAIL,
  TREATEMENT_REGISTER_RESET,
  TREATEMENT_DELETE_REQUEST,
  TREATEMENT_DELETE_SUCCESS,
  TREATEMENT_DELETE_FAIL,
  TREATEMENT_DETAILS_REQUEST,
  TREATEMENT_DETAILS_SUCCESS,
  TREATEMENT_DETAILS_FAIL,
  TREATEMENT_UPDATE_REQUEST,
  TREATEMENT_UPDATE_SUCCESS,
  TREATEMENT_UPDATE_FAIL,
  TREATEMENT_UPDATE_RESET,
} from "./TreatementConstants";

export const TreatementListReducer = (state = { Treatement: [] }, action) => {
  switch (action.type) {
    case ALL_TREATEMENT_LIST_REQUEST:
      return { loading: true, Treatement: [] };
    case ALL_TREATEMENT_LIST_SUCCESS:
      return { loading: false, Treatement: action.payload };
    case ALL_TREATEMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TreatementActiveListReducer = (
  state = { Treatement: [] },
  action
) => {
  switch (action.type) {
    case TREATEMENT_LIST_REQUEST:
      return { loading: true, Treatement: [] };
    case TREATEMENT_LIST_SUCCESS:
      return { loading: false, Treatement: action.payload };
    case TREATEMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TreatementDetailsReducer = (
  state = { treatement: {} },
  action
) => {
  switch (action.type) {
    case TREATEMENT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case TREATEMENT_DETAILS_SUCCESS:
      return { loading: false, treatement: action.payload };
    case TREATEMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TreatementRegisterReducer = (
  state = { Treatement: [] },
  action
) => {
  switch (action.type) {
    case TREATEMENT_REGISTER_REQUEST:
      return { loading: true, Treatement: [] };
    case TREATEMENT_REGISTER_SUCCESS:
      return { loading: false, success: true, Treatement: action.payload };
    case TREATEMENT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case TREATEMENT_REGISTER_RESET:
      return { loading: false, success: false, error: null };
    default:
      return state;
  }
};

export const TreatementDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TREATEMENT_DELETE_REQUEST:
      return { loading: true, Treatement: [] };
    case TREATEMENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TREATEMENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const TreatementUpdateReducer = (state = { Treatement: {} }, action) => {
  switch (action.type) {
    case TREATEMENT_UPDATE_REQUEST:
      return { loading: true };
    case TREATEMENT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case TREATEMENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case TREATEMENT_UPDATE_RESET:
      return { Treatement: {} };
    default:
      return state;
  }
};
