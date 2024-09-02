import { Link, useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiChevronLeft } from "react-icons/bi";

const Payment = () => {
    const {id} = useParams()
    return ( 
        <div className="payment2 saving">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <h4 className="form-head">Select a Payment Method</h4>
            </div>
            {/* <h4 className="form-body">{id}</h4> */}
            <div className="payment-method">
                <div className="dashboard-navigate">
                    <Link to={`/cash-payment/${id}`}>
                        <Box
                            color="rgba(5, 139, 65, 0.123)"
                            icons={<HiOutlinePlusSm/>}
                            text="Cash Payments"
                        />
                    </Link>
                    <Link to={`/card-transfer/${id}`}>
                        <Box
                            color="rgba(255, 19, 19, 0.128)"
                            icons={<HiOutlinePlusSm/>}
                            text="Card Payments"
                        />
                    </Link>
                </div>
                <div className="dashboard-navigate">
                    {/* <Link  to={`/debit-transfer/${id}`}>
                        <Box
                            color="rgba(18, 15, 199, 0.123)"
                            icons={<HiOutlinePlusSm/>}
                            text="Direct Bank Debit"
                        />
                    </Link> */}
                    <Link to={`/recurring/${id}`}>
                    <Box
                        color="rgba(210, 193, 43, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Setup Recurring Payment"
                    />
                    </Link>            
                </div>
            </div>
        
        </div>
    );
}
 
export default Payment;