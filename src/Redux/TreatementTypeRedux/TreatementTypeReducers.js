import {
  TREATEMENT_TYPE_LIST_REQUEST,
  TREATEMENT_TYPE_LIST_SUCCESS,
  TREATEMENT_TYPE_LIST_FAIL,
} from "./TreatementTypeConstants";

export const TreatementTypeReducer = (state = { TreatementType: [] }, action) => {
  switch (action.type) {
    case TREATEMENT_TYPE_LIST_REQUEST:
      return { loading: true, TreatementType: [] };
    case TREATEMENT_TYPE_LIST_SUCCESS:
      return { loading: false, TreatementType: action.payload };
    case TREATEMENT_TYPE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
