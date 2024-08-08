import axios from "axios"
import { ACCOUNT_NAME_FALIURE, ACCOUNT_NAME_REQUEST, ACCOUNT_NAME_SUCCESS, BANK_FALIURE, BANK_REQUEST, BANK_SUCCESS, CASH_PAYMENT_FALIURE, CASH_PAYMENT_REQUEST, CASH_PAYMENT_SUCCESS, DEBIT_PAYMENT_FALIURE, DEBIT_PAYMENT_REQUEST, DEBIT_PAYMENT_SUCCESS, EMANDATE_FALIURE, EMANDATE_REQUEST, EMANDATE_SUCCESS } from "./PaymentType"


export const cashpaymentRequest = () =>{
    return{
        type: CASH_PAYMENT_REQUEST
    }
}

export const cashpaymentSuccess = (response) =>{
    return{
        type: CASH_PAYMENT_SUCCESS,
        payload: response
    }
}

export const cashpaymentFaliure = (error) =>{
    return{
        type: CASH_PAYMENT_FALIURE,
        payload: error
    }
}

export const debitpaymentRequest = () =>{
    return{
        type: DEBIT_PAYMENT_REQUEST
    }
}

export const debitpaymentSuccess = (response) =>{
    return{
        type: DEBIT_PAYMENT_SUCCESS,
        payload: response
    }
}

export const debitpaymentFaliure = (error) =>{
    return{
        type: DEBIT_PAYMENT_FALIURE,
        payload: error
    }
}

export const bankRequest = () =>{
  return{
      type: BANK_REQUEST
  }
}

export const bankSuccess = (response) =>{
  return{
      type: BANK_SUCCESS,
      payload: response
  }
}

export const bankFaliure = (error) =>{
  return{
      type: BANK_FALIURE,
      payload: error
  }
}

export const accountNameRequest = () =>{
  return{
      type: ACCOUNT_NAME_REQUEST
  }
}

export const accountNameSuccess = (response) =>{
  return{
      type: ACCOUNT_NAME_SUCCESS,
      payload: response
  }
}

export const accountNameFaliure = (error) =>{
  return{
      type: ACCOUNT_NAME_FALIURE,
      payload: error
  }
}

export const emandateRequest = () =>{
  return{
      type: EMANDATE_REQUEST
  }
}

export const emandateSuccess = (response) =>{
  return{
      type: EMANDATE_SUCCESS,
      payload: response
  }
}

export const emandateFaliure = (error) =>{
  return{
      type: EMANDATE_FALIURE,
      payload: error
  }
}

const baseUrl = "https://cooperative-be.onrender.com/api/v1"
const baseUrl2 = "https://coop-sp-c896c5c4c3f0.herokuapp.com/api/v1"
export const getBank = () => {
  return async (dispatch) => {
    dispatch(bankRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.get(
        `${baseUrl2}/cooperative/eMandate/bankList`,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        dispatch(bankSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(bankFaliure(error?.response?.data));
      }
    }
  };
};

export const nameEnquiry = (postState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(accountNameRequest())
    let datas = JSON.parse(localStorage.getItem("auth"))
    const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
    };
    try {
      const res = await axios.post(
        `${baseUrl2}/cooperative/eMandate/nameEnquiry`,
        postState,
        {headers: headers}
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(accountNameSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(accountNameFaliure(error?.response?.data?.message));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};

export const cashPayment = (postState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(cashpaymentRequest())
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      try {
        const res = await axios.put(
          `${baseUrl}/repayment/cash/member`,
          postState,
          {headers: headers}
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(cashpaymentSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(cashpaymentFaliure(error?.response?.data?.message));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };

export const groupcashPayment = (postState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(cashpaymentRequest())
    let datas = JSON.parse(localStorage.getItem("auth"))
    const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
    };
    try {
      const res = await axios.put(
        `${baseUrl}/repayment/cash/group/member`,
        postState,
        {headers: headers}
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(cashpaymentSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(cashpaymentFaliure(error?.response?.data?.message));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};


export const debitPayment = (postState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(debitpaymentRequest())
    let datas = JSON.parse(localStorage.getItem("auth"))
    const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
    };
    try {
      const res = await axios.post(
        `${baseUrl2}/cooperative/eMandate/create-emandate`,
        postState,
        {headers: headers}
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(debitpaymentSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(debitpaymentFaliure(error?.response?.data?.message));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};

export const postEmandate = (postState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(emandateRequest())
    let datas = JSON.parse(localStorage.getItem("auth"))
    const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${datas?.token?.payload?.token}`,
    };
    try {
      const res = await axios.post(
        `${baseUrl2}/cooperative/eMandate/getMandateStatus`,
        postState,
        {headers: headers}
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(emandateSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(emandateFaliure(error?.response?.data?.message));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};