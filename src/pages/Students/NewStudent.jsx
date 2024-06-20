import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
// import {connect} from 'react-redux'
import credio from "../../Assets/logo.png"
import "./Students.css"
import {Select, Switch} from 'antd'
import { useEffect, useRef, useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ReceiptModal from "../../components/Modal/ReceiptModal";
import { BiChevronLeft } from "react-icons/bi";
const NewStudent = ({}) => {
    const [show1, setShow1] = useState(false)
    const [showBank, setShowBank] = useState(false);
    const [showerror,  setShowError] = useState(false)
    const [selectBank, setSelectBank]  = useState("Select a Bank")
    const [startDate, setStartDate] = useState(getCurrentDate());
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [grade, setGrade] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [term, setTerm] = useState('')
    const [message, setMessage] = useState("")
    const [endDate, setEndDate] = useState(getCurrentDate());
    const [totalAmount, setTotalAmount] = useState('');
    const [amountPerUnit, setAmountPerUnit] = useState('');
    const [repeatEvery, setRepeatEvery] = useState('');
    const [postState, setpostState] = useState({});
    const [keyState, setKeyState] = useState({})
    const [number, setNumber] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [next, setnext] = useState(1)
    const {id} = useParams()
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(members);
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
    const handleClick = () => {
        setIsChecked(!isChecked);
    };
    const handleShow =()=>{
        setShowBank(!showBank)
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
    const handlerepeat =(e)=>{
        const value = e.target.value
        setRepeatEvery(value)
        const newvalue = parseInt(value)
        setpostState({ ...postState, ...{repitationDays: newvalue} });
    }
    const handletotal =(e)=>{
        const value = e.target.value
        setTotalAmount(value)
        const newvalue = parseFloat(value)
        setpostState({ ...postState, ...{totalAmount: newvalue} });
    }
    const handleunit =(e)=>{
        const value = e.target.value
        setAmountPerUnit(value)
        // setpostState({ ...postState, ...{unit: amountPerUnit} }); 
    }
    const handleSchoolName = (e)=>{
        const value = e.target.value
        setName(value)
        setpostState({ ...postState, ...{studentName: name} }); 
    }
    const handleEmail = (e)=>{
        const value = e.target.value
        setEmail(value)
        setpostState({ ...postState, ...{parentEmail: email} }); 
    }
    const handleStudentGrade = (e)=>{
        const value = e.target.value
        setGrade(value)
        setpostState({ ...postState, ...{grade: grade} }); 
    }
    const handlePhoneNumber = (e)=>{
        const value = e.target.value
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }
        setPhoneNumber(formattedNumber)
        setpostState({ ...postState, ...{parentPhoneNumber: phoneNumber} }); 
    }
    const handleTerm = (e)=>{
        const value = e.target.value
        setTerm(value)
        setpostState({ ...postState, ...{term: term} }); 
    }
    const handleMessage = (e)=>{
        const value = e.target.value
        setMessage(value)
        setpostState({ ...postState, ...{message: message} }); 
    }
    useEffect(() => {
        if (totalAmount && amountPerUnit && repeatEvery) {
            const days = {
                5: 5,
                7: 7,
                15: 15,
                30: 30
            };

            const repeatDays = days[repeatEvery];
            const units = parseInt(totalAmount) / parseInt(amountPerUnit);
            const endDateValue = new Date(startDate);
            endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
            setEndDate(formatDate(endDateValue));
            // setpostState({ ...postState, ...{startdate: startDate} });
            // setpostState({ ...postState, ...{endDate: endDate} });  
        }
    }, [totalAmount, amountPerUnit, repeatEvery, startDate]);
    function getCurrentDate() {
        const today = new Date();
        return formatDate(today);
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const togglemodal = ()=>{
        setShow1(!show1)
    }
    const togglemodal2 = ()=>{
        setShowError(!showerror)
    }
    const handlenext = () =>{
        setnext(next+1)
    }
    
    // const connectreader =  (e)=>{
    //     e.preventDefault();
    //     if (!cardData.connected) {
    //         init();
    //         buttonScan();
    //     } else {
    //         togglemodal()
    //     }
    // }
  
    // useEffect(() => {
    //     // Check if cardData exists and has the required properties
    //     if (cardData && cardData.posinfo && cardData.posinfo.name && getprofile && getprofile.schoolReaders) {
    //         // setpostState({ ...postState, ...{
    //         //     tlv:cardData?.tlv,
    //         // } }); 
    //         // Compare the last 10 characters of name properties
    //         if (connected){
    //             for (let i = 0; i < getprofile.schoolReaders.length; i++) {
    //                 // Check if the valueToSearch is in the current array
    //                 if (getprofile.schoolReaders[i].uuid.slice(-10).includes(cardData.posinfo.name.slice(-10))) {
    //                     setShow1(true);
    //                 }else{
    //                     disconnect();
    //                     setShowError(true);
    //                 }
    //             }
    //         }
    //     }
    // }, [cardData.posinfo, connected]);
    // useEffect(()=>{
    //     setpostState({ ...postState,
    //         tlv:cardData?.tlv,
    //         key: keyinfo?.pin_key,
    //         merchantId: keyinfo?.merchantId,
    //         merchantCategoryCode: keyinfo?.merchantCategoryCode,
    //         terminalId:keyinfo?.terminalid,
    //         merchantName: keyinfo?.merchantName
    //     }); 
    // },[keyinfo, cardData])
    // useEffect(()=>{
    //     fetchprofile();
    // },[]);
    return ( 
        <div className="payment saving">
            {/* <div className="filter-nav">
                <p className={(number===1) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(1)}}>Cash Payment</p>
                <p className={(number===2) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(2)}}>Card Payment</p>
                <p className={(number===3) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(3)}}>Direct Bank Debit</p>
                <p className={(number===4) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(4)}}>Recuring Payment</p>
            </div> */}
            <div className="back">
                <Link to='/payment'><BiChevronLeft/></Link>
                <p className="title">Recurring Payments</p>
            </div>
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
                {next===1 && (
                    <form style={{ width: '100%', marginTop:"-2 0px" }} >
                        <div className="invoice-body">
                            {/* <div className="invoice-payment">
                                <h4 className="form-head">Student details</h4>
                                <div className="payment-form">
                                    <div className="form-1">
                                        <label>Student Name<span>*</span></label>
                                        <div className="input-search-name">
                                            <input 
                                                type="text"
                                                onChange={handleSchoolName}
                                                onBlurCapture={handleSchoolName}
                                                required
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="form-1">
                                        <label>Parent/Guardian Email Address<span>*</span></label>
                                        <div className="input-search-name">
                                            <input 
                                                type="email"
                                                onChange={handleEmail}
                                                onBlur={handleEmail}
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-22 form-2-mobile">
                                        <div className="form-1">
                                            <label>Student Grade<span>*</span></label>
                                            <div className="input-search-name">
                                                <input 
                                                    type="text"
                                                    required
                                                    onChange={handleStudentGrade}
                                                    onBlur={handleStudentGrade}
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="form-1">
                                            <label>Parent/Guardian Phone Number<span>*</span></label>
                                            <div className="input-search-name">
                                                <input 
                                                    type="text"
                                                    required
                                                    onChange={handlePhoneNumber}
                                                    onBlur={handlePhoneNumber}
                                                    maxLength={11}
                                                ></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Terms<span>*</span></label>
                                        <div className="select-field">
                                            <select type="text" 
                                                required
                                                onChange={handleTerm}
                                                onBlur={handleTerm}
                                            >
                                                <optgroup>
                                                    <option value={1}>Select Term</option>
                                                    <option value={1}>First Term</option>
                                                    <option value={2}>Second Term</option>
                                                    <option value={3}>Third Term</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Message</label>
                                        <div className="input-search-name">
                                            <input type="text"
                                                onChange={handleMessage}
                                                onBlur={handleMessage}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="invoice-period"  style={{ width: '100%' }} >
                                <h4 className="form-head">Period</h4>
                                <div className="payment-form">
                                    <div className="form-1">
                                        <label>Repeat Every<span>*</span></label>
                                        <div className="select-field">
                                            <select type="text" required onChange={handlerepeat} onBlur={handlerepeat}>
                                                <optgroup>
                                                    <option>--Select Option--</option>
                                                    <option value={5}>5 Days</option>
                                                    <option value={7}>7 Days</option>
                                                    <option value={15}>Biweekly</option>
                                                    <option value={30}>Monthly</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Transaction Type<span>*</span></label>
                                        <div className="select-field">
                                            <select type="text" required>
                                                <optgroup>
                                                    <option>--Transaction Type--</option>
                                                    <option>Savings</option>
                                                    <option>Loan</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Enter Total Amount<span>*</span></label>
                                        <div className="input-search-name">
                                            <input type="text" required onChange={handletotal} onBlur={handletotal}></input>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Enter Amount per unit<span>*</span></label>
                                        <div className="input-search-name">
                                            <input type="text" required onChange={handleunit} onBlur={handleunit}></input>
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>Start Date<span>*</span></label>
                                        <div className="input-search-name">
                                            <input type="date" required value={startDate} disabled></input>
                            
                                        </div>
                                    </div>
                                    <div className="form-1">
                                        <label>End Date<span>*</span></label>
                                        <div className="input-search-name">
                                            <input type="date" required value={endDate} disabled ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="save-con save-con-4">
                            <button onClick={handlenext}>Connect to Credio Reader</button>
                        </div>
                    </form>
                )}
                {/* { next===2 && <div className="card-field">
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
                } */}
                { next===2 && <div className="card-field">
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
                {next === 3 &&
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
                {next === 4 && <ReceiptModal /> }
            </div>
            {/* <ReceiptModal/> */}
            {/* {showerror && (<Errormodal togglemodal={togglemodal2}/>)}
            {keyloading && (<LoadingModal/>)}
            {(show1) && (<AccountModal togglemodal={togglemodal} unitamount={amountPerUnit} postState={postState} setpostState={setpostState} setShow1={setShow1}/>)} */}
        </div>
    );
}
// const mapStoreToProps = (state) => {
//     return {
//       cardData: state.card,
//       connected: state.card.connected,
//       getprofile: state.profile.data,
//       keyloading: state.key.loading,
//       keyinfo: state.key.deposit.data
//     };  
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchprofile: () => dispatch(fetchprofile()),
//       buttonScan: () => {
//         dispatch(buttonScan());
//       },
//       disconnect: () => {
//         dispatch(DisConnect());
//       },
//       info: () => {
//         dispatch(getQPosInfo())
//       },
//       keydata: (poststate, loading, error)=>{
//         dispatch(keyData(poststate, loading, error))
//       }
//     };
//   };
  
export default NewStudent;