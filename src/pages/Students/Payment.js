import { Link, useParams } from "react-router-dom";
import Box from "../../components/Box/Box";
import { HiOutlinePlusSm } from "react-icons/hi";

const Payment = () => {
    const {id} = useParams()
    return ( 
        <div className="payment2 saving">
            
            <h4 className="form-head">Select a Payment Method</h4>
            <h4 className="form-body">{id}</h4>
            <div className="payment-method">
                <div className="dashboard-navigate">
                    <Link to="/cash-payment">
                        <Box
                            color="rgba(5, 139, 65, 0.123)"
                            icons={<HiOutlinePlusSm/>}
                            text="Cash Payments"
                            des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                        />
                    </Link>
                    <Link to={id ? `/card-transfer/${id}` : "/card-transfer" }>
                        <Box
                            color="rgba(255, 19, 19, 0.128)"
                            icons={<HiOutlinePlusSm/>}
                            text="Card Payments"
                            des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                        />
                    </Link>
                </div>
                <div className="dashboard-navigate">
                    <Link  to={id ? `/transfer/${id}` : "/transfer" }>
                        <Box
                            color="rgba(18, 15, 199, 0.123)"
                            icons={<HiOutlinePlusSm/>}
                            text="Direct Bank Debit"
                            des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                        />
                    </Link>
                    <Link to={id ? `/recurring/${id}` : "/recurring" }>
                    <Box
                        color="rgba(210, 193, 43, 0.123)"
                        icons={<HiOutlinePlusSm/>}
                        text="Setup Recurring Payment"
                        des="Lorem ipsum dolor sit amet, consectetur adipiscing "
                    />
                    </Link>            
                </div>
            </div>
        
        </div>
    );
}
 
export default Payment;