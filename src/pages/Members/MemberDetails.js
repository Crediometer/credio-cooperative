import {BiSearch} from 'react-icons/bi';
import image from '../../Assets/image.svg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { HiOutlinePlusSm } from "react-icons/hi";
import { PiBellSimpleFill } from "react-icons/pi";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Box from "../../components/Box/Box";
import { GoArrowDownRight } from 'react-icons/go';
import { useState } from 'react';
const MemberDetails = () => {
    const [number, setNumber] = useState(1)
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
                                <p className='name'>Ademola John</p>
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
                        <p style={{textAlign: "right"}}>Loan</p>
                        <h2 style={{textAlign: "right"}}>N1,000,000</h2>
                    </div>
                    
                </div>
                <div className="card-top">
                    <div className="savings">
                        <p>Withdrawals</p>
                        <h2>N220,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Loans Repayed</p>
                        <h2 style={{textAlign: "right"}}>N200,000</h2>
                    </div>
                    
                </div>
            </div>
            <div className="dashboard-navigate">
                <div onClick={()=>{setNumber(1)}}>
                    <Box
                        onClick={()=>{setNumber(1)}}
                        color="rgba(18, 15, 199, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Withdrawals"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </div>
                <div onClick={()=>{setNumber(2)}}>
                    <Box
                        color="rgba(255, 19, 19, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Savings"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </div>
                <div onClick={()=>{setNumber(3)}}>
                    <Box
                        color="rgba(184, 102, 67, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Loans"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </div>
                   
                </div>  

            {number === 1 && (
                <div className="dashboard-transaction">
                <h2 className="recent-head">Recent Withdrawals</h2>
                <div className="transactions">
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">Withdrawals</p>
                            <p className="transaction-date">04/11/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N10,000</h3>
                        </div>
                    </div>
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">Loan Repayment</p>
                            <p className="transaction-date">04/14/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N50,000</h3>
                        </div>
                    </div>
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">Saving</p>
                            <p className="transaction-date">05/01/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N60,000</h3>
                        </div>
                    </div>
                </div>
                </div>
            )}
            {number === 2 && (
                    <div className="dashboard-transaction">
                    <h2 className="recent-head">Recent Savings</h2>
                    <div className="transactions">
                        <div className="join-search transaction">
                            <div className="transaction-left saving-left">
                                <GoArrowDownRight />
                                <p className="transaction-name">David Temidayo</p>
                            </div>
                            <div className="transaction-right saving-right">
                                <h3>N40,000</h3>
                                <div >
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                        </div>
                        <div className="join-search transaction">
                            <div className="transaction-left saving-left">
                                <GoArrowDownRight />
                                <p className="transaction-name">David Temidayo</p>
                            </div>
                            <div className="transaction-right saving-right">
                                <h3>N40,000</h3>
                                <div >
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                        </div>
                        <div className="join-search transaction">
                        <div className="transaction-left saving-left">
                            <GoArrowDownRight />
                            <p className="transaction-name">David Temidayo</p>
                        </div>
                        <div className="transaction-right saving-right">
                            <h3>N40,000</h3>
                            <div >
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            )}
            {number === 3 && (
                <div className="dashboard-transaction">
                <h2 className="recent-head">Recent Loans</h2>
                <div className="transactions">
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">04/11/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N10,000</h3>
                        </div>
                    </div>
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">04/14/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N50,000</h3>
                        </div>
                    </div>
                    <div className="join-search transaction">
                        <div className="transaction-left">
                            <p className="transaction-name">From david temidayo</p>
                            <p className="transaction-date">05/01/2024</p>
                        </div>
                        <div className="transaction-right">
                            <h3>N60,000</h3>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}
 
export default MemberDetails;   