import axios from "axios";
import { ACTIVE_LOAN_FAILURE, ACTIVE_LOAN_REQUEST, ACTIVE_LOAN_SUCCESS, APPROVED_LOAN_FAILURE, APPROVED_LOAN_REQUEST, APPROVED_LOAN_SUCCESS, CLOSED_LOAN_FAILURE, CLOSED_LOAN_REQUEST, CLOSED_LOAN_SUCCESS, CREATE_LOAN_FAILURE, CREATE_LOAN_REQUEST, CREATE_LOAN_SUCCESS, GROUP_LOAN_FAILURE, GROUP_LOAN_REQUEST, GROUP_LOAN_SUCCESS, GROUP_PAYMENT_FAILURE, GROUP_PAYMENT_REQUEST, GROUP_PAYMENT_SUCCESS, LOAN_FAILURE, LOAN_REQUEST, LOAN_SUCCESS, OVERDUE_LOAN_FAILURE, OVERDUE_LOAN_REQUEST, OVERDUE_LOAN_SUCCESS } from "./LoanType";
  
export const loanRequest = () => {
  return {
    type: LOAN_REQUEST,
  };
};
export const loanSuccess = (register) => {
  return {
    type: LOAN_SUCCESS,
    payload: register,
  };
};

export const loanFaliure = (error) => {
  return {
    type: LOAN_FAILURE,
    payload: error,
  };
};

export const grouploanRequest = () => {
  return {
    type: GROUP_LOAN_REQUEST,
  };
};
export const grouploanSuccess = (register) => {
  return {
    type: GROUP_LOAN_SUCCESS,
    payload: register,
  };
};

export const grouploanFaliure = (error) => {
  return {
    type: GROUP_LOAN_FAILURE,
    payload: error,
  };
};

export const grouppaymentRequest = () => {
  return {
    type: GROUP_PAYMENT_REQUEST,
  };
};
export const grouppaymentSuccess = (register) => {
  return {
    type: GROUP_PAYMENT_SUCCESS,
    payload: register,
  };
};

export const grouppaymentFaliure = (error) => {
  return {
    type: GROUP_PAYMENT_FAILURE,
    payload: error,
  };
};

export const activeRequest = () => {
    return {
      type: ACTIVE_LOAN_REQUEST,
    };
  };
  export const activeSuccess = (register) => {
    return {
      type: ACTIVE_LOAN_SUCCESS,
      payload: register,
    };
  };
  
  export const activeFaliure = (error) => {
    return {
      type: ACTIVE_LOAN_FAILURE,
      payload: error,
    };
  };

  export const closedRequest = () => {
    return {
      type: CLOSED_LOAN_REQUEST,
    };
  };
  export const closedSuccess = (register) => {
    return {
      type: CLOSED_LOAN_SUCCESS,
      payload: register,
    };
  };
  
  export const closedFaliure = (error) => {
    return {
      type: CLOSED_LOAN_FAILURE,
      payload: error,
    };
  };

  export const overdueRequest = () => {
    return {
      type: OVERDUE_LOAN_REQUEST,
    };
  };
  export const overdueSuccess = (register) => {
    return {
      type: OVERDUE_LOAN_SUCCESS,
      payload: register,
    };
  };
  
  export const overdueFaliure = (error) => {
    return {
      type: OVERDUE_LOAN_FAILURE,
      payload: error,
    };
  };

  export const createRequest = () => {
    return {
      type: CREATE_LOAN_REQUEST,
    };
  };
  export const createSuccess = (register) => {
    return {
      type: CREATE_LOAN_SUCCESS,
      payload: register,
    };
  };
  
  export const createFaliure = (error) => {
    return {
      type: CREATE_LOAN_FAILURE,
      payload: error,
    };
  };

  export const approvedRequest = () => {
    return {
      type: APPROVED_LOAN_REQUEST,
    };
  };
  export const approvedSuccess = (register) => {
    return {
      type: APPROVED_LOAN_SUCCESS,
      payload: register,
    };
  };
  
  export const approvedFaliure = (error) => {
    return {
      type: APPROVED_LOAN_FAILURE,
      payload: error,
    };
  };

  const baseUrl = "https://coopnode.crediometer.com/api/v1"
  const baseUrl2 = "https://www.coopsp.crediometer.com/api/v1"
  
  export const getLoan = (id,type) => {
    return async (dispatch) => {
      dispatch(loanRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/repayment/get-member-type/${id}?type=${type}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(loanSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(loanFaliure(error?.response?.data));
        }
      }
    };
  };
  
  export const getActiveLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(activeRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/loans/active?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(activeSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(activeFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getGroupActiveLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(activeRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/groups/loans/active?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(activeSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(activeFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getClosedLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(closedRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/loans/closed?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(closedSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(closedFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getGroupClosedLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(closedRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/groups/loans/closed?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(closedSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(closedFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getOverdueLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(overdueRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/loans/overdue?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(overdueSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(overdueFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getGroupOverdueLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(overdueRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/groups/loans/overdue?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(overdueSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(overdueFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getApprovedLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(approvedRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/loans/approved?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(approvedSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(approvedFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getGroupApprovedLoan = (limit, page) => {
    return async (dispatch) => {
      dispatch(approvedRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/groups/loans/approved?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(approvedSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(approvedFaliure(error?.response?.data));
        }
      }
    };
  };
  export const createloan = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(createRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/loans/create`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(createSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(createFaliure(error?.response?.data));
        }
        setErrorHandler()
      }
    };
  };
  
  export const creategrouploan = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(createRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/loans/create-group`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(createSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(createFaliure(error?.response?.data));
        }
        setErrorHandler()
      }
    };
  };

  export const createloanGroup = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(createRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/groups/loans/create`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(createSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(createFaliure(error?.response?.data));
        }
        setErrorHandler()
      }
    };
  };

  export const getGroupLoan = () => {
    return async (dispatch) => {
      dispatch(grouploanRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl2}/cooperative/loans/getGroups`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(grouploanSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(grouploanFaliure(error?.response?.data));
        }
      }
    };
  };

  export const getPaymentLoan = (id) => {
    return async (dispatch) => {
      dispatch(grouppaymentRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl2}/cooperative/loans/getPaymentRequests/${id}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(grouppaymentSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(grouppaymentFaliure(error?.response?.data));
        }
      }
    };
  };