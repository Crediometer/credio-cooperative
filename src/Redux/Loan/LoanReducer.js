import { ACTIVE_LOAN_FAILURE, ACTIVE_LOAN_REQUEST, ACTIVE_LOAN_SUCCESS, APPROVED_LOAN_FAILURE, APPROVED_LOAN_REQUEST, APPROVED_LOAN_SUCCESS, CLOSED_LOAN_FAILURE, CLOSED_LOAN_REQUEST, CLOSED_LOAN_SUCCESS, CREATE_LOAN_FAILURE, CREATE_LOAN_REQUEST, CREATE_LOAN_SUCCESS, GROUP_LOAN_FAILURE, GROUP_LOAN_REQUEST, GROUP_LOAN_SUCCESS, GROUP_PAYMENT_FAILURE, GROUP_PAYMENT_REQUEST, GROUP_PAYMENT_SUCCESS, LOAN_FAILURE, LOAN_REQUEST, LOAN_SUCCESS, OVERDUE_LOAN_FAILURE, OVERDUE_LOAN_REQUEST, OVERDUE_LOAN_SUCCESS } from "./LoanType";

const initialState = {
    loading: false,
    data: [],
    activedata: [],
    closeData:[],
    overdueData: [],
    createData:[],
    approvedData:[],
    error: "",
};



export const LoanlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAN_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case LOAN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case LOAN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const groupLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_LOAN_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case GROUP_LOAN_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GROUP_LOAN_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const groupPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUP_PAYMENT_REQUEST:
      return {
        loading: true,
        data: [],
        error: "",
      };
    case GROUP_PAYMENT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GROUP_PAYMENT_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
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
      case APPROVED_LOAN_REQUEST:
        return {
          loading: true,
          activedata: [],
          closeData:[],
          overdueData: [],
          createData:[],
          approvedData:[],
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
        case APPROVED_LOAN_SUCCESS:
          return {
            loading: false,
            approvedData: action.payload,
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
        case APPROVED_LOAN_FAILURE:
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
