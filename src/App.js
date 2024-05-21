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
        <Route path='/member-details' element={<MemberDetails/>}/>
        <Route path='/payment' element={<NewStudent/>}/>
        <Route path='/member-profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
