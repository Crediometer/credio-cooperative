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


  const baseUrl = "https://cooperative-be.onrender.com/api/v1"
  export const getExpences = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(postexpenseRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.data?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/expense/retriveExpenses`,
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
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };

  export const createexpenses = () => {
    return async (dispatch) => {
      dispatch(postexpenseRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.data?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/expense/create`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(postexpensesSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(postexpensesFaliure(error?.response?.data));
        }
      }
    };
  };