import { BiChevronLeft } from "react-icons/bi";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Approval = () => {
    return ( 
        <div className="saving approval">
            <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Loan Approval</p>
            </div>
            <div className="loan-approval-body">
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <div className="status">
                                <p>verified</p>
                                <FaCheck/>
                            </div>
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
                                <p>Total Amount Saved: <span>N1,000,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Car</span></p>
                                <p>Monthly Income: <span>N200,000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <textarea
                            placeholder="Note"
                        >
                        </textarea>
                    </div>
                    <div className="qualify">
                        <h3>Qualify Loan</h3>
                        <div className="qualify-button">
                            <button className="approve">Approve</button>
                            <button className="reject">Reject</button>
                        </div>
                    </div>
                </div>
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <div className="status status-red">
                                <p>unverified</p>
                                <FaTimes/>
                            </div>
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
                                <p>Total Amount Saved: <span>N1,000,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Car</span></p>
                                <p>Monthly Income: <span>N200,000</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="note">
                        <textarea
                            placeholder="Note"
                        >
                        </textarea>
                    </div>
                    <div className="qualify">
                        <h3>Qualify Loan</h3>
                        <div className="qualify-button">
                            <button className="approve">Approve</button>
                            <button className="reject">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Approval;