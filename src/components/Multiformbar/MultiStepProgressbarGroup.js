import './MultiStepProgressBar.css';
import 'react-step-progress-bar/styles.css'
import {ProgressBar, Step} from 'react-step-progress-bar'
import { FaCheck } from 'react-icons/fa';

const MultiStepProgressbarGroup = (props) => {
    return ( 
        <ProgressBar
            percent={((props.step - 1) * 100)/1}
            filledBackground="#E24E61"
            height="2px"
            width='100%'
        >
            <Step transition="scale">
            {({ accomplished }) => (
                <div className='step-outer'>
                    <div className={`step-number ${accomplished ? "completed" : ""}`}>
                        {accomplished ? (<FaCheck/>) : (<p>1</p>)}
                    </div>
                    <p className={`step-name ${accomplished ? "completed" : ""}`}>Personal Details</p>
                </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index}) => (
                <div className='step-outer'>
                    <div className={`step-number ${accomplished ? "completed" : ""}`}>
                        {accomplished ? (<FaCheck/>) : (<p>2</p>)}
                    </div>
                    <p className={`step-name ${accomplished ? "completed" : ""}`}>Done<br></br></p>
                </div>
            )}
            </Step>
            {/* <Step transition="scale">
            {({ accomplished, index}) => (
                <div className='step-outer'>
                    <div className={`step-number ${accomplished ? "completed" : ""}`}>
                        {accomplished ? (<FaCheck/>) : (<p>4</p>)}
                    </div>
                    <p className={`step-name ${accomplished ? "completed" : ""}`}>login Details<br></br></p>
                </div>
            )}
            </Step> */}
      </ProgressBar>
    );
}
 
export default MultiStepProgressbarGroup;