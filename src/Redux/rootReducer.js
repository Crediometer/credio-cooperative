import {combineReducers} from 'redux';
import cardReducer from './Card/CardReducer';
import { depositReducer } from './Deposit/DepositReducer';
import { otpverifyReducer, registerReducer } from './Registration/RegistrationReducer';
import { addmemberReducer, memberReducer, singleMemberReducer } from './Member/MemberReducer';
import { profileReducer } from './Profile/ProfileReducer';
import authReducer from './Login/LoginReducer';
import { loantransactionReducer, savingtransactionReducer } from './Transactions/TransactionReducer';
import { expensesReducer, postexpensesReducer } from './Expenses/ExpencesReducer';
import { savingReducer } from './Saving/SavingReducer';
const rootReducer = combineReducers({
    login: authReducer,
    card: cardReducer,
    deposit: depositReducer,
    register: registerReducer,
    verifyotp: otpverifyReducer,
    addMember: addmemberReducer,
    member: memberReducer,
    singlemember: singleMemberReducer,
    profile: profileReducer,
    loantrans: loantransactionReducer,
    savingtrans: savingtransactionReducer,
    createexpenses: postexpensesReducer,
    expenses: expensesReducer,
    saving: savingReducer,
})

export default rootReducer;