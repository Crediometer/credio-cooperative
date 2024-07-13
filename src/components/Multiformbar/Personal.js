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
const Personal = ({
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
    const [organizationName, setorganizationName] = useState("");
    const [numberOfPersons, setnumberOfPersons] = useState("")
    const [annualRevenue, setannualRevenue] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [fullName, setFullName] = useState("")
    const [businessEmail, setbusinessEmail] = useState("")
    const [supportEmail, setsupportEmail] = useState("")
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [state, setstate] = useState("")
    const [websiteLink, setwebsiteLink] = useState("")
    const[filename, setFilename] = useState('')
    const[image, setImage] = useState(null)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handleOrganisation = (e) => {
        const value = e.target.value;
        setorganizationName(value);
        setNameState({ ...nameState, ...{organizationName} });
    };
    const handlenumberofperson = (e) => {
        const value = e.target.value;
        const newvalue = parseFloat(value)
        setnumberOfPersons(value);
        setNameState({ ...nameState, ...{numberOfPersons: newvalue} });
    };
    const handleName = (e) => {
        const value = e.target.value;
        setFullName(value);
        setNameState({ ...nameState, ...{fullname:fullName}});
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
    const handleEmail = (e) => {
        const value = e.target.value;
        setbusinessEmail(value);
        setNameState({ ...nameState,...{email: businessEmail}});
    };
    const handleState = (e) => {
        const value = e.target.value;
        setstate(value);
        setNameState({ ...nameState, ...{stateCity: state}});
    };
    const handleRevenue = (e) => {
        const value = e.target.value;
        setannualRevenue(value);
        setNameState({ ...nameState,...{annualRevenue}});
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
                            <label className={styles2.fieldlabel}>Email<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter your Email"
                                required
                                onChange={handleEmail}
                                onBlur={handleEmail}
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>State / City<span>*</span></label>
                                <select 
                                    className={styles2.fieldinput}
                                    required
                                    onChange={handleState}
                                    onBlur={handleState}
                                >
                                    <option disabled selected>--Select State--</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                    <option value="Anambra">Anambra</option>
                                    <option value="Bauchi">Bauchi</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                    <option value="Benue">Benue</option>
                                    <option value="Borno">Borno</option>
                                    <option value="Cross River">Cross River</option>
                                    <option value="Delta">Delta</option>
                                    <option value="Ebonyi">Ebonyi</option>
                                    <option value="Edo">Edo</option>
                                    <option value="Ekiti">Ekiti</option>
                                    <option value="Enugu">Enugu</option>
                                    <option value="FCT">Federal Capital Territory</option>
                                    <option value="Gombe">Gombe</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Jigawa">Jigawa</option>
                                    <option value="Kaduna">Kaduna</option>
                                    <option value="Kano">Kano</option>
                                    <option value="Katsina">Katsina</option>
                                    <option value="Kebbi">Kebbi</option>
                                    <option value="Kogi">Kogi</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Nasarawa">Nasarawa</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Ondo">Ondo</option>
                                    <option value="Osun">Osun</option>
                                    <option value="Oyo">Oyo</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Rivers">Rivers</option>
                                    <option value="Sokoto">Sokoto</option>
                                    <option value="Taraba">Taraba</option>
                                    <option value="Yobe">Yobe</option>
                                    <option value="Zamfara">Zamfara</option>
                                </select>
                        </div>
                    </div>
                    {/* <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Organization name <span>*</span></label>
                            <input 
                                required
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter the name of the organization "
                                onChange={handleOrganisation}
                                onBlur={handleOrganisation }
                            >
                            </input>
                        </div>
                    </div> */}
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Number of persons <span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Number of persons in the organization "
                                required
                                onChange={handlenumberofperson}
                                onBlur={handlenumberofperson}
                            >
                            </input>
                        </div>
                    </div>   
                    <div className={styles.form2}>
                        <div className={`${styles2.field} ${styles2.field2}`}>
                            <p className={styles2.fieldlabel}>Cooperative annual revenue <span>*</span> </p>
                            <p className={styles2.fieldlabel2}>How much is been revenued at the end of the year</p>
                            <input 
                                type="radio" 
                                id="first" 
                                name="brand" 
                                value="₦0 - ₦500,000"
                                onChange={handleRevenue}
                                onBlur={handleRevenue}
                            ></input>
                            <label for="first">₦0 -₦500,000</label><br></br>
                            <input 
                                type="radio" 
                                id="second" 
                                name="brand" 
                                value="₦500,000 - ₦1,000,000"
                                onChange={handleRevenue}
                                onBlur={handleRevenue}
                            ></input>
                            <label for="second">₦500,000 - ₦1,000,000</label><br></br>
                            <input 
                                type="radio" 
                                id="third" 
                                name="brand" 
                                value="₦1,000,000 - ₦5,000,000"
                                onChange={handleRevenue}
                                onBlur={handleRevenue}
                            ></input>
                            <label for="third">₦1,000,000 - ₦5,000,000</label><br></br>
                            <input 
                                type="radio" 
                                id="fourth" 
                                name="brand" 
                                value="₦5,000,000 and above"
                                onChange={handleRevenue}
                                onBlur={handleRevenue}
                            ></input>
                            <label for="fourth">₦5,000,000 and above </label><br></br>
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


export default Personal;