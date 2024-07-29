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
import ClosedSaving from './pages/Savings/Closed';
import OverdueSaving from './pages/Savings/Overdue';
import ActiveDetailsSavings from './pages/Savings/ActiveDetails';
import ClosedDetailsSaving from './pages/Savings/ClosedDetails';
import Login from './pages/Login/Login';
import { Provider } from 'react-redux';
import Expenses from './pages/Expenses/Expenses';
import Group from './pages/Group/Group';
import ActivateGroup from './pages/Activate/ActivateGroup';
import DashboardMember from './pages/Dashboard/DashboardMember';

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
          <Route path='/register-group' element={<ActivateGroup/>}/>
          <Route path='/dashboard' element={<Dashboard  />}/>
          <Route path='/dashboard-member' element={<DashboardMember/>}/>
          {/* <Route path='/saving' element={<Saving/>}/> */}
          <Route path='/saving' element={<Newsavings/>}/>
          <Route path='/saving-details' element={<SavingDetails/>}/>
          <Route path='/withdraw' element={<Withdrawal/>}/>
          <Route path='/member' element={<MemberList/>}/>
          <Route path='/group' element={<Group/>}/>
          <Route path='/newmember' element={<NewMemberList/>}/>
          <Route path='/member-details/:id' element={<MemberDetails/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/payment/:id' element={<Payment/>}/>
          <Route path='/recurring' element={<NewStudent/>}/>
          <Route path='/recurring/:id' element={<NewStudent/>}/>
          <Route path='/transfer' element={<BankTransfer/>}/>
          <Route path='/transfer/:id' element={<BankTransfer/>}/>
          <Route path='/card-transfer' element={<CardPayment/>}/>
          <Route path='/card-transfer/:id' element={<CardPayment/>}/>
          <Route path='/cash-payment' element={<CashPayment/>}/>
          <Route path='/cash-payment/:id' element={<CashPayment/>}/>
          <Route path='/member-profile' element={<Profile/>}/>
          <Route path='/loans' element={<Loan/>}/>
          <Route path='/admin-profile' element={<AdminProfile/>}/>
          <Route path='/loan-approval' element={<Approval/>}/>
          <Route path='/loan-overdue' element={<Overdue/>}/>
          <Route path='/saving-overdue' element={<OverdueSaving/>}/>
          <Route path='/loan-lender' element={<Lenders/>}/>
          <Route path='/loan-create' element={<CreateLoan/>}/>
          <Route path='/loan-saving' element={<CreateSaving/>}/>
          <Route path='/loan-active' element={<Active/>}/>
          <Route path='/saving-active' element={<ActiveSavings/>}/>
          <Route path='/loan-closed' element={<Closed/>}/>
          <Route path='/saving-closed' element={<ClosedSaving/>}/>
          <Route path='/loan-closed-details' element={<ClosedDetails/>}/>
          <Route path='/saving-closed-details' element={<ClosedDetailsSaving/>}/>
          <Route path='/loan-active-details' element={<ActiveDetails/>}/>
          <Route path='/saving-active-details' element={<ActiveDetailsSavings/>}/>
          <Route path='/expenses' element={<Expenses/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
