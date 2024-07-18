import { useEffect, useState } from 'react';
import MultiStepProgressbar from '../../components/Multiformbar/MultiStepProgressbar';
import styles from './Activate.module.css'
import Personal from '../../components/Multiformbar/Personal';
import Business from '../../components/Multiformbar/Business';
import Verification from '../../components/Multiformbar/Verification';
import Payout from '../../components/Multiformbar/Payout';
import MultiStepProgressbarMember from '../../components/Multiformbar/MultiStepProgressbarMember';
import PersonalMember from '../../components/Multiformbar/PersonalMember';
import BusinessMember from '../../components/Multiformbar/BusinesMember';
import PayoutMember from '../../components/Multiformbar/PayoutMember';
import LoginMember from '../../components/Multiformbar/LoginMember';
import { connect } from 'react-redux';
import { postmember } from '../../Redux/Member/MemberAction';
const ActivateMember = ({
    personal, 
    fetchgetprofile,
    loading,
    data,
    error,
    postmember,
    getprofile
}) => {
    let initialCount = 1;
    // if (!personal) {
    //   initialCount = 1;
    // }
    // } else {
    //   initialCount = 2;
    // }
    const [nameState, setNameState] = useState({});
    const [cooperativeInfo, setcooperativeInfo] = useState({})
    const [index, setIndex] = useState(initialCount)
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showerror, setshowerror] = useState(false)
    const nextButton = () => {
        window.scrollTo(0, 0);
        if (index < 4){
            setIndex(prevIndex => prevIndex + 1)
        } 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname ', nameState.fullname);
        formData.append('phone', nameState.phone);
        formData.append('email', nameState.email);
        formData.append('sex', nameState.sex);
        formData.append('homeAddress', nameState.homeAddress);
        formData.append('age', nameState.age);
        formData.append('townCity', nameState.townCity);
        formData.append('originState', nameState.originState);
        formData.append('religion', nameState. religion);
        formData.append('occupationBusiness', nameState.occupationBusiness);
        formData.append('occupationBusinessAddress', nameState.occupationBusinessAddress);
        formData.append('image', nameState.image);
        formData.append('purposeJoining', cooperativeInfo.purposeJoining);
        formData.append('referralName', cooperativeInfo.referralName);
        formData.append('referralPhone', cooperativeInfo.referralPhone);
        formData.append('belongedToCooperative', cooperativeInfo.belongedToCooperative);
        formData.append('reasonForLeaving', cooperativeInfo.reasonForLeaving);
        formData.append('nextOfKin', cooperativeInfo.nextOfKin);
        formData.append('nextOfKinAddress', cooperativeInfo.nextOfKinAddress);
        formData.append('nextOfKinRelationship', cooperativeInfo.nextOfKinRelationship);
        try{
            await postmember(
                {
                    formData,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
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
    return (
        <div className="test">

            <div className="right">
                <div className="content">
                    <div className={styles.activate}>
                        <p className={styles.activateHead}>Setup  new cooperative account </p> 
                        <div className={styles.activateProgress}>
                            <MultiStepProgressbarMember step={index}/>
                        </div>
                        <div className={styles.activateFormOuter}>
                            <div className={styles.activateForm}>
                                {index===1 && (<PersonalMember 
                                    next={nextButton}
                                    setNameState={setNameState}
                                    nameState={nameState} 
                                    handleSubmit={handleSubmit} 
                                />)}
                                {index===2 && (
                                    <BusinessMember 
                                        next={nextButton}
                                        cooperativeInfo={cooperativeInfo}
                                        setcooperativeInfo={setcooperativeInfo}
                                        handleSubmit={handleSubmit} 
                                        showerror={showerror}
                                        loading={loading}
                                        error={error}
                                    />)}
                                {index===3 && (<PayoutMember next={nextButton} name={getprofile?.personalInfo?.organizationName}/>)}
                                {/* {index===4 && (<LoginMember next={nextButton} />)} */}
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
        loading:state.addMember.loading,
        error:state?.addMember?.error?.message,
        data: state.addMember.data,
        getprofile: state?.profile?.data?.payload,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postmember: (postdata, history, error) => {
            dispatch(postmember(postdata, history, error));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActivateMember);