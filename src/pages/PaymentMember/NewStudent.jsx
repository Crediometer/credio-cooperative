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
import { connect } from "react-redux";
import { buttonScan, DisConnect, getQPosInfo, init, sendPIN, startTrade } from "../../Redux/Card/CardScript";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { depositData } from "../../Redux/Deposit/DepositAction";
import LoadingModal from "../../components/Modal/LoadingModal";
import { getLoan } from "../../Redux/Loan/LaonAction";
import { getsinglemember } from "../../Redux/Member/MemberAction";
const NewStudentGroup = ({
    buttonScan, 
    cardData, 
    disconnect,
    connected,
    doTrade,
    sendPin,
    Deposit,
    loading,
    getloans,
    error, 
    data,
    plan,
    memberdata,
    membererror,
    memberloading,
    getsinglemember
}) => {
    const [show1, setShow1] = useState(false)
    const [showBank, setShowBank] = useState(false);
    const [showerror,  setShowError] = useState(false)
    const [selectBank, setSelectBank]  = useState("Select a Bank")
    const [startDate, setStartDate] = useState(getCurrentDate());
    const [memberName, setmemberName] = useState("John Doe")
    const [memberId, setmemberId] = useState("01")
    const [memberEmail, setmemberEmail] = useState("johndoe@gmail.com")
    const [memberPhoneNumber, setmemberPhoneNumber] = useState("09088998789")
    const [transactionType, setTransactionType] = useState("")
    const [message, setMessage] = useState("")
    const [endDate, setEndDate] = useState(getCurrentDate());
    const [totalAmount, setTotalAmount] = useState('');
    const [amountPerUnit, setAmountPerUnit] = useState('');
    const [repeatEvery, setRepeatEvery] = useState('');
    const [postState, setpostState] = useState({});
    const [typeid, setTypeId] = useState("")
    const [keyState, setKeyState] = useState({})
    const [number, setNumber] = useState(1);
    const [success2,  setSuccess2] = useState(false)
    const [next, setnext] = useState(1)
    const {id} = useParams()
    const [accountType, setAccounttype] = useState()
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
    const toggleModal = ()=>{
        setnext(1)
    }
    const handlerepeat =(e)=>{
        const value = e.target.value
        setRepeatEvery(value)
        const newvalue = parseInt(value)
        setpostState({ ...postState, ...{repitationDays: newvalue, memberId, memberName, memberEmail, memberPhoneNumber, message} });
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
    const handletransactiontype =(e)=>{
        const value = e.target.value
        setTransactionType(value)
        setpostState({ ...postState, ...{
            transactionType, 
            memberId:id, 
            memberName: memberdata?.member?.personalInfo?.fullname, 
            memberNumber:memberdata?.member?.personalInfo?.phone,
            groupId: memberdata?.member?.groupId,
            cooperativeId: memberdata?.member?.cooperativeId,
            requestType: 1
        } }); 
    }
    const handletypeId = (e)=>{
        const value = e.target.value
        setTypeId(value)
        if(transactionType == 0){
            setpostState({...postState, ...{productId: typeid, type: true}})
        }else if(transactionType == 1){
            setpostState({...postState, ...{productId: typeid, type: false}})
        }
    }
    const handleAccount=(e)=>{
        const value = e.target.value
        setAccounttype(value);
        const newvalue = parseInt(value, 10)
        setpostState({ ...postState, ...{accountType: newvalue} }); 
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            doTrade(amountPerUnit)
        }catch{
        }
    }       
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
    const handlenext = () =>{
        setnext(next+1)
    }
    const connectreader =  (e)=>{
        e.preventDefault();
        if (!cardData.connected) {
            init();
            buttonScan();
        } else {
            togglemodal()
        }
    }
    const handlePin = () => {
        // e.preventDefault();
        if (pin && pin1 && pin2 && pin3) {
          // send pin to redux
          sendPin(`${pin}${pin1}${pin2}${pin3}`);
        }
    };
    useEffect(() => {  
        if (cardData && cardData.tlv) {
            console.log(cardData)
            console.log(data)
            Deposit(
                { ...postState, ...{tlv: cardData.tlv} },
                () => {
                    setSuccess2(true)
                    setpostState({})
                    setnext(4)
                    // On Success
                },
                () => {
                    // On Error
                }
            );
        }
    }, [cardData.tlv]);
    useEffect(() => {
        // Check if cardData exists and has the required properties
        if (cardData && cardData.posinfo && cardData.posinfo.name) {
            // // setpostState({ ...postState, ...{
            // //     tlv:cardData?.tlv,
            // // } }); 
            // // Compare the last 10 characters of name properties
            // if (connected){
            //     for (let i = 0; i < getprofile.schoolReaders.length; i++) {
            //         // Check if the valueToSearch is in the current array
            //         if (getprofile.schoolReaders[i].uuid.slice(-10).includes(cardData.posinfo.name.slice(-10))) {
                        setnext(2)
            //         }else{
            //             disconnect();
            //             setShowError(true);
            //         }
            //     }
            // }
        }
    }, [cardData.posinfo, connected]);
    useEffect(()=>{
        if(cardData.pinRequest ){
            setnext(3)
        }
    },[cardData])
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
    useEffect(()=>{
        getloans(id, transactionType)
    },[id,transactionType])
    useEffect(()=>{
        getsinglemember(id)
    },[id])
    return ( 
        <div className="payment saving">
            <div className="back">
                <Link to={`/payment-group/${id}`}><BiChevronLeft/></Link>
                <p className="title">Recurring Payments</p>
            </div>
            <div className="card-body">
                {next===1 && (
                    <form style={{ width: '100%', marginTop:"-2 0px" }} onSubmit={connectreader}>
                        <div className="invoice-body">
                            <div className="invoice-period"  style={{ width: '100%' }} >
                                {/* <h4 className="form-head">Period</h4> */}
                                <div className="payment-form">
                                    {/* <div className="form-1">
                                        <label>Repeat Every<span>*</span></label>
                                        <div className="select-field">
                                            <select required onChange={handlerepeat} onBlur={handlerepeat}>
                                                <optgroup>
                                                    <option>--Select Option--</option>
                                                    <option value={5}>5 Days</option>
                                                    <option value={7}>7 Days</option>
                                                    <option value={15}>Biweekly</option>
                                                    <option value={30}>Monthly</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className="form-1">
                                        <label>Transaction Type<span>*</span></label>
                                        <div className="select-field">
                                            <select required onChange={handletransactiontype} onBlur={handletransactiontype}>
                                                <optgroup>
                                                    <option>--Transaction Type--</option>
                                                    <option value={0}>Savings</option>
                                                    <option value={1}>Loan</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    {transactionType == 1 && (
                                        <div className="form-2"  style={{width: "100%"}}>
                                            <div className="input input-4">
                                                <label>Loan Plan</label>
                                                <select
                                                    disabled={next==3}
                                                    onChange={handletypeId}
                                                    onBlur={handletypeId}
                                                    required
                                                >
                                                    <optgroup>
                                                    <option>--Select a Loan Plan---</option>
                                                        {plan?.map(plan => {
                                                            return(
                                                                <option value={plan._id}>{plan.purpose} ||  {plan.amount}</option>
                                                            )
                                                        })}
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                    {transactionType == 0 && (
                                        <div className="form-2"  style={{width: "100%"}}>
                                            <div className="input input-4">
                                                <label>Saving Plan</label>
                                                <select
                                                    disabled={next==3}
                                                    onChange={handletypeId}
                                                    onBlur={handletypeId}
                                                    required
                                                >
                                                    <optgroup>
                                                        <option>--Select a Saving Plan---</option>
                                                        {plan?.map(plan => {
                                                            return(
                                                                <option value={plan._id}>{plan.purpose} ||  {plan.amount}</option>
                                                            )
                                                        })}
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                    {/* <div className="form-1">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="save-con save-con-4">
                            <button>Connect to Credio Reader</button>
                        </div>
                    </form>
                )}
                { next===2 && <div className="card-field">
                    <form onSubmit={handleSubmit}>
                        <div className="form-2"  style={{width: "100%"}}>
                                <div className="input input-4">
                                    <label>Account Type</label>
                                    <select required onChange={handleAccount} onBlur={handleAccount}>
                                        <optgroup>
                                            <option>--Select Account Type--</option>
                                            <option value={1}>Savings Account</option>
                                            <option value={2}>Current Account</option>
                                            <option value={0}>Universal Account</option>
                                        </optgroup>
                                    </select>
                                </div>
                        </div>
                        <div className="form-button">
                            <button className='transfer-button'>{cardData?.requestDisplay
                             ? (
                                <>
                                    <LottieAnimation data={loader}/>
                                    "Scanning your Card.."
                                </>
                            ) 
                             : "Continue"}</button>
                        </div>
                    </form>
                    </div>
                }
                {next === 3 &&
                    <div className="card-field">
                        <p className="enter-pin">Please Enter Your Card Pin</p>
                        <p className="enter-pin">Charges fee of #50 will be added to this transaction</p>
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
                            <button onClick={handlePin}  className='transfer-button'>Transfer</button>
                        </div>
                    </div>
                }
                {next === 4 && <ReceiptModal togglemodal={toggleModal} data={data}/> }
                {loading && (<LoadingModal/>)}
            </div>
            {/* <ReceiptModal/> */}
            {/* {showerror && (<Errormodal togglemodal={togglemodal2}/>)}
            {keyloading && (<LoadingModal/>)}
            {(show1) && (<AccountModal togglemodal={togglemodal} unitamount={amountPerUnit} postState={postState} setpostState={setpostState} setShow1={setShow1}/>)} */}
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log(state)
    return {
        membererror:state?.singlemember?.error,
        memberloading: state?.singlemember?.loading,
        memberdata: state?.singlemember?.data?.payload,
        cardData: state?.card,
        connected: state?.card?.connected,
        loading: state.redeposit.loading,
        data: state.deposit,
        error: state.deposit.error,
        plan: state?.loanlist?.data?.payload?.memberActionList
    };  
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        buttonScan: () => {
            dispatch(buttonScan());
        },
        disconnect: () => {
            dispatch(DisConnect());
        },
        info: () => {
            dispatch(getQPosInfo())
        },
        doTrade: (postState) => {
            dispatch(startTrade(postState));
        },
        sendPin: (pin) => {
            dispatch(sendPIN(pin));
        },
        Deposit: (postdata, history, error) => {
            dispatch(depositData(postdata, history, error));
        },
        getloans: (id, type) => {
            dispatch(getLoan(id, type));
        },
        getsinglemember: (id) => dispatch(getsinglemember(id)),
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(NewStudentGroup);