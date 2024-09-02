import { 
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FALIURE,
    VAULT_REQUEST,
    VAULT_SUCCESS,
    VAULT_FALIURE
} from "./ProfileType"
import axios from "axios"

export const profileRequest = () =>{
    return{
        type: PROFILE_REQUEST
    }
}

export const profileSuccess = (response) =>{
    return{
        type: PROFILE_SUCCESS,
        payload: response
    }
}

export const profileFaliure = (error) =>{
    return{
        type: PROFILE_FALIURE,
        payload: error
    }
}

export const vaultRequest = () =>{
    return{
        type: VAULT_REQUEST
    }
}

export const vaultSuccess = (response) =>{
    return{
        type: VAULT_SUCCESS,
        payload: response
    }
}

export const vaultFaliure = (error) =>{
    return{
        type: VAULT_FALIURE,
        payload: error
    }
}

const baseUrl = "https://coopnode.crediometer.com/api/v1"


export const fetchprofile = () => {
    return(dispatch) => {
        dispatch(profileRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/cooperative/getProfile`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(profileSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}

export const fetchgroupprofile = () => {
    return(dispatch) => {
        dispatch(profileRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.token?.payload?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`${baseUrl}/groups/group/getProfile`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(profileSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}


export const vaultprofile = () => {
    return(dispatch) => {
        dispatch(vaultRequest())
        let datas = JSON.parse(localStorage.getItem("auth"))
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${datas?.data?.payload?.token}`,
        };
        // let datas = JSON.parse(localStorage.getItem("auth"))
        axios.get(`https://www.sandbox.b2b.crediopay.com/api/v1/cooperative/vault/get/vault`, { headers: headers })
            .then( response => {
                const data = response.data
                dispatch(vaultSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(vaultFaliure(errorMsg))
            })
    }
}
