import { useEffect, useState } from "react";
import LoanModal from "../../components/Modal/LoanModal";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { createloan } from "../../Redux/Loan/LaonAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { getmember } from "../../Redux/Member/MemberAction";
const CreateLoan = ({
    loading,
    error,
    data,
    createloan,
    getmember,
    member,
    profile
}) => {
    const history = useNavigate();
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [show, setShow] = useState(false);
    const [filteredMembers, setFilteredMembers] = useState(members);
    const [memberId, setMemberId] = useState('')
    const [amount, setAmount] = useState('')
    const [interval, setInterval] = useState("")
    const [interestType, setInterestType] = useState('');
    const [interestRate, setInterestRate] = useState("")
    const [purpose, setPurpose] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [monthlyPayment, setmonthlyPayment] = useState("")
    const [postState, setPostState] = useState({})
    const [paymentPerInterval, setPaymentPerInterval] = useState(0);
    const togglemodal=()=>{
        setShow(!show)
    }
    const handleamount = (e)=>{
        const value = e.target.value
        setAmount(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{amount:newvalue}})
    }
    const handleInterval = (e)=>{
        const value = e.target.value
        setInterval(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{interval: newvalue}})
    }
    const handleInterestType = (e)=>{
        const value = e.target.value
        setInterestType(value)
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
        setmonthlyPayment(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{monthlyPayment:newvalue}})
    }
    const handleStartDate = (e)=>{
        const value = e.target.value
        setStartDate(value)
        const newvalue = parseInt(value)
        setPostState({...postState, ...{startDate: newvalue}})
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
    const calculateCompoundInterest = (principal, rate, time) => {
        const interest = principal * Math.pow((1 + rate / 100), time) - principal;
        return principal + interest;
    };
    const calculateSimpleInterest = (principal, rate, time) => {
        const interest = (principal * rate) / 100;
        return principal + interest;
    };
    const calculatePaymentPerInterval = (totalRepayment, intervalCount) => {
        return totalRepayment / intervalCount;
    };
    useEffect(() => {
        if (amount && startDate && endDate && interval) {
            const principal = parseFloat(amount);
            const rate = parseFloat(interestRate);
            const start = new Date(startDate);
            const end = new Date(endDate);
            const timeInYears = (end - start) / (1000 * 60 * 60 * 24 * 365);
            
            let totalRepayment = 0;

            if (interestType === 'Compound Interest') {
                totalRepayment = calculateCompoundInterest(principal, rate, timeInYears);
                console.log(totalRepayment)
            } else if (interestType === 'Single Line Interest') {
                totalRepayment = calculateSimpleInterest(principal, rate, timeInYears);
                console.log(totalRepayment)
            }
            const intervalDays = parseInt(interval);
            const intervalCount = Math.floor((end - start) / (intervalDays * 24 * 60 * 60 * 1000));
            const paymentPerIntervalValue = calculatePaymentPerInterval(totalRepayment, intervalCount).toFixed(2);
            setmonthlyPayment(paymentPerIntervalValue);
            setPostState({...postState, ...{monthlyPayment:parseFloat(paymentPerIntervalValue)}})
        }
    }, [amount, interestType, startDate, endDate, interval, startDate]);
    useEffect(()=>{
        getmember()
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createloan(
                {loansProfileData:postState, memberId: memberId} , ()=>{ 
                setShow(true)
                setEndDate("")
                setStartDate("")
                setAmount("")
                setInterval("")
                setInterestRate("")
                setPurpose("")
                setInterestType("")
                setMemberId("")
                setmonthlyPayment("")
            }, ()=>{ 
                window.scrollTo(0, 0);
            });
        }catch(error){
            // setPending(false);
        }
    };
    // useEffect(() => {
    //     if (amount && monthlyPayment && interval) {
    //         const days = {
    //             5: 5,
    //             7: 7,
    //             15: 15,
    //             30: 30
    //         };

    //         const repeatDays = days[interval];
    //         const units = parseInt(amount) / parseInt(monthlyPayment);
    //         const endDateValue = new Date(startDate);
    //         endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
    //         setEndDate(formatDate(endDateValue));
    //         // setpostState({ ...postState, ...{startdate: startDate} });
    //         // setpostState({ ...postState, ...{endDate: endDate} });  
    //     }
    // }, [amount, monthlyPayment, interval, startDate]);
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    return ( 
        <div className="saving createloan">
             <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Create Loan</p>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="card-field">
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Member</label>
                            <select
                                value={memberId}
                                onChange={handlemember}
                                onBlur={handlemember}
                            >
                                <optgroup>
                                    <option>--Select Member--</option>
                                    {member?.map(((member)=>{
                                        return(
                                            <option value={member?._id}>{member?.personalInfo?.fullname}</option>
                                        )       
                                    }))}
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Amount</label>
                            <input type="text" 
                                placeholder="Enter Amount"
                                value={amount}
                                onBlur={handleamount}
                                onChange={handleamount}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Interest Type</label>
                            <select
                                value={interestType}
                                onChange={handleInterestType}
                                onBlur={handleInterestType}
                            >
                                <option>-- Select Interest Type --</option>
                               <option value="Compound Interest">Compound Interest</option>
                               <option value="Single Line Interest">Single Line Interest</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Interest Rate</label>
                            <input type="text" 
                                placeholder="Enter Interest Rate"
                                value={interestRate}
                                onBlur={handleInterestRate}
                                onChange={handleInterestRate}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Repayment</label>
                            <input 
                                type="text" 
                                value={monthlyPayment}
                                disabled
                                placeholder="Amount for Repayment"
                                required
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
                                value={endDate} 
                                onBlur={handleEndDate}
                                onChange={handleEndDate}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Purpose</label>
                            <input type="text" 
                            placeholder="Purpose of Loan"
                            value={purpose}
                            onBlur={handlePurpose}
                            onChange={handlePurpose}
                            required
                            ></input>
                        </div>
                    </div>
                    <div className="form-button">
                        <button className='transfer-button'>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Create"} 
                        </button>
                    </div>
                </form>
                {show && <LoanModal
                    togglemodal={togglemodal}
                    type="loan"
                    data={postState}
                />}
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.loan?.error,
        loading: state?.loan?.loading,
        profile: state?.profile?.data?.payload?._id,
        data: state?.loan?.data?.payload?.expenses  ,
        member: state?.member?.data?.payload?.members,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createloan: (postdata, history, error) => {
            dispatch(createloan(postdata, history, error));
        },
        getmember: (limit, page) => dispatch(getmember(limit, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateLoan);