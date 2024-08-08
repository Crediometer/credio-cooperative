import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getApprovedLoan } from "../../Redux/Loan/LaonAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
import { FormattedNumber, IntlProvider } from "react-intl";
const Approval = (
    {
        getApprovedLoan,
        loading,
        error,  
        data
    }
) => {
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(members);
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        
        // Filter members based on input value
        if (value) {
            const filtered = members.filter(member => 
                member.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredMembers(filtered);
        } else {
            setFilteredMembers([]);
        }
    };
    const handleMemberClick = (member) => {
        setSearchUser(member);
        setSearchInput("")
        setFilteredMembers([]);
    };
    useEffect(()=>{
        getApprovedLoan(100,0)
    },[])
    return ( 
        <div className="saving approval">
            <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Loan Approved</p>
            </div>
            <div className="top-search">
                    <div className="form-11" style={{ width: '100%' }}>
                        <div className="input">
                            <input 
                                type="text" 
                                placeholder="SEARCH FOR MEMBER"
                                value={searchInput}
                                onChange={handleInputChange}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="statement-date statement-date-2">
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
                {searchInput && (
                    <div className="member-list">
                        {filteredMembers.length > 0 ? (
                            filteredMembers.map((member, index) => (
                                <div    
                                    onClick={() => handleMemberClick(member)}
                                    style={{ cursor: 'pointer' }} 
                                    key={index} 
                                    className="member-item"
                                >
                                    {member}
                                </div>
                            ))
                        ) : (
                            <div>No members found</div>
                        )}
                    </div>
                )}
            <div className="loan-approval-body">
                <>
                    {loading ? (
                        <div className="preloader">
                            <LottieAnimation data={preloader}/>
                        </div>
                    ):(
                        <>
                        {data?.loans?.length === 0 ? (
                            <div className="empty-animate">
                                <LottieAnimation data={empty}/>
                                <p>No Data Found</p>
                            </div>
                        ):(
                            <>
                                {data?.loans?.map((saving) => {
                                    return(
                                        <div className="approval-card">
                                            <div className="personal-section">
                                                <div className="approval-card-top">
                                                    <p className="card-header">Personal Information</p>
                                                    <p>{saving.createdAt.slice(0,10)}</p>
                                                </div>
                                                <div className="aprroval-information">
                                                    <div className="information-inner">
                                                        <p>Amount: 
                                                            <IntlProvider>  
                                                                {" "}
                                                                <span>
                                                                <FormattedNumber
                                                                    value={
                                                                        saving.amount
                                                                    }
                                                                    style="currency"
                                                                    currency="NGN"
                                                                />
                                                                </span>
                                                            </IntlProvider> 
                                                        </p>
                                                        <p style={{textAlign: "right"}}>Amount With Interest: 
                                                            <IntlProvider>  
                                                                {" "}
                                                                <span>
                                                                <FormattedNumber
                                                                    value={
                                                                        saving.amountWithInterest
                                                                    }
                                                                    style="currency"
                                                                    currency="NGN"
                                                                />
                                                                </span>
                                                            </IntlProvider> 
                                                        </p>
                                                    </div>
                                                    <div className="information-inner">
                                                        <p>Purpose: <span>{saving.purpose}</span></p>
                                                        <p style={{textAlign: "right"}}>interval : <span>{(saving.interval==5)?"5 Days":(saving.interval==7)?"7 Days":(saving.interval==15)?"BiWeekly":"Monthly"}</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="personal-section">
                                                <div className="approval-card-top">
                                                    <p className="card-header">Financial Information</p>
                                                </div>
                                                <div className="aprroval-information">
                                                    <div className="information-inner">
                                                        <p>Interest Rate: <span>{saving.interestRate}%</span></p>
                                                        <p>Start Date: <span>{saving.startDate}</span></p>
                                                    </div>
                                                    <div className="information-inner">
                                                        <p>EndDate: <span>{saving.endDate}</span></p>
                                                        <p>Interval Payback: 
                                                            <IntlProvider>  
                                                                {" "}
                                                                <span>
                                                                <FormattedNumber
                                                                    value={
                                                                        saving.monthlyPayment
                                                                    }
                                                                    style="currency"
                                                                    currency="NGN"
                                                                />
                                                                </span>
                                                            </IntlProvider> 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                        </>
                    
                    )}
                </>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.loan?.error,
        loading: state?.loan?.loading,
        data: state?.loan?.approvedData?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getApprovedLoan: (limit, page) => dispatch(getApprovedLoan(limit, page)),
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Approval);