import "./Dashboard.css"
import {BiSearch} from 'react-icons/bi';
import image from '../../Assets/image.svg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { HiOutlinePlusSm } from "react-icons/hi";
import { PiBellSimpleFill, PiSignOut } from "react-icons/pi";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import Box from "../../components/Box/Box";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchgroupprofile, fetchprofile, vaultprofile } from "../../Redux/Profile/ProfileAction";
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import { LogOutAuthAction } from "../../Redux/Login/LoginAction";
import { getGroupTransaction, getTransaction } from "../../Redux/Transactions/TransactionAction";
const Dashboard = ({
    loading, 
    error, 
    transloading,
    data,
    getprofile,
    fetchprofile,
    vaultprofile,
    gettransaction,
    logout
}) => {
    const [show, setShow] = useState(false)
    const history = useNavigate();
    const handleshow =()=>{
        setShow(!show)
    }
    const handlelogout =()=>{
        logout(
            ()=>{ history(`/login`)}
        )
    }
    useEffect(()=>{
        fetchprofile();
        gettransaction()
        // vaultprofile();
    }, [])
    return ( 
        <>
            {loading||transloading ? (
                <div className="preloader">
                     <LottieAnimation data={preloader}/>
                </div>
            ):(
                <div className="dashboard">
                    <div className="navbar">
                        <div className="wrapper">
                            <div className="navbar-profile">
                                <div className="bell">
                                    <PiBellSimpleFill />
                                    <div className="number"><p>2</p></div>
                                </div>
                                
                                <div className='navbar-profile-left' onClick={handleshow}>
                                    <div className="user-image">
                                        <img src={image}></img>
                                    </div>
                                    <div className="user-name">
                                        <p className='greeting'>Good day</p>
                                        <p className='name'>{getprofile?.groupInfo?.name}</p>
                                    </div>
                                </div>
                                {show && (
                                    <div className="navbar-dropdown">
                                        <Link to="/dashboard">
                                            <div className="nav-bar-content">
                                                <RiAdminFill/>
                                                <p>Admin</p>
                                            </div>  
                                        </Link>
                                        <Link to="/admin-profile">
                                            <div className="nav-bar-content">
                                                <CgProfile />
                                                <p>Profile</p>
                                            </div>
                                        </Link>
                                        <div className="nav-bar-content">
                                            <MdOutlinePermContactCalendar />
                                            <p>Contact Us</p>
                                        </div>
                                        <div onClick={handlelogout} className="nav-bar-content sign-out">
                                            <PiSignOut />
                                            <p>Sign Out</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-top">
                            <div className="savings">
                                <p>Account Balance</p>
                                <IntlProvider>
                                    {" "}
                                    <h2>
                                    <FormattedNumber
                                        value={
                                            getprofile?.financialSummary?.totalLoanCurrentlyPaid
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </h2>
                                </IntlProvider> 
                            </div>
                            <div className="savings">
                                <p style={{textAlign: "right"}}>Savings</p>
                                <IntlProvider>
                                    {" "}
                                    <h2
                                        style={{textAlign: "right"}}
                                    >
                                    <FormattedNumber
                                        value={
                                            getprofile?.financialSummary?.totalSavings                                            
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </h2>
                                </IntlProvider> 
                            </div>
                            
                        </div>
                        <div className="card-top">
                            <div className="savings">
                                <p>Withdrawals</p>
                                <h2>N0</h2>
                            </div>
                            <div className="savings">
                                <p style={{textAlign: "right"}}>Loans</p>
                                <IntlProvider>
                                    {" "}
                                    <h2
                                        style={{textAlign: "right"}}
                                    >
                                    <FormattedNumber
                                        value={
                                            getprofile?.financialSummary?.totalLoans
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </h2>
                                </IntlProvider>             
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className="date-picker">
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
                    </div> */}
                    <div className="dashboard-navigate">
                        {/* <Link to="/payment">
                            <Box
                                color="rgba(5, 139, 65, 0.123)"
                                icons={<HiOutlinePlusSm/>}
                                text="Payments"
                                
                            />
                        </Link> */}
                        <Link to="/saving-group">
                            <Box
                                color="rgba(255, 19, 19, 0.128)"
                                icons={<HiOutlinePlusSm/>}
                                text="Savings"
                        
                            />
                        </Link>
                        <Link to='/expenses-group'>
                            <Box
                                color="rgba(210, 193, 43, 0.123)"
                                icons={<HiOutlinePlusSm/>}
                                text="Expenses"
                            />
                        </Link>
                        
                    </div>
                    <div className="dashboard-navigate">
                        <Link to="/loans-group">
                            <Box
                                color="rgba(184, 102, 67, 0.123)"
                                icons={<HiOutlinePlusSm/>}
                                text="Loans"
                            
                            />
                        </Link>
                        <Link to="/member-group">
                            <Box
                                color="rgba(67, 176, 184, 0.128)"
                                icons={<HiOutlinePlusSm/>}
                                text="Members"
                            />
                        </Link>
                    </div>
                    <div className="dashboard-transaction">
                        <h2 className="recent-head">Recent Transactions</h2>
                        <div className="transactions">
                            {data?.map((transaction)=>{
                                return(
                                    <div className={transaction.type == 1 ? 'approval-card approval-saving' : 'approval-card approval-loan'}>
                                        <div className="personal-section">
                                            <div className="approval-card-top">
                                                <div className="information-inner information-inner-2">
                                                <IntlProvider>
                                                    {" "}
                                                    <h2
                                                        className="withdrawal-type withdrawal-type-2"
                                                    >
                                                    <FormattedNumber
                                                        value={
                                                           transaction.amount
                                                        }
                                                        style="currency"
                                                        currency="NGN"
                                                    />
                                                    </h2>
                                                </IntlProvider> 
                                                </div>
                                                <p>{transaction.createdAt.slice(0,10)}</p>
                                            </div>
                                            
                                            <div className="aprroval-information">
                                                <div className="information-inner">
                                                    <p>from<span>{transaction.from}</span></p>
                                                    <p style={{textAlign: "right"}}>to: <span>{transaction.to}</span></p>
                                                </div>
                                                {/* <div className="information-inner">
                                                    <p>Last Name: <span>George</span></p>
                                                    <p style={{textAlign: "right"}}>Phone : <span>09078987678</span></p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
       
    );
}
const mapStateToProps = state => {
    return{
        error:state?.profile?.error,
        loading: state?.profile?.loading,
        transloading: state?.transaction?.loading,
        data:state?.transaction?.data?.payload?.transactions,
        getprofile: state?.profile?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchprofile: () => dispatch(fetchgroupprofile()),
        gettransaction: () => dispatch(getTransaction()),
        logout: (history) => dispatch(LogOutAuthAction(history)),
        // vaultprofile: () => dispatch(vaultprofile()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);   