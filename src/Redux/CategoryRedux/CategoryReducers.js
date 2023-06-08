import {
  ALL_CATEGORY_LIST_REQUEST,
  ALL_CATEGORY_LIST_SUCCESS,
  ALL_CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_REGISTER_REQUEST,
  CATEGORY_REGISTER_SUCCESS,
  CATEGORY_REGISTER_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_RESET,
} from "./CategoryConstants";

export const CategoryReducer = (
  state = { Category: [] },
  action
) => {
  switch (action.type) {
    case ALL_CATEGORY_LIST_REQUEST:
      return { loading: true, Category: [] };
    case ALL_CATEGORY_LIST_SUCCESS:
      return { loading: false, Category: action.payload };
    case ALL_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CategoryActiveReducer = (
  state = { Category: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, Category: [] };
    case CATEGORY_LIST_SUCCESS:
      return { loading: false, Category: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CategoryRegisterReducer = (
  state = { Category: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_REGISTER_REQUEST:
      return { loading: true, Category: [] };
    case CATEGORY_REGISTER_SUCCESS:
      return { loading: false, success: true, Category: action.payload };
    case CATEGORY_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CategoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { loading: true, Category: [] };
    case CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CategoryUpdateReducer = (
  state = { Category: {} },
  action
) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true, Category: action.payload };
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATE_RESET:
      return { Category: {} };
    default:
      return state;
  }
};
