import {Select, Switch} from 'antd'
import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import credio from "../../Assets/logo.png"
import { useEffect, useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import ReceiptModal from '../../components/Modal/ReceiptModal';
import { BiChevronLeft } from 'react-icons/bi';
import { debitPayment, getBank, nameEnquiry } from '../../Redux/Payment/PaymentAction';
import { connect } from 'react-redux';
import LottieAnimation from '../../Lotties';
import loader from '../../Assets/animations/loading.json'
import { getLoan } from '../../Redux/Loan/LaonAction';
import TransferSuccessModal from '../../components/Modal/TransferSuccessModal';
import LoadingModal from '../../components/Modal/LoadingModal';
import { getsinglemember } from '../../Redux/Member/MemberAction';
const BankTransfer = (
    {
        debitloading,
        debitData,
        debiterror,
        loading,
        data,
        error,
        accountName,
        accountLoading,
        nameEnquiry,
        createEnquiry,
        getBank,
        getloans,
        plan,
        memberdata,
        getsinglemember
    }
) => {
    const {id} = useParams()
    const [show, setshow] = useState(false)
    const [isChecked, setIsChecked] = useState(1);
    const [showBank, setShowBank] = useState(false);
    const [selectBank, setSelectBank]  = useState("Select a Bank")
    const [accountNumber, setAccountNumber] = useState("")
    const [accountName2, setAccountName2] = useState("")
    const [payerName, setPayerName]=useState("WILNI")
    const [payerAddress, setPayerAddress]=useState("Adeola Hopewell")
    const [payeeName, setPayeeName]=useState("OG INC NIBSS")
    const [narration, setNarration]=useState("Test Mandate")
    const [payeeAddress, setPayeeAddress]=useState("1230 Ahmadu bello")
    const [phoneNumber, setphoneNumber]=useState("08001234567")
    const [emailAddress, setEmailAddress]=useState("customer@bank.ng")
    const [subscriberCode, setSubCode]=useState("EMANDATE/101101154")
    const [endDate, setEndDate]=useState("20241221")
    const [startDate, setStartDate]=useState("20240921")
    const [amount, setAmount]=useState(50)
    const [frequency, setfrequency]=useState(1)
    const [type, setType] = useState(null);
    const [typeid, setTypeId] = useState("")
    const [nibssCode, setnibssCode] = useState(null);
    const [postState, setPostState] = useState({})
    const [mandateState, setMandateState] = useState({})
    const [nameState, setNameState] = useState({})
    const [query, setQuery] = useState("")
    const handleClick = () => {
        setIsChecked(!isChecked);
    };
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleSelectedBank = (option) => {
        setSelectBank(option)
    };
    const handletype = (e)=>{
        const value = e.target.value
        setType(value)
        console.log(type)
        setMandateState({...mandateState, ...{type}})
    }
    const handletypeId = (e)=>{
        const value = e.target.value
        setTypeId(value)
        if(type == 0){
            setMandateState({...mandateState, ...{productId: typeid}})
        }else if(type == 1){
            setMandateState({...mandateState, ...{productId: typeid}})
        }
    }
    const handleBank = (value) => {
        setnibssCode(value);
        setPostState({ ...postState, ...{ bankCode: value } });
        setNameState({ ...nameState, ...{ bankCode:'998' } });
    };
    const handleAccountNumber = (e)=>{
        const value = e.target.value
        setAccountNumber(value)
        setPostState({...postState, ...{accountNumber: value, }})
        setNameState({...nameState, ...{accountNumber: value,amount, frequency:"0", startDate, endDate, payerName, payerAddress, payeeName, payeeAddress, subscriberCode,phoneNumber, emailAddress,narration}})
    }
    const handleSubmit = () =>{
        createEnquiry(nameState,()=>{
            setshow(true)
        },()=>{})
    }
    useEffect(() => {
        if (accountName?.data?.[0]?.data?.accountName) {
            setAccountName2(accountName.data[0].data.accountName);
            setNameState({...nameState, ...{accountName:accountName.data[0].data.accountName}})
        }
    }, [accountName]);
    useEffect(()=>{
        if (nibssCode !== "" && accountNumber.length === 10) {
            nameEnquiry(postState, 
                ()=>{

                },
                ()=>{

                }
            );
            // setaccountName(name.data.accountName)
        }
    }, [nibssCode, accountNumber, postState])
    useEffect(()=>{
        getBank();
    },[])
    useEffect(()=>{
        getsinglemember(id)
    }, [id])
    useEffect(()=>{
        getloans(id, type)
    },[id,type])
    return ( 
        <div className="content">
        {/* {(num % 2 == 0) ? ( */}
            <div className="transfer">
            <div className="back">
                <Link to={`/payment/${id}`}><BiChevronLeft/></Link>
                <p className="title">Direct Bank Debit</p>
            </div>
            <div className="transfer-body">
                <div className="transfer-inner">
                    <div className="transfer-form">
                        <form method="POST">
                            {/* <LottieAnimation lotti={preloader} height={150} width={150} /> */}
                            <div className="form-1-outer">
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Bank </label>
                                        <div className="form-1-select" onClick={handleShow}>
                                            <p>{selectBank}</p>
                                            <FaChevronDown/>
                                        </div>
                                    </div>
                                    {showBank && (
                                        <div className="bank-select">
                                            <div className="bank-select-top">
                                                <p>Select a Bank</p>
                                                <div className="select-cancel" onClick={handleShow}>
                                                    <FaTimes/>
                                                </div>
                                            </div>
                                            <div className="bank-select-search">
                                                <input type='text' placeholder='Search for bank' onChange={(e)=> setQuery(e.target.value)}></input>
                                            </div>
                                            <div className="bank-select-body">
                                            {loading ? (
                                            <LottieAnimation data={loader}/> 
                                            ):(
                                                <div>
                                                    {data?.filter(banks => banks.bankName.toLowerCase().includes(query)).map((bank)=>{
                                                        return(
                                                            <div className="banks" onClick={() => {handleBank(bank.bankSchemeCode); handleSelectedBank(bank.bankName); handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">{bank.bankName}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )} 
                                            </div>
                                        </div>
                                    )}
                                </div>                
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Account Number </label>
                                        <input type="text" placeholder="0198604538" 
                                        value={accountNumber}
                                        onChange={handleAccountNumber}
                                        required
                                        maxLength={10}
                                        // disabled = {(business.length === 0 || !personal ) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s Name </label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        value={accountName2}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1-outer">            
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Address</label>
                                        <input type="text" placeholder="Alagbaka, Akure Ondo State" 
                                        // value={accountNumber}
                                        // onBlur={handleNumber}
                                        // onChange={handleNumber}
                                        required
                                        maxLength={10}
                                        // disabled = {(business.length === 0 || !personal ) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Payee's Name </label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        // value={name?.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Payee's Address</label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        // value={name?.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1-outer">
                                <div className="form-2"  style={{width: "100%"}}>
                                    <div className="input input-4">
                                        <label>Transaction Type</label>
                                        <select
                                            onChange={handletype}
                                            onBlur={handletype}
                                            required
                                        >
                                            <optgroup>
                                                <option>--Transaction Type--</option>
                                                <option value={0}>Savings</option>
                                                <option value={1}>Loan</option>
                                            
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>
                                {type == 1 && (
                                    <div className="form-2"  style={{width: "100%"}}>
                                        <div className="input input-4">
                                            <label>Loan Plan</label>
                                            <select
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
                                {type == 0 && (
                                        <div className="form-2"  style={{width: "100%"}}>
                                            <div className="input input-4">
                                                <label>Saving Plan</label>
                                                <select
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
                            </div>
                            <div className="form-1-outer">
                                <div className="form-2">
                                    <div className="input">
                                        <label>Amount</label>
                                        <input type="text" 
                                        placeholder="NGN 5,000"
                                        // value={formattedAmount}
                                        // onBlur={handleAmount}
                                        // onChange={handleAmount}
                                        required
                                        // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-2">
                                    <div className="input">
                                        <label>Narration</label>
                                        <input type="text"
                                        placeholder="e.g School Fees"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-button">
                                <button className='reset'>Reset</button><br></br>
                                <button className='transfer-button'
                                    onClick={handleSubmit}
                                >
                                    {debitloading ? (
                                        <LottieAnimation data={loader}/>
                                    ):"Transfer"} 
                                </button>
                            </div>
                        </form>
                    </div>
                    {show && <TransferSuccessModal debitData={debitData} message={debitData?.data?.responseDescription} type={true} mandate={mandateState} memberdata={memberdata}/>}
                    {/* {show && <Pinconfirm togglemodal={handleModal2}/>} */}
                </div>
            </div>
            </div>  
            {accountLoading && <LoadingModal message= "Getting Account Name...."/>}
             {/*  {showError && <Errormodal error="Insufficient Balance" togglemodal={handleError}/> } */}
        {/* ) : (
            <div className="key-error-notiication">
                <p>Please Complete Your Profile</p>
                <div className="error-cancle"><FaTimes/></div>
            </div>
        )} */}
    </div>    
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        debitloading: state?.debit?.loading,
        debitData: state?.debit?.data,
        debiterror: state?.debit?.error,
        loading:state?.bank?.loading,
        data: state?.bank?.data?.data,
        errors: state?.bank?.error,
        membererror:state?.singlemember?.error,
        memberloading: state?.singlemember?.loading,
        memberdata: state?.singlemember?.data?.payload,
        accountName: state?.accountName?.data,
        accountLoading: state?.accountName?.loading,
        plan: state?.loanlist?.data?.payload?.memberActionList
    };
}

const mapDispatchToProps = dispatch => {
    return{
        getBank: () => {
            dispatch(getBank());
        },
        nameEnquiry: (postState, history, error) => {
            dispatch(nameEnquiry(postState, history, error));
        },
        createEnquiry: (postState, history, error) => {
            dispatch(debitPayment(postState, history, error));
        },
        getloans: (id, type) => {
            dispatch(getLoan(id, type));
        },
        getsinglemember: (id) => dispatch(getsinglemember(id)),
    }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(BankTransfer);