import './App.css';
import {Routes, Route} from 'react-router-dom'
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/onboardmember' element={<Member/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/join-list' element={<List/>}/>
        <Route path='/register-admin' element={<Activate/>}/>
        <Route path='/register-member' element={<ActivateMember/>}/>
        <Route path='/dashboard' element={<Dashboard  />}/>
        <Route path='/saving' element={<Saving/>}/>
        <Route path='/saving-details' element={<SavingDetails/>}/>
        <Route path='/withdraw' element={<Withdrawal/>}/>
        <Route path='/member' element={<MemberList/>}/>
        <Route path='/member-details/:id' element={<MemberDetails/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/payment/:id' element={<Payment/>}/>
        <Route path='/recurring' element={<NewStudent/>}/>
        <Route path='/recurring/:id' element={<NewStudent/>}/>
        <Route path='/transfer' element={<BankTransfer/>}/>
        <Route path='/transfer/:id' element={<BankTransfer/>}/>
        <Route path='/card-transfer' element={<CardPayment/>}/>
        <Route path='/card-transfer/:id' element={<CardPayment/>}/>
        <Route path='/member-profile' element={<Profile/>}/>
        <Route path='/loans' element={<Loan/>}/>
        <Route path='/loan-approval' element={<Approval/>}/>
        <Route path='/loan-overdue' element={<Overdue/>}/>
        <Route path='/loan-lender' element={<Lenders/>}/>
        <Route path='/loan-create' element={<CreateLoan/>}/>
        <Route path='/loan-active' element={<Active/>}/>
        <Route path='/loan-closed' element={<Closed/>}/>
        <Route path='/loan-closed-details' element={<ClosedDetails/>}/>
        <Route path='/loan-active-details' element={<ActiveDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
