import axios from "axios";
import { ACTIVE_SAVING_FAILURE, ACTIVE_SAVING_REQUEST, ACTIVE_SAVING_SUCCESS, CLOSED_SAVING_FAILURE, CLOSED_SAVING_REQUEST, CLOSED_SAVING_SUCCESS, CREATE_SAVING_FAILURE, CREATE_SAVING_REQUEST, CREATE_SAVING_SUCCESS, OVERDUE_SAVING_FAILURE, OVERDUE_SAVING_REQUEST, OVERDUE_SAVING_SUCCESS } from "./SavingType";


  export const activeRequest = () => {
    return {
      type: ACTIVE_SAVING_REQUEST,
    };
  };
  export const activeSuccess = (register) => {
    return {
      type: ACTIVE_SAVING_SUCCESS,
      payload: register,
    };
  };
  
  export const activeFaliure = (error) => {
    return {
      type: ACTIVE_SAVING_FAILURE,
      payload: error,
    };
  };

  export const closedRequest = () => {
    return {
      type: CLOSED_SAVING_REQUEST,
    };
  };
  export const closedSuccess = (register) => {
    return {
      type: CLOSED_SAVING_SUCCESS,
      payload: register,
    };
  };
  
  export const closedFaliure = (error) => {
    return {
      type: CLOSED_SAVING_FAILURE,
      payload: error,
    };
  };

  export const overdueRequest = () => {
    return {
      type: OVERDUE_SAVING_REQUEST,
    };
  };
  export const overdueSuccess = (register) => {
    return {
      type: OVERDUE_SAVING_SUCCESS,
      payload: register,
    };
  };
  
  export const overdueFaliure = (error) => {
    return {
      type: OVERDUE_SAVING_FAILURE,
      payload: error,
    };
  };

  export const createRequest = () => {
    return {
      type: CREATE_SAVING_REQUEST,
    };
  };
  export const createSuccess = (register) => {
    return {
      type: CREATE_SAVING_SUCCESS,
      payload: register,
    };
  };
  
  export const createFaliure = (error) => {
    return {
      type: CREATE_SAVING_FAILURE,
      payload: error,
    };
  };

  const baseUrl = "https://cooperative-be.onrender.com/api/v1"
  export const getActiveSaving = (limit, page) => {
    return async (dispatch) => {
      dispatch(activeRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/savings/active?limit=${limit}&page=${page}`,
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


  export const getClosedSaving = (limit, page) => {
    return async (dispatch) => {
      dispatch(closedRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/savings/closed?limit=${limit}&page=${page}`,
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

  export const getOverdueSaving = (limit, page) => {
    return async (dispatch) => {
      dispatch(overdueRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/savings/overdue?limit=${limit}&page=${page}`,
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

  export const createSaving = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(createRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/savings/create`,
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

  export const createSavingGroup = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(createRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/groups/savings/create`,
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