import { useEffect, useRef, useState } from "react";
import { FaWifi } from "react-icons/fa6";
import ReceiptModal from "../../components/Modal/ReceiptModal";
import { Link, useParams } from 'react-router-dom';
import { BiChevronLeft } from "react-icons/bi";
import { connect } from "react-redux";
import { buttonScan, DisConnect, getQPosInfo, init, sendPIN, startTrade } from "../../Redux/Card/CardScript";
import { depositData, groupsingledepositData, singledepositData } from "../../Redux/Deposit/DepositAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import LoadingModal from "../../components/Modal/LoadingModal";
import { getLoan } from "../../Redux/Loan/LaonAction";
const CardPaymentGroup = ({
    buttonScan, 
    cardData, 
    disconnect,
    connected,
    doTrade,
    sendPin,
    Deposit,
    loading,
    error, 
    data,
    getloans,
    plan
}) => {
    const {id} = useParams()
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [filteredMembers, setFilteredMembers] = useState(members);
    const [next, setnext] = useState(1)
    const [pin, setPin] = useState("");
    const [amount, setAmount] = useState("")
    const [transactionType, setTransactionType] = useState(null)
    const [typeid, setTypeId] = useState("")
    const [accountType, setAccountType] = useState("")
    const [postState, setpostState] = useState({});
    const [showPin, setShowPin] = useState(false);
    const [showPin1, setShowPin1] = useState(false);
    const [showPin2, setShowPin2] = useState(false);
    const [showPin3, setShowPin3] = useState(false);
    const [success,  setSuccess] = useState(false);
    const [success2,  setSuccess2] = useState(false);
    const handletransactiontype =(e)=>{
        const value = e.target.value
        setTransactionType(value)
        setpostState({ ...postState, ...{type: transactionType} }); 
    }
    const toggleModal = ()=>{
        setnext(2)
    }
    const handletypeId = (e)=>{
        const value = e.target.value
        setTypeId(value)
        if(transactionType == 0){
            setpostState({...postState, ...{savingsId: typeid}})
        }else if(transactionType == 1){
            setpostState({...postState, ...{loanId: typeid}})
        }
    }
    const handletotal =(e)=>{
        const value = e.target.value
        setAmount(value)
        const newvalue = parseFloat(value)
        setpostState({ ...postState, ...{amount: newvalue, memberId: id } });
    }

    const handleAccount=(e)=>{
        const value = e.target.value
        setAccountType(value);
        const newvalue = parseInt(value, 10)
        setpostState({ ...postState, ...{accountType: newvalue} }); 
    }
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
    const connectreader =  (e)=>{
        e.preventDefault();
        if (!cardData.connected) {
            init();
            buttonScan();
        } else {
            // togglemodal()
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            doTrade(amount)
        }catch{
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
                    setnext(5)
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
        getloans(id, transactionType)
    },[id,transactionType]) 
    // useEffect(()=>{
    //     if(next === 3)
    // },[next])
    return ( 
        <div className="saving">
            <div className="back">
                <Link to={`/payment-group/${id}`}><BiChevronLeft/></Link>
                <p className="title">Card Payments</p>
            </div>
            <div className="card-body">
              {/* { next===1 && <div className="connect-reader">
                    <FaWifi />
                    <p>Connect Credio Reader</p>
                    <button onClick={connectreader}>Connect</button>
                </div>} */}
               {/* { next===1 &&  */}
                    <div className="card-field">
                        <form onSubmit={handleSubmit}>
                            <div className="form-2"  style={{width: "100%"}}>
                                <div className="input input-4">
                                    <label>Amount</label>
                                    <input type="text" 
                                    placeholder="Enter Amount"
                                    // value={formattedAmount}
                                    disabled={next==3}
                                    onBlur={handletotal}
                                    onChange={handletotal}
                                    required
                                    // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                                    ></input>
                                </div>
                            </div>
                            <div className="form-2"  style={{width: "100%"}}>
                                <div className="input input-4">
                                    <label>Transaction Type</label>
                                    <select disabled={next==3} required onChange={handletransactiontype} onBlur={handletransactiontype}>
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
                            <div className="form-2"  style={{width: "100%"}}>
                                <div className="input input-4">
                                    <label>Account Type</label>
                                    <select disabled={next==3} required onChange={handleAccount} onBlur={handleAccount}>
                                        <optgroup>
                                            <option>--Select Account Type--</option>
                                            <option value={1}>Savings Account</option>
                                            <option value={2}>Current Account</option>
                                            <option value={0}>Universal Account</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                           {next == 2 && 
                                <div className="form-button">
                                    <button className='transfer-button'>
                                        {cardData?.requestDisplay
                                        ? (
                                            <>
                                                <LottieAnimation data={loader}/>
                                                "Scanning your Card.."
                                            </>
                                        ) 
                                        : "Continue"}
                                    </button>
                                </div>
                            }
                        </form>  
                        { next == 1 && 
                            <button className='transfer-button' onClick={connectreader}>Connect to Credio Reader</button>
                        }
                    </div>
                {/* } */}
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
                            <button onClick={handlePin} className='transfer-button'>Transfer</button>
                        </div>
                    </div>
                }
                {next === 5 && <ReceiptModal togglemodal={toggleModal} data={data}/> }
                {loading && (<LoadingModal/>)}
            </div>
        </div>
    );
}


const mapStoreToProps = (state) => {
    return {
        cardData: state?.card,
        connected: state?.card?.connected,
        loading: state.deposit.loading,
        data: state.deposit?.deposit,
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
            dispatch(groupsingledepositData(postdata, history, error));
        },
        getloans: (id, type) => {
            dispatch(getLoan(id, type));
        },
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(CardPaymentGroup);