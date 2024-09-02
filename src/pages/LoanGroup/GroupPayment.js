import { BiChevronLeft } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getPaymentLoan } from "../../Redux/Loan/LaonAction";
import { useEffect } from "react";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
const GroupPayment = (
    {
        loading,
        data,
        error,
        getpaymentloans
    }
) => {
    const {id} = useParams()
    useEffect(()=>{  
        getpaymentloans(id)
    },[id])
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/group-loan'><BiChevronLeft/></Link>
                <p className="title">Recurring Payments</p>
            </div>
            <div className="active-saving-body">
                {/* <div className="active-details-card">
                    <div className="active-details-inner">
                        <div className="details">
                            <h3>saving Amount</h3>
                            <p>N400,000</p>
                        </div>
                        <div className="details">
                            <h3>Duration</h3>
                            <p>13 Months</p>
                        </div>
                    </div>
                    <div className="active-details-inner">
                        <div className="details">
                            <h3>Interest</h3>
                            <p>N20,000(8%)</p>
                        </div>
                        <div className="details">
                            <h3>Payback</h3>
                            <p>N420,000</p>
                        </div>
                    </div>
                </div> */}
                <div className="schedule">
                    <p className="schedule-header">Payment Schedule </p>
                    {loading ? (
                        <div className="preloader">
                            <LottieAnimation data={preloader}/>
                        </div>
                    ):(
                        <>
                        {data?.length === 0 ? (
                            <div className="empty-animate">
                                <LottieAnimation data={empty}/>
                                <p>No Data Found</p>
                            </div>
                        ):(
                            <>
                                {data?.map((data)=>{
                                    return(
                                        <div className="schedule-inner">
                                            <div className="schedule-top">
                                                <p>1st Installment</p>
                                            </div>

                                                <div className="schedule-inner-body">
                                                    <div className="schedule-inner-detail">
                                                        <p>Amount</p>
                                                        <h3>N{data.singlePaymentAmount}</h3>
                                                    </div>
                                                    <div className="schedule-inner-detail">
                                                        <p>Balance</p>
                                                        <h3>N {data.balance}</h3>
                                                    </div>
                                                    <div className="schedule-inner-detail">
                                                        <p>Next Payment Date</p>
                                                        <h3>{data.nextPaymentDate.slice(0,10)}</h3>
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
            <div className="add-button">
                <Link to={`/recurring-payment/${id}`}>
                    <FaPlus/>
                </Link>
                
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loading:state?.grouppayment?.loading,
        data: state?.grouppayment?.data?.data,
        errors: state?.grouppayment?.error,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        getpaymentloans: (id) => {
            dispatch(getPaymentLoan(id));
        },
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(GroupPayment);