import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css';
import styles3 from '../../pages/Activate/Activate.module.css'
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
const Payout = ({next}) => {
    return ( 
        <div className="payout">
            <div className="payout-icon"><BiLike/></div>
            <h2>Congrats</h2>
            <p >Welcome, your <br></br>cooperative setup has <br></br> been completed</p>
            <button onClick={()=>{next()}} className={styles3.activateButton}>
                GET LOGIN DETAILS
            </button>
    
        </div>
    );
}
 
export default Payout;