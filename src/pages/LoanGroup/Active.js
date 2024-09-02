import { BiChevronLeft } from "react-icons/bi";
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Payment.module.css';
import { useEffect, useState } from "react";
import { getActiveLoan, getGroupActiveLoan } from "../../Redux/Loan/LaonAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
import { Stack, TablePagination } from "@mui/material";
import { FormattedNumber, IntlProvider } from "react-intl";
const ActiveGroup = (
    {
        getActiveLoan,
        loading,
        error,
        data
    }
) => {
    const circleWidth = 50
    const percentage = (70/100) * 100 ;
    const radius = 20
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100; 
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [show, setShow] = useState(false);
    const [filteredMembers, setFilteredMembers] = useState(members);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const togglemodal=()=>{
        setShow(!show)
    }
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
        getActiveLoan(rowsPerPage, page)
    },[page, rowsPerPage])
    return ( 
        <div className="saving">
        <div className="back">
            <Link to='/loans-group'><BiChevronLeft/></Link>
            <p className="title">Active Loan</p>
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
        <div className="selected-user">
            <h4 className="form-head">{searchUser}</h4>
        </div>
        <div className="active-loan-body">
            {loading ? (
                <div className="preloader">
                    <LottieAnimation data={preloader}/>
                </div>
            ):(
                <>
                {data?.loans?.length === 0 ? (
                    <div className="empty-animate">
                        <LottieAnimation data={empty}/>
                        <p>No Active Loan Found</p>
                    </div>
                ):(
                    <>
                        {data?.loans?.map((saving) => {
                            return (
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
        </div>
        <Stack style={{marginTop: "10px"}} spacing={2}>
            <TablePagination
                component="div"
                count={data?.limit}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Stack>
    </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.loan?.error,
        loading: state?.loan?.loading,
        data: state?.loan?.activedata?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getActiveLoan: (limit, page) => dispatch(getGroupActiveLoan(limit, page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGroup);