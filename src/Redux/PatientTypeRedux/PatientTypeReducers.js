import {
  PATIENT_TYPE_LIST_REQUEST,
  PATIENT_TYPE_LIST_SUCCESS,
  PATIENT_TYPE_LIST_FAIL,
} from "./PatientTypeConstants";

export const PatientTypeReducer = (state = { PatientType: [] }, action) => {
  switch (action.type) {
    case PATIENT_TYPE_LIST_REQUEST:
      return { loading: true, PatientType: [] };
    case PATIENT_TYPE_LIST_SUCCESS:
      return { loading: false, PatientType: action.payload };
    case PATIENT_TYPE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
