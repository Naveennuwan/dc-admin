import {
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DELETE_FAIL,
  DOCTOR_UPDATE_REQUEST,
  DOCTOR_UPDATE_SUCCESS,
  DOCTOR_UPDATE_RESET,
  DOCTOR_UPDATE_FAIL,
} from "./DoctorConstants";

export const DoctorReducer = (state = { Doctor: [] }, action) => {
  switch (action.type) {
    case DOCTOR_LIST_REQUEST:
      return { loading: true, Doctor: [] };
    case DOCTOR_LIST_SUCCESS:
      return { loading: false, Doctor: action.payload };
    case DOCTOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DoctorRegisterReducer = (state = { DOCTOR: [] }, action) => {
  switch (action.type) {
    case DOCTOR_REGISTER_REQUEST:
      return { loading: true, Doctor: [] };
    case DOCTOR_REGISTER_SUCCESS:
      return { loading: false, success: true, Doctor: action.payload };
    case DOCTOR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DoctorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_DELETE_REQUEST:
      return { loading: true, Doctor: [] };
    case DOCTOR_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DOCTOR_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DoctorUpdateReducer = (state = { Doctor: {} }, action) => {
  switch (action.type) {
    case DOCTOR_UPDATE_REQUEST:
      return { loading: true };
    case DOCTOR_UPDATE_SUCCESS:
      return { loading: false, success: true, Doctor: action.payload };
    case DOCTOR_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DOCTOR_UPDATE_RESET:
      return { Doctor: {} };
    default:
      return state;
  }
};