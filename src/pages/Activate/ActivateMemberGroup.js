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
import { postgroupmember, postmember } from '../../Redux/Member/MemberAction';
const ActivateMemberGroup = ({
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
    const [imageState, setImageState] = useState("")
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
        console.log("nameState:", imageState);
        console.log("cooperativeInfo:", cooperativeInfo);
        const formData = new FormData();
        formData.append('personalInfo', JSON.stringify(nameState));
        formData.append('cooperativeInfo', JSON.stringify(cooperativeInfo));
        formData.append('image', imageState);
        try{
            await postmember(
                formData , ()=>{ 
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
                                {index===1 && (
                                    <PersonalMember 
                                        next={nextButton}
                                        setNameState={setNameState}
                                        setImageState={setImageState}
                                        nameState={nameState} 
                                        imageState={imageState} 
                                        handleSubmit={handleSubmit} 
                                    />
                                )}
                                {index===2 && (
                                    <BusinessMember 
                                        next={nextButton}
                                        cooperativeInfo={cooperativeInfo}
                                        setcooperativeInfo={setcooperativeInfo}
                                        handleSubmit={handleSubmit} 
                                        showerror={showerror}
                                        loading={loading}
                                        error={error}
                                    />
                                )}
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
            dispatch(postgroupmember(postdata, history, error));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActivateMemberGroup );