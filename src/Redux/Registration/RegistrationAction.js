import axios from "axios";
import { OTP_VERIFY_FAILURE, OTP_VERIFY_REQUEST, OTP_VERIFY_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TRANSFER_DATA } from "./RegistrationType";

export const registerRequest = () => {
    return {
      type: REGISTER_USER_REQUEST,
    };
  };
  export const registerSuccess = (register) => {
    return {
      type: REGISTER_USER_SUCCESS,
      payload: register,
    };
  };
  
  export const registerFaliure = (error) => {
    return {
      type: REGISTER_USER_FAILURE,
      payload: error,
    };
  };

  export const transferData = (data) => {
    return {
      type: TRANSFER_DATA,
      payload: data,
    };
  };

  export const otpverifyRequest = () => {
    return {
      type: OTP_VERIFY_REQUEST,
    };
  };
  export const otpverifySuccess = (register) => {
    return {
      type: OTP_VERIFY_SUCCESS,
      payload: register,
    };
  };
  
  export const otpverifyFaliure = (error) => {
    return {
      type: OTP_VERIFY_FAILURE,
      payload: error,
    };
  };

const baseUrl = "https://cooperative-be.onrender.com/api/v1"
  export const registerData = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(registerRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/cooperative/register`,
          registerState
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(registerSuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(registerFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  };

  export const otpverifyData = (registerState, history, setErrorHandler) => {
    return async (dispatch) => {
      dispatch(otpverifyRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/cooperative/generateOTP`,
          registerState
        );
        const { data } = res;
        if (res.status === 200) {
          history()
          dispatch(otpverifySuccess(data));
        //   dispatch(transferData(registerState))
        }
      } catch (error) {
        if (error.response){
          dispatch(otpverifyFaliure(error?.response?.data));
        }
        setErrorHandler({ hasError: true, message: error?.response?.data?.message });
      }
    };
  }

  