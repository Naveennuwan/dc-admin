import { ROUTE_REQUEST, ROUTE_REMOVE } from "./RouteConstants";

export const RouteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROUTE_REQUEST:
      localStorage.setItem("routeInfo", JSON.stringify(action?.payload));
      return { state, routeInfo: action.payload };
    case ROUTE_REMOVE:
        localStorage.removeItem("routeInfo");
      return { state, routeInfo: null };
    default:
      return state;
  }
};