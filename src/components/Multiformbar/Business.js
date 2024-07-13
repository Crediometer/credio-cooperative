import Textfield from '../Formfield/Textfield';
import styles from './Registration.module.css';
import styles2 from '../Formfield/style.module.css' 
import styles3 from '../../pages/Activate/Activate.module.css'
import './MultiStepProgressBar.css'
import Inputfield from '../Formfield/Inputfield';
import Selectfield from '../Formfield/Selectfield';
import { useEffect, useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FiAlertTriangle} from 'react-icons/fi'
import {AiOutlineFile} from 'react-icons/ai'
import LottieAnimation from '../../Lotties';
import loader from '../../Assets/animations/loading.json'
// import Errormodal from '../Modal/Errormodal';
// import LoadingModal from '../Modal/LoadingModal';
// import DragandDropMermat from '../Drag-and-Drop/DragandDropMermat';
const Business = ({
    loading,
    next, 
    business, 
    error,
    showerror,
    handleSubmit,
    institutionState,
    setinstitutionState
}) => {
    const [postState, setPostState] = useState({});
    const[institutionName, setinstitutionName] = useState('')
    const [institutionType, setinstitutionType] = useState("");
    const[smsName, setsmsName] = useState("")
    const [country, setcountry] = useState("");
    const [contactPhone, setcontactPhone] = useState("");
    const [contactName, setcontactName] = useState('');
    const [email, setEmail] = useState('');
    const [contactPosition, setcontactPosition] = useState('');
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [state, setstate] = useState("")
    const [show, setShow] = useState(false)
    const [showkyc, setshowkyc]= useState(false)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    // const options = [{name:'name'},{name:'games'}]

    const handleinstitutionName = (e) => {
        const value = e.target.value;
        setinstitutionName(value);
        setinstitutionState({ ...institutionState, ...{institutionName}  });
    };
    const handleinstitutionType= (e) => {
        const value = e.target.value;
        setinstitutionType(value);
        setinstitutionState({ ...institutionState, ...{institutionType} });

    };
    const handlesmsName= (e) => {
        const value = e.target.value;
        setsmsName(value);
        setinstitutionState({ ...institutionState, ...{smsName } });
    };
    const handlecountry = (e) => {
        const value = e.target.value;
        setcountry(value);
        setinstitutionState({ ...institutionState, ...{country }  });
    };
    const handleState = (e) => {
        const value = e.target.value;
        setstate(value);
        setinstitutionState({ ...institutionState, ...{ state } });
    };
    const handlecontactPhone = (e) => {
        const value = e.target.value;
        let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

        // Check if the first digit is '0' and remove it, then prepend '+234'
        if (formattedNumber.charAt(0) === '0') {
            formattedNumber = '+234' + formattedNumber.slice(1);
        }
        setcontactPhone(formattedNumber);
        setinstitutionState({ ...institutionState, ...{contactPhone}  });
    };
    const handlecontactName = (e) => {
        const value = e.target.value;
        setcontactName(value);
        setinstitutionState({ ...institutionState, ...{contactName} });
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setinstitutionState({ ...institutionState, ...{email}});
    };
    const handlecontactPosition = (e) => {
        const value = e.target.value;
        setcontactPosition(value);
        setinstitutionState({ ...institutionState, ...{contactPosition}});
    };
    return ( 
        <form onSubmit={handleSubmit} method='post'>
            {showerror && (
                <div className="alert-error alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Your Institution Name<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Institution Name"
                        onBlur={handleinstitutionName}
                        onChange={handleinstitutionName}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Institution Type<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Cooperative"
                        onBlur={handleinstitutionType}
                        onChange={handleinstitutionType}

                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>CMS Name<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter CMS Name"
                        onBlur={handlesmsName}
                        onChange={handlesmsName}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Country<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Nigeria"
                        onBlur={handlecountry}
                        onChange={handlecountry}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>State<span>*</span></label>
                    <select 
                        className={styles2.fieldinput}
                        onBlur={handleState}
                        onChange={handleState}
                        required
                    >
                        <optgroup>
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
                        </optgroup>
                    </select>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Contact Person Name<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Contact Person Name "
                        onBlur={handlecontactName}
                        required
                        onChange={handlecontactName}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Contact Person Phone<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Contact Person Phone"
                        onBlur={handlecontactPhone}
                        required
                        onChange={handlecontactPhone}
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
                        placeholder="Enter Email For Cooperative "
                        onBlur={handleEmail}
                        required
                        onChange={handleEmail}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Contact Person Position<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Contact Person Position"
                        onBlur={handlecontactPosition}
                        required
                        onChange={handlecontactPosition}
                    >
                    </input>
                </div>
            </div>
            <p className={styles2.fieldtext2}>Setting up means you have agreed with our <span>Terms of Service</span></p>
            <div>
                {loading ? (
                    <button className={styles3.activateButton} disabled>
                        <LottieAnimation data={loader}/>
                    </button>
                ) : (
                    <button className={styles3.activateButton}><span>PROCEED</span></button>
                )}
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
        </form>
    );
}
export default Business;