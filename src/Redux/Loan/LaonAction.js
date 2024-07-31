import axios from "axios";
import { ACTIVE_LOAN_FAILURE, ACTIVE_LOAN_REQUEST, ACTIVE_LOAN_SUCCESS, CLOSED_LOAN_FAILURE, CLOSED_LOAN_REQUEST, CLOSED_LOAN_SUCCESS, CREATE_LOAN_FAILURE, CREATE_LOAN_REQUEST, CREATE_LOAN_SUCCESS, OVERDUE_LOAN_FAILURE, OVERDUE_LOAN_REQUEST, OVERDUE_LOAN_SUCCESS } from "./LoanType";
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

  const baseUrl = "https://cooperative-be.onrender.com/api/v1"
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
      }
    };
  };