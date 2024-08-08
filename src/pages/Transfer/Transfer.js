import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animations/loading.json"
import { useState } from "react";
import { connect } from "react-redux";
import JSEncrypt from "jsencrypt";
import consts from '../../pages/Login/keys/const'
import SuccessModal from "../../components/Modal/SuccessModal";
import { postPayment } from "../../Redux/Wallet/WalletAction";
const Transfer = (
    {
        loading, 
        data,
        errors,
        postPayment
    }
) => {
    const [amount, setAmount]= useState("")
    const [password, setPassword] = useState("")
    const [postState, setPostState] = useState({});
    const [resetsuccess, setResetsuccess] = useState(false)
    const [showError, setshowError] = useState(false)
    const togglemodal = ()=>{
        setResetsuccess(false)
    }
    const handleAmount =(e)=>{
        const value = e.target.value
        setAmount(value)
        const newValue = parseInt(value)
        setPostState({ ...postState, ...{amount: newValue} })
    }
    const handlePassword = (e) =>{
        const value = e.target.value
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPassword(value)
        setPostState({ ...postState, ...{password} })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setshowError(false)
        await postPayment(postState, ()=>{
            setResetsuccess(true)
            setAmount("")
            setPassword("")
        }, ()=>{ 
           setshowError(true)
        });
    }
    return ( 
        <div className="saving createloan">
            <div className="back">
                <Link to='/dashboard'><BiChevronLeft/></Link>
                <p className="title">Transfer to Credio</p>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="card-field">
                    {showError && (
                        <div className="alert-error alert-danger" role="alert">
                            {errors}
                        </div>
                    )}
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Amount</label><br></br>
                            <input 
                                type='text' 
                                placeholder='Enter an Amount'
                                required
                                onChange={handleAmount}
                                onBlur={handleAmount}
                            ></input>
                        </div>
                    </div>
                    <div className="form-2"  style={{width: "100%"}}>
                        <div className="input input-4">
                            <label>Password</label><br></br>
                            <input 
                                type='password' 
                                placeholder='XXXXXXXX'
                                required
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                        </div>
                    </div>
                    <div className="form-button">
                        <button className='transfer-button'>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Make Payment"} 
                        </button>
                    </div>
                </form>
                {resetsuccess && (<SuccessModal message={data.message} togglemodal={togglemodal}/>)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loading:state?.wallet?.loading,
        data: state?.wallet?.data,
        errors: state?.wallet?.error,
    };
}

const mapDispatchToProps = dispatch => {
    return{
        postPayment: (postdata, history, error) => {
            dispatch(postPayment(postdata, history, error));
        },
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);