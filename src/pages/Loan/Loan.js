import { Link } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";
import "./Loan.css"
import { BiChevronLeft } from "react-icons/bi";
import { connect } from "react-redux";
import { fetchprofile } from "../../Redux/Profile/ProfileAction";
import { useEffect } from "react";
import preloader from "../../Assets/animations/preloader.json"
import LottieAnimation from "../../Lotties";
import { FormattedNumber, IntlProvider } from "react-intl";
const Loan = ({
    error,
    loading,
    getprofile,
    fetchprofile
}) => {
    useEffect(()=>{
        fetchprofile();
    }, [])
    return (
        <>
            {loading ? (
                <div className="preloader">
                    <LottieAnimation data={preloader}/>
                </div>
            ):( 
                <div className="saving">
                    <div className="back">
                        <Link to='/dashboard'><BiChevronLeft/></Link>
                        <h4 className="form-head">Loans</h4>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-top">
                            <div className="savings">
                                <p>Total Loan</p>
                                <IntlProvider>
                                    {" "}
                                    <h2>
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
                            <div className="savings">
                                <p style={{textAlign: "right"}}>Loan Currently Paid</p>
                                <IntlProvider>
                                    {" "}
                                    <h2
                                        style={{textAlign: "right"}}
                                    >
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
                            
                        </div>
                        <div className="card-top">
                            <div className="savings">
                                <p>Paid back Loans</p>
                                <IntlProvider>  
                                    {" "}
                                    <h2>
                                    <FormattedNumber
                                        value={
                                            getprofile?.financialSummary?.totalPaybackLoan
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </h2>
                                </IntlProvider> 
                            </div>
                            <div className="savings">
                                <p style={{textAlign: "right"}}>Loan Full Paid</p>
                                <IntlProvider>
                                    {" "}
                                    <h2
                                        style={{textAlign: "right"}}
                                    >
                                    <FormattedNumber
                                        value={
                                            getprofile?.financialSummary?.totalLoanFullyPaid
                                        }
                                        style="currency"
                                        currency="NGN"
                                    />
                                    </h2>
                                </IntlProvider> 
                            </div>   
                        </div>
                    </div>
                    <div className="payment-method">
                        <div className="dashboard-navigate">
                            <Link to="/loan-create">
                                <Box
                                    color="rgba(255, 19, 19, 0.128)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Create Loan"
                                    
                                />
                            </Link>
                            <Link to="/loan-group-create">
                                <Box
                                    color="rgba(5, 139, 65, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Create Loan Group"   
                                />
                            </Link>
                        </div>
                        <div className="dashboard-navigate">
                            <Link  to="/loan-overdue">
                                <Box
                                    color="rgba(18, 15, 199, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Overdue Loans"
                                
                                />
                            </Link>
                            <Link to="/loan-active">
                            <Box
                                color="rgba(210, 193, 43, 0.123)"
                                icons={<HiOutlinePlusSm/>}
                                text="Active Loans"
                                
                            />
                            </Link>            
                        </div>
                        <div className="dashboard-navigate">
                            <Link to="/loan-closed">
                                <Box
                                    color="rgba(5, 139, 65, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Closed Loans"
                                
                                />
                            </Link>    
                            <Link to="/loan-approval">
                                <Box
                                    color="rgba(5, 139, 65, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Loan Approved"   
                                />
                            </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.profile?.error,
        loading: state?.profile?.loading,
        getprofile: state?.profile?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchprofile: () => dispatch(fetchprofile()),
    }
}


export default connect  (mapStateToProps, mapDispatchToProps)(Loan);