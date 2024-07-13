import {
  DEPOSIT_FALIURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
  KEY_FALIURE,
  KEY_REQUEST,
  KEY_SUCCESS,
  SINGLE_DEPOSIT_FALIURE,
  SINGLE_DEPOSIT_REQUEST,
  SINGLE_DEPOSIT_SUCCESS,
} from "./DepositType";
import axios from "axios";
export const depositRequest = () => {
  return {
    type: DEPOSIT_REQUEST,
  };
};
export const depositSuccess = (deposit) => {
  return {
    type: DEPOSIT_SUCCESS,
    payload: deposit,
  };
};
export const depositFaliure = (error) => {
  return {
    type: DEPOSIT_FALIURE,
    payload: error,
  };
};


export const singledepositRequest = () => {
  return {
    type: SINGLE_DEPOSIT_REQUEST,
  };
};
export const singledepositSuccess = (deposit) => {
  return {
    type: SINGLE_DEPOSIT_SUCCESS,
    payload: deposit,
  };
};
export const singledepositFaliure = (error) => {
  return {
    type: SINGLE_DEPOSIT_FALIURE,
    payload: error,
  };
};
const baseUrl = "https://www.sandbox.b2b.crediopay.com/api/v1"

export const depositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(depositRequest())
    try {
      let datas = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IisyMzQ5MDY2ODQ3MDI0IiwiYnVzaW5lc3NOYW1lIjoiTXkgQnVzaW5lc3MiLCJfaWQiOiJpZCIsImlhdCI6MTcyMDczODk2MywiZXhwIjoxNzIwODI1MzYzfQ.wt-zL_7V4gTTcXVQlj51DxWpa_RNZJBHjJ5sxW1ezzg";
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas}`,
      };
      const res = await axios.post(
        `${baseUrl}/cooperative/reader/card-tokenization `,
        depositState,
        {headers: headers}
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(depositSuccess(data)); 
      }
    } catch (error) {
      if (error.response) {
        dispatch(depositFaliure(error.response));
        historyError()
      }
     
    }
  };
};

export const singledepositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(singledepositRequest())
    try {
      let datas = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IisyMzQ5MDY2ODQ3MDI0IiwiYnVzaW5lc3NOYW1lIjoiTXkgQnVzaW5lc3MiLCJfaWQiOiJpZCIsImlhdCI6MTcyMDczODUwNSwiZXhwIjoxNzIwODI0OTA1fQ.0pIPoGhy3jRPJ7wCrdOaWJwoylbVmtz5xitXYA3iRLs";
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas}`,
      };
      const res = await axios.post(
        `${baseUrl}/cooperative/reader/one-time-off`,
        depositState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(singledepositSuccess(data)); 
      }
    } catch (error) {
      if (error.response) {
        dispatch(singledepositFaliure(error.response));
        historyError()
      }
     
    }
  };
};
