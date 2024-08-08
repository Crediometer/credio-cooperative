import { ACTIVE_SAVING_FAILURE, ACTIVE_SAVING_REQUEST, ACTIVE_SAVING_SUCCESS, CLOSED_SAVING_FAILURE, CLOSED_SAVING_REQUEST, CLOSED_SAVING_SUCCESS, CREATE_SAVING_FAILURE, CREATE_SAVING_REQUEST, CREATE_SAVING_SUCCESS, OVERDUE_SAVING_FAILURE, OVERDUE_SAVING_REQUEST, OVERDUE_SAVING_SUCCESS, SAVING_FAILURE, SAVING_REQUEST, SAVING_SUCCESS } from "./SavingType";

const initialState = {
    loading: false,
    data: [],
    activedata: [],
    closeData:[],
    overdueData: [],
    createData:[],
    error: "",
};


export const savinglistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVING_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case SAVING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SAVING_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


export const savingReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_SAVING_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CLOSED_SAVING_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case OVERDUE_SAVING_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CREATE_SAVING_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case ACTIVE_SAVING_SUCCESS:
        return {
          loading: false,
          activedata: action.payload,
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CLOSED_SAVING_SUCCESS:
        return {
          loading: false,
          activedata: [],
          closeData:action.payload,
          overdueData: [],
          createData:[],
          error: "",
        };
      case OVERDUE_SAVING_SUCCESS:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: action.payload,
          createData:[],
          error: "",
        };
      case CREATE_SAVING_SUCCESS:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData:[],
          createData: action.payload,
          error: "",
        };
      case ACTIVE_SAVING_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: action.payload,
        };
      case CLOSED_SAVING_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: action.payload,
        };
      case OVERDUE_SAVING_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: action.payload,
        };
      case CREATE_SAVING_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: action.payload,
        };
      default:
        return state;
    }
};
