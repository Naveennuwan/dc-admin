import {
  MASTER_REQUEST,
  MASTER_SUCCESS,
  MASTER_FAIL,
  MASTER_UPDATE_REQUEST,
  MASTER_UPDATE_SUCCESS,
  MASTER_UPDATE_FAIL,
  MASTER_UPDATE_RESET,
} from "./MasterConstants";

export const MasterReducer = (state = { Master: [] }, action) => {
  switch (action.type) {
    case MASTER_REQUEST:
      return { loading: true, Master: [] };
    case MASTER_SUCCESS:
      return { loading: false, Master: action.payload };
    case MASTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const MasterUpdateReducer = (state = { Master: {} }, action) => {
  switch (action.type) {
    case MASTER_UPDATE_REQUEST:
      return { loading: true };
    case MASTER_UPDATE_SUCCESS:
      return { loading: false, success: true, Master: action.payload };
    case MASTER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MASTER_UPDATE_RESET:
      return { Brand: {} };
    default:
      return state;
  }
};