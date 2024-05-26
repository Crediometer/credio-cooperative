import { useEffect, useRef, useState } from "react";
import { FaWifi } from "react-icons/fa6";
import ReceiptModal from "../../components/Modal/ReceiptModal";
import { useParams } from 'react-router-dom';
const CardPayment = () => {
    const {id} = useParams()
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(members);
    const [next, setnext] = useState(1)
    const [pin, setPin] = useState("");
    const [showPin, setShowPin] = useState(false);
    const [showPin1, setShowPin1] = useState(false);
    const [showPin2, setShowPin2] = useState(false);
    const [showPin3, setShowPin3] = useState(false);
    const [success,  setSuccess] = useState(false);
    const atmpin = useRef(null);
    useEffect(()=>{
        if(pin.length === 1){
            atmpin1.current.focus();
        }
        const timer = setTimeout(() => {
            setShowPin(true); // Show PIN after 4ms
        }, 8000);
        return () => clearTimeout(timer);
      
    }, [pin.length]);
    const onChangepin1 = (e) => {
        setPin(e.target.value)
    }
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(()=>{
        if(pin1.length === 1){
            atmpin2.current.focus();
        }
        const timer = setTimeout(() => {
            setShowPin1(true); // Show PIN after 4ms
        }, 8000);
        return () => clearTimeout(timer);
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        setPin1(e.target.value)
    }
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(()=>{
        if(pin2.length === 1){
            atmpin3.current.focus();
        }
        const timer = setTimeout(() => {
            setShowPin2(true); // Show PIN after 4ms
        }, 8000);
        return () => clearTimeout(timer);
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        setPin2(e.target.value)
    }
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    useEffect(()=>{
        const timer = setTimeout(() => {
            setShowPin3(true); // Show PIN after 4ms
        }, 8000);
        return () => clearTimeout(timer);
    }, [pin3.length]);
    const onChangepin4 = (e) => {
        setPin3(e.target.value)
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
    const handlenext = () =>{
        setnext(next+1)
    }
    return ( 
        <div className="saving">
            <p className="transfer-head">Card Payments</p>
            <div className="form-11" style={{ width: '100%' }}>
                <div className="input">
                    <input 
                        type="text" 
                        placeholder="SEARCH FOR MEMBER"
                        value={id ? id: searchInput}
                        onChange={handleInputChange}
                        disabled={id}
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
            <div className="card-body">
              { next===1 && <div className="connect-reader">
                    <FaWifi />
                    <p>Connect Credio Reader</p>
                    <button onClick={handlenext}>Connect</button>
                </div>}
               { next===2 && <div className="card-field">
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Amount</label>
                            <input type="text" 
                            placeholder="Enter Amount"
                            // value={formattedAmount}
                            // onBlur={handleAmount}
                            // onChange={handleAmount}
                            required
                            // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Transaction Type</label>
                            <select>
                                <optgroup>
                                    <option>--Transaction Type--</option>
                                    <option>Savings</option>
                                    <option>Loan</option>
                                  
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="form-button">
                        <button onClick={handlenext} className='transfer-button'>Transfer</button>
                    </div>
                    </div>
                }
                { next===3 && <div className="card-field">
                    <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Account Type</label>
                                <select>
                                    <optgroup>
                                        <option>--Select Account Type--</option>
                                        <option>Savings Account</option>
                                        <option>Current Account</option>
                                        <option>Universal Account</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-button">
                            <button onClick={handlenext} className='transfer-button'>Transfer</button>
                        </div>
                    </div>
                }
                {next === 4 &&
                    <div className="card-field">
                        <p className="enter-pin">Please Enter Your Card Pin</p>
                        <div className="field-container">
                            <div className="field-1">
                                <div className="pinfield">
                                    <input
                                        type={!showPin ? "text": "password"}
                                        maxlength= "1"
                                        value={pin}
                                        onChange={onChangepin1}
                                        ref={atmpin}
                                        autoFocus
                                    ></input>
                                </div>
                            </div>
                            <div className="field-1">
                                <div className="pinfield">
                                    <input
                                        type={!showPin1 ? "text": "password"}
                                        maxlength= "1"
                                        value={pin1}
                                        onChange={onChangepin2}
                                        ref={atmpin1}
                                    ></input>
                                </div>
                            </div>
                            <div className="field-1">
                                <div className="pinfield">
                                    <input
                                        type={!showPin2 ? "text": "password"}
                                        maxlength= "1"
                                        value={pin2}
                                        onChange={onChangepin3}
                                        ref={atmpin2}
                                    ></input>
                                </div>
                            </div>
                            <div className="field-1">
                                <div className="pinfield">
                                    <input
                                        type={!showPin3 ? "text": "password"}
                                        maxlength= "1"
                                        value={pin3}
                                        onChange={onChangepin4}
                                        ref={atmpin3}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-button">
                            <button onClick={handlenext}  className='transfer-button'>Transfer</button>
                        </div>
                    </div>
                }
                {next === 5 && <ReceiptModal /> }
            </div>
        </div>
    );
}
 
export default CardPayment;