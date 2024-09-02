import { useEffect, useState } from 'react';
import  './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { LoginAuthAction, LoginGroupAction } from '../../Redux/Login/LoginAction';
import { useNavigate } from 'react-router-dom';
import LottieAnimation from "../../Lotties"
import loader from "../../Assets/animations/loading.json"
import JSEncrypt from 'jsencrypt';
import consts from "./keys/const"; 
// import crypto from 'crypto-browserify';
const Login = ({
    login,
    grouplogin,
    loading,
    error,
}) => {
    const history = useNavigate();
    const [type, setType] = useState('password');
    const [icon, setIcon] =useState(faEye);
    const [loginState, setLoginState] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showerror, setshowerror] = useState(false)
    const [role, setRole] = useState("")
    const vissibleToggle=()=>{
        if(type==='password'){
            setIcon(faEye);
            setType('text');
        }
        else{
            setIcon(faEyeSlash);
            setType('password');
        }
    }
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
        // const buffer = Buffer.from(password, 'utf8');
        // const encrypted = crypto.publicEncrypt(consts, value );
        setPassword(value)
        setLoginState({ ...loginState, ...{password} });
    }
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        setshowerror(false)
        try{
            if (role === "admin") {
                await login(loginState, () => {
                    history(`/dashboard`);
                }, () => {
                    setshowerror(true);
                });
            } else if (role === "group") {
                await grouplogin({username: email, password}, () => {
                    history(`/dashboard-member`);
                }, () => {
                    setshowerror(true);
                });
            }
        }catch(error){
        }
    };
    useEffect(() => {
        setLoginState({ ...loginState, email, password });
    }, [email, password]);
    return ( 
        <div className="admin-outer">
            <div className="login-inner">
                <h1>Credio Coop</h1 >
                <p>Login</p>
                <form onSubmit={handleSignUp}>
                    {showerror && (
                        <div className="alert-error">
                            <p>{error}</p>
                        </div>
                    )}
                    <div className="login-form">
                        <div className="input">
                            <label className='form-1-label'>Role</label>
                            <select
                                onChange={handleRoleChange}
                                onBlur={handleRoleChange}
                                required
                            >
                                <optgroup>
                                    <option value="admin">--Select Your Role</option>
                                    <option value="admin">Admin</option>
                                    <option value='group'>Group</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
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
                        <label className='form-1-label'>Password</label>
                        <div className="input input-2">
                            <input 
                                type={type}
                                placeholder="*********"
                                required
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            ></input>
                             <span className="psw-visible"><FontAwesomeIcon icon={icon} onClick={vissibleToggle}/></span>
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
    console.log(state)
    return{
        error:state?.login?.error?.message,
        loading: state?.login?.dataAdded,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
        grouplogin: (loginState, history, setErrorHandler) => {
            dispatch(LoginGroupAction(loginState, history, setErrorHandler));
        },
        // fetchgetprofile: () => dispatch(fetchgetprofile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);