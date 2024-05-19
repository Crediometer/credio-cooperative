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
      </Routes>
    </div>
  );
}

export default App;
