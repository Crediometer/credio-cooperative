import { useState } from 'react';
import  './Login.css'
import { connect } from 'react-redux';
import { LoginAuthAction } from '../../Redux/Login/LoginAction';
import { useNavigate } from 'react-router-dom';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
import JSEncrypt from 'jsencrypt';
import consts from "./keys/const"; 
const Login = ({
    login,
    loading,
    error,
}) => {
    const history = useNavigate();
    const [loginState, setLoginState] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showerror, setshowerror] = useState(false)

    const handleEmail = (e) =>{
        const inputValue = e.target.value.trim().toLowerCase();
        setEmail(inputValue);
        setLoginState({ ...loginState, ...{email} });
    }

    const handlePassword = (e) =>{
        const value = e.target.value
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
        setPassword(encrypted)
        setLoginState({ ...loginState, ...{password} });
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        setshowerror(false)
        try{
            await login(loginState, ()=>{ 
                history(`/dashboard`)
            // setPending(true);
            }, ()=>{ 
                setshowerror(true)
                // setPending(false);
            });
        }catch(error){
        }
    };
    return ( 
        <div className="admin-outer">
            <div className="login-inner">
                <h1>Credio Coop</h1>
                <p>Login</p>
                <form onSubmit={handleSignUp}>
                    {showerror && (
                        <div className="alert-error">
                            <p>{error}</p>
                        </div>
                    )}
                    <div className="login-form">
                        <div className="input">
                            <label className='form-1-label'>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="Email"
                                required
                                onChange={handleEmail}
                                onBlur={handleEmail}
                            ></input>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="input">
                            <label className='form-1-label'>Password</label>
                            <input 
                                type="password" 
                                placeholder="*********"
                                required
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                        </div>
                    </div>
                    <div className="buttons login-buttons">
                        <button>
                            {loading ? (
                                <LottieAnimation data={loader}/>
                            ):"Login"} 
                        </button> 
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        error:state?.login?.error?.error,
        loading: state?.login?.dataAdded,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);