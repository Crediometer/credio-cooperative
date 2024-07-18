import { FaTimes } from "react-icons/fa";

const ExpenseModal = ({togglemodal}) => {
    return ( 
        <div className="successmodal">
        <div className="modal-background">
               
            {/* <div className="receipt-modal"> */}
                <div className="card-field">
                    <div className='modalClose' onClick={togglemodal}>
                        <FaTimes/>
                    </div>
                    <form>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Administrator</label>
                                <input type="text" 
                                placeholder="Enter Administrator"
                                // value={formattedAmount}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Expense Type</label>
                                <select required>
                                    <optgroup>
                                        <option>--Expense Type--</option>
                                        <option value="savings">Pump In</option>
                                        <option value="loan">Pump Out</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Amount</label>
                                <input type="text" 
                                placeholder="Enter Amount"
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
                                // value={formattedAmount}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-2"  style={{width: "100%"}}>
                            <div className="input input-4">
                                <label>Source</label>
                                <input type="text" 
                                placeholder="Enter Source"
                                // value={formattedAmount}
                                required
                                ></input>
                            </div>
                        </div>
                        <div className="form-button">
                            <button className='transfer-button'>
                               Continue
                            </button>
                        </div>
                    </form>  
                </div>
            {/*   */}
        </div>
    </div>
    );
}
 
export default ExpenseModal;