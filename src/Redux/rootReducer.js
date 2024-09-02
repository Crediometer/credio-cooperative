import {combineReducers} from 'redux';
import cardReducer from './Card/CardReducer';
import { depositReducer, singledepositReducer } from './Deposit/DepositReducer';
import { otpverifyReducer, registerReducer } from './Registration/RegistrationReducer';
import { addmemberReducer, memberReducer, singleMemberReducer } from './Member/MemberReducer';
import { profileReducer } from './Profile/ProfileReducer';
import authReducer from './Login/LoginReducer';
import { loantransactionReducer, savingtransactionReducer, transactionReducer } from './Transactions/TransactionReducer';
import { expensesReducer, postexpensesReducer } from './Expenses/ExpencesReducer';
import { savinglistReducer, savingReducer } from './Saving/SavingReducer';
import { accountReducer, groupReducer, postgroupReducer } from './Group/GroupReducer';
import { groupLoanReducer, groupPaymentReducer, LoanlistReducer, LoanReducer } from './Loan/LoanReducer';
import { paymentReducer } from './Wallet/WalletReducer';
import { accountNameReducer, bankReducer, cashpaymentReducer, debitpaymentReducer, emandateReducer } from './Payment/PaymentReducer';

const rootReducer = combineReducers({
    login: authReducer,
    card: cardReducer,
    deposit: singledepositReducer,
    redeposit: depositReducer,
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
    loan: LoanReducer,
    group: postgroupReducer,
    groups: groupReducer,
    account: accountReducer,
    wallet: paymentReducer,
    transaction: transactionReducer,
    cash: cashpaymentReducer,
    debit: debitpaymentReducer,
    loanlist: LoanlistReducer,
    savinglist: savinglistReducer,
    bank:bankReducer,
    accountName:accountNameReducer,
    emandate: emandateReducer,
    grouploan: groupLoanReducer,
    grouppayment: groupPaymentReducer
})

export default rootReducer;