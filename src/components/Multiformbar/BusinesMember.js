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
// import LottieAnimation from '../../Lotties';
// import loader from '../../Assets/loading.json'
// import Errormodal from '../Modal/Errormodal';
// import LoadingModal from '../Modal/LoadingModal';
// import DragandDropMermat from '../Drag-and-Drop/DragandDropMermat';
const BusinessMember = ({next, business, error, loading,kyc,kycload, kycerror}) => {
    const [nameState, setNameState] = useState({});
    const [formState, setFormState] = useState(null)
    const [postState, setPostState] = useState({});
    const[filename, setFilename] = useState('')
    const [file, setFile] = useState(null);
    const[image, setImage] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [mermat, setMermat] = useState("");
    const [bvn, setbvn] = useState("");
    const [dob, setdob] = useState('');
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [state, setstate] = useState("")
    const [show, setShow] = useState(false)
    const [showkyc, setshowkyc]= useState(false)
    const [websiteLink, setwebsiteLink] = useState("")
    // const [mermat, setmermat] = useState('');
    const [rcNumber, setrcNumber]= useState("");
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    // const options = [{name:'name'},{name:'games'}]

    const handlebvn = (e) => {
        const value = e.target.value;
        setbvn(value);
        setNameState({ ...nameState, ...{ bvn } });
        setPostState({ ...postState, ...{ bvn } });
    };
    const handledob = (e) => {
        const value = e.target.value;
        setdob(value);
        setNameState({ ...nameState, ...{ dob } });
        setPostState({ ...postState, ...{ dob } });
    };
    // useEffect(() => {
    //     if (dob !== "" && bvn.length === 11) {
    //         kyc(postState, 
    //             ()=>{ 
    //                 setShow(true);
    //             }, ()=>{ 
    //                 setshowkyc(true);
    //             }
    //         )
    //         // postData(nameState);
    //         // setaccountName(name.data.accountName)
    //     }
        
    // }, [bvn, dob, postState]);
    const handlercnumber = (e) => {
        const value = e.target.value;
        setrcNumber(value);
        setNameState({ ...nameState, ...{ rcNumber } });
    };
    const handlemermat = (e) => {
        const value = e.target.value;
        setMermat(value);
        setNameState({ ...nameState, ...{ mermat } });
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
        setNameState({ ...nameState, ...{ email:address2 } });
    };
    const handleWebsite = (e) => {
        const value = e.target.value;
        setwebsiteLink(value);
        setNameState({ ...nameState, ...{ websiteLink } });
    };
    const updateMermat = (filedata) => {
        setFilename2(filedata);
    };
    const togglemodal = ()=>{
        setshowerror(!showerror)
    }
    const togglemodal2 = ()=>{
        setshowkyc(!showkyc)
    }
    const handleshow = () =>{
        setShow(!show)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('mermat',filename2);
        formData.append('bvn', bvn);
        formData.append('dob',dob);
        formData.append('rcNumber', rcNumber);
        formData.append('state', state);
        formData.append('address1', address1);
        formData.append('businessEmail', address2);
        formData.append('websiteLink', websiteLink);
        try{
            
            await business(formData, ()=>{ 
            next();
            // setPending(true);
            }, ()=>{ 
                setErrorHandler(error)
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
            // setPending(false)
        }
    };
    return ( 
        <form onSubmit={handleSubmit} method='post'>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Purpose of joinin<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="give reason why you want to join"
                        onBlur={handleAddress1}
                        onChange={handleAddress1}
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
                        onBlur={handleWebsite}
                        onChange={handleWebsite}

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
                        onBlur={handleAddress2}
                        onChange={handleAddress2}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>Have you belong to any cooperative before <span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="yes"
                        onBlur={handlebvn}
                        onChange={handlebvn}
                        required
                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>If yes, why did you leave <span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter detailed reason "
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
                    >
                    </input>
                </div>
            </div>
            <p className={styles2.fieldtext2}>Setting up means you have agreed with our <span onClick={handleshow}> Terms of Service</span></p>
            <div>
                {/* {loading ? (
                    <button className={styles3.activateButton} disabled>
                        <LottieAnimation data={loader}/>
                    </button>
                ) : ( */}
                    <button onClick={()=>{next();}} className={styles3.activateButton}><span>PROCEED</span></button>
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