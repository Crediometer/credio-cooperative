import { useEffect, useState } from "react";
import LoanModal from "../../components/Modal/LoanModal";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { createloan, createloanGroup } from "../../Redux/Loan/LaonAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { getgroupmember } from "../../Redux/Member/MemberAction";
const CreateLoanGroup = ({
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
    const [interestRate, setInterestRate] = useState("")
    const [purpose, setPurpose] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [monthlyPayment, setmonthlyPayment] = useState("")
    const [NumberOfMonth, setNumberOfMonth] = useState("")
    const [postState, setPostState] = useState({})
    const [interestType, setInterestType] = useState('');
    const [formattedMonthlyPayment, setFormattedMonthlyPayment] = useState("");
    const [formattedAmount, setformattedAmount] = useState("");
    const [paymentPerInterval, setPaymentPerInterval] = useState(0);
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
    const handleNumberOfMonth = (e) =>{
        const value = e.target.value
        setNumberOfMonth(value)
    }
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
    const handleInterestType = (e)=>{
        const value = e.target.value
        setInterestType(value)
        if (value === 'Compound Interest') {
            const newvalue = 1
            setPostState({...postState, ...{interestRateType: newvalue}})
        } else if (value === 'Single Line Interest') {
            const newvalue = 0
            setPostState({...postState, ...{interestRateType: newvalue}})
        }else if (value === 'Flat Line Interest') {
            const newvalue = 2
            setPostState({...postState, ...{interestRateType: newvalue}})
        }
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
        const newvalue = new Date(value).toISOString();
        setPostState({...postState, ...{startDate: newvalue}})
    }
    const handleEndDate = (e)=>{
        const value = e.target.value
        setEndDate(value)
        const newvalue = new Date(value).toISOString();
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
    const calculateFlatLineInterest = (principal, rate, time) => {
        const a = principal * rate;
        const at = a * time;
        const pat = principal + at;
        const monthlyPayment = pat / time;
        return monthlyPayment;
    };
    useEffect(() => {
        if (amount && startDate && endDate && interval) {
            const principal = parseFloat(amount);
            const rate = parseFloat(interestRate);
            const flatrate = parseFloat(interestRate) / 100; // Convert rate to decimal
            const start = new Date(startDate);
            const end = new Date(endDate);
            const timeInMonths = parseInt(NumberOfMonth, 10);
            const timeInYears = (end - start) / (1000 * 60 * 60 * 24 * 365);
            let totalRepayment = 0;
            let totalmonthlyPayment = 0
            if (interestType === 'Compound Interest') {
                totalRepayment = calculateCompoundInterest(principal, rate, timeInYears);
                const intervalDays = parseInt(interval);
                const intervalCount = Math.floor((end - start) / (intervalDays * 24 * 60 * 60 * 1000));
                totalmonthlyPayment = calculatePaymentPerInterval(totalRepayment, intervalCount).toFixed(2);
            } else if (interestType === 'Single Line Interest') {
                totalRepayment = calculateSimpleInterest(principal, rate, timeInYears);
                const intervalDays = parseInt(interval);
                const intervalCount = Math.floor((end - start) / (intervalDays * 24 * 60 * 60 * 1000));
                totalmonthlyPayment = calculatePaymentPerInterval(totalRepayment, intervalCount).toFixed(2);
            }else if (interestType === 'Flat Line Interest') {
                // Calculate using Flat Line Interest
                totalmonthlyPayment = calculateFlatLineInterest(principal, flatrate, timeInMonths).toFixed(2);
            }
           
            setmonthlyPayment(totalmonthlyPayment);
            const formattedPayment = formatAmount(totalmonthlyPayment);
            setFormattedMonthlyPayment(formattedPayment);
            setPostState({...postState, ...{monthlyPayment:parseFloat(totalmonthlyPayment)}})
        }
    }, [amount, interestType, startDate, endDate, interval, startDate]);
    useEffect(()=>{
        getmember()
    },[])
    useEffect(() => {
        if (startDate && interval && NumberOfMonth) {
            const days = {
                5: 5,
                7: 7,
                15: 15,
                30: 30
            };
            const start = new Date(startDate);
            const totalDays = NumberOfMonth * 30;
            const fullIntervals = Math.floor(totalDays / days[interval]);
            const remainingDays = totalDays % days[interval];
            const daysToAdd = fullIntervals * days[interval] + remainingDays;
            const endDates = new Date(start);
            endDates.setDate(start.getDate() + daysToAdd);
            const end =formatDate(endDates)
            // const repeatDays = days[interval];
            // const units = parseInt(amount) / parseInt(monthlyPayment);
            // const endDateValue = new Date(startDate);
            // endDateValue.setDate(endDateValue.getDate() + (units * repeatDays));
            setEndDate(end)
            console.log(end)
            setPostState({ ...postState, ...{endDate: end} });  
        }
    }, [startDate, interval, NumberOfMonth]);
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createloan(
                {loansProfileData:postState, memberId} , ()=>{ 
                    setShow(true)
                    setEndDate("")
                    setStartDate("")
                    setAmount("")
                    setInterval("")
                    setFormattedMonthlyPayment("")
                    setNumberOfMonth("")
                    setformattedAmount("")
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
    return ( 
        <div className="saving createloan">
             <div className="back">
                <Link to='/loans-group'><BiChevronLeft/></Link>
                <p className="title">Create Loan</p>
            </div>
          
            <div className="card-body">

                <form onSubmit={handleSubmit} className="card-field">
                <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Member</label>
                            <select
                                onChange={handlemember}
                                onBlur={handlemember}
                                value={memberId}
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
                                value={formattedAmount}
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
                               <option value="Flat Line Interest">Flat Line Interest</option>
                            </select>
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
                            <label>Number Of Month</label>
                            <input 
                                type="number" 
                                value={NumberOfMonth}
                                placeholder="Enter Number Of Month"
                                min="1"
                                max="36"
                                onChange={handleNumberOfMonth}
                                onBlur={handleNumberOfMonth}
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Start Date</label>
                            <input type="date" 
                            value={startDate}
                            placeholder="Enter Interest Rate"
                            onBlur={handleStartDate}
                            onChange={handleStartDate}
                            required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Repayment</label>
                            <input 
                                type="text" 
                                value={formattedMonthlyPayment}
                                disabled
                                placeholder="Amount for Repayment"
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
                                // onBlur={handleEndDate}
                                // onChange={handleEndDate}
                                disabled
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Purpose</label>
                            <input type="text"
                            value={purpose} 
                            placeholder="Purpose of Loan"
                            onBlur={handlePurpose}
                            onChange={handlePurpose}
                            required
                            ></input>
                        </div>
                    </div>
                    <div className="form-button">
                        <button disabled={loading} className='transfer-button'>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Create"} 
                        </button>
                    </div>
                </form>
                {show && <LoanModal
                    type='Loan'
                    togglemodal={togglemodal}
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
            dispatch(createloanGroup(postdata, history, error));
        },
        getmember: (limit, page) => dispatch(getgroupmember(limit, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateLoanGroup);