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
const baseUrl = "https://coop-sp-c896c5c4c3f0.herokuapp.com/api/v1"

export const depositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(depositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
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
      }else if(res.status === 208){
        historyError()
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

export const depositRepayment = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(depositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/cooperative/reader/card-tokenization-group-coop`,
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
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas?.token?.payload?.token}`,
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

export const recurringdepositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(singledepositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/cooperative/reader/card-tokenisation`,
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


export const groupsingledepositData = (depositState, history, historyError) => {
  return async (dispatch) => {
    dispatch(singledepositRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/cooperative/reader/one-time-off-group`,
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