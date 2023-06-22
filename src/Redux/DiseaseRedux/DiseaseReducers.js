import {
  ALL_DISEASE_REQUEST,
  ALL_DISEASE_SUCCESS,
  ALL_DISEASE_FAIL,
  DISEASE_REQUEST,
  DISEASE_SUCCESS,
  DISEASE_FAIL,
  DISEASE_REGISTER_REQUEST,
  DISEASE_REGISTER_SUCCESS,
  DISEASE_REGISTER_FAIL,
  DISEASE_DELETE_REQUEST,
  DISEASE_DELETE_SUCCESS,
  DISEASE_DELETE_FAIL,
  DISEASE_UPDATE_REQUEST,
  DISEASE_UPDATE_SUCCESS,
  DISEASE_UPDATE_FAIL,
  DISEASE_UPDATE_RESET,
} from "./DiseaseConstants";

export const DiseaseReducer = (state = { Disease: [] }, action) => {
  switch (action.type) {
    case ALL_DISEASE_REQUEST:
      return { loading: true, Disease: [] };
    case ALL_DISEASE_SUCCESS:
      return { loading: false, Disease: action.payload };
    case ALL_DISEASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DiseaseActiveReducer = (state = { Disease: [] }, action) => {
  switch (action.type) {
    case DISEASE_REQUEST:
      return { loading: true, Disease: [] };
    case DISEASE_SUCCESS:
      return { loading: false, Disease: action.payload };
    case DISEASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DiseaseRegisterReducer = (state = { Disease: [] }, action) => {
  switch (action.type) {
    case DISEASE_REGISTER_REQUEST:
      return { loading: true, Disease: [] };
    case DISEASE_REGISTER_SUCCESS:
      return { loading: false, success: true, Disease: action.payload };
    case DISEASE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DiseaseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DISEASE_DELETE_REQUEST:
      return { loading: true, Disease: [] };
    case DISEASE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DISEASE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DiseaseUpdateReducer = (state = { Disease: {} }, action) => {
  switch (action.type) {
    case DISEASE_UPDATE_REQUEST:
      return { loading: true };
    case DISEASE_UPDATE_SUCCESS:
      return { loading: false, success: true, Disease: action.payload };
    case DISEASE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DISEASE_UPDATE_RESET:
      return { Disease: {} };
    default:
      return state;
  }
};
