import './MultiStepProgressBar.css';
import 'react-step-progress-bar/styles.css'
import {ProgressBar, Step} from 'react-step-progress-bar'
import { FaCheck } from 'react-icons/fa';

const MultiStepProgressbar = (props) => {
    return ( 
        <ProgressBar
            percent={((props.step - 1) * 100)/3}
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
                    <p className={`step-name ${accomplished ? "completed" : ""}`}>Input copperative info </p>
                </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index }) => (
               <div className='step-outer'>
                <div className={`step-number ${accomplished ? "completed" : ""}`}>
                    {accomplished ? (<FaCheck/>) : (<p>2</p>)}  
                </div>
                <p className={`step-name ${accomplished ? "completed" : ""}`}>More info</p>
            </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index }) => (
               <div className='step-outer'>
                <div className={`step-number ${accomplished ? "completed" : ""}`}>
                    {accomplished ? (<FaCheck/>) : (<p>3</p>)}
                </div>
                <p className={`step-name ${accomplished ? "completed" : ""}`}>Approval</p>
            </div>
            )}
            </Step>
            <Step transition="scale">
            {({ accomplished, index}) => (
                <div className='step-outer'>
                    <div className={`step-number ${accomplished ? "completed" : ""}`}>
                        {accomplished ? (<FaCheck/>) : (<p>4</p>)}
                    </div>
                    <p className={`step-name ${accomplished ? "completed" : ""}`}>Done<br></br></p>
                </div>
            )}
            </Step>
      </ProgressBar>
    );
}
 
export default MultiStepProgressbar;