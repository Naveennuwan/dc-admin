import {
  CENTER_REQUEST,
  CENTER_SUCCESS,
  CENTER_FAIL,
} from "./CenterConstants";

export const CenterListReducer = (
  state = { centers: [] },
  action
) => {
  switch (action.type) {
    case CENTER_REQUEST:
      return { loading: true, centers: [] };
    case CENTER_SUCCESS:
      return { loading: false, centers: action.payload };
    case CENTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};