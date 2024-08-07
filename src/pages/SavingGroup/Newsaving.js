import { Link } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiChevronLeft } from "react-icons/bi";

const NewsavingGroup = () => {
    return ( 
        <div className="payment2 saving">
            <div className="back">
                <Link to='/dashboard-member'><BiChevronLeft/></Link>
                <h4 className="form-head">Savings</h4>
            </div>
        <div className="dashboard-card">
                <div className="card-top">
                    <div className="savings">
                        <p>Total Savings</p>
                        <h2>N50,000,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Active Savings</p>
                        <h2 style={{textAlign: "right"}}>30,000,000</h2>
                    </div>
                    
                </div>
                <div className="card-top">
                    <div className="savings">
                        <p>Paid back Loans</p>
                        <h2>N19,000,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Current Outstanding</p>
                        <h2 style={{textAlign: "right"}}>N1,000,000</h2>
                    </div>
                    
                </div>
            </div>
        <div className="payment-method">
            <div className="dashboard-navigate">
                <Link to="/loan-saving-group">
                    <Box
                        color="rgba(255, 19, 19, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Create Savings"
                        
                    />
                </Link>
                <Link to="/saving-active">
                <Box
                    color="rgba(210, 193, 43, 0.123)"
                    icons={<HiOutlinePlusSm/>}
                    text="Active Savings"
                    
                />
                </Link> 
            </div>
            <div className="dashboard-navigate">
                <Link  to="/saving-overdue">
                    <Box
                        color="rgba(18, 15, 199, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Overdue Savings"
                       
                    />
                </Link>
                <Link to="/saving-closed">
                    <Box
                        color="rgba(5, 139, 65, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Closed Savings"
                      
                    />
                </Link>            
            </div>
        </div>
    
    </div>
    );
}
 
export default NewsavingGroup;