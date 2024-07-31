import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS, GROUP_FAILURE, GROUP_REQUEST, GROUP_SUCCESS, POST_GROUP_FAILURE, POST_GROUP_REQUEST, POST_GROUP_SUCCESS } from "./GroupType";

const initialState = {
    loading: false,
    data: [],
    accountData: [],
    error: "",
};

export const postgroupReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_GROUP_REQUEST:
        return {
          loading: true,
          data: [],
          error: "",
        };
      case POST_GROUP_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case POST_GROUP_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACCOUNT_REQUEST:
            return {
              loading: true,
              accountData: [],
              error: "",
            };
      case ACCOUNT_SUCCESS:
            return {
              loading: false,
              accountData: action.payload,
              error: "",
            };
        case ACCOUNT_FAILURE:
            return {
              loading: false,
              accountData: [],
              error: action.payload,
            };
      default:
        return state;
    }
};


export const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case GROUP_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GROUP_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};