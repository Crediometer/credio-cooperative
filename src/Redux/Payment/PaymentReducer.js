import { ACCOUNT_NAME_FALIURE, ACCOUNT_NAME_REQUEST, ACCOUNT_NAME_SUCCESS, BANK_FALIURE, BANK_REQUEST, BANK_SUCCESS, CASH_PAYMENT_FALIURE, CASH_PAYMENT_REQUEST, CASH_PAYMENT_SUCCESS, DEBIT_PAYMENT_FALIURE, DEBIT_PAYMENT_REQUEST, DEBIT_PAYMENT_SUCCESS, EMANDATE_FALIURE, EMANDATE_REQUEST, EMANDATE_SUCCESS } from "./PaymentType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}
export const accountNameReducer= (state = initialState, action) => {
    switch(action.type){
        case ACCOUNT_NAME_REQUEST:
            return{
                ... state,
                loading: true
            }
        case ACCOUNT_NAME_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case ACCOUNT_NAME_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const bankReducer= (state = initialState, action) => {
    switch(action.type){
        case BANK_REQUEST:
            return{
                ... state,
                loading: true
            }
        case BANK_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case BANK_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const cashpaymentReducer= (state = initialState, action) => {
    switch(action.type){
        case CASH_PAYMENT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case CASH_PAYMENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case CASH_PAYMENT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const debitpaymentReducer= (state = initialState, action) => {
    switch(action.type){
        case DEBIT_PAYMENT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case DEBIT_PAYMENT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case DEBIT_PAYMENT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const emandateReducer= (state = initialState, action) => {
    switch(action.type){
        case EMANDATE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case EMANDATE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case EMANDATE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}