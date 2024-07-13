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
const PersonalMember = ({
    next, 
    personal, 
    error, 
    loading, 
    nameState, 
    setNameState
}) => {
    const [fullname, setfullname] = useState("");
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [sex, setsex] = useState("")
    const [age, setage] = useState("")
    const [homeAddress, sethomeAddress] = useState("")
    const [townCity, settownCity] = useState("")
    const [state, setstate] = useState("")
    const[originState, setoriginState] = useState('')
    const[religion, setreligion] = useState(null)
    const[occupationBusiness, setoccupationBusiness] = useState(null)
    const[occupationBusinessAddres, setoccupationBusinessAddres] = useState(null)
    const[filename2, setFilename2] = useState('')
    const[image2, setImage2] = useState(null)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const handleFullName = (e) => {
        const value = e.target.value;
        setfullname(value);
        setNameState({ ...nameState, ...{ fullname } });
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        setphone(value);
        setNameState({ ...nameState, ...{ phone } });
    };
    const handleEmail = (e) => {
        const value = e.target.value;
        setemail(value);
        setNameState({ ...nameState, ...{ email } });
    };
    const handleSex = (e) => {
        const value = e.target.value;
        setsex(value);
        setNameState({ ...nameState, ...{ sex } });
    };
    const handleState = (e) => {
        const value = e.target.value;
        setstate(value);
        setNameState({ ...nameState, ...{ state } });
    };
    const handleAddress= (e) => {
        const value = e.target.value;
        sethomeAddress(value);
        setNameState({ ...nameState, ...{ homeAddress } });
    };
    const handleage = (e) => {
        const value = e.target.value;
        const newvalue = parseFloat(value)
        setage(value);
        setNameState({ ...nameState, ...{ age:newvalue } });
    };
    const handletownCity = (e) => {
        const value = e.target.value;
        settownCity(value);
        setNameState({ ...nameState, ...{ townCity } });
    };
    const handleoriginState = (e) => {
        const value = e.target.value;
        setoriginState(value);
        setNameState({ ...nameState, ...{ originState} });
    };
    const handlereligion = (e) => {
        const value = e.target.value;
        setreligion(value);
        setNameState({ ...nameState, ...{ religion } });
    };
    const handleoccupationBusiness = (e) => {
        const value = e.target.value;
        setoccupationBusiness(value);
        setNameState({ ...nameState, ...{ occupationBusiness } });
    };
    const handleoccupationBusinessAddres = (e) => {
        const value = e.target.value;
        setoccupationBusinessAddres(value);
        setNameState({ ...nameState, ...{ occupationBusinessAddress: occupationBusinessAddres } });
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
                                onChange={handleFullName}
                                onBlur={handleFullName}
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
                                type="email"
                                placeholder="Enter your Email"
                                required
                                onChange={handleEmail}
                                onBlur={handleEmail}
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
                                        const data =new FileReader()
                                        data.addEventListener('load',()=>{
                                            setImage2(data.result)
                                            setNameState({ ...nameState, ...{ image: data.result } });
                                        }) 
                                        data.readAsDataURL(files[0])
                                        if(files){
                                            setImage2(URL.createObjectURL(files[0]))
                                            
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
                                <select
                                    className={styles2.fieldinput}
                                    onChange={handleSex}
                                    onBlur={handleSex}
                                    required
                                >
                                    <optgroup>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </optgroup>
                                </select>
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
                                    onChange={handleage}
                                    onBlur={handleage}
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
                                onChange={handleAddress}
                                onBlur={handleAddress }
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
                                    onChange={handletownCity}
                                    onBlur={handletownCity}
                                >
                                </input>
                            </div>
                        </div>
                        <div className={styles.form2}>
                            <div className={styles2.field}>
                                <label className={styles2.fieldlabel}>State of origin <span>*</span></label>
                                <select 
                                    className={styles2.fieldinput}
                                    onChange={handleoriginState}
                                    onBlur={handleoriginState}
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
                    </div>   
                    <div className={styles.form2}>
                        <div className={styles2.field}>
                            <label className={styles2.fieldlabel}>Religion<span>*</span></label>
                            <input 
                                required
                                className={styles2.fieldinput}
                                type="text"
                                placeholder="Enter Religion"
                                onChange={handlereligion}
                                onBlur={handlereligion }
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
                                onChange={handleoccupationBusiness}
                                onBlur={handleoccupationBusiness }
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
                                onChange={handleoccupationBusinessAddres}
                                onBlur={handleoccupationBusinessAddres }
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