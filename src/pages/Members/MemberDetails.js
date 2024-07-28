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
import empty from "../../Assets/animations/Empty.json"
import { getsinglemember } from '../../Redux/Member/MemberAction';
const MemberDetails = ({
    getloans,
    getsaving,
    loading,
    error,
    data,
    saveloading,
    saveerror,
    savedata,
    memberdata,
    membererror,
    memberloading,
    getsinglemember
}) => {
    const [number, setNumber] = useState(2)
    const {id} = useParams()
    const [limit, setLimit] = useState(10)
    const [page, setpage] = useState(0)
    console.log(id)
    useEffect(()=>{
        getloans(id, limit, page)
        getsaving(id, limit, page)
        getsinglemember(id)
    }, [limit, page])
    console.log(memberdata)
    console.log(savedata)
    console.log(data)
    console.log(loading, "loan loading")
    // console.log(data?.transactions.length)
    return ( 
        <>
            {memberloading ? (
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
                                <div className='navbar-profile-left'>
                                    <div className="user-image">
                                        <img src={memberdata?.member?.personalInfo?.image}></img>
                                    </div>
                                    <Link to="/member-profile">
                                        <div className="user-name">
                                            <p className='greeting'>Good day</p>
                                            <p className='name'>{memberdata?.member?.personalInfo?.fullname}</p>
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
                                <h2 style={{textAlign: "right"}}>{memberdata?.member?.financialSummary?.totalLoans}</h2>
                            </div>
                            
                        </div>
                        <div className="card-top">
                            <div className="savings">
                                <p>Savings</p>
                                <h2>{memberdata?.member?.financialSummary?.savings}</h2>
                            </div>
                            <div className="savings">
                                <p style={{textAlign: "right"}}>Loan Repayed</p>
                                <h2 style={{textAlign: "right"}}>{memberdata?.member?.financialSummary?.loansRepayed}</h2>
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
                                        {savedata?.transactions?.length === 0 ? (
                                            <div className="empty-animate">
                                                <LottieAnimation data={empty}/>
                                                <p>No Data Found</p>
                                            </div>
                                        ) : (
                                            <>
                                                    {savedata?.transactions?.map((saving)=>{
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
                                    {data?.transactions?.length === 0 ? (
                                        <div className="empty-animate">
                                            <LottieAnimation data={empty}/>
                                            <p>No Data Found</p>
                                        </div>
                                    ) : (
                                        <>
                                            {data?.transactions?.map((loan)=>{
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
                                </>
                            )}
                        </div>
                        </div>
                    )}
                </div>
            )}
        </>
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
        membererror:state?.singlemember?.error,
        memberloading: state?.singlemember?.loading,
        memberdata: state?.singlemember?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getloans: (id, limit, page) => dispatch(getloans(id, limit, page)),
        getsaving: (id, limit, page) => dispatch(getsaving(id, limit, page)),
        getsinglemember: (id) => dispatch(getsinglemember(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);   