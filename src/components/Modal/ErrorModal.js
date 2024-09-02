import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../Assets/animations/Errorr.json'
import { Link } from 'react-router-dom';
const ErrorModal = ({error, togglemodal, message, message2}) => {
    return ( 
        <div className="modal-background">
            <div className="modalssss">
                <div className="onetime-modal">
                    <LottieAnimation data={wrong}/>
                    <p className="create-payment">{message}</p>
                    <p className="create-payment">{message2}</p>
                    <div className="signup-button save-con">
                        <button class="btn btn-primary shadow-2 mb-4 start-button" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ErrorModal;