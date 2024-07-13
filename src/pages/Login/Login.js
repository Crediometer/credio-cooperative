import  './Login.css'
const Login = () => {
    return ( 
        <div className="admin-outer">
            <div className="login-inner">
                <h1>Credio Coop</h1>
                <p>Login</p>
                <form>
                    <div className="">
                        <div className="input">
                            <label className='form-1-label'>Email Address / Phone Number</label>
                            <input 
                                type="text" 
                                placeholder="Email / phone"
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="">
                        <div className="input">
                            <label className='form-1-label'>Password</label>
                            <input type="text" 
                            placeholder="*********"
                            required
                            ></input>
                        </div>
                    </div>
                    <div className="buttons login-buttons">
                    `   <button>Login</button> 
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;