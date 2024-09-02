import axios from "axios";
import { EXPENSE_FAILURE, EXPENSE_REQUEST, EXPENSE_SUCCESS, POST_EXPENSE_FAILURE, POST_EXPENSE_REQUEST, POST_EXPENSE_SUCCESS } from "./ExpencesType";

export const postexpenseRequest = () => {
    return {
      type: POST_EXPENSE_REQUEST,
    };
  };
  export const postexpensesSuccess = (register) => {
    return {
      type: POST_EXPENSE_SUCCESS,
      payload: register,
    };
  };
  
  export const postexpensesFaliure = (error) => {
    return {
      type: POST_EXPENSE_FAILURE,
      payload: error,
    };
  };


  export const expensesRequest = () => {
    return {
      type: EXPENSE_REQUEST,
    };
  };
  export const expensesSuccess = (register) => {
    return {
      type: EXPENSE_SUCCESS,
      payload: register,
    };
  };
  
  export const expensesFaliure = (error) => {
    return {
      type: EXPENSE_FAILURE,
      payload: error,
    };
  };


  const baseUrl = "https://coopnode.crediometer.com/api/v1"
  export const createexpenses = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(postexpenseRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/expense/create`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(postexpensesSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(postexpensesFaliure(error?.response?.data));
        }
      }
    };
  };

  export const getExpences = () => {
    return async (dispatch) => {
      dispatch(expensesRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/expense/retriveExpenses`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(expensesSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(expensesFaliure(error?.response?.data));
        }
      }
    };
  };


  export const createexpensesgroup = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(postexpenseRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/groups/expense/create`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(postexpensesSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(postexpensesFaliure(error?.response?.data));
        }
      }
    };
  };

  export const getExpencesGroup = () => {
    return async (dispatch) => {
      dispatch(expensesRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/groups/expense/retriveExpenses`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(expensesSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(expensesFaliure(error?.response?.data));
        }
      }
    };
  };