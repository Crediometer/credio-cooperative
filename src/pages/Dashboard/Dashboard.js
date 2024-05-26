import "./Dashboard.css"
import {BiSearch} from 'react-icons/bi';
import image from '../../Assets/image.svg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { HiOutlinePlusSm } from "react-icons/hi";
import { PiBellSimpleFill } from "react-icons/pi";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Box from "../../components/Box/Box";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <div className="navbar">
                <div className="wrapper">
                    <div className="navbar-profile">
                        <div className="bell">
                            <PiBellSimpleFill />
                            <div className="number"><p>2</p></div>
                        </div>
                        <div className='navbar-profile-left'>
                            <div className="user-image">
                                <img src={image}></img>
                            </div>
                            <div className="user-name">
                                <p className='greeting'>Good day</p>
                                <p className='name'>Richard Cooporative Society</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-card">
                <div className="card-top">
                    <div className="savings">
                        <p>Account Balance</p>
                        <h2>N50,000,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Expenses</p>
                        <h2 style={{textAlign: "right"}}>N1,000,000</h2>
                    </div>
                    
                </div>
                <div className="card-top">
                    <div className="savings">
                        <p>Withdrawals</p>
                        <h2>N220,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Loans</p>
                        <h2 style={{textAlign: "right"}}>N350,000,000</h2>
                    </div>
                    
                </div>
            </div>
            <div className="date-picker">
                <div className="statement-date">
                    <input
                        type='text'
                        placeholder='Start Date'
                        className='transferfield'
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {(e.target.type = "text");}}
                        // onChange={handlestartdate}
                        required
                    ></input>
                </div>
            </div>
            <div className="dashboard-navigate">
                <Link to="/payment">
                    <Box
                        color="rgba(5, 139, 65, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Payments"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
                <Link to="/saving">
                    <Box
                        color="rgba(255, 19, 19, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Savings"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
            </div>
            <div className="dashboard-navigate">
                <Link to='/withdraw'>
                    <Box
                        color="rgba(18, 15, 199, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Withdrawals"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
                <Box
                    color="rgba(210, 193, 43, 0.123)"
                    icons={<HiOutlinePlusSm/>}
                    text="Expenses"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                />
            </div>
            <div className="dashboard-navigate">
                <Link to="/loans">
                    <Box
                        color="rgba(184, 102, 67, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Loans"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
                <Link to="/member">
                    <Box
                        color="rgba(67, 176, 184, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Members"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
            </div>
            <div className="dashboard-transaction">
                <h2 className="recent-head">Recent Transaction</h2>
                <div className="transactions">
                    <div className="join-search transaction">
                       <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">06/01/2022</p>
                       </div>
                       <div className="transaction-right">
                            <h3>N50.5</h3>
                       </div>
                    </div>
                    <div className="join-search transaction">
                       <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">06/01/2022</p>
                       </div>
                       <div className="transaction-right">
                            <h3>N50.5</h3>
                       </div>
                    </div>
                    <div className="join-search transaction">
                       <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">06/01/2022</p>
                       </div>
                       <div className="transaction-right">
                            <h3>N50.5</h3>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;   