import {
  USER_TYPE_REQUEST,
  USER_TYPE_SUCCESS,
  USER_TYPE_FAIL,
} from "./UserTypeConstants";

export const UserTypeReducer = (state = { UserType: [] }, action) => {
  switch (action.type) {
    case USER_TYPE_REQUEST:
      return { loading: true, UserType: [] };
    case USER_TYPE_SUCCESS:
      return { loading: false, UserType: action.payload };
    case USER_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};