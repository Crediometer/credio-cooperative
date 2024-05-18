import { FaChevronRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const List = () => {
    return ( 
        <div className="admin-outer">
            <div className="admin-inner admin-inner-2">
                <h1 className="ready">Search Results</h1>
                <p className="join-text join-text-2">What We Found</p>
                <div className="join-search-2">
                    <FaSearch/>
                    <input
                        type="text"
                        placeholder="SEARCH FOR COOPERATIVE "
                    ></input>
                </div>      
                <div className="join-search">
                    <p>MODEX WORKERS</p>
                    <Link to="/register-member"><FaChevronRight/></Link>
                </div>
                <div className="join-search">
                    <p>RICE SELLER</p>
                    <FaChevronRight/>
                </div>
                <div className="join-search">
                    <p>BUS DRIVER</p>
                    <FaChevronRight/>
                </div>
                <div className="join-search">
                    <p>FARM SELLERS</p>
                    <FaChevronRight/>
                </div>
            </div>
        </div>
    );
}
 
export default List;