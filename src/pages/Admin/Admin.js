import { Link } from "react-router-dom";
import "./Admin.css";
const Admin = () => {
    return ( 
        <div className="admin-outer">
            <div className="admin-inner">
                <h1><span>Welcome</span><br></br>Setup a Co-Operative</h1>
                <div className="buttons">
                   `<Link to="/register-admin"><button>SIGN UP</button></Link> 
                    <Link to="/login"><p>Already Have an Account?</p></Link>
                </div>
            </div>
           
        </div>
    );
}
 
export default Admin;