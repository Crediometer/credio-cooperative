import { BiChevronLeft } from "react-icons/bi";
import "./Expenses.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ExpenseModal from "../../components/Modal/ExpenseModal";
const Expenses = () => {
    const [number, setNumber] = useState(1);
    const [show, setshow] = useState(false)

    const handleShow = () =>{
        setshow(!show)
    }
    return ( 
        <div className="expenses saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Expenses</p>
            </div>
            <div className="expense-nav-outer">
                <div className="filter-nav expense-top-nav">
                    <p className={(number===1) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(1)}}>Pump In</p>
                    <p className={(number===2) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(2)}}>Pump Out</p>
                </div>
            </div>
            {number === 1 && (
                <div className="expense-body">
                    <div className="expense">
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {number === 2  && (
                <div className="expense-body">
                    <div className="expense">
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="expense">
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Pump In</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
                                    <p>15th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Purpose: <span>Adewunmi</span></p>
                                        <p style={{textAlign: "right"}}>Source: <span>adewumi@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        {/* <p>Last Name: <span>George</span></p> */}
                                        <p style={{textAlign: "right"}}>Administrator : <span>09078987678</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="add-button" onClick={handleShow}>
                <FaPlus/>
            </div>

            {show && <ExpenseModal togglemodal= {handleShow}/>}
        </div>
    );
}
 
export default Expenses;