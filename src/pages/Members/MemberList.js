import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import MemberTable from "../../components/Table/MemberTable";
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getmember } from "../../Redux/Member/MemberAction";
import { useEffect } from "react";
import { connect } from "react-redux";
const MemberList = ({
    loading, 
    error, 
    getprofile,
    getmember
}) => {
    useEffect(()=>{
        getmember();
    }, [])
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Member List</p>
            </div>
            <div className="saving-graph">
                    <div className="filter-top">
                    <Link to="/register-member"><button>+ Add Member</button></Link>
                    <div className="join-search-2 search-filter">
                        <FaSearch/>
                        <input
                            type="text"
                            placeholder="SEARCH FOR MEMBER "
                        ></input>
                    </div>  
                </div>
                <MemberTable data={getprofile?.members}/>
                {/* <Stack style={{marginTop: "10px"}} spacing={2}>
                 <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack> */}
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return{
        error:state?.member?.error,
        loading: state?.member?.loading,
        getprofile: state?.member?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getmember: () => dispatch(getmember()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberList);