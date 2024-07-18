import { LOAN_TRANSACTION_FAILURE, LOAN_TRANSACTION_REQUEST, LOAN_TRANSACTION_SUCCESS, SAVING_TRANSACTION_FAILURE, SAVING_TRANSACTION_REQUEST, SAVING_TRANSACTION_SUCCESS } from "./TransactionType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const loantransactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAN_TRANSACTION_REQUEST:
        return {
          loading: true,
          data: [],
          error: "",
        };
      case LOAN_TRANSACTION_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case LOAN_TRANSACTION_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const savingtransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVING_TRANSACTION_REQUEST :
      return {
        loading: true,
        data: [],
        error: "",
      };
    case SAVING_TRANSACTION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SAVING_TRANSACTION_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};