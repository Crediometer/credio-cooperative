import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import MemberTable from "../../components/Table/MemberTable";
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const NewMemberList = () => {
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">New Member List</p>
            </div>
            <div className="saving-graph">
                    <div className="filter-top">
                    {/* <Link to="/register-member"><button>+ Add Member</button></Link> */}
                    <div className="join-search-2 search-filter">
                        <FaSearch/>
                        <input
                            type="text"
                            placeholder="SEARCH FOR MEMBER "
                        ></input>
                    </div>  
                </div>
                <MemberTable/>
                <Stack style={{marginTop: "10px"}} spacing={2}>
                 <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </div>
    );
}
 
export default NewMemberList;