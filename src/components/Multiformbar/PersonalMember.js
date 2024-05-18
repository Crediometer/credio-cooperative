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
const PersonalMember = ({next, personal, error, loading}) => {
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
                            <label className={styles2.fieldlabel}>Full Name<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter Your Full Name "
                                required
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

                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Email<span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="email"
                                placeholder="Enter your Email"
                                required
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <p className='addimage'>Add Image<span>*</span></p>
                        {/* <DragandDropMermat mermat={updateMermat}/> */}
                        <div className="files">
                            <div className="filedisplay">
                                {filename2!=''?(
                                    <p className='select-filename'><span onClick={()=>{setFilename2(""); setImage2(null)}}><FaTimesCircle/>Remove File</span>{filename2.name}</p>
                                    ):
                                    <p><AiOutlineFile/> No file chosen</p>
                                }
                            </div>
                            <div className="filechose" onClick={()=>document.querySelector(".upload").click()}>
                                <input type="file" className='upload' hidden required
                                    onChange={({target: {files}})=>{
                                        files[0] && setFilename2(files[0])
                                        if(files){
                                            setImage2(URL.createObjectURL(files[0]))
                                            // setNameState({ ...nameState, ...{ filename: image } });
                                        }
                                    }}
                                    // onBlur={handlemermat}
                                ></input>
                                <p>Choose File</p>
                            </div>
                        </div>
                        <p className='warning'><FiAlertTriangle/>Please choose the file under 5KB to upload!</p>
                    </div>
                    <div className={styles.form3}>
                        <div className={styles.form2}>
                            <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>Sex<span>*</span></label>
                                <input 
                                    className={styles2.fieldinput}
                                    type="text"
                                    placeholder="Choose Gender "
                                    required
                                >
                                </input>
                            </div>
                        </div>
                        <div className={styles.form2}>
                            <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>Age<span>*</span></label>
                                <input 
                                    required
                                    className={styles2.fieldinput}
                                    type="text"
                                    placeholder="Enter Age"
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Home Address <span>*</span></label>
                            <input 
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Number of persons in the organization "
                                required
                            >
                            </input>
                        </div>
                    </div>
                    <div className={styles.form3}>
                        <div className={styles.form2}>
                            <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>Town/City<span>*</span></label>
                                <input 
                                    className={styles2.fieldinput}
                                    type="text"
                                    placeholder="Enter Town/City"
                                    required
                                >
                                </input>
                            </div>
                        </div>
                        <div className={styles.form2}>
                            <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>State of origin <span>*</span></label>
                                <input 
                                    required
                                    className={styles2.fieldinput}
                                    type="text"
                                    placeholder="Enter State of origin "
                                >
                                </input>
                            </div>
                        </div>
                    </div>   
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Religion<span>*</span></label>
                            <input 
                                required
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter Religion"
                            >   
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Occupation/Business<span>*</span></label>
                            <input 
                                required
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter occupation or business"
                            >   
                            </input>
                        </div>
                    </div>
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>occupation/Business Address<span>*</span></label>
                            <input 
                                required
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter detailed address description: "
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
                {/* {showerror && (<Errormodal error={error} togglemodal={togglemodal}/>)} */}
            </div>
    
    );
}


export default PersonalMember;