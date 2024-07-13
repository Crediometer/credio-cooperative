import { FaCheck } from "react-icons/fa";
import './MultiStepProgressBar.css';
import styles from './Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../pages/Activate/Activate.module.css'
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import LottieAnimation from "../../Lotties";
import loader from '../../Assets/animations/loading.json'
const Complete = ({next, handleOtp, value, showerror, error,loading}) => {
    return ( 
        <div className="payout">
            {showerror && (
                <div className="alert-error alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="payout-icon"><BiLike/></div>
            <h2>OTP Verified</h2>
            <p>Complete Registration by entering OTP</p>
            <form onSubmit={(e)=>{next(e)}}>
                <div className={styles.form2}>
                    <div className={styles2.field}>
                        <label className={styles2.fieldlabel}>OTP<span>*</span> </label>
                        <input 
                            className={styles2.fieldinput}
                            type="text"
                            // value={value}
                            placeholder="Enter Your OTP"
                            onBlur={handleOtp}
                            onChange={handleOtp}
                            required
                        >
                        </input>
                    </div>
                </div>
                <div>
                    {loading ? (
                        <button className={styles3.activateButton} disabled>
                            <LottieAnimation data={loader}/>
                        </button>
                    ) : (
                        <button className={styles3.activateButton}><span>Complete Registration</span></button>
                    )}
                </div>   
            </form>
        </div>
    );
}
 
export default Complete;