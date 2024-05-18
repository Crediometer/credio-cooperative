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
// import LottieAnimation from '../../Lotties';
// import loader from '../../Assets/loading.json'
// import Errormodal from '../Modal/Errormodal';
// import LoadingModal from '../Modal/LoadingModal';
// import DragandDropMermat from '../Drag-and-Drop/DragandDropMermat';
const Business = ({next, business, error, loading,kyc,kycload, kycerror}) => {
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
                    <label className={styles2.fieldlabel}>Your Institution Name<span>*</span> </label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter Institution Name"
                        onBlur={handleAddress1}
                        onChange={handleAddress1}
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
                        onBlur={handleWebsite}
                        onChange={handleWebsite}

                    >
                    </input>
                </div>
            </div>
            <div className={styles.form2}>
                <div className={styles2.field}>
                    <label className={styles2.fieldlabel}>SMS Name<span>*</span></label>
                    <input 
                        className={styles2.fieldinput}
                        type="text"
                        placeholder="Enter SMS Name"
                        onBlur={handleAddress2}
                        onChange={handleAddress2}
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
                        onBlur={handlebvn}
                        onChange={handlebvn}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
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
                        onBlur={handlercnumber}
                        required
                        onChange={handlercnumber}
                    >
                    </input>
                </div>
            </div>
            <p className={styles2.fieldtext2}>Setting up means you have agreed with our <span>Terms of Service</span></p>
            <div>
                {/* {loading ? (
                    <button className={styles3.activateButton} disabled>
                        <LottieAnimation data={loader}/>
                    </button>
                ) : ( */}
                    <button onClick={()=>{next();}} className={styles3.activateButton}><span>PROCEED</span></button>
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
    );
}
export default Business;