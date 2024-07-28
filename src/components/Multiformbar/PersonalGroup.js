import Textfield from '../Formfield/Textfield';
import styles from './Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../pages/Activate/Activate.module.css'
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useState } from 'react';
import styles4 from '../../pages/Activate/Activate.module.css'
// import Errormodal from "../Modal/Errormodal";
// import ErrorBoundary from "../../ErrorBoundary";
const PersonalGroup = ({
    next, 
    personal, 
    error, 
    loading, 
    nameState, 
    setNameState,
    phoneState,
    setphoneState
}) => {
    // const [nameState, setNameState] = useState({});
    const [name, setName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [credioAccountNumber, setCredioAccountNumber] = useState("")
    const [address, setaddress] = useState("")
    const [purposeJoining, setpurposeJoining] = useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
        setNameState({ ...nameState, ...{name}});
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }
        setphoneNumber(formattedNumber);
        console.log(phoneNumber)
        setNameState({ ...nameState, ...{phone: phoneNumber}});
        setphoneState({ ...phoneState, ...{phone: phoneNumber}});
    };
    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
        setNameState({ ...nameState,...{username}});
    };
    const handlepurpose = (e) => {
        const value = e.target.value;
        setpurposeJoining(value);
        setNameState({ ...nameState, ...{ purposeJoining } }); 
    };
    const handleAddress = (e) => {
        const value = e.target.value;
        setaddress(value);
        setNameState({ ...nameState,...{address}});
    };
    const handleCredio = (e) => {
        const value = e.target.value;
        setCredioAccountNumber(value);
        setNameState({ ...nameState,...{credioAccountNumber}});
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const handelClick = ()=>{
        next()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            await personal(nameState, ()=>{ 
            next();
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
            // setPending(false);
        }
    };



    return ( 
            <div>
              <form onSubmit={handelClick} method='post'>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Full Name<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter Your Full Name "
                                required
                                onChange={handleName}
                                onBlur={handleName}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Phone<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter an official phone number"
                                onChange={handleNumber}
                                onBlur={handleNumber}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Username<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="email"
                                placeholder="Enter your Email"
                                required
                                onChange={handleUsername}
                                onBlur={handleUsername}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Address<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter your Address"
                                required
                                onChange={handleAddress}
                                onBlur={handleAddress}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Credio Account Number<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter your Credio Account Number"
                                required
                                onChange={handleCredio}
                                onBlur={handleCredio}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Purpose Of Joining <span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Purpose of Joining"
                                required
                                onChange={handlepurpose}
                                onBlur={handlepurpose}
                            >
                            </input>
                        </div>
                    </div>            
                    <div>
                        {/* {loading ? (
                            <button className={styles3.activateButton} disabled>
                                <LottieAnimation data={loader}/>
                            </button>
                        ) : ( */}
                            <button className={styles3.activateButton}><span>PROCEED</span></button>                   
                    </div>
                
                    {/* <button onClick={handleSubmit} className={styles3.activateButton}>
                        {loading ? (
                            <FontAwesomeIcon
                                className="spinner"
                                icon={faSpinner}
                            ></FontAwesomeIcon>
                            ): ( 
                            <span>Save</span>
                                )} 
                    </button> */}
                    {/* {kycload && (<LoadingModal/>)}
                    {showkyc&& (<Errormodal error={kycerror} togglemodal={togglemodal2}/>)}
                    {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)} */}
                </form>
                {/* {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)} */}
            </div>
    
    );
}


export default PersonalGroup;