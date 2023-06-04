import { ROUTE_REQUEST, ROUTE_REMOVE } from "./RouteConstants";

export const SetRoute = (route) => async (dispatch) => {
  try {
    dispatch({ type: ROUTE_REQUEST, payload: route });
  } catch (error) {}
};

export const RevomeRoute = () => (dispatch) => {
  localStorage.removeItem("routeInfo");
  dispatch({ type: ROUTE_REMOVE });
};
