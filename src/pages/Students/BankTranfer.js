import {Select, Switch} from 'antd'
import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import credio from "../../Assets/logo.png"
import { useEffect, useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import ReceiptModal from '../../components/Modal/ReceiptModal';
import { BiChevronLeft } from 'react-icons/bi';
const BankTransfer = () => {
    const {id} = useParams()
    const [show, setshow] = useState(false)
    const [isChecked, setIsChecked] = useState(1);
    const [showBank, setShowBank] = useState(false);
    const [selectBank, setSelectBank]  = useState("Select a Bank")
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
    const handleClick = () => {
        setIsChecked(!isChecked);
    };
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    return ( 
        <div className="content">
        {/* {(num % 2 == 0) ? ( */}
            <div className="transfer">
            <div className="back">
                <Link to='/payment'><BiChevronLeft/></Link>
                <p className="title">Direct Bank Debit</p>
            </div>
            <div className="transfer-body">
                <div className="transfer-inner">
                    <div className="transfer-form">
                        <form method="POST">
                            {/* <LottieAnimation lotti={preloader} height={150} width={150} /> */}
                            <div className="form-1-outer">
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Bank </label>
                                        <div className="form-1-select" onClick={handleShow}>
                                            <p>{selectBank}</p>
                                            <FaChevronDown/>
                                        </div>
                                    </div>
                                    {showBank && (
                                        <div className="bank-select">
                                            <div className="bank-select-top">
                                                <p>Select a Bank</p>
                                                <div className="select-cancel" onClick={handleShow}>
                                                    <FaTimes/>
                                                </div>
                                            </div>
                                            <div className="bank-select-search">
                                                <input type='text' placeholder='Search for bank'></input>
                                            </div>
                                            <div className="bank-select-body">
                                            {/* {bank?.loading ? (
                                            <LottieAnimation data={preloader}/> 
                                            ):( */}
                                                <div>
                                                    {/* {bank?.filter(banks => banks.name.toLowerCase().includes(query)).map((bank)=>{
                                                        return( */}
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">Sterling bank</p>
                                                            </div>
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">UBA</p>
                                                            </div>
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">GTB Bank</p>
                                                            </div>
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">Zenith Bank</p>
                                                            </div>
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">Polaris bank</p>
                                                            </div>
                                                            <div className="banks" onClick={() => {handleShow()}}>
                                                                <div className="bank-icon">
                                                                    <BsBank2/>
                                                                </div>
                                                                <p className="bank-name">First bank</p>
                                                            </div>
                                                        {/* )
                                                    })} */}
                                                </div>
                                            {/* )} */}
                                            </div>
                                        </div>
                                    )}
                                </div>                
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Account Number </label>
                                        <input type="text" placeholder="0198604538" 
                                        // value={accountNumber}
                                        // onBlur={handleNumber}
                                        // onChange={handleNumber}
                                        required
                                        maxLength={10}
                                        // disabled = {(business.length === 0 || !personal ) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s Name </label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        // value={name?.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1-outer">            
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Beneficiary’s  Address</label>
                                        <input type="text" placeholder="Alagbaka, Akure Ondo State" 
                                        // value={accountNumber}
                                        // onBlur={handleNumber}
                                        // onChange={handleNumber}
                                        required
                                        maxLength={10}
                                        // disabled = {(business.length === 0 || !personal ) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Payee's Name </label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        // value={name?.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Payee's Address</label>
                                        <input type="text" 
                                        placeholder="Account Name"
                                        // value={name?.accountName}
                                        disabled
                                        required
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="save-ben">
                                <p>save as beneficiary</p>
                                <div className="save-ben-switch">
                                    <Switch/>
                                </div>
                            </div> */}
                            <div className="form-1-outer">
                                <div className="form-2">
                                    <div className="input">
                                        <label>Amount</label>
                                        <input type="text" 
                                        placeholder="NGN 5,000"
                                        // value={formattedAmount}
                                        // onBlur={handleAmount}
                                        // onChange={handleAmount}
                                        required
                                        // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-2">
                                    <div className="input">
                                        <label>Narration</label>
                                        <input type="text"
                                        placeholder="e.g School Fees"
                                        // onBlur={handleComment}
                                        // onChange={handleComment}
                                        // disabled = {(business.length === 0 || !personal) ? (true) : (false)}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-1-outer">
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Duration </label>
                                        <select>
                                            <optgroup>
                                                <option>Daily</option>
                                                <option>Weekly</option>
                                                <option>Quartely</option>
                                                <option>Daily</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </div>                
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>Start Date</label>
                                        <input type="date" placeholder="0198604538" 
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-11">
                                    <div className="input">
                                        <label className='form-1-label'>End Date</label>
                                        <input type="date" 
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-button">
                                <button className='reset'>Reset</button><br></br>
                                <button className='transfer-button' onClick={()=>{setshow(!show)}}>Transfer</button>
                            </div>
                        </form>
                    </div>
                    {show && <ReceiptModal/>}
                    {/* {show && <Pinconfirm togglemodal={handleModal2}/>} */}
                </div>
            </div>
            </div>  
            {/* {loading && <LoadingModal/>}
            {showError && <Errormodal error="Insufficient Balance" togglemodal={handleError}/> } */}
        {/* ) : (
            <div className="key-error-notiication">
                <p>Please Complete Your Profile</p>
                <div className="error-cancle"><FaTimes/></div>
            </div>
        )} */}
    </div>    
    );
}
 
export default BankTransfer;