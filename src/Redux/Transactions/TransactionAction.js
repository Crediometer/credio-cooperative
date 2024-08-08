import axios from "axios";
import { LOAN_TRANSACTION_FAILURE, LOAN_TRANSACTION_REQUEST, LOAN_TRANSACTION_SUCCESS, SAVING_TRANSACTION_FAILURE, SAVING_TRANSACTION_REQUEST, SAVING_TRANSACTION_SUCCESS, TRANSACTION_FAILURE, TRANSACTION_REQUEST, TRANSACTION_SUCCESS } from "./TransactionType";

export const loantransactionRequest = () => {
    return {
      type: LOAN_TRANSACTION_REQUEST,
    };
  };
  export const loantransactionSuccess = (register) => {
    return {
      type: LOAN_TRANSACTION_SUCCESS,
      payload: register,
    };
  };
  
  export const loantransactionFaliure = (error) => {
    return {
      type: LOAN_TRANSACTION_FAILURE,
      payload: error,
    };
  };


  export const savingtransactionRequest = () => {
    return {
      type: SAVING_TRANSACTION_REQUEST,
    };
  };
  export const savingtransactionSuccess = (register) => {
    return {
      type: SAVING_TRANSACTION_SUCCESS,
      payload: register,
    };
  };
  
  export const savingtransactionFaliure = (error) => {
    return {
      type: SAVING_TRANSACTION_FAILURE,
      payload: error,
    };
  };

  export const transactionRequest = () => {
    return {
      type: TRANSACTION_REQUEST,
    };
  };
  export const transactionSuccess = (register) => {
    return {
      type: TRANSACTION_SUCCESS,
      payload: register,
    };
  };
  
  export const transactionFaliure = (error) => {
    return {
      type: TRANSACTION_FAILURE,
      payload: error,
    };
  };

  const baseUrl = "https://cooperative-be.onrender.com/api/v1"
  export const getloans = (id, limit, page) => {
    return async (dispatch) => {
      dispatch(loantransactionRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/transactions/loans/${id}?limit=${limit}&&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(loantransactionSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(loantransactionFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getsaving = (id, limit, page) => {
    return async (dispatch) => {
      dispatch(savingtransactionRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token }`,
        };
        const res = await axios.get(
          `${baseUrl}/transactions/savings/${id}?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(savingtransactionSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(savingtransactionFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getTransaction = () => {
    return async (dispatch) => {
      dispatch(transactionRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/cooperative/transactions`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(transactionSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(transactionFaliure(error?.response?.data));
        }
      }
    };
  };
  export const getGroupTransaction = () => {
    return async (dispatch) => {
      dispatch(transactionRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/cooperative/groups/transactions`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(transactionSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(transactionFaliure(error?.response?.data));
        }
      }
    };
  };