import "./TermsModal.css";
import styles3 from '../../pages/Activate/Activate.module.css'
const TermsModal = ({togglemodal}) => {
    return ( 
        <div className="terms">
            <h3 className="terms-head">Terms of Service </h3>
            <p className="terms-subhead">Ensure that the details provided are genuine and met with your current information. </p>
            <div className="terms-list">
                <ol>
                    <li>Ensure that the given data above is correct.</li>
                    <li>I shall uphold all the rules and regulation of the cooperative society with sincerity, honest sense of responsibility and commitment. </li>
                    <li>That i shall abide by the rules and regulation in which shall be reviewed periodically in accordance with the agreement of members.</li>
                </ol>
            </div>
            <div className="terms-buttons">
                <button onClick={togglemodal} className={styles3.activateButton}><span>PROCEED</span></button>
            </div>
           
        </div>
    );
}
 
export default TermsModal;