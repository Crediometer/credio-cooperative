import { BiChevronLeft } from "react-icons/bi";
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Active = () => {
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Active Loan</p>
            </div>
            <div className="active-loan-body">
                <Link to="/loan-active-details">
                    <div className="active-card">
                        <div className="active-top">
                            <div className="active-status">
                                <p>ACTIVE</p>
                            </div>
                        </div>
                        <div className="active-body">
                            <p className="loan-for">Car Loan</p>
                            <h3>N400,000</h3>
                            <p className="loan-details">Your car loan request has been approved and disbursed</p>
                            <div className="active-warning">
                                <FaExclamationCircle/>
                                <p>Tap here to moere details </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Active;