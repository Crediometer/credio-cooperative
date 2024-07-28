import { BiChevronLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import GroupTable from "../../components/Table/GroupTable";

const Group = () => {
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Groups List</p>
            </div>
            <div className="saving-graph">
                    <div className="filter-top">
                    <Link to="/register-group"><button>+ Add Group</button></Link>
                    <div className="join-search-2 search-filter">
                        <FaSearch/>
                        <input
                            type="text"
                            placeholder="SEARCH FOR GROUP"
                        ></input>
                    </div>  
                </div>
                <GroupTable/>
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
        </div>
     );
}
 
export default Group;