import {combineReducers} from 'redux';
import cardReducer from './Card/CardReducer';
import { depositReducer } from './Deposit/DepositReducer';
import { otpverifyReducer, registerReducer } from './Registration/RegistrationReducer';
import { addmemberReducer, memberReducer } from './Member/MemberReducer';
import { profileReducer } from './Profile/ProfileReducer';
import authReducer from './Login/LoginReducer';
const rootReducer = combineReducers({
    login: authReducer,
    card: cardReducer,
    deposit: depositReducer,
    register: registerReducer,
    verifyotp: otpverifyReducer,
    addMember: addmemberReducer,
    member: memberReducer,
    profile: profileReducer
})

export default rootReducer;