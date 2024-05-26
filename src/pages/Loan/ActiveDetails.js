import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const ActiveDetails = () => {
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/loan-active'><BiChevronLeft/></Link>
                <p className="title">Active Loan</p>
            </div>
            <div className="active-loan-body">
                <div className="active-details-card">
                    <div className="active-details-inner">
                        <div className="details">
                            <h3>Loan Amount</h3>
                            <p>N400,000</p>
                        </div>
                        <div className="details">
                            <h3>Duration</h3>
                            <p>13 Months</p>
                        </div>
                    </div>
                    <div className="active-details-inner">
                        <div className="details">
                            <h3>Interest</h3>
                            <p>N20,000(8%)</p>
                        </div>
                        <div className="details">
                            <h3>Payback</h3>
                            <p>N420,000</p>
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <p className="schedule-header">Repayment Schedule </p>
                    <div className="schedule-inner">
                        <div className="schedule-top">
                            <p>1st Installment</p>
                            <div className="schedule-status">
                                <p>Paid</p>
                            </div>
                        </div>
                        <div className="schedule-inner-body">
                            <div className="schedule-inner-detail">
                                <p>Loan Amount</p>
                                <h3>N40,000</h3>
                            </div>
                            <div className="schedule-inner-detail">
                                <p>Due Date</p>
                                <h3>14th Jan, 2022</h3>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-inner">
                        <div className="schedule-top">
                            <p>2nd Installment</p>
                            <div className="schedule-status">
                                <p>Paid</p>
                            </div>
                        </div>
                        <div className="schedule-inner-body">
                            <div className="schedule-inner-detail">
                                <p>Loan Amount</p>
                                <h3>N40,000</h3>
                            </div>
                            <div className="schedule-inner-detail">
                                <p>Due Date</p>
                                <h3>14th Feb, 2022</h3>
                            </div>
                        </div>
                    </div>
                    <div className="schedule-inner">
                        <div className="schedule-top">
                            <p>3rd Installment</p>
                        </div>
                        <div className="schedule-inner-body">
                            <div className="schedule-inner-detail">
                                <p>Loan Amount</p>
                                <h3>N40,000</h3>
                            </div>
                            <div className="schedule-inner-detail">
                                <p>Due Date</p>
                                <h3>14th Mar, 2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ActiveDetails;