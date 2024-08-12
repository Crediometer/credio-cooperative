import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import wrong from '../../Assets/animations/SuccessTick.json'
import { Link } from 'react-router-dom';
import { postEmandate } from '../../Redux/Payment/PaymentAction';
import { connect } from 'react-redux';
import { useEffect } from 'react';
const TransferSuccessModal = ({ 
    message,
    loading,
    error,
    data,
    postemandate,
    debitdata,
    memberdata,
    mandate, 
    type
}) => {
    let requestType;
    let productType;
    console.log(memberdata);
    const handlesubmit = () =>{
        postemandate({
            mandateCodes: debitdata?.data?.mandateCode,
            productId: mandate.productId,
            type: productType,
            requestType, 
            memberName: memberdata?.member?.personalInfo?.fullname,
            memberId: memberdata?.member?._id,
            memberNumber: memberdata?.member?.personalInfo?.phone
        }, ()=>{

        },()=>{

        })
    }
    useEffect(()=>{
        if(type){
            requestType = 0
        }else{
            requestType = 1
        }
    },[type])
    useEffect(()=>{
        if(mandate.type == 0){
            productType = true
        }else{
            productType = false
        }
    },[mandate])
    return ( 
        <div className="modal-background">
            <div className="modalssss">
                {/* <div className='modalClose' onClick={togglemodal}>
                    <FaTimes/>
                </div> */}
                <div className="onetime-modal">
                    <LottieAnimation data={wrong}/>
                    <p className="create-payment create-payment-2">{message}</p>
                    <div className="signup-button save-con">
                        <button onClick={handlesubmit} class="btn btn-primary shadow-2 mb-4 start-button">Confirm Transaction</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loading:state?.bank?.loading,
        data: state?.bank?.data?.data,
        errors: state?.bank?.error,
        debitdata: state?.debit?.data
    };
}

const mapDispatchToProps = dispatch => {
    return{
        postemandate: (postState, history, error) => {
            dispatch(postEmandate(postState, history, error));
        },
    }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(TransferSuccessModal);