import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import MemberTable from "../../components/Table/MemberTable";
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getmember } from "../../Redux/Member/MemberAction";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TablePagination } from "@mui/material";
const MemberList = ({
    loading, 
    error, 
    data,
    getmember
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    useEffect(()=>{
        getmember(page, rowsPerPage);
    }, [page, rowsPerPage])
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Member List</p>
            </div>
            <div className="saving-graph">
                    <div className="filter-top">
                    <Link to="/register-member"><button>+ Add Member</button></Link>
                    {/* <div className="join-search-2 search-filter">
                        <FaSearch/>
                        <input
                            type="text"
                            placeholder="SEARCH FOR MEMBER "
                        ></input>
                    </div>   */}
                </div>
                <MemberTable data={data?.members}/>
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
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.member?.error,
        loading: state?.member?.loading,
        data: state?.member?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getmember: (limit, page) => dispatch(getmember(limit, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberList);