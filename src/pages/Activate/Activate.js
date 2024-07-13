import { useEffect, useState } from 'react';
import MultiStepProgressbar from '../../components/Multiformbar/MultiStepProgressbar';
import styles from './Activate.module.css'
import Personal from '../../components/Multiformbar/Personal';
import Business from '../../components/Multiformbar/Business';
import Verification from '../../components/Multiformbar/Verification';
import Payout from '../../components/Multiformbar/Payout';
import { connect } from 'react-redux';
import { otpverifyData, registerData } from '../../Redux/Registration/RegistrationAction';
import Complete from '../../components/Multiformbar/Complete';
const Activate = ({
    loading,
    error,
    data,
    otploading,
    otpdata,
    otperror,
    otpverifyData,
    registerData
}) => {
    let initialCount = 1;
    const [nameState, setNameState] = useState({});
    const [phoneState, setphoneState] = useState({});
    const [pinId, setPinid]=useState(otpdata?.pinId);
    const [organizationName, setorganizationName]=useState(otpdata?.businessName);
    const [otp, setotp]=useState("")
    const [institutionState, setinstitutionState] = useState({});
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const [showerror1, setshowerror1] = useState(false)
    const [index, setIndex] = useState(initialCount)
    const handleOtp = (e) =>{
        const value = e.target.value;
        setotp(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await registerData(
                {
                    personalInfo:{
                        ...nameState,
                        organizationName // Add organization name to personalInfo
                    }, 
                    institutionInfo:institutionState,
                    pinId,
                    otp
                }, ()=>{ 
                nextButton()
            }, ()=>{ 
                window.scrollTo(0, 0);
                setshowerror(true)
            });
        }catch(error){
            // setPending(false);
        }
    };
    const handleverifyOtp = async (e) => {
        e.preventDefault();
        try{
            await otpverifyData(phoneState, ()=>{ 
                nextButton()
            }, ()=>{ 
                window.scrollTo(0, 0);
                setshowerror1(true)
            });
        }catch(error){
            // setPending(false);
        }
    };
    const nextButton = () => {
        window.scrollTo(0, 0);
        if (index < 6){
            setIndex(prevIndex => prevIndex + 1)
        } 
    }
    useEffect(() => {
        setPinid(otpdata?.pinId)
        setorganizationName(otpdata?.businessName)
    }, [otpdata]);

    return (
        <div className="test">

            <div className="right">
                <div className="content">
                    <div className={styles.activate}>
                        <p className={styles.activateHead}>Setup  new cooperative account </p> 
                        <div className={styles.activateProgress}>
                            <MultiStepProgressbar step={index}/>
                        </div>
                        <div className={styles.activateFormOuter}>
                            <div className={styles.activateForm}>
                                {index===1 && (
                                    <Personal 
                                        next={nextButton} 
                                        nameState={nameState} 
                                        setNameState={setNameState}
                                        phoneState={phoneState} 
                                        setphoneState={setphoneState}
                                    />
                                )}
                                {index===2 && (
                                    <Business 
                                        next={nextButton} 
                                        loading={otploading} 
                                        handleSubmit={handleverifyOtp} 
                                        // nameState={nameState} 
                                        // setNameState={setNameState} 
                                        showerror={showerror1}
                                        error={otperror}
                                        institutionState={institutionState} 
                                        setinstitutionState={setinstitutionState}
                                        otpdata={otpdata}
                                    />
                                )}
                                {index===3 && (
                                    <Complete 
                                        value={otp}
                                        next={handleSubmit}
                                        showerror={showerror}
                                        error={error}
                                        handleOtp={handleOtp}
                                        loading={loading}
                                    />
                                )}
                                {index===4 && (<Payout next={nextButton}/>)}
                                {index===5 && (<Verification  next={nextButton} />)}
                            </div>
                            {/* <button onClick={nextButton} className={styles.activateButton}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return{
        loading:state.register.loading,
        error:state?.register?.error?.message,
        data: state.register.data,
        otploading:state.verifyotp.loading,
        otperror:state?.verifyotp?.error?.message,
        otpdata: state?.verifyotp?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        registerData: (postdata, history, error) => {
            dispatch(registerData(postdata, history, error));
        },
        otpverifyData: (postdata, history, error) => {
            dispatch(otpverifyData(postdata, history, error));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activate);