import { FaTimes } from "react-icons/fa";
import { createexpenses, createexpensesgroup } from "../../Redux/Expenses/ExpencesAction";
import { connect } from "react-redux";
import { useState } from "react";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { useNavigate } from "react-router-dom";
const ExpenseModalGroup = ({
    togglemodal,
    loading,
    error,
    createexpenses,
    getexpenses, 
    data
}) => {
    const history = useNavigate();
    const [administrator, setAdministrator] = useState();
    const [amount, setAmount] = useState();
    const [type, setType] = useState();
    const [purpose, setPurpose] = useState();
    const [source, setSource] = useState();
    const [postState, setPostState] = useState({})
    const [showerror, setshowerror] = useState(false)
    const handleAdministrator = (e) => {
        const value = e.target.value;
        setAdministrator(value);
        setPostState({ ...postState, ...{ administrator } });
    };
    const handleAmount = (e) => {
        const value = e.target.value;
        const newvalue = parseFloat(value)
        setAmount(value);
        setPostState({ ...postState, ...{ amount: newvalue } });
    };
    const handleType = (e) => {
        const value = e.target.value;
        const newvalue = parseFloat(value)
        setType(newvalue);
        setPostState({ ...postState, ...{ type: newvalue } });
    };
    const handlePurpose = (e) => {
        const value = e.target.value;
        setPurpose(value);
        setPostState({ ...postState, ...{ purpose } });
    };
    const handleSource = (e) => {
        const value = e.target.value;
        setSource(value);
        setPostState({ ...postState, ...{ source } });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createexpenses(
                postState , ()=>{ 
                history(`/expenses`)
                setPostState({})
                setAmount("")
                setAdministrator("")
                setType("")
                setPurpose("")
                setSource("")
                togglemodal()
                getexpenses()
            }, ()=>{ 
                window.scrollTo(0, 0);
                setshowerror(true)
            });
        }catch(error){
            // setPending(false);
        }
    };
    return ( 
        <div className="successmodal">
        <div className="modal-background">
               
            {/* <div className="receipt-modal"> */}
                <div className="card-field">
                    <div className='modalClose' onClick={togglemodal}>
                        <FaTimes/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {showerror && (
                            <div className="alert-error">
                                <p>{error}</p>
                            </div>
                        )}
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Administrator</label>
                                <input type="text" 
                                placeholder="Enter Administrator"
                                onChange={handleAdministrator}
                                onBlur={handleAdministrator}
                                // value={formattedAmount}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Expense Type</label>
                                <select required
                                    onChange={handleType}
                                    onBlur={handleType}
                                >
                                    <optgroup>
                                        <option>--Expense Type--</option>
                                        <option value="0">Pump In</option>
                                        <option value="1">Pump Out</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Amount</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Amount"
                                    onChange={handleAmount}
                                    onBlur={handleAmount}
                                    // value={formattedAmount}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Purpose</label>
                                <input type="text" 
                                placeholder="Enter Purpose"
                                onChange={handlePurpose}
                                onBlur={handlePurpose}
                                // value={formattedAmount}
                                required
                                ></input>
                            </div>
                        </div>
                        {type === 0 && (
                            <div className="form-2"  style={{width: "100%"}}>
                                <div className="input input-4">
                                    <label>Source</label>
                                    <input type="text" 
                                    placeholder="Enter Source"
                                    onChange={handleSource}
                                    onBlur={handleSource}
                                    // value={formattedAmount}
                                    required
                                    ></input>
                                </div>
                            </div>
                        )}
                        <div className="form-button">
                            <button className='transfer-button'>
                                {loading ? (
                                    <LottieAnimation data={loader}/>
                                ):"Continue"} 
                            </button>
                        </div>
                    </form>  
                </div>
            {/*   */}
        </div>
    </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return{
        loading:state.createexpenses.loading,
        error:state?.createexpenses?.error?.message,
        data: state.createexpenses.data,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createexpenses: (postdata, history, error) => {
            dispatch(createexpensesgroup(postdata, history, error));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseModalGroup);