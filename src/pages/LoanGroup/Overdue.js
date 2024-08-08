import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGroupOverdueLoan, getOverdueLoan } from "../../Redux/Loan/LaonAction";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
import empty from "../../Assets/animations/Empty.json"
import { Stack, TablePagination } from "@mui/material";
const OverdueGroup = ({
    getOverdueLoan,
    loading,
    error,
    data
}) => {
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
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
        getOverdueLoan(rowsPerPage, page)
    },[page, rowsPerPage])
    return ( 
        <div className="saving overdue">
            <div className="back">
                <Link to='/loans-group'><BiChevronLeft/></Link>
                <p className="title">Overdue Loan</p>
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
            <div className="loan-overdue loan-approval-body">
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
                                <div className="overdue-card">
                                 <div className="overdue-card-top">
                                     <div className="overdue-stat">
                                         <h3 className="card-header">Total Loan</h3>
                                         <p>N1,000,000</p>
                                     </div>
                                     <div className="overdue-stat">
                                         <h3 className="card-header">Overdue</h3>
                                         <p>N200,00</p>
                                     </div>
                                     <div className="overdue-stat">
                                         <h3 className="card-header">Balance</h3>
                                         <p>N800,000</p>
                                     </div>
                                 </div>
                                 <div className="personal-section">
                                     <div className="approval-card-top">
                                         <p className="card-header">Personal Information</p>
                                     </div>
                                     <div className="aprroval-information">
                                         <div className="information-inner">
                                             <p>First Name: <span>Adewunmi</span></p>
                                             <p style={{textAlign: "right"}}>Email: <span>adewumi@gmail.com</span></p>
                                         </div>
                                         <div className="information-inner">
                                             <p>Last Name: <span>George</span></p>
                                             <p style={{textAlign: "right"}}>Phone : <span>09078987678</span></p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="personal-section">
                                     <div className="approval-card-top">
                                         <p className="card-header">Financial Information</p>
                                     </div>
                                     <div className="aprroval-information">
                                         <div className="information-inner">
                                             <p>Loan Request: <span>Adewunmi</span></p>
                                             <p>Total Loan: <span>N1,000,000</span></p>
                                         </div>
                                         <div className="information-inner">
                                             <p>Purpose: <span>Car</span></p>
                                             <p>Monthly Payback: <span>N100,000</span></p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
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
        data: state?.loan?.overdueData?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getOverdueLoan: (limit, page) => dispatch(getGroupOverdueLoan(limit, page)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OverdueGroup);