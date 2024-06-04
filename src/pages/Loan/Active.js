import { BiChevronLeft } from "react-icons/bi";
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Payment.module.css';
import { useState } from "react";

const Active = () => {
    const circleWidth = 50
    const percentage = (70/100) * 100 ;
    const radius = 20
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage) / 100; 
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [show, setShow] = useState(false);
    const [filteredMembers, setFilteredMembers] = useState(members);

    const togglemodal=()=>{
        setShow(!show)
    }
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        
        // Filter members based on input value
        if (value) {
            const filtered = members.filter(member => 
                member.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredMembers(filtered);
        } else {
            setFilteredMembers([]);
        }
    };
    const handleMemberClick = (member) => {
        setSearchUser(member);
        setSearchInput("")
        setFilteredMembers([]);
    };
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Active Loan</p>
            </div>
            <div className="top-search">
                <div className="form-11" style={{ width: '100%' }}>
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="SEARCH FOR MEMBER"
                            value={searchInput}
                            onChange={handleInputChange}
                            required
                        ></input>
                    </div>
                </div>
                <div className="statement-date statement-date-2">
                    <input
                        type='text'
                        placeholder='Start Date'
                        className='transferfield'
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {(e.target.type = "text");}}
                        // onChange={handlestartdate}
                        required
                    ></input>
                </div>
            </div>
            {searchInput && (
                <div className="member-list">
                    {filteredMembers.length > 0 ? (
                        filteredMembers.map((member, index) => (
                            <div    
                                onClick={() => handleMemberClick(member)}
                                style={{ cursor: 'pointer' }} 
                                key={index} 
                                className="member-item"
                            >
                                {member}
                            </div>
                        ))
                    ) : (
                        <div>No members found</div>
                    )}
                </div>
            )}
            <div className="selected-user">
                <h4 className="form-head">{searchUser}</h4>
            </div>
            <div className="active-loan-body">
                <Link to="/loan-active-details">
                    <div className="active-card">
                        <div className="active-top">
                            <div className="active-status">
                                <p>ACTIVE</p>
                            </div>
                            <div className={styles.paymentCircleInner}>
                                <svg
                                width={circleWidth}
                                height={circleWidth}
                                viewBox={`0 0 ${circleWidth} ${circleWidth}`}
                                >
                                <circle
                                    cx={circleWidth / 2}
                                    cy={circleWidth / 2}
                                    strokeWidth="10px"
                                    r={radius}
                                    className={styles.circleBackground}
                                />
                                <circle
                                    cx={circleWidth / 2}
                                    cy={circleWidth / 2}
                                    strokeWidth="10px"
                                    r={radius}
                                    className={styles.circleProgress}
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset: dashOffset
                                    }}
                                    transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
                                />
                                    {" "}
                                    <text 
                                        x='50%' 
                                        y="50%" 
                                        dy='0.3em' 
                                        textAnchor='middle'
                                        className={styles.circleText}
                                    >
                                        80%
                                    </text>
                                    {/* <text 
                                        x='50%' 
                                        y="50%" 
                                        dy='0.3em' 
                                        textAnchor='middle'
                                        className={styles.circleText}
                                    >
                                        NGN378,032
                                    </text> */}
                                </svg>
                            </div>
                        </div>
                        <div className="active-body">
                            <p className="loan-for">Ademola John</p>
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