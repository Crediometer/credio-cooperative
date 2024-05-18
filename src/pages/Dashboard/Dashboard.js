import "./Dashboard.css"
import {BiSearch} from 'react-icons/bi';
import image from '../../Assets/image.svg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { PiBellSimpleFill } from "react-icons/pi";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom';
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
                                <p className='name'>Richard Stone</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-card">
                <div className="card-top">
                    <div className="savings">
                        <p>My Savings</p>
                        <h2>N50,000</h2>
                    </div>
                    <div className="savings">
                        <p>My Donations</p>
                        <h2>N10,000</h2>
                    </div>
                    
                </div>
                <div className="card-top">
                    <div className="savings">
                        <p>My Withdrawals</p>
                        <h2>N220,000</h2>
                    </div>
                    <div className="savings">
                        <p>My Loans</p>
                        <h2>N9,000</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;   