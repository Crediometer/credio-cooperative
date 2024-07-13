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
import TermsModal from '../Modal/TermsModal';
import LottieAnimation from '../../Lotties';
import loader from '../../Assets/animations/loading.json'
// import LottieAnimation from '../../Lotties';
// import loader from '../../Assets/loading.json'
// import Errormodal from '../Modal/Errormodal';
// import LoadingModal from '../Modal/LoadingModal';
// import DragandDropMermat from '../Drag-and-Drop/DragandDropMermat';
const BusinessMember = ({
    next, 
    business, 
    error, 
    loading,
    kyc,
    kycload, 
    kycerror,
    cooperativeInfo,
    setcooperativeInfo,
    handleSubmit,
    showerror
}) => {
    const [nameState, setNameState] = useState({});
    const [formState, setFormState] = useState(null)
    const [postState, setPostState] = useState({});
    const[filename, setFilename] = useState('')
    const [file, setFile] = useState(null);
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [purposeJoining, setpurposeJoining] = useState("");
    const [referralName, setreferralName] = useState("");
    const [referralPhone, setreferralPhone] = useState('');
    const [belongedToCooperative, setbelongedToCooperative] = useState("")
    const [reasonForLeaving, setreasonForLeaving] = useState("")
    const [nextOfKin, setnextOfKin] = useState("")
    const [nextOfKinAddress, setnextOfKinAddress] = useState("")
    const [nextOfKinRelationship, setnextOfKinRelationship] = useState("")
    const [show, setShow] = useState(false)
    const [showkyc, setshowkyc]= useState(false)
    const [websiteLink, setwebsiteLink] = useState("")
    // const [mermat, setmermat] = useState('');
    const [rcNumber, setrcNumber]= useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    // const options = [{name:'name'},{name:'games'}]

    const handlepurpose = (e) => {
        const value = e.target.value;
        setpurposeJoining(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ purposeJoining } });
       
    };
    const handlereferralName = (e) => {
        const value = e.target.value;
        setreferralName(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ referralName } });
    };
    const handlereferralPhone = (e) => {
        const value = e.target.value;
        setreferralPhone(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ referralPhone } });
    };
    const handlebelongedToCooperative = (e) => {
        const value = e.target.value;
        setbelongedToCooperative(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{belongedToCooperative} });
    };
    const handlereasonForLeaving = (e) => {
        const value = e.target.value;
        setreasonForLeaving(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ reasonForLeaving } });
    };
    const handlenextOfKin = (e) => {
        const value = e.target.value;
        setnextOfKin(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ nextOfKin } });
    };
    const handlenextOfKinAddress = (e) => {
        const value = e.target.value;
        setnextOfKinAddress(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ nextOfKinAddress } });
    };
    const handlenextOfKinRelationship = (e) => {
        const value = e.target.value;
        setnextOfKinRelationship(value);
        setcooperativeInfo({ ...cooperativeInfo, ...{ nextOfKinRelationship } });
    };
    const handleWebsite = (e) => {
        const value = e.target.value;
        setwebsiteLink(value);
        setNameState({ ...nameState, ...{ websiteLink } });
    };
    const updateMermat = (filedata) => {
        setFilename2(filedata);
    };
   
    const togglemodal2 = ()=>{
        setshowkyc(!showkyc)
    }
    const handleshow = () =>{
        setShow(!show)
    }
    return ( 
        <form onSubmit={handleSubmit} method='post'>
            {showerror && (
                <div className="alert-error alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Purpose of joinin<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="give reason why you want to join"
                        onBlur={handlepurpose}
                        onChange={handlepurpose}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Name of referral<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter full name of referral"
                        onBlur={handlereferralName}
                        onChange={handlereferralName}

                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Phone number of referral<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter phone number of referral "
                        onBlur={handlereferralPhone}
                        onChange={handlereferralPhone}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Have you belong to any cooperative before <span>*</span></label>
                    <select
                     className={styles2.fieldinput}
                        onBlur={handlebelongedToCooperative}
                        onChange={handlebelongedToCooperative}
                        required
                    >
                        <optgroup>
                            <option value="YES">Yes</option>
                            <option value="NO">No</option>
                        </optgroup>
                    </select>
                   
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>If yes, why did you leave <span></span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter detailed reason "
                        onBlur={handlereasonForLeaving}
                        onChange={handlereasonForLeaving}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Next of kin<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter full name of next of kin "
                        onBlur={handlenextOfKin}
                        required
                        onChange={handlenextOfKin}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Next of kin address   <span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter detailed address description: "
                        onBlur={handlenextOfKinAddress}
                        required
                        onChange={handlenextOfKinAddress}
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Relationship next of kin <span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter relationship with next of kin "
                        onBlur={handlenextOfKinRelationship}
                        required
                        onChange={handlenextOfKinRelationship}
                    >
                    </input>
                </div>
            </div>
            <p className={styles2.fieldtext2}>Setting up means you have agreed with our <span onClick={handleshow}> Terms of Service</span></p>
            <div>
                {loading ? (
                    <button className={styles3.activateButton} disabled>
                        <LottieAnimation data={loader}/>
                    </button>
                ) : (
                    <button className={styles3.activateButton}><span>PROCEED</span></button>
                )}
            </div>
           {show && (<TermsModal togglemodal={handleshow}/>)}
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
    );
}
export default BusinessMember;