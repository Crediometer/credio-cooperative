import { FaChevronRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Join = () => {
    return ( 
        <div className="admin-outer">
            <div className="admin-inner">
                <h1 className="ready">Join a cooperative</h1>
                <p className="join-text">This feature allow you to join a particular cooperative or be able to create a new cooperative  </p>
                <div className="join-search">
                    <FaSearch/>
                    <input
                        type="text"
                        placeholder="SEARCH FOR COOPERATIVE "
                    ></input>
                    <Link to='/join-list'><FaChevronRight/></Link>
                </div   >
                <Link className="setup-link" to="/">
                   <div className="setup">
                        <p>SET UP A COOPERATIVE</p>  
                        <FaChevronRight/> 
                    </div>
                </Link>
             
            </div>
        </div>
    );
}
 
export default Join;