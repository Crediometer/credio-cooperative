import { useState } from "react";
import ReceiptModal from "../../components/Modal/ReceiptModal";
import { useParams } from "react-router-dom";

const CashPayment = () => {
    const [show, setShow] = useState(false)
    const {id} = useParams()
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
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
    return ( 
        <div className="saving">
        <p className="transfer-head">Cash Payments</p>
        
        <div className="form-11" style={{ width: '100%' }}>
            <div className="input">
                <input 
                    type="text" 
                    placeholder="SEARCH FOR MEMBER"
                    value={id ? id: searchInput}
                    onChange={handleInputChange}
                    disabled={id}
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
        </div>
        <div className="card-body">
          <div className="card-field">
                <div className="form-2"  style={{width: "100%"}}>
                    <div className="input input-4">
                        <label>Amount</label>
                        <input type="text" 
                        placeholder="Enter Amount"
                        // value={formattedAmount}
                        // onBlur={handleAmount}
                        // onChange={handleAmount}
                        required
                        // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                        ></input>
                    </div>
                </div>
              
                <div className="form-2"  style={{width: "100%"}}>
                    <div className="input input-4">
                        <label>Transaction Type</label>
                        <select>
                            <optgroup>
                                <option>--Transaction Type--</option>
                                <option>Savings</option>
                                <option>Loan</option>
                              
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="form-button">
                    <button onClick={togglemodal} className='transfer-button'>Pay</button>
                </div>
            </div>
            
            {show && <ReceiptModal /> }
        </div>
    </div>
    );
}
 
export default CashPayment;