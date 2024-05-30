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
                <div className="form-11" style={{ width: '100%' }}>
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="SEARCH LOAN"
                            required
                        ></input>
                    </div>
                </div>
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <p>15th May, 2024</p>
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
                </div>
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <p>20th May, 2024</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Adeleye</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>adeleye@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Tobi</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>090789589</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Financial Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>Loan Request: <span>Adeleye</span></p>
                                <p>Total Amount Saved: <span>N500,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Business</span></p>
                                <p>Monthly Income: <span>N100,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <p>22th May, 2024</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Akin</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>akin@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Lara</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>08090987646</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Financial Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>Loan Request: <span>Akin</span></p>
                                <p>Total Amount Saved: <span>N5,000,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Business</span></p>
                                <p>Monthly Income: <span>N500,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="approval-card">
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                            <p>25th May, 2024</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Mayowa</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>mayowa@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Taiwa</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>09089878576</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Financial Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>Loan Request: <span>Mayowa</span></p>
                                <p>Total Amount Saved: <span>N2,500,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Business</span></p>
                                <p>Monthly Income: <span>N300,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Approval;