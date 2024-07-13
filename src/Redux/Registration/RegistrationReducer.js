import { OTP_VERIFY_FAILURE, OTP_VERIFY_REQUEST, OTP_VERIFY_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TRANSFER_DATA } from "./RegistrationType";
const initialState = {
    loading: false,
    data: [],
    registerData:'',
    error: "",
    formData: {},
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          loading: true,
          requestData: {},
          data: [],
          error: "",
        };
      case REGISTER_USER_SUCCESS:
        const registersucess = {
          loading: false,
          data: action.payload,
          registerData:'',
          error: "",
        };
        localStorage.setItem("auth", JSON.stringify(registersucess));
        return registersucess
      case TRANSFER_DATA:
        return {
          ...state,
          registerData: action.payload,
        };
      case REGISTER_USER_FAILURE:
        return {
          loading: false,
          requestData: {},
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
};

export const otpverifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_VERIFY_REQUEST:
      return {
        loading: true,
        requestData: {},
        data: [],
        error: "",
      };
    case OTP_VERIFY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        registerData:'',
        error: "",
      };
    case OTP_VERIFY_FAILURE:
      return {
        loading: false,
        requestData: {},
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};