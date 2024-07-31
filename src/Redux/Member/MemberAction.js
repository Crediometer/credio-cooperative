import axios from "axios";
import { ADD_MEMBER_FAILURE, ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, MEMBER_FAILURE, MEMBER_REQUEST, MEMBER_SUCCESS, SINGLE_MEMBER_FAILURE, SINGLE_MEMBER_REQUEST, SINGLE_MEMBER_SUCCESS } from "./MemberType";

export const addmemberRequest = () => {
    return {
      type: ADD_MEMBER_REQUEST,
    };
  };
  export const addmemberSuccess = (register) => {
    return {
      type: ADD_MEMBER_SUCCESS,
      payload: register,
    };
  };
  
  export const addmemberFaliure = (error) => {
    return {
      type: ADD_MEMBER_FAILURE,
      payload: error,
    };
  };


  export const memberRequest = () => {
    return {
      type: MEMBER_REQUEST,
    };
  };
  export const memberSuccess = (register) => {
    return {
      type: MEMBER_SUCCESS,
      payload: register,
    };
  };
  
  export const memberFaliure = (error) => {
    return {
      type: MEMBER_FAILURE,
      payload: error,
    };
  };

  export const singlememberRequest = () => {
    return {
      type: SINGLE_MEMBER_REQUEST,
    };
  };
  export const singlememberSuccess = (register) => {
    return {
      type: SINGLE_MEMBER_SUCCESS,
      payload: register,
    };
  };
  
  export const singlememberFaliure = (error) => {
    return {
      type: SINGLE_MEMBER_FAILURE,
      payload: error,
    };
  };

  const baseUrl = "https://cooperative-be.onrender.com/api/v1"
  export const postmember = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(addmemberRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/cooperative/addMember`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(addmemberSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(addmemberFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };

  export const postgroupmember = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(addmemberRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.post(
          `${baseUrl}/groups/group/addMember`,
          registerState,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(addmemberSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(addmemberFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };

  export const getmember = (limit, page) => {
    return async (dispatch) => {
      dispatch(memberRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/members?limit=${limit}&page=${page}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(memberSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(memberFaliure(error?.response?.data));
        }
      }
    };
  };

  export const getsinglemember = (id) => {
    return async (dispatch) => {
      dispatch(singlememberRequest())
      try {
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        const res = await axios.get(
          `${baseUrl}/members/${id}`,
          { headers: headers }
        );
        const { data } = res;
        if (res.status === 200) {
          dispatch(singlememberSuccess(data));
        }
      } catch (error) {
        if (error.response){
          dispatch(singlememberFaliure(error?.response?.data));
        }
      }
    };
  };