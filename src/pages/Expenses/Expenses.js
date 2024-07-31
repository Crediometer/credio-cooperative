import { BiChevronLeft } from "react-icons/bi";
import "./Expenses.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import ExpenseModal from "../../components/Modal/ExpenseModal";
import { connect } from "react-redux";
import { getExpences } from "../../Redux/Expenses/ExpencesAction";
import LottieAnimation from "../../Lotties";
import preloader from "../../Assets/animations/preloader.json"
const Expenses = ({
    getexpenses,
    loading,
    error,
    data
}) => {
    const [number, setNumber] = useState(0);
    const [show, setshow] = useState(false)

    const handleShow = () =>{
        setshow(!show)
    }
    useEffect(()=>{
        getexpenses()
    },[])

    const filteredData = data?.filter(item => item.type === (number === 0 ? 0 : 1)) || [];
    return ( 
        <div className="expenses saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Expenses</p>
            </div>
            <div className="expense-nav-outer">
                <div className="filter-nav expense-top-nav">
                    <p className={(number===0) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(0)}}>Pump In</p>
                    <p className={(number===1) ? "filter-text filter-active": "filter-text"} onClick={()=>{setNumber(1)}}>Pump Out</p>
                </div>
            </div>
            {loading ? (
                <div className="preloader">
                     <LottieAnimation data={preloader}/>
                </div>
            ):(
                <>
                    <div className="expense-body">
                        {filteredData.map((expense, index) => (
                        <div className="expense" key={index}>
                            <div className={`approval-card ${expense.type === 0 ? "approval-saving" : "approval-loan"}`}>
                            <div className="personal-section">
                                <div className="approval-card-top">
                                <p className="card-header">Information</p>
                                <div className="information-inner information-inner-2">
                                    <p className="withdrawal-type">{expense.type=== 0 ? "Pump In" : "Pump Out"}</p>
                                    <h2 className="withdrawal-type withdrawal-type-2">{expense.amount}</h2>
                                </div>
                                <p>{expense.createdAt.slice(0,10)}</p>
                                </div>
                                <div className="approval-information">
                                <div className="information-inner">
                                    <p>Purpose: <span>{expense.purpose}</span></p>
                                    <p style={{ textAlign: "right" }}>Source: <span>{expense.source}</span></p>
                                </div>
                                <div className="information-inner">
                                    <p style={{ textAlign: "right" }}>Administrator : <span>{expense.administrator}</span></p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </>
            )}
            <div className="add-button" onClick={handleShow}>
                <FaPlus/>
            </div>
            {show && <ExpenseModal togglemodal= {handleShow} getexpenses={getexpenses}/> }
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        error:state?.expenses?.error,
        loading: state?.expenses?.loading,
        data: state?.expenses?.data?.payload?.expenses  ,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getexpenses: () => dispatch(getExpences()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);