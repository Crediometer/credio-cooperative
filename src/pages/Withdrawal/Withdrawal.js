import { Link } from "react-router-dom";
import "./Withdrawal.css"
import { BiChevronLeft } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
const Withdrawal = () => {
    const [show, setShow] = useState(false)
    const [showDrop, setShowDrop] = useState(false)
    const [activeno, setActiveno] = useState(1)
    const handleactiveno = (id)=>{
        setActiveno(id)
    }
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Withdrawal Approval</p>
            </div>
            <div className="withdrawal-body">
                <div className="withdrawal-filter">
                    <div className="date-picker date-picker-2">
                        <div className="statement-date statement-date-2">
                            <input
                                type='text'
                                placeholder='Start Date'
                                className='transferfield transferfield-2'
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => {(e.target.type = "text");}}
                                // onChange={handlestartdate}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="filter-buttons">
                        <button className={activeno === 1 && 'active-filter-button'} onClick={()=>{handleactiveno(1)}}> All </button>
                        <button className={activeno === 2 && 'active-filter-button'} onClick={()=>{handleactiveno(2)}}> Savings </button>
                        <button className={activeno === 3 && 'active-filter-button'} onClick={()=>{handleactiveno(3)}}> Loans </button>
                    </div>
                </div>
                {/* <div className="withdrawal-card">
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
                <div className="withdrawal-card">
                    <div className="withdrawal-open">
                        <div className="withdrawal-left">
                            <p>Abisola  09098748799</p>
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
                <div className="withdrawal-card">
                    <div className="withdrawal-open">
                        <div className="withdrawal-left">
                            <p>Oyekunle  0812678998</p>
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
                <div className="withdrawal-card">
                    <div className="withdrawal-open">
                        <div className="withdrawal-left">
                            <p>Ademuyiwa  09098758993</p>
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
                </div>   */}
                {activeno === 1 && (
                    <>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N500,000</h2>
                                    </div>
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
                                        <p>Total Amount Loaned: <span>N500,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N100,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N5,000,000</h2>
                                    </div>
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
                                        <p>Total Amount Loaned: <span>N5,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N500,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N250,000</h2>
                                    </div>
                                    <p>20th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Akindotun</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>akindotun@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Elijah</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>0809856746</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Akindotun</span></p>
                                        <p>Total Amount Saved: <span>N2,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N1,500,000</h2>
                                    </div>
                                    <p>25th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Kolawole</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>kolawolelara@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Lara</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>08985764678</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>lara</span></p>
                                        <p>Total Amount Loaned: <span>N1,500,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N250,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N450,000</h2>
                                    </div>
                                    <p>28th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Adeleye</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>adeleye@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Tobiloba</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>08142256724</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Tobiloba</span></p>
                                        <p>Total Amount Saved: <span>N5,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N250,000</h2>
                                    </div>
                                    <p>28th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Akindotun</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>akindotun@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Elijah</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>0809856746</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Akindotun</span></p>
                                        <p>Total Amount Saved: <span>N2,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
               {activeno === 2 && (
                    <>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N200,000</h2>
                                    </div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N250,000</h2>
                                    </div>
                                    <p>20th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Akindotun</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>akindotun@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Elijah</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>0809856746</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Akindotun</span></p>
                                        <p>Total Amount Saved: <span>N2,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N450,000</h2>
                                    </div>
                                    <p>28th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Adeleye</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>adeleye@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Tobiloba</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>08142256724</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Tobiloba</span></p>
                                        <p>Total Amount Saved: <span>N5,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-saving">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Savings</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N250,000</h2>
                                    </div>
                                    <p>28th May, 2024</p>
                                </div>
                                
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Akindotun</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>akindotun@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Elijah</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>0809856746</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>Akindotun</span></p>
                                        <p>Total Amount Saved: <span>N2,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Car</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                 {activeno === 3 && (
                    <>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N500,000</h2>
                                    </div>
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
                                        <p>Total Amount Loaned: <span>N500,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N100,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N5,000,000</h2>
                                    </div>
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
                                        <p>Total Amount Loaned: <span>N5,000,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N500,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="approval-card approval-loan">
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Personal Information</p>
                                    <div className="information-inner information-inner-2">
                                        <p className="withdrawal-type">Loan</p>
                                        <h2 className="withdrawal-type withdrawal-type-2">N1,500,000</h2>
                                    </div>
                                    <p>25th May, 2024</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>First Name: <span>Kolawole</span></p>
                                        <p style={{textAlign: "right"}}>Email: <span>kolawolelara@gmail.com</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Last Name: <span>Lara</span></p>
                                        <p style={{textAlign: "right"}}>Phone : <span>08985764678</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                    <p className="card-header">Financial Information</p>
                                </div>
                                <div className="aprroval-information">
                                    <div className="information-inner">
                                        <p>Loan Request: <span>lara</span></p>
                                        <p>Total Amount Loaned: <span>N1,500,000</span></p>
                                    </div>
                                    <div className="information-inner">
                                        <p>Purpose: <span>Business</span></p>
                                        <p>Monthly Payback: <span>N250,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>    
    );
}
 
export default Withdrawal;      