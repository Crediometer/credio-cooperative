import { 
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FALIURE,
    VAULT_FALIURE,
    VAULT_SUCCESS,
    VAULT_REQUEST
} from "./ProfileType"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PROFILE_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case PROFILE_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}

export const vaultReducer = (state = initialState, action) => {
    switch(action.type){
        case VAULT_REQUEST:
            return{
                ... state,
                loading: true
            }
        case VAULT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case VAULT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}