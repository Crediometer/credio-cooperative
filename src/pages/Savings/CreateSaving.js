import { useEffect, useState } from "react";
import LoanModal from "../../components/Modal/LoanModal";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { createSaving } from "../../Redux/Saving/SavingAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { getmember } from "../../Redux/Member/MemberAction";
import preloader from "../../Assets/animations/preloader.json"
const CreateSaving = ({
    loading,
    memberloading,
    error,
    data,
    createSaving,
    getmember,
    member,
    profile
}) => {
    const history = useNavigate();
    const [show, setShow] = useState(false);
    const [showerror, setShowError] = useState(false)
    const [memberId, setMemberId] = useState('')
    const [amount, setAmount] = useState('')
    const [interval, setInterval] = useState("")
    const [interestRate, setInterestRate] = useState("")
    const [purpose, setPurpose] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [monthlyPayment, setmonthlyPayment] = useState("")
    const [postState, setPostState] = useState({})
    const [formattedMonthlyPayment, setFormattedMonthlyPayment] = useState("");
    const [formattedAmount, setformattedAmount] = useState("");
    const togglemodal=()=>{
        setShow(!show)
    }
    const handleamount = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters

        setAmount(numericValue); // Set the unformatted amount
        const formattedValue = formatAmount(numericValue);
        setformattedAmount(formattedValue); // Set the formatted amount for display

        const newValue = parseInt(numericValue);
        setPostState({ ...postState, ...{ amount: newValue } });
    };

    const formatAmount = (input) => {
        // Add commas as thousand separators
        return input.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleInterval = (e)=>{
        const value = e.target.value
        setInterval(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{interval: newvalue}})
    }
    const handleInterestRate = (e)=>{
        const value = e.target.value
        setInterestRate(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{interestRate:newvalue}})
    }
    const handlePurpose = (e)=>{
        const value = e.target.value
        setPurpose(value)
        setPostState({...postState, ...{purpose}})
    }
    const handleMonthlyPayment = (e)=>{
        const value = e.target.value
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters

        setmonthlyPayment(numericValue); // Set the unformatted amount
        const formattedValue = formatAmount(numericValue);
        setFormattedMonthlyPayment(formattedValue); // Set the formatted amount for display
        const newValue = parseInt(numericValue)
        setPostState({...postState, ...{monthlyPayment:newValue}})
    }
    const handleStartDate = (e)=>{
        const value = e.target.value
        setStartDate(value)
        const newvalue = new Date(value).toISOString();
        setPostState({...postState, ...{startDate: newvalue, endDate}})
    }
    const handleEndDate = (e)=>{
        const value = e.target.value
        setEndDate(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{endDate:newvalue}})
    }
    const handlemember = (e) => {
        const value = e.target.value;
        setMemberId(value);
    };
    useEffect(()=>{
        getmember(1000,0)
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowError(false)
        try{
            await createSaving(
                {savingsProfileData:postState, memberId}, 
                ()=>{ 
                setShow(true)
                setMemberId("")
                setAmount("")
                setInterval("")
                setInterestRate("")
                setPurpose("")
                setmonthlyPayment("")
                setformattedAmount("")
                setFormattedMonthlyPayment("")
                setStartDate("")
                setEndDate("")
                }, ()=>{ 
                    window.scrollTo(0, 0);
                    setShowError(true)
                }
            );
        }catch(error){
            // setPending(false);
        }
    };
    useEffect(() => {
        if (amount && monthlyPayment && interval) {
            const days = {
                5: 5,
                7: 7,
                15: 15,
                30: 30
            };

            const repeatDays = days[interval];
            const units = parseInt(amount) / parseInt(monthlyPayment);
            const endDateValue = new Date(startDate);
            endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
            const NewEndDate = formatDate(endDateValue)
            // const EndDate = new Date(NewEndDate).toISOString()
            setEndDate(NewEndDate);
            // setpostState({ ...postState, ...{startdate: startDate} });
            // setpostState({ ...postState, ...{endDate: endDate} });  
        }
    }, [amount, monthlyPayment, interval, startDate]);

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    return (
        <>
        {memberloading ? (
            <div className="preloader">
                 <LottieAnimation data={preloader}/>
            </div>
        ):( 
            <div className="saving createloan">
                <div className="back">
                    <Link to='/saving'><BiChevronLeft/></Link>
                    <p className="title">Create Saving</p>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="card-field">
                        {showerror && (
                            <div className="alert-error">
                                <p>{error.message}</p>
                            </div>
                        )}
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Member</label>
                                <select
                                    onChange={handlemember}
                                    onBlur={handlemember}
                                    value={memberId}
                                    required
                                >
                                    <optgroup>
                                        <option>-- Select Member --</option>
                                        {member?.length == 0 ? (
                                            <div>
                                                <p>No Member added yet please add a member first</p>
                                            </div>
                                        ):(
                                            <>
                                                {member?.map(((member)=>{
                                                    return(
                                                        <option value={member?._id}>{member?.personalInfo?.fullname}</option>
                                                    )       
                                                }))}
                                            </>
                                        )}
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Amount</label>
                                <input type="text" 
                                    placeholder="Enter Amount"
                                    value={formattedAmount}
                                    onBlur={handleamount}
                                    onChange={handleamount}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Interest Rate</label>
                                <input type="text" 
                                value={interestRate}
                                placeholder="Enter Interest Rate"
                                onBlur={handleInterestRate}
                                onChange={handleInterestRate}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Installment </label>
                                <input type="text" 
                                placeholder="Enter Amount fo RePayment"
                                onBlur={handleMonthlyPayment}
                                onChange={handleMonthlyPayment}
                                required
                                value={formattedMonthlyPayment}
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Interval</label>
                                <select
                                    value={interval}
                                    onChange={handleInterval}
                                    onBlur={handleInterval}
                                    required
                                >
                                    <optgroup>
                                        <option>--Select Option--</option>
                                        <option value={5}>5 Days</option>
                                        <option value={7}>7 Days</option>
                                        <option value={15}>BiWeekly</option>
                                        <option value={30}>Monthly</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Start Date</label>
                                <input type="date" 
                                placeholder="Enter Interest Rate"
                                value={startDate}
                                onBlur={handleStartDate}
                                onChange={handleStartDate}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>End Date</label>
                                <input 
                                    type="date" 
                                    required 
                                    value={endDate} 
                                    disabled 
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Purpose</label>
                                <input type="text" 
                                placeholder="Purpose of Loan"
                                onBlur={handlePurpose}
                                onChange={handlePurpose}
                                value={purpose}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-button">
                            <button className='buttons transfer-button'>
                                {loading ? (
                                    <LottieAnimation data={loader}/>
                                ):"Create"} 
                            </button>
                        </div>
                    </form>
                    {show && <LoanModal
                        type='Saving'
                        togglemodal={togglemodal}
                        data={postState}
                    />}
                </div>
            </div>
        )}
        </>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.saving?.error,
        loading: state?.saving?.loading,
        profile: state?.profile?.data?.payload?._id,
        data: state?.saving?.data?.payload?.expenses,
        memberloading: state?.member?.loading,
        member: state?.member?.data?.payload?.members,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createSaving: (postdata, history, error) => {
            dispatch(createSaving(postdata, history, error));
        },
        getmember: (limit, page) => dispatch(getmember(limit, page)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CreateSaving);