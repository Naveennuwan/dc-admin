import {
  INVOICE_REGISTER_REQUEST,
  INVOICE_REGISTER_SUCCESS,
  INVOICE_REGISTER_FAIL,
  INVOICE_DETAILS_REQUEST,
  INVOICE_DETAILS_SUCCESS,
  INVOICE_DETAILS_FAIL,
} from "./InvoiceConstants";

export const InvoiceRegisterReducer = (state = { Invoice: [] }, action) => {
  switch (action.type) {
    case INVOICE_REGISTER_REQUEST:
      return { loading: true, Invoice: [] };
    case INVOICE_REGISTER_SUCCESS:
      return { loading: false, success: true, Invoice: action.payload };
    case INVOICE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const InvoiceDetilsReducer = (
  state = { total: 0, discount: 0 },
  action
) => {
  switch (action.type) {
    case INVOICE_DETAILS_REQUEST:
      return { loading: true, InvData: [] };
    case INVOICE_DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        total: action.payload.total,
        discount: action.payload.discount,
      };
    case INVOICE_DETAILS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
