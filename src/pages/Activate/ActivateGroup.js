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
import PersonalGroup from '../../components/Multiformbar/PersonalGroup';
import MultiStepProgressbarGroup from '../../components/Multiformbar/MultiStepProgressbarGroup';
import { creategroup, getAccount } from '../../Redux/Group/GroupAction';
import { getmember } from '../../Redux/Member/MemberAction';
import VerificationGroup from '../../components/Multiformbar/VerificationGroup';
const Activate = ({
    loading,
    error,
    data,
    accountdata,
    createGroup,
    getAccount,
    getmember,
    member,
    accountloading,
}) => {
    let initialCount = 1;
    const [groupInfo, setgroupinfo] = useState({});
    const [accountState, setaccountState] = useState({})
    const [errorHandler, setErrorHandler] = useState([false, ""]);
    const [showError, setshowerror] = useState(false)
    const [showerror1, setshowerror1] = useState(false)
    const [index, setIndex] = useState(initialCount)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await createGroup(
                {
                    groupInfo:groupInfo,
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
    const handleAccount = async () => {
        try{
            await getAccount(accountState, ()=>{ 
                // nextButton()
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
        getmember()
    }, []);

    return (
        <div className="test">
            <div className="right">
                <div className="content">
                    <div className={styles.activate}>
                        <p className={styles.activateHead}>Setup a Group</p> 
                        <div className={styles.activateProgress}>
                            <MultiStepProgressbarGroup step={index}/>
                        </div>
                        <div className={styles.activateFormOuter}>
                            <div className={styles.activateForm}>
                                {index===1 && (
                                    <PersonalGroup
                                        next={handleSubmit} 
                                        showerror = {showError}
                                        accountState={accountState}
                                        setAccountState = {setaccountState}
                                        getAccount={handleAccount}
                                        nameState={groupInfo} 
                                        setNameState={setgroupinfo}
                                        member={member}
                                        account={accountdata}
                                        accountloading={accountloading}
                                        loading={loading}
                                        error = {error}
                                    />
                                )}
                                {index===2 && (<VerificationGroup  next={nextButton}/>)}
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
        loading:state.group.loading,
        error:state?.group?.error?.message,
        data: state.group.data,
        accountdata: state?.account?.accountData,
        accountloading: state?.account?.loading,
        member: state?.member?.data?.payload?.members,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        createGroup: (postdata, history, error) => {
            dispatch(creategroup(postdata, history, error));
        },
        getAccount: (postdata, history, error) => {
            dispatch(getAccount(postdata, history, error));
        },
        getmember: (limit, page) => dispatch(getmember(limit, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Activate);