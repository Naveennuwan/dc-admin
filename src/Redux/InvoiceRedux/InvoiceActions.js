import {
  INVOICE_REGISTER_REQUEST,
  INVOICE_REGISTER_SUCCESS,
  INVOICE_REGISTER_FAIL,
  INVOICE_DETAILS_REQUEST,
  INVOICE_DETAILS_SUCCESS,
  INVOICE_DETAILS_FAIL,
} from "./InvoiceConstants";

import * as api from "../api";

export const InvoiceRegister = (Invoice) => async (dispatch) => {
  try {
    dispatch({
      type: INVOICE_REGISTER_REQUEST,
    });

    const { data } = await api.InvoiceRegisterAPI(Invoice);

    dispatch({
      type: INVOICE_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INVOICE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const InvoiceDetails = (Invoice) => async (dispatch) => {
  try {
    dispatch({
      type: INVOICE_DETAILS_REQUEST,
    });

    const d = await api.InvoiceDetailsAPI(Invoice);
    
    if (d.response?.status === 500) {
      dispatch({
        type: INVOICE_DETAILS_FAIL,
        payload: d.response.data.message,
      });
    } else {
      dispatch({
        type: INVOICE_DETAILS_SUCCESS,
        payload: d.data,
      });
    }
  } catch (error) {
    dispatch({
      type: INVOICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
