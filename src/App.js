import './App.css';
import {Routes, Route} from 'react-router-dom'
import store from './Redux/Store';
import Admin from './pages/Admin/Admin';
import Activate from './pages/Activate/Activate';
import Member from './pages/Members/Member';
import Join from './pages/Members/Join';
import List from './pages/Members/List';
import ActivateMember from './pages/Activate/ActivateMember';
import Dashboard from './pages/Dashboard/Dashboard';
import PersonalAjo from './pages/PersonalAjo/PersonalAjo';
import Saving from './pages/Savings/Saving';
import SavingDetails from './pages/Savings/SavingDetails';
import Withdrawal from './pages/Withdrawal/Withdrawal';
import MemberList from './pages/Members/MemberList';
import MemberDetails from './pages/Members/MemberDetails';
import NewStudent from './pages/Students/NewStudent';
import NewStudentGroup from './pages/PaymentMember/NewStudent';
import Profile from './pages/Profile/Profile';
import Payment from './pages/Students/Payment';
import BankTransfer from './pages/Students/BankTranfer';
import CardPayment from './pages/Students/CardPayment';
import Loan from './pages/Loan/Loan';
import Approval from './pages/Loan/Approval';
import Overdue from './pages/Loan/Overdue';
import Active from './pages/Loan/Active';
import ActiveDetails from './pages/Loan/ActiveDetails';
import Closed from './pages/Loan/Closed';
import ClosedDetails from './pages/Loan/ClosedDetails';
import Lenders from './pages/Loan/Lenders';
import CreateLoan from './pages/Loan/CreateLoan';
import CashPayment from './pages/Students/CashPayment';
import AdminProfile from './pages/Profile/AdminProfile';
import NewMemberList from './pages/Members/NewMemberList';
import Newsavings from './pages/Savings/Newsaving';
import CreateSaving from './pages/Savings/CreateSaving';
import ActiveSavings from './pages/Savings/Active';
import ActiveSavingsGroup from './pages/SavingGroup/Active'; 
import ClosedSaving from './pages/Savings/Closed';
import ClosedSavingGroup from './pages/SavingGroup/Closed';
import OverdueSaving from './pages/Savings/Overdue';
import OverdueSavingGroup from './pages/SavingGroup/Overdue';
import ActiveDetailsSavings from './pages/Savings/ActiveDetails';
import ClosedDetailsSaving from './pages/Savings/ClosedDetails';
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import Expenses from './pages/Expenses/Expenses';
import ExpensesGroup from "./pages/ExpensesGroup/Expenses"
import Group from './pages/Group/Group';
import ActivateGroup from './pages/Activate/ActivateGroup';
import DashboardMember from './pages/Dashboard/DashboardMember';
import ActivateMemberGroup from './pages/Activate/ActivateMemberGroup';
import MemberListGroup from './pages/Members/MemberListGroup';
import CreateLoanGroup from './pages/LoanGroup/CreateLoanGroup';
import NewsavingGroup from './pages/SavingGroup/Newsaving';
import LoanGroup from './pages/LoanGroup/Loan';
import Transfer from './pages/Transfer/Transfer';
import GroupLoan from './pages/Loan/GroupLoan';
import CreateSavingGroup from './pages/SavingGroup/CreateSavingGroup';
import PaymentGroup from './pages/PaymentMember/Payment';
import BankTransferGroup from './pages/PaymentMember/BankTranfer';
import CardPaymentGroup from './pages/PaymentMember/CardPayment';
import CashPaymentGroup from './pages/PaymentMember/CashPayment';
import GroupMemberDetails from './pages/Members/GroupMemberDetails';
import ApprovalGroup from './pages/LoanGroup/Approval';
import ActiveGroup from './pages/LoanGroup/Active';
import ClosedGroup from './pages/LoanGroup/Closed';
import OverdueGroup from './pages/LoanGroup/Overdue';
import GroupLoans from './pages/LoanGroup/GroupLoans';
import GroupPayment from './pages/LoanGroup/GroupPayment';
// import RecurringPayment from './pages/Students/Payment';
import Repayment from './pages/LoanGroup/Repayment';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Admin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/onboardmember' element={<Member/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/join-list' element={<List/>}/>
          <Route path='/register-admin' element={<Activate/>}/>
          <Route path='/register-member' element={<ActivateMember/>}/>
          <Route path='/register-member-group' element={<ActivateMemberGroup/>}/>
          <Route path='/register-group' element={<ActivateGroup/>}/>
          <Route path='/dashboard' element={<Dashboard  />}/>
          <Route path='/dashboard-member' element={<DashboardMember/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
          {/* <Route path='/saving' element={<Saving/>}/> */}
          <Route path='/saving' element={<Newsavings/>}/>
          <Route path='/saving-group' element={<NewsavingGroup/>}/>
          <Route path='/saving-details' element={<SavingDetails/>}/>
          <Route path='/withdraw' element={<Withdrawal/>}/>
          <Route path='/member' element={<MemberList/>}/>
          <Route path='/member-group' element={<MemberListGroup/>}/>
          <Route path='/group' element={<Group/>}/>
          <Route path='/newmember' element={<NewMemberList/>}/>
          <Route path='/member-details/:id' element={<MemberDetails/>}/>
          <Route path='/member-details-group/:id' element={<GroupMemberDetails/>}/>
          {/* <Route path='/payment' element={<Payment/>}/> */}
          <Route path='/payment/:id' element={<Payment/>}/>
          <Route path='/payment-group/:id' element={<PaymentGroup/>}/>
          {/* <Route path='/recurring' element={<NewStudent/>}/> */}
          <Route path='/recurring/:id' element={<NewStudent/>}/>
          <Route path='/recurring-group/:id' element={<NewStudentGroup/>}/>
          {/* <Route path='/debit-transfer' element={<BankTransfer/>}/> */}
          <Route path='/debit-transfer/:id' element={<BankTransfer/>}/>
          <Route path='/debit-transfer-group/:id' element={<BankTransferGroup/>}/>
          {/* <Route path='/card-transfer' element={<CardPayment/>}/> */}
          <Route path='/card-transfer/:id' element={<CardPayment/>}/>
          <Route path='/card-transfer-group/:id' element={<CardPaymentGroup/>}/>
          {/* <Route path='/cash-payment' element={<CashPayment/>}/> */}
          <Route path='/cash-payment/:id' element={<CashPayment/>}/>
          <Route path='/cash-payment-group/:id' element={<CashPaymentGroup/>}/>
          <Route path='/member-profile' element={<Profile/>}/>
          <Route path='/loans' element={<Loan/>}/>
          <Route path='/loans-group' element={<LoanGroup/>}/>
          <Route path='/loan-group-create' element={<GroupLoan/>}/>
          <Route path='/group-loan' element={<GroupLoans/>}/>
          <Route path='/group-payment/:id' element={<GroupPayment/>}/>
          <Route path='/recurring-payment/:id' element={<Repayment/>}/>
          {/* <Route path='/group-recurring-payment' element={<RecurringPayment/>}/> */}
          <Route path='/admin-profile' element={<AdminProfile/>}/>
          <Route path='/loan-approval' element={<Approval/>}/>
          <Route path='/loan-approval-group' element={<ApprovalGroup/>}/>
          <Route path='/loan-overdue' element={<Overdue/>}/>
          <Route path='/loan-overdue-group' element={<OverdueGroup/>}/>
          <Route path='/saving-overdue' element={<OverdueSaving/>}/>
          <Route path='/saving-overdue-group' element={<OverdueSavingGroup />}/>
          <Route path='/loan-lender' element={<Lenders/>}/>
          <Route path='/loan-create' element={<CreateLoan/>}/>
          <Route path='/loan-create-group' element={<CreateLoanGroup/>}/>
          <Route path='/loan-saving' element={<CreateSaving/>}/>
          <Route path='/loan-saving-group' element={<CreateSavingGroup/>}/>
          <Route path='/loan-active' element={<Active/>}/>
          <Route path='/loan-active-group' element={<ActiveGroup/>}/>
          <Route path='/saving-active' element={<ActiveSavings/>}/>
          <Route path='/saving-active-group' element={<ActiveSavingsGroup/>}/>
          <Route path='/loan-closed' element={<Closed/>}/>
          <Route path='/loan-closed-group' element={<ClosedGroup/>}/>
          <Route path='/saving-closed' element={<ClosedSaving/>}/>
          <Route path='/saving-closed-group' element={<ClosedSavingGroup/>}/>
          <Route path='/loan-closed-details' element={<ClosedDetails/>}/>
          <Route path='/saving-closed-details' element={<ClosedDetailsSaving/>}/>
          <Route path='/loan-active-details' element={<ActiveDetails/>}/>
          <Route path='/saving-active-details' element={<ActiveDetailsSavings/>}/>
          <Route path='/expenses' element={<Expenses/>}/>
          <Route path='/expenses-group' element={<ExpensesGroup/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
