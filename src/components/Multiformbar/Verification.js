import styles from './Registration.module.css';
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import styles3 from '../../pages/Activate/Activate.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Verification = ({next}) => {
    const options = [{name:'name'},{name:'games'}]
    return ( 
        <form>
            <p className="businessHead">Note: Here is your login in details into modex cooperative, please keep safe and secure </p>
            <div className="login-details">
                <p className="login-head">Username: </p>
                <p className="login-body">Modex</p>
            </div>
            <div className="login-details">
                <p className="login-head">Password: </p>
                <p className="login-body">Modex123</p>
            </div>
            <Link to='/onboardmember'>
                <button className={styles3.activateButton}>
                    DONE
                </button>
            </Link>
           
    </form>
    );
}
 
export default Verification;