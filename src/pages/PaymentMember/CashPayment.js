import { useEffect, useState } from "react";
import ReceiptModal from "../../components/Modal/ReceiptModal";
import { Link, useParams } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { connect } from "react-redux";
import { cashPayment, groupcashPayment } from "../../Redux/Payment/PaymentAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { getLoan } from "../../Redux/Loan/LaonAction";
import SuccessModal from "../../components/Modal/SuccessModal";
const CashPaymentGroup = (
    {
        loading, 
        data,
        errors,
        postPayment,
        getloans,
        plan
    }
) => {
    const [show, setShow] = useState(false)
    const [showError, setshowError] = useState(false)
    const {id} = useParams()
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [amount, setAmount] = useState("");
    const [type, setType] = useState(null);
    const [typeid, setTypeId] = useState("")
    const [postState, setPostState] = useState({})
    const [filteredMembers, setFilteredMembers] = useState(members);
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
    const togglemodal = ()=>{
        setShow(!show)
    }
    const handleAmount = (e)=>{
        const value = e.target.value
        setAmount(value)
        const newValue = parseInt(value)
        setPostState({...postState, ...{amount: newValue, memberId: id}})
    }
    const handletype = (e)=>{
        const value = e.target.value
        setType(value)
        console.log(type)
        setPostState({...postState, ...{type}})
    }
    const handletypeId = (e)=>{
        const value = e.target.value
        setTypeId(value)
        if(type == 0){
            setPostState({...postState, ...{savingsId: typeid}})
        }else if(type == 1){
            setPostState({...postState, ...{loanId: typeid}})
        }
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setshowError(false)
        await postPayment(postState, ()=>{
            setShow(true)
            setAmount("")
            setTypeId("")
            setType("")
        }, ()=>{ 
           setshowError(true)
        });
    }
    console.log(plan)
    useEffect(()=>{
        getloans(id, type)
    },[id,type])
    return ( 
        <div className="saving">
        <div className="back">
            <Link to={`/payment-group/${id}`}><BiChevronLeft/></Link>
            <p className="title">Cash Payments</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="card-field">
                {showError && (
                    <div className="alert-error alert-danger" role="alert">
                        {errors}
                    </div>
                )}
                <div className="form-2"  style={{width: "100%"}}>
                    <div className="input input-4">
                        <label>Amount</label>
                        <input type="text" 
                        placeholder="Enter Amount"
                        value={amount}
                        onBlur={handleAmount}
                        onChange={handleAmount}
                        required
                        // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                        ></input>
                    </div>
                </div>
                <div className="form-2"  style={{width: "100%"}}>
                    <div className="input input-4">
                        <label>Transaction Type</label>
                        <select
                            onChange={handletype}
                            onBlur={handletype}
                            value={type}
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
                                value={typeid}
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
                                    value={typeid}
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
                
                <div className="form-button">
                    {/* <button onClick={togglemodal} className='transfer-button'>Pay</button> */}
                    <button className='transfer-button'>
                        {loading ? (
                            <LottieAnimation data={loader}/>
                        ):"Make Payment"} 
                    </button>
                </div>
            </form>
            
            {show && <SuccessModal message={data.message} togglemodal={togglemodal} /> }
        </div>
    </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loading:state?.cash?.loading,
        data: state?.cash?.data,
        errors: state?.cash?.error,
        plan: state?.loanlist?.data?.payload?.memberActionList
    };
}

const mapDispatchToProps = dispatch => {
    return{
        postPayment: (postdata, history, error) => {
            dispatch(groupcashPayment(postdata, history, error));
        },
        getloans: (id, type) => {
            dispatch(getLoan(id, type));
        },
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(CashPaymentGroup);