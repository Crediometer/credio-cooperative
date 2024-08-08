import { Link } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiChevronLeft } from "react-icons/bi";
import { connect } from "react-redux";
import { FormattedNumber, IntlProvider } from "react-intl";
import { fetchgroupprofile } from "../../Redux/Profile/ProfileAction";
import { useEffect } from "react";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"  
const NewsavingGroup = ({
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
                    <div className="payment2 saving">
                        <div className="back">
                            <Link to='/dashboard-member'><BiChevronLeft/></Link>
                            <h4 className="form-head">Savings</h4>
                        </div>
                    <div className="dashboard-card">
                        <div className="card-top card-top-saving">
                            <div className="savings">
                                <p>Total Savings</p>
                                <IntlProvider>
                                    {" "}
                                    <h2>
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
                            {/* <div className="savings">
                                <p style={{textAlign: "right"}}>Active Savings</p>
                                <h2 style={{textAlign: "right"}}>30,000,000</h2>
                            </div>
                            */}
                        </div>
                    </div>
                    <div className="payment-method">
                        <div className="dashboard-navigate">
                            <Link to="/loan-saving-group">
                                <Box
                                    color="rgba(255, 19, 19, 0.128)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Create Savings"
                                    
                                />
                            </Link>
                            <Link to="/saving-active-group">
                            <Box
                                color="rgba(210, 193, 43, 0.123)"
                                icons={<HiOutlinePlusSm/>}
                                text="Active Savings"
                                
                            />
                            </Link> 
                        </div>
                        <div className="dashboard-navigate">
                            <Link  to="/saving-overdue-group">
                                <Box
                                    color="rgba(18, 15, 199, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Overdue Savings"
                                
                                />
                            </Link>
                            <Link to="/saving-closed-group">
                                <Box
                                    color="rgba(5, 139, 65, 0.123)"
                                    icons={<HiOutlinePlusSm/>}
                                    text="Closed Savings"
                                
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
        fetchprofile: () => dispatch(fetchgroupprofile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsavingGroup);