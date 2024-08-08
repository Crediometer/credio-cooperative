import { BiChevronLeft } from "react-icons/bi";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getGroupLoan } from "../../Redux/Loan/LaonAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { FormattedNumber, IntlProvider } from "react-intl";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
const GroupLoans = ({
    loading,
    data,   
    error,
    getgrouploans
}) => {
    useEffect(()=>{
        getgrouploans()
    },[])
    return ( 
        <div className="saving">
        <div className="back">
            <Link to='/loans-group'><BiChevronLeft/></Link>
            <p className="title">Group Loan</p>
        </div>
        <div className="active-loan-body">
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
                                    <div className="active-card">
                                        <div className="active-top">
                                            <div className="active-status">
                                                <p>ACTIVE</p>
                                            </div>
                                        </div>
                                        <Link to={`/group-payment/${data.id}`}>
                                            <div className="active-body">
                                                <p className="loan-for">{data.purpose}</p>
                                                <IntlProvider>
                                                    {" "}
                                                    <h3>
                                                    <FormattedNumber
                                                        value={
                                                            data?.amount
                                                        }
                                                        style="currency"
                                                        currency="NGN"
                                                    />
                                                    </h3>
                                                </IntlProvider> 
                                                {/* <p className="loan-details">Your saving request has been approved and disbursed</p> */}
                                                <div className="active-warning">
                                                    <FaExclamationCircle/>
                                                    <p>Tap here to more details </p>
                                                </div>
                                            </div>
                                        </Link>  
                                    </div>
                               )
                            })}  
                        </>
                    )}
                </>
            )}   
        </div>
        {/* <Stack style={{marginTop: "10px"}} spacing={2}>
            <TablePagination
                component="div"
                count={data?.limit}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Stack> */}
    </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return {
        loading:state?.grouploan?.loading,
        data: state?.grouploan?.data?.data,
        errors: state?.grouplaon?.error,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        getgrouploans: () => {
            dispatch(getGroupLoan());
        },
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(GroupLoans);