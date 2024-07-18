import { EXPENSE_FAILURE, EXPENSE_REQUEST, EXPENSE_SUCCESS, POST_EXPENSE_FAILURE, POST_EXPENSE_REQUEST, POST_EXPENSE_SUCCESS } from "./ExpencesType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const postexpensesReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_EXPENSE_REQUEST:
        return {
          loading: true,
          data: [],
          error: "",
        };
      case POST_EXPENSE_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case POST_EXPENSE_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPENSE_REQUEST :
      return {
        loading: true,
        data: [],
        error: "",
      };
    case EXPENSE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case EXPENSE_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};