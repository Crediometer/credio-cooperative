import axios from "axios";
import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS, GROUP_FAILURE, GROUP_REQUEST, GROUP_SUCCESS, POST_GROUP_FAILURE, POST_GROUP_REQUEST, POST_GROUP_SUCCESS } from "./GroupType";

export const postgroupRequest = () => {
    return {
      type: POST_GROUP_REQUEST,
    };
  };
export const postgroupSuccess = (register) => {
    return {
        type: POST_GROUP_SUCCESS,
        payload: register,
    };
};

export const postgroupFaliure = (error) => {
    return {
        type: POST_GROUP_FAILURE,
        payload: error,
    };
};

export const accountRequest = () => {
    return {
      type: ACCOUNT_REQUEST,
    };
  };
export const accountSuccess = (register) => {
    return {
        type: ACCOUNT_SUCCESS,
        payload: register,
    };
};

export const accountFaliure = (error) => {
    return {
        type: ACCOUNT_FAILURE,
        payload: error,
    };
};

export const groupRequest = () => {
  return {
    type: GROUP_REQUEST,
  };
};
export const groupSuccess = (register) => {
  return {
      type: GROUP_SUCCESS,
      payload: register,
  };
};

export const groupFaliure = (error) => {
  return {
      type: GROUP_FAILURE,
      payload: error,
  };
};
const baseUrl = "https://cooperative-be.onrender.com/api/v1"
const baseUrl2 = "https://www.reader.crediometer.com"
export const creategroup = (registerState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(postgroupRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/groups/group/register`,
        registerState,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(postgroupSuccess(res));
      //   dispatch(transferData(registerState))
      }
    } catch (error) {
      if (error.response){
        dispatch(postgroupFaliure(error?.response?.data));
      }
    }
  };
};

export const getAccount = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(accountRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl2}/verify/user/accountNumber`,
          registerState
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(accountSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(accountFaliure(error?.response?.data));
        }
      }
    };
  };

export const getGroup = (registerState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(groupRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          authorization: `Bearer ${datas?.token?.payload?.token}`,
      };
      const res = await axios.get(
        `${baseUrl}/groups/group/getGroups`,
        { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        dispatch(groupSuccess(data));
      //   dispatch(transferData(registerState))
      }
    } catch (error) {
      if (error.response){
        dispatch(groupFaliure(error?.response?.data));
      }
    }
  };
};