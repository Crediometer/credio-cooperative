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
import { Link } from 'react-router-dom';
// import Errormodal from "../Modal/Errormodal";
// import ErrorBoundary from "../../ErrorBoundary";
const LoginMember = ({next, personal, error, loading}) => {
    const [nameState, setNameState] = useState({});
    const [businessDescriptions, setbusinessDescriptions] = useState("");
    const [phoneNumber, setphoneNumber] = useState("")
    const [businessEmail, setbusinessEmail] = useState("")
    const [supportEmail, setsupportEmail] = useState("")
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [state, setstate] = useState("")
    const [websiteLink, setwebsiteLink] = useState("")
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handleDescription = (e) => {
        const value = e.target.value;
        setbusinessDescriptions(value);
        setNameState({ ...nameState, ...{ businessDescriptions } });
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        setphoneNumber(value);
        setNameState({ ...nameState, ...{ phoneNumber } });
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setbusinessEmail(value);
        setNameState({ ...nameState, ...{ businessEmail } });
    };
    const handleSupportEmail = (e) => {
        const value = e.target.value;
        setsupportEmail(value);
        setNameState({ ...nameState, ...{ supportEmail } });
    };
    const handleState = (e) => {
        const value = e.target.value;
        setstate(value);
        setNameState({ ...nameState, ...{ state } });
    };
    const handleAddress1 = (e) => {
        const value = e.target.value;
        setaddress1(value);
        setNameState({ ...nameState, ...{ address1 } });
    };
    const handleAddress2 = (e) => {
        const value = e.target.value;
        setaddress2(value);
        setNameState({ ...nameState, ...{ address2 } });
    };
    const handleWebsite = (e) => {
        const value = e.target.value;
        setwebsiteLink(value);
        setNameState({ ...nameState, ...{ websiteLink } });
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
              <form onSubmit={handleSubmit} method='post'>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Username<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter Username"
                                required
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Password<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="password"
                                placeholder="Enter Password"

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
                            <Link to='/dashboard'><button onClick={()=>{next();}} className={styles3.activateButton}><span>PROCEED</span></button></Link>
                    
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


export default LoginMember;