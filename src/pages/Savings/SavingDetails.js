import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoArrowDownRight } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import BasicTable from "../../components/Table/SavingTable";
import { useState } from "react";
const SavingDetails = () => {
    const [show, setShow] = useState(false)
    return ( 
        <div className="saving">
            <div className="back">
                <Link to='/saving'><BiChevronLeft/></Link>
                <p className="title">Modex Details</p>
            </div>
            <div className="saving-details">
                <div className="saving-tab">
                    <div className="join-search transaction">
                        <div className="transaction-left saving-left">
                            <GoArrowDownRight />
                            <p className="transaction-name">David Temidayo</p>
                        </div>
                        <div className="transaction-right saving-right">
                            <h3>N40,000</h3>
                            <div onClick={()=>{setShow(!show)}}>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                    {show && (
                        <div className="saving-tab-open">
                            <BasicTable/>
                        </div>
                    )}
                </div>
                <div className="join-search transaction">
                    <div className="transaction-left saving-left">
                        <GoArrowDownRight />
                        <p className="transaction-name">David Temidayo</p>
                    </div>
                    <div className="transaction-right saving-right">
                        <h3>N40,000</h3>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
                <div className="join-search transaction">
                    <div className="transaction-left saving-left">
                        <GoArrowDownRight />
                        <p className="transaction-name">David Temidayo</p>
                    </div>
                    <div className="transaction-right saving-right">
                        <h3>N40,000</h3>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
               
                <div className="join-search transaction">
                    <div className="transaction-left saving-left">
                        <GoArrowDownRight />
                        <p className="transaction-name">David Temidayo</p>
                    </div>
                    <div className="transaction-right saving-right">
                        <h3>N40,000</h3>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
                <div className="join-search transaction">
                    <div className="transaction-left saving-left">
                        <GoArrowDownRight />
                        <p className="transaction-name">David Temidayo</p>
                    </div>
                    <div className="transaction-right saving-right">
                        <h3>N40,000</h3>
                        <IoMdArrowDropdown/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SavingDetails;