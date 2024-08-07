import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css';
import styles3 from '../../pages/Activate/Activate.module.css'
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
const PayoutMember = ({next, name}) => {
    return ( 
        <div className="payout">
            <div className="payout-icon"><BiLike/></div>
            <h2>Congrats</h2>
            <p > You are new a member of <span>{name}</span> cooperative society</p>
            <Link to='/member'      >
                <button className={styles3.activateButton}>
                    Ok
                </button>
            </Link>
        </div>
    );
}
 
export default PayoutMember;