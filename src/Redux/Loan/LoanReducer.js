import { ACTIVE_LOAN_FAILURE, ACTIVE_LOAN_REQUEST, ACTIVE_LOAN_SUCCESS, CLOSED_LOAN_FAILURE, CLOSED_LOAN_REQUEST, CLOSED_LOAN_SUCCESS, CREATE_LOAN_FAILURE, CREATE_LOAN_REQUEST, CREATE_LOAN_SUCCESS, OVERDUE_LOAN_FAILURE, OVERDUE_LOAN_REQUEST, OVERDUE_LOAN_SUCCESS } from "./LoanType";

const initialState = {
    loading: false,
    activedata: [],
    closeData:[],
    overdueData: [],
    createData:[],
    error: "",
};

export const LoanReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTIVE_LOAN_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CLOSED_LOAN_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case OVERDUE_LOAN_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CREATE_LOAN_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case ACTIVE_LOAN_SUCCESS:
        return {
          loading: false,
          activedata: action.payload,
          closeData:[],
          overdueData: [],
          createData:[],
          error: "",
        };
      case CLOSED_LOAN_SUCCESS:
        return {
          loading: false,
          activedata: [],
          closeData:action.payload,
          overdueData: [],
          createData:[],
          error: "",
        };
      case OVERDUE_LOAN_SUCCESS:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: action.payload,
          createData:[],
          error: "",
        };
        case CREATE_LOAN_SUCCESS:
          return {
            loading: false,
            activedata: [],
            closeData:[],
            overdueData:[],
            createData: action.payload,
            error: "",
          };
      case ACTIVE_LOAN_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          error: action.payload,
        };
      case CLOSED_LOAN_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          error: action.payload,
        };
      case OVERDUE_LOAN_FAILURE:
        return {
          loading: false,
          activedata: [],
          closeData:[],
          overdueData: [],
          error: action.payload,
        };
        case CREATE_LOAN_FAILURE:
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
