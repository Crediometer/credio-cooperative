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
const ActivateMember = ({personal, fetchgetprofile}) => {
    let initialCount = 1;
    // if (!personal) {
    //   initialCount = 1;
    // }
    // } else {
    //   initialCount = 2;
    // }
    const [index, setIndex] = useState(initialCount)
    const nextButton = () => {
        window.scrollTo(0, 0);
        if (index < 5){
            setIndex(prevIndex => prevIndex + 1)
        } 
    }

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
                                {index===1 && (<PersonalMember next={nextButton}/>)}
                                {index===2 && (<BusinessMember next={nextButton}/>)}
                                {index===3 && (<PayoutMember next={nextButton}/>)}
                                {index===4 && (<LoginMember next={nextButton} />)}
                            </div>
                            {/* <button onClick={nextButton} className={styles.activateButton}>Save</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActivateMember;