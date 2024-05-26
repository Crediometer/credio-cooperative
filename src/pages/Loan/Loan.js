import { Link } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";
import "./Loan.css"
const Loan = () => {
    return ( 
        <div className="payment2 saving">
            
        <h4 className="form-head">Loans</h4>
        <div className="dashboard-card">
                <div className="card-top">
                    <div className="savings">
                        <p>Total Borrowing</p>
                        <h2>N50,000,000</h2>
                    </div>
                    <div className="savings">
                        <p style={{textAlign: "right"}}>Current Outstanding</p>
                        <h2 style={{textAlign: "right"}}>N1,000,000</h2>
                    </div>
                    
                </div>
            </div>
        <div className="payment-method">
            <div className="dashboard-navigate">
                <Link to="/loan-approval">
                    <Box
                        color="rgba(5, 139, 65, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Loan Approval"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
                <Link to="/loan-lender">
                    <Box
                        color="rgba(255, 19, 19, 0.128)"
                        icons={<HiOutlinePlusSm/>}
                        text="Lenders"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
            </div>
            <div className="dashboard-navigate">
                <Link  to="/loan-overdue">
                    <Box
                        color="rgba(18, 15, 199, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Overdue Loans"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>
                <Link to="/loan-active">
                <Box
                    color="rgba(210, 193, 43, 0.123)"
                    icons={<HiOutlinePlusSm/>}
                    text="Active Loans"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                />
                </Link>            
            </div>
            <div className="dashboard-navigate">
                <Link to="/loan-closed">
                    <Box
                        color="rgba(5, 139, 65, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Closed Loans"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            </div>
        </div>
    
    </div>
    );
}
 
export default Loan;