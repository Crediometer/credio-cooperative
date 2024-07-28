import { ADD_MEMBER_FAILURE, ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, MEMBER_FAILURE, MEMBER_REQUEST, MEMBER_SUCCESS, SINGLE_MEMBER_FAILURE, SINGLE_MEMBER_REQUEST, SINGLE_MEMBER_SUCCESS } from "./MemberType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const addmemberReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MEMBER_REQUEST:
        return {
          loading: true,
          data: [],
          error: "",
        };
      case ADD_MEMBER_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case ADD_MEMBER_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEMBER_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case MEMBER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case MEMBER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const singleMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_MEMBER_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case SINGLE_MEMBER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SINGLE_MEMBER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};