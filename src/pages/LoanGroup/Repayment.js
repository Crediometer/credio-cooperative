import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
// import {connect} from 'react-redux'
import credio from "../../Assets/logo.png"
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
import { depositData, depositRepayment } from "../../Redux/Deposit/DepositAction";
import LoadingModal from "../../components/Modal/LoadingModal";
import { getLoan } from "../../Redux/Loan/LaonAction";
import { getgroupmember, getsinglemember } from "../../Redux/Member/MemberAction";
const Repayment = ({
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
    getmember
}) => {
    const [show1, setShow1] = useState(false)
    const [showBank, setShowBank] = useState(false);
    const [showerror,  setShowError] = useState(false)
    const [selectBank, setSelectBank]  = useState("Select a Bank")
    const [memberName, setmemberName] = useState("")
    const [memberId, setmemberId] = useState("")
    const [memberEmail, setmemberEmail] = useState("")
    const [memberPhoneNumber, setmemberPhoneNumber] = useState("")
    const [transactionType, setTransactionType] = useState("")
    const [message, setMessage] = useState("")
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
    const handletotal =(e)=>{
        const value = e.target.value
        setTotalAmount(value)
        const newvalue = parseFloat(value)
        setpostState({ ...postState, ...{amount: newvalue} });
    }
    const handleMember =(e)=>{
        const value = e.target.value
        setmemberId(value)
        setpostState({ ...postState, ...{
            memberId: memberdata?.members[value]?._id, 
            memberName: memberdata?.members[value]?.personalInfo?.fullname, 
            memberNumber:"09098987876",   
            productId: id
        } }); 
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
    useEffect(()=>{
        getmember()
    },[])
    return ( 
        <div className="payment saving">
            <div className="back">
                <Link to={`/group-payment/${id}`}><BiChevronLeft/></Link>
                <p className="title">Recurring Payments</p>
            </div>
            <div className="card-body">
                {next===1 && (
                    <form style={{ width: '100%', marginTop:"-2 0px" }} onSubmit={connectreader}>
                        <div className="invoice-body">
                            <div className="invoice-period"  style={{ width: '100%' }} >
                                <div className="payment-form">
                                    <div className="form-1">
                                        <label>Member<span>*</span></label>
                                        <div className="select-field">
                                            <select required onChange={handleMember} onBlur={handleMember}>
                                                <optgroup>
                                                    <option>--Select Member--</option>
                                                    {memberdata?.members?.map((member,index)=>{
                                                        return(
                                                            <option value={index}>{member?.personalInfo?.fullname}</option>
                                                        )
                                                    })}
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
                                   {/*  <div className="form-1">
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
        membererror:state?.member?.error,
        memberloading: state?.member?.loading,
        memberdata: state?.member?.data?.payload,
        cardData: state?.card,
        connected: state?.card?.connected,
        loading: state.redeposit.loading,
        data: state?.redeposit?.deposit,
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
            dispatch(depositRepayment(postdata, history, error));
        },
        getloans: (id, type) => {
            dispatch(getLoan(id, type));
        },
        getmember: (limit, page) => dispatch(getgroupmember(limit, page))
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(Repayment);