import { Link } from "react-router-dom";
import "./Withdrawal.css"
import { BiChevronLeft } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
const Withdrawal = () => {
    const [show, setShow] = useState(false)
    const [showDrop, setShowDrop] = useState(false)
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Withdrawal Approval</p>
            </div>
            <div className="withdrawal-body">
                <div className="withdrawal-card">
                    <div className="withdrawal-open">
                        <div className="withdrawal-left">
                            <p>Adewumi  098356363463</p>
                        </div>
                        <div className="withdrawal-right" onClick={()=>{setShow(!show)}}>
                            <p>See Details</p>
                        </div>
                    </div>
                    {show && (
                        <div className="withdrawal-details">
                            <div className="withdrawal-section">
                                <h3>N900,000</h3>
                                <p>Amount Requested :</p>
                            </div>
                            <div className="withdrawal-section">
                                <h3>N1,000,000</h3>
                                <p>Amount In Savings:</p>
                            </div>
                            <div className="withdrawal-section">
                                <h3>17-03-2023</h3>
                                <p>Maturity Date : </p>
                            </div>
                            <div className="withdrawal-section">
                                <div className="withdrawal-status">
                                    <p>Pending</p>
                                    <div onClick={()=>{setShowDrop(!showDrop)}}>
                                        <IoMdArrowDropdown/>
                                    </div>
                                    {showDrop && (
                                        <div className="dropdown">
                                            <p>Approve</p>
                                            <p>Pending</p>
                                            <p>Failed</p>
                                        </div>
                                    )}
                                </div>
                                <p>Status</p>
                            </div>
                        </div>
                    )}
                </div>  
            </div>
        </div>    
    );
}
 
export default Withdrawal;      