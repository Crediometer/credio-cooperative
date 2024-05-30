import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Overdue = () => {
    return ( 
        <div className="saving overdue">
            <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Overdue Loan</p>
            </div>
            <div className="loan-overdue loan-approval-body">
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
                <div className="overdue-card">
                    <div className="overdue-card-top">
                        <div className="overdue-stat">
                            <h3 className="card-header">Total Loan</h3>
                            <p>N2,500,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Overdue</h3>
                            <p>N400,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Balance</h3>
                            <p>N1,800,000</p>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Akin</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>akin@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Tobi</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>09087898789</span></p>
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
                                <p>Total Loan: <span>N2,500,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Car</span></p>
                                <p>Monthly Payback: <span>N200,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overdue-card">
                    <div className="overdue-card-top">
                        <div className="overdue-stat">
                            <h3 className="card-header">Total Fund</h3>
                            <p>N1,200,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Overdue</h3>
                            <p>N600,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Balance</h3>
                            <p>N600,00</p>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Kola</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>kol@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Joy</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>089689098</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Financial Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>Loan Request: <span>Kola</span></p>
                                <p>Total Loan: <span>N1,200,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Car</span></p>
                                <p>Monthly Payback: <span>N200,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overdue-card">
                    <div className="overdue-card-top">
                        <div className="overdue-stat">
                            <h3 className="card-header">Total Loan</h3>
                            <p>N500,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Overdue</h3>
                            <p>N480,000</p>
                        </div>
                        <div className="overdue-stat">
                            <h3 className="card-header">Balance</h3>
                            <p>N20,000</p>
                        </div>
                    </div>
                    <div className="personal-section">      
                        <div className="approval-card-top">
                            <p className="card-header">Personal Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>First Name: <span>Adetola</span></p>
                                <p style={{textAlign: "right"}}>Email: <span>adetola@gmail.com</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Last Name: <span>Muyiwa</span></p>
                                <p style={{textAlign: "right"}}>Phone : <span>08056898909</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-section">
                        <div className="approval-card-top">
                            <p className="card-header">Financial Information</p>
                        </div>
                        <div className="aprroval-information">
                            <div className="information-inner">
                                <p>Loan Request: <span>Adetola</span></p>
                                <p>Total Loan: <span>N500,000</span></p>
                            </div>
                            <div className="information-inner">
                                <p>Purpose: <span>Car</span></p>
                                <p>Monthly Payback: <span>N20,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Overdue;