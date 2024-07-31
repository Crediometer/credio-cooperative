import { useEffect, useState } from "react";
import LoanModal from "../../components/Modal/LoanModal";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { createSaving } from "../../Redux/Saving/SavingAction";
import { connect } from "react-redux";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { getmember } from "../../Redux/Member/MemberAction";
const CreateSaving = ({
    loading,
    error,
    data,
    createSaving,
    getmember,
    member,
    profile
}) => {
    const history = useNavigate();
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
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
    const [postState, setPostState] = useState({})
    const togglemodal=()=>{
        setShow(!show)
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
        setPostState({...postState, ...{startDate: newvalue, endDate:parseInt(endDate)}})
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
        try{
            await createSaving(
            {savingsProfileData:postState, memberId}, 
                ()=>{ 
                setShow(true)
                setAmount("")
                setInterval("")
                setInterestRate("")
                setPurpose("")
                setmonthlyPayment("")
                setStartDate("")
                setEndDate("")
            }, ()=>{ 
                window.scrollTo(0, 0);
            });
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
            setEndDate(formatDate(endDateValue));
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
        <div className="saving createloan">
            <div className="back">
                <Link to='/saving'><BiChevronLeft/></Link>
                <p className="title">Create Saving</p>
            </div>
            {/* <div className="top-search">
                <div className="form-11" style={{ width: '100%' }}>
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="SEARCH FOR MEMBER"
                            value={searchInput}
                            onChange={handleInputChange}
                            required
                        ></input>
                    </div>
                </div>
                <div className="statement-date statement-date-2">
                    <input
                        type='text'
                        placeholder='Start Date'
                        className='transferfield'
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {(e.target.type = "text");}}
                        // onChange={handlestartdate}
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
            </div> */}
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
                            <label>RePayment</label>
                            <input type="text" 
                            placeholder="Enter Amount fo RePayment"
                            onBlur={handleMonthlyPayment}
                            onChange={handleMonthlyPayment}
                            required
                            value={monthlyPayment}
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
                        <button className='transfer-button'>
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
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.saving?.error,
        loading: state?.saving?.loading,
        profile: state?.profile?.data?.payload?._id,
        data: state?.saving?.data?.payload?.expenses,
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