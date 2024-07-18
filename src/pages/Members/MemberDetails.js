import {BiSearch} from 'react-icons/bi';
import image from '../../Assets/image.svg'
import {IoNotificationsOutline} from 'react-icons/io5'
import { HiOutlinePlusSm } from "react-icons/hi";
import { PiBellSimpleFill } from "react-icons/pi";
import {IoMdArrowDropdown} from 'react-icons/io'
import { Link, useParams } from 'react-router-dom';
import Box from "../../components/Box/Box";
import { GoArrowDownRight } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getloans, getsaving } from '../../Redux/Transactions/TransactionAction';
import LottieAnimation from '../../Lotties';
import preloader from "../../Assets/animations/preloader.json"
const MemberDetails = ({
    getloans,
    getsaving,
    loading,
    error,
    data,
    saveloading,
    saveerror,
    savedata
}) => {
    const [number, setNumber] = useState(1)
    const {id} = useParams()
    const [limit, setLimit] = useState(10)
    const [page, setpage] = useState(0)
    console.log(id)
    useEffect(()=>{
        getloans(id, limit, page)
        getsaving(id, limit, page)
    }, [limit, page])
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
                            <Link to="/member-profile">
                                <div className="user-name">
                                    <p className='greeting'>Good day</p>
                                    <p className='name'>Ademola John</p>
                                </div>
                            </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-card">
                <div className="card-top">
                    <div className="savings">
                        <p>Account Balance</p>
                        <h2>-N800,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Loan</p>
                        <h2 style={{textAlign: "right"}}>N1,000,000</h2>
                    </div>
                    
                </div>
                <div className="card-top">
                    <div className="savings">
                        <p>Savings</p>
                        <h2>N50,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Loan Repayed</p>
                        <h2 style={{textAlign: "right"}}>N200,000</h2>
                    </div>
                </div>
            </div>
            <div className="dashboard-navigate member-navigate">
                <div onClick={()=>{setNumber(2)}}>
                    <Box
                        color="rgba(255, 19, 19, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Savings"
                    />
                </div>
                <div onClick={()=>{setNumber(3)}}>
                    <Box
                        color="rgba(184, 102, 67, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Loans"
                    />
                </div>
                <div>
                    <Link to={`/payment/${id}`}>
                        <Box
                            color="rgba(5, 139, 65, 0.123)"
                            icons={<HiOutlinePlusSm/>}
                            text="Payments"
                        />
                    </Link>
                </div>       
            </div>  
?
            {number === 2 && (
                <div className="dashboard-transaction">
                    <h2 className="recent-head">Recent Savings</h2>
                    <div className="transactions">
                        {saveloading ? (
                            <div className="preloader">
                                <LottieAnimation data={preloader}/>
                            </div>
                        ): (
                            <>
                                {savedata.map((saving)=>{
                                    return(
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
                                    )
                                })}
                            </>
                        )}
                    </div>
                    </div>
            )}
            {number === 3 && (
                <div className="dashboard-transaction">
                <h2 className="recent-head">Recent Loans</h2>
                <div className="transactions">
                {loading ? (
                    <div className="preloader">
                        <LottieAnimation data={preloader}/>
                    </div>
                ): (
                    <>
                        {data.map((loan)=>{
                            return(
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
                            )
                        })}
                    </>
                )}
                </div>
                </div>
            )}
        </div>
    );
}


const mapStateToProps = state => {
    return{
        error:state?.loantrans?.error,
        loading: state?.loantrans?.loading,
        data: state?.loantrans?.data?.payload,
        saveerror:state?.savingtrans?.error,
        saveloading: state?.savingtrans?.loading,
        savedata: state?.savingtrans?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getloan: (id, limit, page) => dispatch(getloans(id, limit, page)),
        getsaving: (id, limit, page) => dispatch(getsaving(id, limit, page))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);   