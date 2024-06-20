import { useState } from "react";
import LoanModal from "../../components/Modal/LoanModal";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const CreateLoan = () => {
    const members = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Alice Williams', 'David Brown'];
    // State to hold the search input and the filtered members
    const [searchInput, setSearchInput] = useState('');
    const [searchUser, setSearchUser] = useState('');
    const [show, setShow] = useState(false);
    const [filteredMembers, setFilteredMembers] = useState(members);

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
    return ( 
        <div className="saving createloan">
             <div className="back">
                <Link to='/loans'><BiChevronLeft/></Link>
                <p className="title">Create Loan</p>
            </div>
            <div className="top-search">
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
                            <label>Interest Rate</label>
                            <input type="text" 
                            placeholder="Enter Interest Rate"
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
                            <label>Monthly Payment</label>
                            <input type="text" 
                            placeholder="Enter Monthly Payment"
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
                            <label>Duration</label>
                            <input type="text" 
                            placeholder="Enter Duration"
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
                            <label>Start Date</label>
                            <input type="date" 
                            placeholder="Enter Interest Rate"
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
                            <label>End Date</label>
                            <input type="date" 
                            placeholder="Enter Interest Rate"
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
                            <label>Purpose</label>
                            <input type="text" 
                            placeholder="Purpose of Loan"
                            // value={formattedAmount}
                            // onBlur={handleAmount}
                            // onChange={handleAmount}
                            required
                            // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                            ></input>
                        </div>
                    </div>
                    <div className="form-button">
                        <button onClick={setShow} className='transfer-button'>Create Loan Profile</button>
                    </div>
                </div>
                {show && <LoanModal/>}
            </div>
        </div>
    );
}
 
export default CreateLoan;