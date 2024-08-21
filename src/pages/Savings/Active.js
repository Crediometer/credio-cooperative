import { BiChevronLeft } from "react-icons/bi";
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from '../Loan/Payment.module.css';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getActiveSaving } from "../../Redux/Saving/SavingAction";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
import { Stack, TablePagination } from "@mui/material";
const ActiveSavings = ({
    getActiveSaving,
    loading,
    error,
    data
}) => {
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
        getActiveSaving(rowsPerPage, page)
    },[page, rowsPerPage])
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/saving'><BiChevronLeft/></Link>
                <p className="title">Active Saving</p>
            </div>
            {/* <div className="top-search">
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
            </div> */}
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
                    {data?.savings?.length === 0 ? (
                        <div className="empty-animate">
                            <LottieAnimation data={empty}/>
                            <p>No Active Saving Found</p>
                        </div>
                    ):(
                        <>
                            {data?.savings?.map((saving) => {
                                <Link to="/saving-active-details">
                                    <div className="active-card">
                                        <div className="active-top">
                                            <div className="active-status">
                                                <p>ACTIVE</p>
                                            </div>
                                            <div className={styles.paymentCircleInner}>
                                                <svg
                                                width={circleWidth}
                                                height={circleWidth}
                                                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                                                >
                                                <circle
                                                    cx={circleWidth / 2}
                                                    cy={circleWidth / 2}
                                                    strokeWidth="10px"
                                                    r={radius}
                                                    className={styles.circleBackground}
                                                />
                                                <circle
                                                    cx={circleWidth / 2}
                                                    cy={circleWidth / 2}
                                                    strokeWidth="10px"
                                                    r={radius}
                                                    className={styles.circleProgress}
                                                    style={{
                                                        strokeDasharray: dashArray,
                                                        strokeDashoffset: dashOffset
                                                    }}
                                                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                                                />
                                                    {" "}
                                                    <text 
                                                        x='50%' 
                                                        y="50%" 
                                                        dy='0.3em' 
                                                        textAnchor='middle'
                                                        className={styles.circleText}
                                                    >
                                                        80%
                                                    </text>
                                                    {/* <text 
                                                        x='50%' 
                                                        y="50%" 
                                                        dy='0.3em' 
                                                        textAnchor='middle'
                                                        className={styles.circleText}
                                                    >
                                                        NGN378,032
                                                    </text> */}
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="active-body">
                                            <p className="loan-for">Ademola John</p>
                                            <h3>N400,000</h3>
                                            <p className="loan-details">Your saving request has been approved and disbursed</p>
                                            <div className="active-warning">
                                                <FaExclamationCircle/>
                                                <p>Tap here to moere details </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
        error:state?.saving?.error,
        loading: state?.saving?.loading,
        data: state?.saving?.activedata?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getActiveSaving: (limit, page) => dispatch(getActiveSaving(limit, page)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSavings);